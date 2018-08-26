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

  async componentDidMount() {
    const web3 = new Web3(window.web3.currentProvider)
    console.log(await(web3.eth.getAccounts()))
  }
  render() {

    return(
       
      <Layout>
        <Switch>       
          <Route exact path='/record' render={() => <ViewAddRecord />}/>
          <Route exact path='/permission' render={() => <ViewAddPermission />}/>
          <Route exact path='/thirdparty' render={() => <ThirdParty />}/>         
        </Switch>
      </Layout>
       
    )
  }
}

export default App