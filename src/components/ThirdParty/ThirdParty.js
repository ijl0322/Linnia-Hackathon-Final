import React, {Component} from 'react'


class ThirdParty extends Component {

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
                  <p className="form-control-static">123456789abcdef</p>
                </div> 
              </div>  
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <p className="form-control-static">{namep}</p>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Credit Score</label>
                <div className="col-sm-10">
                  <p className="form-control-static">{creditScorep}</p>
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

