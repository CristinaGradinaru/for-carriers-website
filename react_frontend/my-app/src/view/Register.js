import React, { Component } from 'react'

export default class Register extends Component {
    async registerUser(e){
        e.preventDefault();
        console.log('about to post req')
        let res = await fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": e.target.username.value,
                "email": e.target.email.value,
                "password": e.target.password.value,
                "confirm_password": e.target.confirm_password.value,
                "address": e.target.address.value,
                "city": e.target.city.value,
                "state":e.target.state.value,
                "zip": e.target.zip.value
            })
        })
        let userDetails = await res.json();
        // this.setState({ redirect: `/myinfo`}) REDIRECT TO MY INFO PAGE
        console.log(userDetails)
    }




    render() {
        return (
            <div className="col-sm-6 offset-sm-3" >
                <div className="container register-form"> 
                        <form className="form"  onSubmit={(e) => this.registerUser(e)} >
                            <div className="note mt-2">
                                <h2 className="note mt-2"> Register</h2>
                            </div>

                            <div className="form-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="small text-lowercase">email:</label>
                                            <input type="email" className="form-control" name="email" placeholder=""/>
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">username:</label>
                                            <input type="text" className="form-control" name="username"  placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">password:</label>
                                            <input type="password" className="form-control" name="password" placeholder=""/>
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">confirm password:</label>
                                            <input type="password" className="form-control" name="confirm_password" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="small text-lowercase">address:</label>
                                            <input type="text" className="form-control" name="address" placeholder=""/>
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">city:</label>
                                            <input type="text" className="form-control" name="city" placeholder=" " />
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">state:</label>
                                            <input type="text" className="form-control" name="state" placeholder=""/>
                                        </div>
                                        <div className="form-group">
                                            <label className="small text-lowercase">zip:</label>
                                            <input type="number" className="form-control" name="zip" placeholder="" />
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
