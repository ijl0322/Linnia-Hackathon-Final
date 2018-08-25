require('babel-polyfill')
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'

import Linnia from '@linniaprotocol/linnia-js'
import Web3 from 'web3'
import IPFS from 'ipfs-api'

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
          <Route exact path='/' render={() => <div>at /</div>}/>
          <Route exact path='/firstRoute' render={() => <div>at /firstRoute</div>}/>
          <Route exact path='/secondRoute' render={() => <div>at /secondRoute</div>}/>
          <Route render={() => <div>where r u lol</div>}/>
        </Switch>
      </div>
    )
  }
}

export default App