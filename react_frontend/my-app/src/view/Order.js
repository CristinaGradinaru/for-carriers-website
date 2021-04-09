import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import "../stylesheets/myStyles.css";
// import axios from 'axios';
// import {storage} from '../firebase';
import app from "../firebase";
import { Link } from "react-router-dom";

export default class Order extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      redirect: null,
      product: {},
      color: "",
      sizes: "",
      selected_color: "",
      selected_size: "",
      fileurl: "",
    };
  }
  onChangeColor = (event) => {
    event.preventDefault();
    this.setState({ selected_color: event.target.value });
    console.log(this.state.selected_color);
  };

  onChangeSize = (event) => {
    event.preventDefault();
    this.setState({ selected_size: event.target.value });
  };

  decrease = (e) => {
    e.preventDefault();
    this.setState({ value: (e.target.value = this.state.value -= 1) });
    console.log(this.state.value);
  };

  increase = (e) => {
    e.preventDefault();
    this.setState({ value: (e.target.value = this.state.value += 1) });
    console.log(this.state.value);
  };

  componentDidMount() {
    fetch(`http://localhost:5000/shop/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          product: data,
          color: data["color"],
          sizes: data["sizes"],
        })
      )
      .catch((error) => console.log(error));
  }

  
  async createOrder(e, product_id) {
    e.preventDefault();
    let category= this.state.product['category'];
    let name= this.state.product['name'];
    let price= this.state.product['price'];
    let image = this.state.product['image'];
    let uploaded= this.state.fileurl;
    let token = await this.props.getToken();
    console.log(token)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token['token']);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"image":image,"category":category,"name":name,"price":price,"size":e.target.selected_size.value,"quantity":e.target.quantity.value,"color":e.target.selected_color.value,"uploaded":uploaded});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:5000/shop/order/` + product_id, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(
      this.props.userDetails["id"] + "- username ID" + file.name
    );
    await fileRef.put(file).then(() => {
      console.log("Uploaded file", file.name);
    });
    const fileurl = await fileRef.getDownloadURL();
    this.setState({ fileurl: fileurl });
    console.log(fileurl);
  };

  render() {
    const p = this.state.product;
    const color = this.state.color;
    const sizes = this.state.sizes;

    return (
      <div className="container col-sm-8 offset-sm-2">
        <h1 className="item_name">{p.name}</h1>
        <form onSubmit={(e) => this.createOrder(e, p.id)}>
          <h6 className="category">CATEGORY: {p.category}</h6>
          <img src={p.image} alt="women tshirts"></img>
          <p className="description">{p.description}</p>
          <p className="colors">Available in: {p.color} colors.</p>
          <br />
          <p className="price container">
            PRICE: $ <span className="item-price">{p.price}</span>
          </p>
          <br />
          {this.props.current_user_active ? (
            <div className="container authenticated_order col-sm-8 offset-sm-2">
              <select
                className="form-select selected_color"
                aria-label="Default select example"
                name="selected_color"
              >
                <option defaultValue>Color</option>
                {color.split(",").map((color) => (
                  <option
                    onChange={this.onChangeColor}
                    key={p.key}
                    value={p.key}
                  >
                    {color}
                  </option>
                ))}
              </select>
              <br />
              <select
                className="form-select"
                aria-label="Default select example"
                name="selected_size"
              >
                <option defaultValue>Size</option>
                {sizes.split(",").map((sizes) => (
                  <option
                    onChange={this.onChangeSize}
                    key={p.key}
                    value={p.key}
                  >
                    {sizes}
                  </option>
                ))}
              </select>
              <p className="uploadfile">Upload Your Company Logo Here: </p>
              <div className="input-group">
                <input
                  type="file"
                  onChange={(e) => this.handleChange(e)}
                  className="form-control file_name"
                  name="file_name"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>
              <br />
              <p className="choosequantity"> Choose Quantity:</p>
              <div className="def-number-input number-input">
                <button
                  onClick={(e) => this.decrease(e)}
                  className="minus"
                ></button>
                <input
                  className="quantity"
                  name="quantity"
                  value={this.state.value}
                  onChange={(e) => console.log("change")}
                  type="number"
                />
                <button
                  onClick={(e) => this.increase(e)}
                  className="plus"
                ></button>
              </div>
              <br />
              <button type="submit" className="btn btn-outline-info">
                Submit
              </button>
            </div>
          ) : (
            <div className="container float-right m-4">
              <button className="btn btn-outline-info m-3">
                <Link className="nav-link" to="/register">
                  Register to Order
                </Link>
              </button>
              <button className="btn btn-outline-info m-3">
                <Link className="nav-link" to="/login">
                  Login to Order
                </Link>
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }
}
