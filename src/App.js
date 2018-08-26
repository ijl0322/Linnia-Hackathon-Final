require('babel-polyfill')
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'

import Linnia from '@linniaprotocol/linnia-js'
import Web3 from 'web3'
import IPFS from 'ipfs-api'
import ViewRecords from './components/Records/ViewRecords'
import AddRecord from './components/Records/AddRecord'

const ipfs = new IPFS({host: 'localhost', port: 5001, protocol: 'http'})


// const linnia = new Linnia(web3, ipfs)
class App extends Component {

  async componentDidMount() {
    const web3 = new Web3(window.web3.currentProvider)
    console.log(await(web3.eth.getAccounts()))
  }
  render() {

    return(
      <div>
        <Header/>
        <Switch>       
          <Route exact path='/records' render={() => <ViewRecords />}/>
          <Route exact path='/addrecord' render={() => <AddRecord />}/>         
        </Switch>
      </div>
    )
  }
}

export default App