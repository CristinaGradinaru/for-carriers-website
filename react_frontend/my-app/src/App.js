import React, { Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer'
import CreatePost from './view/CreatePost';
import Home from './view/Home';
import Login from './view/Login';
import Register from './view/Register';
import PostDetail from './view/PostDetail';
import MyInfo from './view/MyInfo';
import Contact from './view/Contact';
import AboutUs from './view/AboutUs';
import Cart from './view/Cart';
import Order from './view/Order';
import Gallery from './view/Gallery';
import Products from './view/Products';
import UpdateMyInfo from './view/UpdateMyInfo'
import Blog from './view/Blog'
import 'font-awesome/css/font-awesome.min.css';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userDetails: JSON.parse(localStorage.getItem('user')),
      current_user_active: localStorage.getItem('current_user_active'),
      token: localStorage.getItem('token'),
      address: localStorage.getItem('address'),
      email: localStorage.getItem('email'),
      city: localStorage.getItem('city'),
      state: localStorage.getItem('state'),
      zip: localStorage.getItem('zip'),
      history:'',
      error: '',
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password'),
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  getToken = async () => {
        let res = await fetch('http://localhost:5000/tokens', {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + btoa(this.state.username+':'+this.state.password)
          }
        })
        let token = await res.json();
        console.log(token);
        return token;
      }

  getCurrentUser = async () => {
    let res = await fetch('http://localhost:5000/auth/login', {
      method: 'GET'
    })
    let data = await res.json();
    console.log(data);
    return data;
  }

  async login(e){
    e.preventDefault();
    let res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept":"application/json"

        },
        body: JSON.stringify({
            "username": e.target.username.value,
            "password": e.target.password.value,
        })
    })
    let userDetails = await res.json();
    this.setState({
      redirect: "/home",
      userDetails: userDetails,
      username:e.target.username.value,
      password:e.target.password.value,
      token: userDetails['token'],
      current_user_active: true
    })

    localStorage.setItem("user", JSON.stringify(userDetails));
    localStorage.setItem('token', userDetails['token']);
    localStorage.setItem('current_user_active', true);
    localStorage.setItem('username', userDetails['username']);
    localStorage.setItem('address', userDetails['address']);
    localStorage.setItem('email', userDetails['email']);
    localStorage.setItem('city', userDetails['city']);
    localStorage.setItem('state', userDetails['state']);
    localStorage.setItem('zip', userDetails['zip']);
    localStorage.setItem('password', userDetails['password']);
    console.log(userDetails);
    }

  async logout(){
    let res = await fetch('http://localhost:5000/auth/logout')
    console.log(res)
    this.setState({
      userDetails:{},
      redirect: null,
      current_user_active: false
    })
    localStorage.clear();
  }

  
  

  render (){
    return (
    <div className="App">
      <BrowserRouter>
      <Navbar logout={this.logout} current_user_active={this.state.current_user_active} userDetails = {this.state.userDetails} getToken={this.getToken}/>
      
      <Switch>
        <Route exact path="/" render={() => <Home getToken={this.getToken} userDetails = {this.state.userDetails}/>} />
        <Route exact path="/blog" render={() => <Blog getToken={this.getToken} userDetails = {this.state.userDetails}/>} />
        <Route exact path="/aboutus" render={() => <AboutUs  getToken={this.getToken} userDetails = {this.state.userDetails}/>} />
        <Route exact path="/post/:id" render={({ match }) => <PostDetail  match={match} getToken={this.getToken} userDetails = {this.state.userDetails}/>} />
        <Route exact path="/login" render={() => <Login  redirect={this.state.redirect} login={this.login} getToken={this.getToken} userDetails = {this.state.userDetails}/>} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/galery" render={() => <Gallery userDetails = {this.state.userDetails}/>} />
        <Route exact path="/myinfo/update" render={() => <UpdateMyInfo userDetails = {this.state.userDetails}/>} />
        <Route exact path="/createpost" render={() => <CreatePost  getToken={this.getToken} userDetails={this.userDetails}/>} />
        <Route exact path="/myinfo" render={() => <MyInfo  userDetails={this.state.userDetails} getToken={this.getToken}/>} />
        <Route exact path="/contact" render={() => <Contact  userDetails={this.state.userDetails}/>} />
        <Route exact path="/cart" render={() => <Cart getToken={this.getToken} userDetails = {this.state.userDetails}/>} />
        <Route exact path="/products" render={() => <Products  getToken={this.getToken} userDetails={this.state.userDetails}/>} />
        <Route exact path="/products/:id" render={({ match }) => <Order  match={match} login={this.login} getToken={this.getToken} userDetails={this.state.userDetails} current_user_active={this.state.current_user_active}/>} />
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
    )
  }
}
