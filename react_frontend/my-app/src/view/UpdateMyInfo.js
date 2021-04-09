import React, { Component } from 'react'
import '../stylesheets/UpdateMyInfoStylesheet.css'

export default class updateMyInfo extends Component {
    constructor(){
        super();
        this.state={
            userDetails: JSON.parse(localStorage.getItem('user')),
        }
        this.updateUser=this.updateUser.bind(this)
    }


    async updateUser(e){
        e.preventDefault();
        console.log('about to post req')
        let res = await fetch(`http://localhost:5000/auth/update/${this.props.userDetails['id']}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": e.target.username.value,
                "email": e.target.email.value,
                "address": e.target.address.value,
                "city": e.target.city.value,
                "state": e.target.state.value,
                "zip": e.target.zip.value,
            })
        })
        let details = await res.json();
        console.log(details)
        localStorage.setItem('username', e.target.username.value)
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('address', e.target.address.value)
        localStorage.setItem('city', e.target.city.value)
        localStorage.setItem('state', e.target.state.value)
        localStorage.setItem('zip', e.target.zip.value)

    }



    render() {
        return (
        <div className="col-sm-6 offset-sm-3" >
            <div className="container register-form"> 
                        <form className="form"  onSubmit={(e => this.updateUser(e))} >
                            <div className="note">
                                <p>Update your info, {localStorage.getItem('username')}:</p>
                            </div>

                            <div className="form-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="small text-lowercase">username:</label>
                                            <input type="text" className="form-control" name="username"  placeholder={this.props.userDetails['username'] } />
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">address:</label>
                                            <input type="text" className="form-control" name="address" placeholder={ this.props.userDetails['address'] }/>
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">email:</label>
                                            <input type="email" className="form-control" name="email" placeholder={ this.props.userDetails['email'] }/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="small text-lowercase">city:</label>
                                            <input type="text" className="form-control" name="city" placeholder={ this.props.userDetails['city'] } />
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">state:</label>
                                            <input type="text" className="form-control" name="state" placeholder={ this.props.userDetails['state'] }/>
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">zip:</label>
                                            <input type="number" className="form-control" name="zip" placeholder={ this.props.userDetails['zip'] } />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btnSubmit">Submit</button>
                            </div>
                        </form>
                    </div>
        </div>
        )
    }
}

