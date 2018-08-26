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

const ipfs = new IPFS({host: 'localhost', port: 5001, protocol: 'http'})


// const linnia = new Linnia(web3, ipfs)
class App extends Component {
  constructor (){
    super()
    this.state = { name: '', creditScore: ''}
    this.onInputChangeName = this.onInputChangeName.bind(this)
    this.onInputChangeCreditScore = this.onInputChangeCreditScore.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onInputChangeName = event => {
    //this.props.clearInputError();
    const value = event.target.value;
    console.log(value);

    this.setState({...this.state, name: value });
  };
 
  onInputChangeCreditScore = event => {
    //this.props.clearInputError();
    const value = event.target.value;
    console.log(value);

    this.setState({...this.state, creditScore: value });
  };
  
  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });

    console.log("++++ ViewAddRecordForm.hadleSubmit name, creditScore ++++++");
    console.log(this.state.name);
    console.log(this.state.creditScore);
    

    this.setState({ name: "", creditScore: "", loading: false });
  };

  async componentDidMount() {
    const web3 = new Web3(window.web3.currentProvider)
    console.log(await(web3.eth.getAccounts()))
  }
  render() {
    const {onInputChangeName, onInputChangeCreditScore, onSubmit} = this
    const funcs = {onInputChangeName, onInputChangeCreditScore, onSubmit}

    return(
       
      <Layout>
        <Switch>       
          <Route exact path='/' render={() => <ViewAddRecord {...funcs}/>}/>
          <Route exact path='/permission' render={() => <ViewAddPermission />}/>
          <Route exact path='/thirdparty' render={() => <ThirdParty />}/>         
        </Switch>
      </Layout>
       
    )
  }
}

export default App