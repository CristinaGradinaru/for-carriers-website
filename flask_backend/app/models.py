import os, base64
from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
from flask_login import UserMixin

@login.user_loader
def load_user(user_id):
    return User.query.get(user_id)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False, unique=True)
    email = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(256), nullable=False)
    address= db.Column(db.String(100), nullable=False)
    city= db.Column(db.String(50), nullable=False)
    state=db.Column(db.String(10), nullable=False)
    zip=db.Column(db.Integer(), nullable=False)
    admin= db.Column(db.Boolean, default=False, nullable=False)
    post = db.relationship('Post', backref='author', lazy=True)
    comment = db.relationship('Comment', backref='author', lazy=True)
    order = db.relationship('Order', backref='author', lazy= True)
    token = db.Column(db.String(32), index=True, unique=True)
    token_expiration = db.Column(db.DateTime())

    def __init__(self, username, email, password, address, city, state, zip , admin):
        self.username = username
        self.email = email
        self.password = generate_password_hash(password)
        self.address= address
        self.city = city
        self.state = state
        self.zip= zip
        self.admin = admin

    def __repr__(self):
        return f'<User: {self.username} | {self.email} | {self.password} | {self.id} | {self.token} | {self.state} | {self.city} | {self.zip} | {self.address}>'

    def get_token(self,expires_in=3600):
        now = datetime.utcnow()
        if self.token and self.token_expiration > now + timedelta(seconds=60):
            return self.token
        self.token = base64.b64encode(os.urandom(24)).decode('utf-8')
        self.token_expiration = now + timedelta(seconds=expires_in)
        db.session.add(self)
        return self.token

    def revoke_token(self):
        self.token_expiration = datetime.utcnow() - timedelta(seconds=1)

    @staticmethod
    def check_token(token):
        user = User.query.filter_by(token=token).first()
        if user is None or user.token_expiration < datetime.utcnow():
            return None
        return user
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'password': self.password,
            'city': self.city,
            'address': self.address,
            'state': self.state,
            'zip': self.zip,
            'token': self.token
        }


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    image = db.Column(db.String(300))
    content = db.Column(db.String(1000))
    date_created = db.Column(db.DateTime, nullable = False, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    post_join = db.relationship('Post_Comment', backref='post_br')
    

    def __init__(self, title, image, content, user_id):
        self.title = title
        self.image = image,
        self.content = content
        self.user_id = user_id
    
    def __repr__(self):
        return f'<Post: {self.title}>' #shows info in the post.query.all()
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'image': self.image,
            'content': self.content,
            "date_created": self.date_created,
            'user_id': self.user_id,
        }

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    comment_join = db.relationship('Post_Comment', backref='comment_br')
    content = db.Column(db.String(300))
    date_created = db.Column(db.DateTime, nullable = False, default=datetime.utcnow)
    def __init__(self, content, user_id, post_id):
        self.content = content
        self.user_id = user_id
        self.post_id = post_id

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            "date_created": self.date_created,
            'user_id': self.user_id,
            'user': User.query.get(self.user_id).username
        }

class Post_Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey('comment.id'), nullable=False)
    def __init__(self, post_id, comment_id):
        self.post_id = post_id
        self.comment_id = comment_id
    def to_dict(self):
        return {
            'id': self.id,
            'post_id': self.post_id,
            'comment_id': self.comment_id
        }
    def __repr__(self):
        return f'<Post_Comment: {self.post_id} | {self.comment_id}>'


class Order(db.Model):
    id = db.Column(db.Integer(), primary_key = True)
    image=db.Column(db.String())
    category= db.Column(db.String())
    name = db.Column(db.String())
    price = db.Column(db.Float())
    size= db.Column(db.String())
    quantity= db.Column(db.Integer)
    created_on = db.Column(db.DateTime(), default= datetime.utcnow)
    color= db.Column(db.String())
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    uploaded= db.Column(db.String())
    completed= db.Column(db.Boolean, nullable=False)


    def __init__(self, image, category, name, price, size, quantity, color, product_id, user_id, uploaded='None', completed=False):
        self.image= image
        self.category = category
        self.name = name
        self.price = price
        self.size = size
        self.quantity = quantity
        self.color = color
        self.product_id= product_id
        self.user_id= user_id
        self.uploaded=uploaded
        self.completed= completed

    def to_dict(self):
        return{
            'id': self.id,
            'image': self.image,
            'category': self.category,
            'name': self.name,
            'price': self.price,
            'size': self.size,
            'quantity': self.quantity,
            'uploaded': self.uploaded,
            'created_on': self.created_on,
            'color': self.color,
            'completed': self.completed,
            'user_id': self.user_id,
            'product_id':self.product_id
        }
    def __repr__(self):
        return f'<Product: {self.image} | {self.category} | {self.name} | {self.price} | {self.size} | {self.quantity} | {self.uploaded} | {self.created_on} | {self.completed} | {self.color}>'


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    category = db.Column(db.String())
    price = db.Column(db.Float())
    sale = db.Column(db.Boolean(), default=False)
    color = db.Column(db.String())
    sizes = db.Column(db.String())
    inventory= db.Column(db.Integer())
    description= db.Column(db.String())
    image = db.Column(db.String())
    date_created = db.Column(db.DateTime, nullable = False, default=datetime.utcnow)
    product_order = db.relationship('Order', backref='order_br')
    

    def __init__(self, name, category, price, sale, color, sizes, inventory, description, image):
        self.name = name
        self.category = category
        self.price = price
        self.sale = sale
        self.color = color
        self.sizes = sizes
        self.inventory= inventory
        self.description=description
        self.image = image

    
    def __repr__(self): 
        return f'<Product: {self.name} | {self.category} | {self.price} | {self.color} | {self.sizes} | {self.inventory} | {self.description} | {self.image}>' #shows info in the post.query.all()
   
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'price': self.price,
            'date_created': self.date_created,
            'sale': self.sale,
            'color': self.color,
            'sizes': self.sizes,
            'inventory': self.inventory,
            'description': self.description,
            'image': self.image,
        }

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    def __init__(self, user_id, order_id):
        self.user_id = user_id
        self.order_id = order_id
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'order_id': self.order_id
        }
    def __repr__(self):
        return f'<order: {self.user_id} | {self.order_id}>'