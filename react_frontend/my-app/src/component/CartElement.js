import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
import '../stylesheets/cartElement.css'

export default class CartElement extends Component {


    render() {
        const orders = this.props.order
        return (

            <div className="col-md-12 container-fluid">
            {this.props.order['completed']===false ? (               
            <div className="container px-4 py-5 mx-auto">

            <div className="row d-flex justify-content-center border-top">
                <div className="col-3">
                    <div className="row d-flex">
                        <div className="book"> <img src={orders['image']} className="book-img" alt='product'/> </div>
                        <div className="my-auto flex-column d-flex pad-left">
                            <h6 className="mob-text">{orders['name']}</h6>
                        </div>
                    </div>
                </div>
                <div className="my-auto col-9">
                    <div className="row text-right">
                        <div className="col-3">
                            <p className="mob-text">{orders['color']}</p>
                        </div>
                        <div className="col-3">
                            <div className="row d-flex justify-content-end px-3">
                                <p className="mb-0" id="cnt1">{orders['quantity']}</p>                                
                            </div>
                         </div>
                        <div className="col-3">
                            <h6 className="mob-text">$ {orders['price']}</h6>
                        </div>
                        <div className="col-3">
                            <h6 className="mob-text">$ {orders['price'] * orders['quantity']}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) : ( 
        <div className="container-fluid">

        </div>
         )
        }
            
        </div>

        )
    }

}
