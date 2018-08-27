import React, {Component} from 'react'
import { Form, Input, Message, Button } from 'semantic-ui-react'



class ViewAddRecord extends Component {
    state = {errorMessage: ""}
    render () {
        const {name,creditScore} = this.props

        return (
            <div>
            <div className="jumbotron text-center">
                <h1>User Input</h1>
                <p>View/Add Records</p> 
            </div>
          
          <div className="container">
          <Form onSubmit={this.props.onSubmit} error={!!this.state.errorMessage}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  {/* <p className="form-control-static"> */}
                  <Input
                    value={name}
                    onChange={this.props.onInputChangeName}    
                    labelPosition="left"/>
                    {/* </p> */}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Credit Score</label>
                <div className="col-sm-10">
                  <p className="form-control-static"><Input
                    value={creditScore}
                    onChange={this.props.onInputChangeCreditScore}    
                    labelPosition="left"/></p>
                </div>
              </div>
                <div class="form-group">
                    <label for="exampleInputFile">Upload W-2 Tax Form</label>
                    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                    <small id="fileHelp" class="form-text text-muted">Please upload your most recent tax form</small>
                </div>
                <Message error content={this.state.errorMessage} />
                <Button primary loading={this.props.loading}>
                Add New Record
                </Button>
            </Form>
          </div>
          </div>
        )
    }
}

export default ViewAddRecord

