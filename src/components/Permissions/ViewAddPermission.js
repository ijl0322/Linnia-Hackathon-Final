import React, { Component } from 'react'
import Button from 'react-bootstrap/lib/Button';

class ViewAddPermission extends Component {

    render() {
        console.log(this.props)
        const grantPermission = async () => {
            console.log('granting Permission')
            await this.props.grantPermission(
                this.props.uri,
                ownerPrivateKey,
                receiverPublicKey,
                receiverAddress
            )
            console.log('perm granted')
        }

        const ownerPrivateKey = '0xb581d5911f2983182558c7b376e37c65725add8230c82019b74ebc963d8f6b07'
        const receiverPublicKey = '0x67c396d711ad2ba7408f5b1951e0dcec84cb11b6e189f95cab9cff9ef230eb7afce76a42c666b9e2a3499756a8aaa529a375e01e033f80917d9db45f8cbdadef'
        const receiverAddress = '0x1f6FD2dB216b6F4958Ee00a41a6Cc19B54383B62'
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
                <td><input
                    onChange={grantPermission}
                type="checkbox" aria-label="Checkbox for following text input"/></td>
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
