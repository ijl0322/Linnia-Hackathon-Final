import React, {Component} from 'react'

class RecordList extends Component {
    // constructor(props) {
    //     super(props)
    //     const {records} = this.props
    //     this.state = {records}
    // } 

    render () {
        return (
            this.props.records.map( (record, _) => {
                return (
                    
                <li><span>{record.name}</span>&nbsp;&nbsp;<span>{record.creditScore}</span></li>
                
                )
            })
        )
    }
}

export default RecordList