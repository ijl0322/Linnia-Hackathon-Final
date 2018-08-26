import React, {Component} from 'react'


class ViewAddRecord extends Component {

    render () {       
        return (
            <div>
            <div className="jumbotron text-center">
                <h1>User Input</h1>
                <p>View/Add Records</p> 
            </div>
          
          <div className="container">
            <form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <p className="form-control-static">John Smith</p>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Credit Score</label>
                <div className="col-sm-10">
                  <p className="form-control-static">750</p>
                </div>
              </div>
                <div class="form-group">
                    <label for="exampleInputFile">Upload W-2 Tax Form</label>
                    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                    <small id="fileHelp" class="form-text text-muted">Please upload your most recent tax form</small>
                </div>
            </form>
          </div>
          </div>
        )
    }
}

export default ViewAddRecord

