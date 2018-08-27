require('babel-polyfill')
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './Layout'

import Linnia from '@linniaprotocol/linnia-js'
import Web3 from 'web3'
import IPFS from 'ipfs-api'
import ViewAddRecord from './components/Records/ViewAddRecord'
import ViewAddPermission from './components/Permissions/ViewAddPermission'
import ThirdParty from './components/ThirdParty/ThirdParty'

const { addRecord, grantPermission, getRecord } = require('./linniaUtil')

const ipfs = new IPFS({host: 'localhost', port: 5001, protocol: 'http'})



// const linnia = new Linnia(web3, ipfs)
class App extends Component {
  constructor (){
    super()
    this.state = { 
      name: '', 
      creditScore: '',
      uri: ''
    }
    this.onInputChangeName = this.onInputChangeName.bind(this)
    this.onInputChangeCreditScore = this.onInputChangeCreditScore.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onInputChangeName = event => {
    //this.props.clearInputError();
    const value = event.target.value;
    //console.log(value);

    this.setState({...this.state, name: value });
  };
 
  onInputChangeCreditScore = event => {
    //this.props.clearInputError();
    const value = event.target.value;
    //console.log(value);

    this.setState({...this.state, creditScore: value });
  };

  onSubmit = async event => {
    const { creditScore, name } = this.state
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });

    console.log('about to add record')
    const uri = await addRecord({ creditScore, name })
    console.log('record added!', uri)
    this.setState({ 
      name: "", 
      creditScore: "", 
      loading: false, 
      namep: this.state.name, 
      creditScorep: this.state.creditScore, 
      uri 
    });
  };

  async componentDidMount() {
    const web3 = new Web3(window.web3.currentProvider)
    console.log(await(web3.eth.getAccounts()))
  }
  render() {
    const { name, creditScore, uri} = this.state
    const {onInputChangeName, onInputChangeCreditScore, onSubmit} = this
    const funcs = {onInputChangeName, onInputChangeCreditScore, onSubmit, name, creditScore}

    return(

      <Layout>
        <Switch>
          <Route exact path='/' render={() => <ViewAddRecord {...funcs}/>}/>
          <Route exact path='/permission' render={() => <ViewAddPermission {...{...this.state, grantPermission}}/>}/>
          <Route exact path='/thirdparty' render={() => <ThirdParty {...{...this.state, getRecord}}/>}/>
        </Switch>
      </Layout>

    )
  }
}
// QmbmSrocydUZiNWoL9z8exbpzor96R5FGFQp7fiwmuUksx
export default App