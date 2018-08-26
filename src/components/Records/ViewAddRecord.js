import React, {Component} from 'react'
import { Form, Input, Message, Button } from 'semantic-ui-react'



class ViewAddRecord extends Component {
    state = { name: '', creditScore: '', taxForm: '', errorMessage: '', loading: false };
    
    onInputChange = property => event => {
        //this.props.clearInputError();
        const value = event.target.value;
        console.log(value);
    
        this.setState({ [property]: value });
      };
    
      onSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });
    
        console.log("++++ ViewAddRecordForm.hadleSubmit name, creditScore ++++++");
        console.log(this.state.name);
        console.log(this.state.creditScore);
        console.log(this.state.taxForm);

        this.setState({ name: "", creditScore: "", taxForm: "", loading: false });
      };
    render () {       
        return (
            <div>
            <div className="jumbotron text-center">
                <h1>User Input</h1>
                <p>View/Add Records</p> 
            </div>
          
          <div className="container">
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <p className="form-control-static"><Input
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })}    
                    labelPosition="left"/></p>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Credit Score</label>
                <div className="col-sm-10">
                  <p className="form-control-static"><Input
                    value={this.state.creditScore}
                    onChange={event => this.setState({ creditScore: event.target.value })}    
                    labelPosition="left"/></p>
                </div>
              </div>
                <div class="form-group">
                    <label for="exampleInputFile">Upload W-2 Tax Form</label>
                    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                    <small id="fileHelp" class="form-text text-muted">Please upload your most recent tax form</small>
                </div>
                <Message error content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>
                Add New Record
                </Button>
            </Form>
          </div>
          </div>
        )
    }
}

export default ViewAddRecord

