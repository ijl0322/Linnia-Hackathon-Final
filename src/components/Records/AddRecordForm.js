import React, { Component } from "react";
import { Form, Input, Message, Button } from 'semantic-ui-react'

class AddRecordForm extends Component {
  state = { name: '', creditScore: '', errorMessage: '', loading: false };

  onInputChange = property => event => {
    //this.props.clearInputError();
    const value = event.target.value;
    console.log(value);

    this.setState({ [property]: value });
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });

    // console.log("++++ AddRecordForm.hadleSubmit name, creditScore ++++++");
    // console.log(this.state.name);
    // console.log(this.state.creditScore);

    this.setState({ name: "", creditScore: "", loading: false });
  };
  

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Name</label>
          <Input
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}    
            labelPosition="left"
          />
        </Form.Field>
        <Form.Field>
          <label>Credit Score</label>
          <Input
            value={this.state.creditScore}
            onChange={event => this.setState({ creditScore: event.target.value })}           
            labelPosition="left"
          />
        </Form.Field>
        <Message error content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Add New Record
        </Button>
      </Form>
    );
  }
}

export default AddRecordForm;
