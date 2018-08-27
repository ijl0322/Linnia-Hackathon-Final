require('babel-polyfill')
import React, {Component} from 'react'
import { isPrimitive } from 'util';


class ThirdParty extends Component {

  constructor() {
    super()
    this.state = {
      creditScore:'',
      name: ''
    }
  }

  async componentDidMount() {
    const { uri } = this.props
    const receiverPrivateKey = '0x44ae90da82985a6f3feb058b5bd0d4e1694b4f4e310db584cee9749bc431d021'
    const receiverAddress = '0x1f6FD2dB216b6F4958Ee00a41a6Cc19B54383B62'
    console.log('about to get record')
    const ipfsData = await this.props.getRecord(uri, receiverAddress, receiverPrivateKey)
    this.setState(ipfsData)
  }

    render () {
      const {namep, creditScorep} = this.props
      return (
            <div>
            <div className="jumbotron text-center">
                <h1>Third Party Approval Status</h1>
                <p>Approve or Deny Records</p> 
            </div>
          
          <div className="container">
            <form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Hash Code</label>
                <div className="col-sm-10">
                  <p className="form-control-static">039839f9...</p>
                </div> 
              </div>  
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <p className="form-control-static">{this.state.name}</p>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Credit Score</label>
                <div className="col-sm-10">
                  <p className="form-control-static">{this.state.creditScore}</p>
                </div>
              </div>
              <button type="button" class="btn btn-success">Approve</button>
              <button type="button" class="btn btn-danger">Reject</button>
            </form>
          </div>
          <div className="container">
          <br/> 
          <br/> 
          <br/> 
            <form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Hash Code</label>
                <div className="col-sm-10">
                  <p className="form-control-static">987654321fedcba</p>
                </div> 
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <p className="form-control-static">Mary Joseph</p>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">View W-2</label>
                <div className="col-sm-10">
                  <p className="form-control-static">VIEW BUTTON</p>
                </div>
              </div>
              <button type="button" class="btn btn-success">Approve</button>
              <button type="button" class="btn btn-danger">Reject</button>
            </form>
          </div>
          </div>
        )
    }
}

export default ThirdParty

