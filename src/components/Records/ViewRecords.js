import React, {Component} from 'react'
import RecordList from './RecordList'
class ViewRecords extends Component {
   
    render () {

        const dummyRecords = [{name: 'John', creditScore: '170'},{name: 'Sandy', creditScore: '220'}]

        return (
            <ul>
                <RecordList records={dummyRecords} />
            </ul>
        )
    }
}

export default ViewRecords

