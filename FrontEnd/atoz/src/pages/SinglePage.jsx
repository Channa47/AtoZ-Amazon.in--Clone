import React from 'react'
import { Navigation } from '../Components/Navigation'
import { Header } from '../Components/Header'
import "../Components/SinglePage.css"
import Silder from '../Components/Slider';
// import Silder from '../Components/Slider'
import SlideShowTwo from '../Components/ShowSlide';
import { useState } from 'react';
import { useEffect } from 'react';
import { Footer } from '../Components/Footer';
import  {useSelector , useDispatch} from 'react-redux'

import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { cartSuccess } from '../Redux/CartReducer/action';
function SinglePage() {
  const [Base , setBase]  = useState([]);
  let [MainData , setMainData] = useState([]);
  const toast = useToast();
  const {id} = useParams();
  const navigate = useNavigate()
const dispatch = useDispatch();



  useEffect(()=>{
    axios.get(`https://long-plum-ray-ring.cyclic.app/api/v1/product/${id}`)
    .then(r=>console.log(r))
    .catch(r=>console.log(r))
  },[])
  useEffect(()=>{
   axios.get('https://long-plum-ray-ring.cyclic.app/api/v1/allproducts')
       .then(r=>{
         // console.log(r.data.product);
         setBase(r.data.product);
         let obj = r.data.product.filter((e)=>{
            return e._id === id
         })
         console.log('SingleEl',obj)
         setMainData(obj);
         })
       .catch(r=>console.log(r))
  },[])
//   console.log(MainData[0].name)
 const Data = {
   array1:[
    {img:'https://m.media-amazon.com/images/I/31jQ91XUDhS._AC_SR320,320_.jpg'},
    {img:'https://m.media-amazon.com/images/I/411yU+n3UkL._AC_SR160,160_.jpg'},
    {img:'https://m.media-amazon.com/images/I/31SOygUjpUL._AC_SR160,160_.jpg'},
    {img:'https://m.media-amazon.com/images/I/31VzlB4YXRL._AC_SR320,320_.jpg'},
    {img:'https://m.media-amazon.com/images/I/41Ya7dFJs9L._AC_SR160,160_.jpg'},
    {img:'https://m.media-amazon.com/images/I/4121yWSVFmL._AC_SR160,160_.jpg'},
    {img:'https://m.media-amazon.com/images/I/41qtHPngSaL._AC_SR160,160_.jpg'},
    {img:'https://m.media-amazon.com/images/I/411yU+n3UkL._AC_SR160,160_.jpg'},
    {img:'https://m.media-amazon.com/images/I/41c9-pKijiL._AC_SR160,160_.jpg'},
    {img:'https://m.media-amazon.com/images/I/31SOygUjpUL._AC_SR160,160_.jpg'},
   ],
   arra2:[
    {img:'https://m.media-amazon.com/images/I/41TDTtZ-CJL._AC_SR160,160_.jpg',name: "MacBook Pro",},
    {img:'https://m.media-amazon.com/images/I/41xVK9e62GL._AC_SR160,160_.jpg',name: "Dell XPS 13",},
    {img:'https://m.media-amazon.com/images/I/41SZg53ADYL._AC_SR480,480_.jpg',name: "Lenovo ThinkPad X1 Carbon"},
    {img:'https://m.media-amazon.com/images/I/416F65svKlL._AC_SR480,480_.jpg',name: "HP Spectre x360",},
    {img:'https://m.media-amazon.com/images/I/41uEnk5g9zL._AC_SR480,480_.jpg',name: "Microsoft Surface Laptop 4"},
    {img:'https://m.media-amazon.com/images/I/41PnIUzyYML._AC_SR480,480_.jpg',name: "Acer Swift 5",},
    {img:'https://m.media-amazon.com/images/I/41dlM3P-RYL._AC_SR160,160_.jpg',name: "Asus ROG Zephyrus G15"},
    {img:'https://m.media-amazon.com/images/I/41CF84t1CzL._AC_SR160,160_.jpg',name: "Razer Blade Pro",},
    {img:'https://m.media-amazon.com/images/I/41RsGKCW7EL._AC_SR160,160_.jpg',name: "Google Pixelbook Go"},
    {img:'https://m.media-amazon.com/images/I/41zsaCwgnsL._AC_SR160,160_.jpg',name: "MacBook Pro"},
   ]
 }
  let random = Math.floor(Math.random() * 5) ; 

  let rat = random
   

  const handelAddToCart = () =>{
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems.push(MainData[0]);
      localStorage.setItem('cartItems',JSON.stringify(cartItems));
      toast({
         description: `Item Added to Cart`,
         status: "success",
         duration: 3000,
         isClosable: true,
       });
       let array = JSON.parse(localStorage.getItem('cartItems'))
       dispatch(cartSuccess(array));

      //  window.location.reload()
  }

  const handleBuy = () =>{
   localStorage.setItem('buyNow',JSON.stringify(MainData[0]));
   navigate("/address")
  }

const rray = new Array(rat).fill(0);
// console.log(rray);
  return (
    <div style={{width:"100%"}}>
     <Header/>
     <Navigation/>
     <div className='mainDiv'>
        <div className='MainImgDiv'>
           {/* ====Image===== */}
            <div className='ImageDiv'>
               <img src={MainData[0] && MainData[0].images[0].url} alt="" className='IMGAGE' />
            </div>
            {/* ====Image===== */}

            {/* INFO */}
            <div className='ImageInfoDiv'>
              {/* === */}
               <div className='ProductTitleDiv' >
                <h1 id='ProductTitle'>
                 {MainData[0] && MainData[0].name}
                </h1>
                <div className='Rating-And-Reviws-Div'>
                      <h1>Ratings:</h1>
                    {rray.map((e)=>{
                      return(
                         <h1>⭐</h1>
                      )
                    })}
                    <a className='visit'>|   Visit Samusun Store</a>
                </div>
                </div>
                {/* === */}
                <div className='priceDiv'>
                    <p className='Price'>&#8377;{MainData[0] && MainData[0].price}</p>
                    <p className='textsssss'>Inclusive all taxes 💯 </p>
                    <p className='textsssss'>Awailable No Cost EMI ✔</p>
                </div>
                {/* === */}
                <div className='freeDeliveryuDiv'>
                      <div>
                         <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" />
                         <p className='freedeltext'>Free Delivery</p>
                      </div>
                      <div>
                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" alt="" />
                         <p className='freedeltext'>Pay On Delivery</p>
                      </div>
                      <div>
                         <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" />
                         <p className='freedeltext'>7 Days <br /> Replacement</p>
                      </div>
                      <div>
                         <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="" />
                         <p className='freedeltext'>Amazon <br /> Delivered</p>
                      </div>
                </div>
                {/*  */}
                <div className='DesCription-Box'>
                   <h1 className='Desc'>Description</h1>
                   <br />

                    <p className='textsssss'>{MainData[0] && MainData[0].description}</p>
                </div>
                {/*  */}
               
            </div>
            {/* ======INFO */}
        </div>
        <div className='MainOfferDiv'>
            <div>
               <p className='FullBoldText'>With Exchange</p>
               <br />
               <p className='OfferText'>Upto 80% Off</p>
            </div>
            <div>
                <p className='FullBoldText'>✅Without Exchange </p>
                <br />
                <p className='OfferText'>&#8377;{MainData[0] && MainData[0].price}</p>
            </div>
            <div>
                <p className='ffddll'>FREE delivery Monday, This Month </p>
            </div>
            <div>
                <p  className='DeliveryTexts'>Or fastest delivery Tomorrow, <br />  Order within 9 hrs 40 mins.</p>
            </div>
            <div>
                <p className='SoldByText'>Sold by Appario Retail Private Ltd <br /> and Fulfilled by Amazon</p>
            </div>
            <div id='BTNDIV'>
               <button className='AddToCart' onClick={handelAddToCart}>Add To Cart</button>
               <button className='BuyNow' onClick={handleBuy}>Buy Now</button>
            </div>
        </div>
     </div>
      <br />
       <br />
       <SlideShowTwo array={Data.arra2}/>
      {/* <Silder array={Data.array1}/> */}
      <br />
      <br />
       {/* <SlideShowTwo array={Data.arra2}/> */}
       <Silder array={Data.array1}/>
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default SinglePage