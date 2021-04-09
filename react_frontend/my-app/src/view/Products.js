import React, { Component } from 'react'
import SingleProduct from '../component/SingleProduct'

export default class Products extends Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }

componentDidMount(){
    fetch('http://127.0.0.1:5000/shop/products')
        .then(res => res.json())
        .then(data=> this.setState({ products:data }))
        .catch(error => console.error(error))
}
    render() {
        return (
            <div className="row container-fluid m-4">
                {this.state.products.map(p => <SingleProduct key = {p.id} product={p} />)}
            </div>

        )
    }
}
