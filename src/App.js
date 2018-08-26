require('babel-polyfill')
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './Layout'

import Linnia from '@linniaprotocol/linnia-js'
import Web3 from 'web3'
import IPFS from 'ipfs-api'
import ViewRecords from './components/Records/ViewRecords'
import AddRecord from './components/Records/AddRecord'
import ViewPermissions from './components/Permissions/ViewPermissions'
import AddPermission from './components/Permissions/AddPermission'
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
          <Route exact path='/records' render={() => <ViewRecords />}/>
          <Route exact path='/addrecord' render={() => <AddRecord />}/>
          <Route exact path='/permissions' render={() => <ViewPermissions />}/>  
          <Route exact path='/addpermission' render={() => <AddPermission />}/>       
        </Switch>
      </Layout>
       
    )
  }
}

export default App