require('babel-polyfill')
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { render } from 'react-dom'
import App from './App'
console.warn = function() {}
// console.log({web3, ipfs, linnia})

// web3.eth.getAccounts()
// console.log(linnia.getContractInstances())

// linnia.getContractInstances().then((instances) => {
//   let users = instances.users
//   let records = instances.records
//   let permissions = instances.permissions
//   console.log({users,records,permissions})
// })

render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>,
  document.getElementById('app')
)