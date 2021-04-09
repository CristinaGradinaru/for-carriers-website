import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../stylesheets/productStyles.css'


export default class SingleProduct extends Component {

    render() {
        const p = this.props.product
        return (
            <div className='row container-fluid col-sm-3 m-4 p-1 justify-content-center text-center container-product'>
                <div className="card-product card flex-fill d-flex h-100">
                <h5 className="card-title">{p.name}</h5>
                <h6 className='category'>CATEGORY: {p.category}</h6>
                <img src={p.image} className="card-img-top img-fluid m-2 product-image" alt="product"/>
                <div className="card-body">
                    <Link to={`/products/${p.id}`}>
                    <button className="btn btn-primary btn-blue">Order Now</button>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}
