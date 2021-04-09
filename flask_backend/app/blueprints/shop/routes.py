from . import bp as shop
from flask import request, redirect, url_for, jsonify, render_template
from app import db
from app.models import Order, User, Product, Cart
from app.auth import token_auth
from flask_login import login_required, current_user


@shop.route('/products', methods=['GET'])
def products():
    """
    [GET] /shop/products
    """
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])

@shop.route('/products/<int:id>', methods=['GET'])
def single_product(id):
    """
    [GET] /shop/products/<id>
    """
    p= Product.query.get_or_404(id)
    return jsonify(p.to_dict())



@shop.route('/order/<int:product_id>', methods=['POST'])
@token_auth.login_required
def order(product_id):
    data = request.json
    print(data)
    user = token_auth.current_user()
    o = Order(data['image'], data['category'], data['name'], data['price'], data['size'], data['quantity'], data['color'], product_id, user.id , data['uploaded'])
    db.session.add(o)
    db.session.commit()
    o_c = Cart(user.id, o.to_dict()['id'])
    db.session.add(o_c)
    db.session.commit()
    return jsonify(o.to_dict())


@shop.route('/cart/<int:user_id>', methods=['GET'])
def get_cart(user_id):
    cart= Cart.query.filter_by(user_id=user_id).all()
    print(cart)
    arr=[o.to_dict()['order_id'] for o in cart]
    print(arr)
    orders = Order.query.filter_by(user_id=user_id, completed=False).all()
    print(orders)
    return jsonify([o.to_dict() for o in orders if o.id in arr])

@shop.route('/checkout/<int:user_id>', methods=['GET', 'POST'])
def checkout(user_id):
    orders = Order.query.filter_by(user_id=user_id).all()
    for order in orders:
        print(order)
        if order.completed==False:
            order.completed = True
            db.session.commit()
    return jsonify([o.to_dict() for o in orders])

