import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CartElement from '../component/CartElement'
import '../stylesheets/cartElement.css'

export default class Cart extends Component {
    constructor(){
        super();
        this.state={
            orders:[],
            sum:0,
            cart:[],
            redirect: null,
        }
        this.checkout = this.checkout.bind(this)
    }


componentDidMount(){

    fetch(`http://127.0.0.1:5000/shop/cart/${this.props.userDetails['id']}`)
        .then(res => res.json())
        .then(data=> this.setState({ orders:data }), console.log(this.state.orders))
        .catch(error => console.error(error))
}
getTotal(orders){
    let sum = 0;
    let total =0;
    for (let i in orders){
        console.log(i)
        total = (orders[i]['price'] * orders[i]['quantity'])
        sum+= total
    }
  return sum
}

checkout(e){
    fetch(`http://127.0.0.1:5000/shop/checkout/${this.props.userDetails['id']}`)
        .then(res => res.json())
        .then(data => this.setState({orders:data}), console.log(this.state.orders))
        .catch(error => console.error(error))
        this.setState({ redirect: `/`})
}



    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        const shipping = 14
        const total = this.getTotal(this.state.orders)
        return (
            <section>
            { this.state.orders.length === 0 ? 
            (
                <div className="container-fluid row container-empty">
                    <h2 className="mb-5">Your Cart Is Currently Empty! </h2>
                    <svg className="cart-empty m-5"stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path></svg>
                    <div className="container empty-message">
                    <p>before proceeding to checkout you must add some orders to the shopping cart.</p>
                    <p>find our customizable products on our "PRODUCTS" page.</p>
                    <button className="btn btn-blue">Return To Products </button>
                    </div>
                </div>
            ):(
        <div className="container px-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-3">
                    <h4 className="heading">Shopping Bag</h4>
                </div>
                <div className="col-9">
                    <div className="row text-right">
                        <div className="col-3">
                            <h6 className="mt-2">Color</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="mt-2">Quantity</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="mt-2">Price</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="mt-2">Total</h6>
                        </div>
                    </div>
                </div>
            </div>
                 {this.state.orders.map(o => ( <CartElement key={o.id} order={o} total = { o.price * o.quantity}/> ))}
            { total > 50 ? (
            <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="row">
                            <p className="mb-1 text-center mb-5 text-uppercase small">free shipping for orders greater than $50</p>
                                <div className="col-lg-3 radio-group">
                                    <div className="row d-flex px-3 radio"> <img className="pay" src="https://i.imgur.com/WIAP9Ku.jpg" alt="credit card"/>
                                        <p className="my-auto">Credit Card</p>
                                    </div>
                                    <div className="row d-flex px-3 radio"> <img className="pay" src="https://i.imgur.com/OdxcctP.jpg" alt="debit card"/>
                                        <p className="my-auto">Debit Card</p>
                                    </div>
                                    <div className="row d-flex px-3 radio mb-3"> <img className="pay" src="https://i.imgur.com/cMk1MtK.jpg" alt="pay pal"/>
                                        <p className="my-auto">PayPal</p>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="row px-2">
                                        <div className="form-group col-md-6"> <label className="form-control-label">Name on Card</label> <input type="text" id="cname" name="cname" placeholder="Johnny Doe"></input> </div>
                                        <div className="form-group col-md-6"> <label className="form-control-label">Card Number</label> <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444"/> </div>
                                    </div>
                                    <div className="row px-2">
                                        <div className="form-group col-md-6"> <label className="form-control-label">Expiration Date</label> <input type="text" id="exp" name="exp" placeholder="MM/YYYY"></input> </div>
                                        <div className="form-group col-md-6"> <label className="form-control-label">CVV</label> <input type="text" id="cvv" name="cvv" placeholder="***"/> </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">

                                    <div className="row d-flex justify-content-between px-4">
                                        <p className="mb-1 text-left">Subtotal</p>
                                        <h6 className="text-right">$ {total}</h6>
                                    </div>
                                    <div className="row d-flex justify-content-between px-4">
                                        <p className="mb-1 text-left">Shipping</p>
                                        <h6 className="text-right">Free</h6>
                                    </div>
                                    <div className="row d-flex justify-content-between px-4" id="tax">
                                        <p className="mb-1 text-left">Total (tax included)</p>
                                        <h6 className="mb-1 text-right">${ (total + total * 0.0625).toFixed(2) }</h6>
                                    </div> 
                                    <button type="button" onClick={e=> this.checkout(e)} className="btn-block btn-blue"> <span> <span id="checkout">Checkout</span> <span id="check-amt">${ (total + total * 0.0625).toFixed(2) }</span> </span> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="row">
                        <p className="mb-1 text-center mb-5 text-uppercase small">free shipping for orders greater than $50</p>
                            <div className="col-lg-3 radio-group">
                                <div className="row d-flex px-3 radio"> <img className="pay" src="https://i.imgur.com/WIAP9Ku.jpg" alt="credit card"/>
                                    <p className="my-auto">Credit Card</p>
                                </div>
                                <div className="row d-flex px-3 radio"> <img className="pay" src="https://i.imgur.com/OdxcctP.jpg" alt="debit card"/>
                                    <p className="my-auto">Debit Card</p>
                                </div>
                                <div className="row d-flex px-3 radio mb-3"> <img className="pay" src="https://i.imgur.com/cMk1MtK.jpg" alt="pay pal"/>
                                    <p className="my-auto">PayPal</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="row px-2">
                                    <div className="form-group col-md-6"> <label className="form-control-label">Name on Card</label> <input type="text" id="cname" name="cname" placeholder="Johnny Doe"></input> </div>
                                    <div className="form-group col-md-6"> <label className="form-control-label">Card Number</label> <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444"/> </div>
                                </div>
                                <div className="row px-2">
                                    <div className="form-group col-md-6"> <label className="form-control-label">Expiration Date</label> <input type="text" id="exp" name="exp" placeholder="MM/YYYY"></input> </div>
                                    <div className="form-group col-md-6"> <label className="form-control-label">CVV</label> <input type="text" id="cvv" name="cvv" placeholder="***"/> </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-2">
                                <div className="row d-flex justify-content-between px-4">
                                    <p className="mb-1 text-left">Subtotal</p>
                                    <h6 className="mb-1 text-right">$ {total}</h6>
                                </div>
                                <div className="row d-flex justify-content-between px-4">
                                    <p className="mb-1 text-left">Shipping</p>
                                    <h6 className="mb-1 text-right">$ 14 </h6>
                                </div>
                                <div className="row d-flex justify-content-between px-4" id="tax">
                                    <p className="mb-1 text-left">Total (tax included %6.25)</p>
                                    <h6 className="mb-1 text-right">${(total + shipping + total * 0.0625).toFixed(2)}</h6>
                                </div> <button onClick={e=> this.checkout(e)} className="btn-block btn-blue" href="/home"> <span> <span id="checkout">Checkout</span> <span id="check-amt">${(total + shipping + total * 0.0625).toFixed(2)}</span> </span> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
            }
        </div>
        )}
        </section>
        )
    }
}
