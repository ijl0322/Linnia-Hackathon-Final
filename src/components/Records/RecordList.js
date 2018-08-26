import React, { Component } from "react";
import { Table } from 'semantic-ui-react';

class RecordList extends Component {
  // constructor(props) {
  //     super(props)
  //     const {records} = this.props
  //     this.state = {records}
  // }

  render() {
    const { Row, Cell } = Table;  
    return this.props.records.map((record, key) => {
      return (
        <Row>
          <Cell>{key + 1}.</Cell>
          <Cell>{record.name}</Cell>
          <Cell>{record.creditScore}</Cell>
        </Row>
      );
    });
  }
}

export default RecordList;
