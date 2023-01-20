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
