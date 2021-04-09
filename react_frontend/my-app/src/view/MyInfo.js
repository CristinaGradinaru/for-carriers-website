import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/myInfo.css'

export default class MyInfo extends Component {


    render() {
        return (
        <div className="col-sm-6 offset-sm-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">My info:</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Username: {localStorage.getItem('username')}</li>
                    <li className="list-group-item">E-mail: {localStorage.getItem('email')}</li>
                    <li className="list-group-item">Address: {localStorage.getItem('address')}</li>
                    <li className="list-group-item">City: {localStorage.getItem('city')}</li>
                    <li className="list-group-item">State: {localStorage.getItem('state')}</li>
                    <li className="list-group-item">Zip-code: {localStorage.getItem('zip')}</li>
                </ul>
                <div className="card-body">
                    <Link to="/myinfo/update"><button className="btn btn-blue d-inline m-1">Edit info</button></Link>
                </div>
            </div>
        </div>
        )
    }
}
