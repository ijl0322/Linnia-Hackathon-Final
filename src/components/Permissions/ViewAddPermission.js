import React, { Component } from 'react'

class ViewAddPermission extends Component {

    render() {
        return (
            <div>
            <div className="jumbotron text-center">
                <h1>User Input</h1>
                <p>View/Add Permission</p> 
            </div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Give Permission To:</th>
                <th scope="col">Name</th>
                <th scope="col">Credit Score</th>
                <th scope="col">W-2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Bank 1</th>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                </tr>
                <tr>
                <th scope="row">Renter 2</th>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                </tr>
                <tr>
                <th scope="row">Mortage Company3</th>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
                </tr>
            </tbody>
            </table>
            </div>
        )
    }
}

export default ViewAddPermission
