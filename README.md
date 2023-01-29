
 <h1  align="center">AtoZ.in -Amazon Website Clone</h1>


<h4 align="center">AtoZ is E-Commerce Web Application were users can able buy all  kind of products through online
 it is basically clone of  Amazon.in, Built with team of Five members using MongoDB,Express,React,NodeJS (MERN Stack) in Five Days</h4>
<br/>
<h4>Team Code :- reflective-decision-5937</h4>

<br/>
<img src="https://i.imgur.com/w3NzfPt.png"/>
<br/>
<h4 align="center">Deployed On:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="netlify" />
</p>

<br />

 <h2 align="center">🖥️ Tech Stack</h2>


<h4 align="center">Frontend:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="redux" />
  <img src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra-ui" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
  <img src="https://img.shields.io/badge/Rest_API-02303A?style=for-the-badge&logo=react-router&logoColor=white" alt="restAPI" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
</p>


<h4 align="center">Backend:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="expressjs" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JsonWebToken" />
</p>

 
<h3 align="center">Deployment</h3> 
<h3 align="center"><a href="https://atozamazon.netlify.app/"><strong>Want to see live preview »</strong></a></h3>
<br />

## Screens/Pages
- Homepage / Landing Page
- Product Listing Page with Filters
- Product Description Page/Single Product Page
- Cart Management Page
- Checkout with Address Management Page
- Login Page
- Signup Page
- Admin Dashboard


<br />


## 🚀 Features
- Login and Signup User Account
- JWT (Json Web Token) Authentication and BcryptJS Password Hashing 
- Product Filters Based on Category 
- Cart Management  
- Address Management
- Payment/Checkout 
- Admin Dashboard 
- Add,Delete,Update Products
- Responsive Design

<br />
<br/>
<hr/>
<h1 align="center">Backend</h1>
### Products

## Get all products --Admin
localhost:8080/api/v1/products

for pagination limit is default 20
for sort you can just make price price[gt]=100  price[lt]=200 you get products
for filter you can apply filter at params ex: url?name=laptop

## Create a product(post)
localhost:8080/api/v1/products/new

req.body
{
    "name":"product1",
    "price":1200,
    "description":"this is a sample product",
    "category":"Laptop",
    "images":{
        "public_id":"sample Image",
        "url":"sample url"
    }
    
    }

## Update product(put)
localhost:8080/api/v1/product/product_id

{
    "name":"airbag",
    "price":2500,
    "description":"this is a sample product",
    "category":"long lasting and safe",
    "images":{
        "public_id":"sample Image",
        "url":"sample url"
    }
    
    }

## Delete product(delete)
localhost:8080/api/v1/product/product_id

## Get product details(get)
localhost:8080/api/v1/product/63b86748a213654da6108a61

## Authentication

## Regeister User(post)
localhost:8080/api/v1/register

req.body
{
   "name":"shri",
   "email":"geniusfactsinsta@gmail.com",
   "password":"Shrinidhi@9999" 
}

## Login User(post)
localhost:8080/api/v1/login

req.body
{
    "email":"geniusfactsinsta@gmail.com",
   "password":"shri12345678" 
}

## Logout User(get)
localhost:8080/api/v1/logout

## forget password
localhost:8080/api/v1/password/forgot

req.body
{
    "email":"geniusfactsinsta@gmail.com"
}

### User routes

## Update Profile(put)
localhost:8080/api/v1/me/update

{
    "email":"shrideshpande9177@gmail.com",
    "name":"shripad deshpande"
}

## get all reviews(get)
localhost:8080/api/v1/me/update

## delete reviews(delete)
localhost:8080/api/v1/reviews?id=63b86748a213654da6108a61&productId=63b86748a213654da6108a61

## update User role, name ,email --(admin) (put)
localhost:8080/api/v1/admin/users/63be5c31fe833b5cc5c0b825

req.body
{
    "name":"shrivalli",
    "email":"shrivalli@gmail.com",
    "role":"admin"
}

## Update or Change user password (put)
localhost:8080/api/v1/logout

req.body
{
    "oldPassword":"Shrinidhi@9999",
    "newPassword":"shri12345678",
    "confirmPassword":"shri12345678"
}

## Get Single User --(admin) (Get)
localhost:8080/api/v1/admin/users/63be5c31fe833b5cc5c0b825

## update or create reviews (put)
localhost:8080/api/v1/review

req.body
{
    "productId":"63b86748a213654da6108a61",
    "comment":"just ok product",
    "rating":4
    }

## Get all users (get)
localhost:8080/api/v1/admin/users

## Delete User --(admin) (delete)
localhost:8080/api/v1/admin/users/_id

## Get user Details(who is logged in)(get)
localhost:8080/api/v1/me


### Order

## Create new order (post)
localhost:8080/api/v1/order/new

{
    "itemsPrice":200,
    "taxPrice":120,
    "shippingPrice":20,
     "orderItems": [
    {
      "name": "laptop",
      "price":20000,
      "quantity":1, 
      "image":"sample Image",
      "product": "63b86748a213654da6108a61"
    }
  ],
  "shippingInfo":{
  "address":"deshpande galli tanaji chowk latur",
    "city": "latur",

    "state": "maharastra",

    "country":"India",
    "pinCode": 413512,
    "phoneNo": 9284149182
  },
  "paymentInfo":{
      "id":"sample payment Info",
      "status":"succeede"

  }


}

## get logged in user Orders/My Orders  (get)
localhost:8080/api/v1/orders/me

## Get Single Order (get)
localhost:8080/api/v1/order/_orders_id

## Get all orders --admin (get)
localhost:8080/api/v1/admin/orders

## Delete order (delete)
localhost:8080/api/v1/admin/order/_orders_id

## Update order/process order (put)
localhost:8080/api/v1/admin/order/_orders_id

req.body
{
    "status":"Delivered"
}

## Back End Deployement
[Back End] https://long-plum-ray-ring.cyclic.app/api/v1






