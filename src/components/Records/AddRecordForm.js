import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
 
class AddRecordForm extends Component {
  state = {name: '', creditScore: ''}

  onInputChange = property => event => {
    //this.props.clearInputError();
    const value = event.target.value;   
    console.log(value)

    this.setState({ [property]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("++++ AddRecordForm.hadleSubmit name, creditScore ++++++");
    console.log(this.state.name);
    console.log(this.state.creditScore);
    
    this.setState({name: '', creditScore: ''})
  };

  //const { classes } = this.props;

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <TextField
            name="name"
            required
            fullWidth          
            label="Name"           
            value={this.state.name}
            onChange={this.onInputChange("name")}
          />
          <TextField
            name="creditScore"
            required
            fullWidth          
            label="Credit Score"           
            value={this.state.creditScore}
            onChange={this.onInputChange("creditScore")}
          />
          <Button type="submit">Add New Record</Button>
        </form>
      </div>
    );
  }
}

export default AddRecordForm;
