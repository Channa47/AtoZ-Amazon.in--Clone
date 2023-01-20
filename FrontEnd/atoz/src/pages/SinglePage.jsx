import React from 'react'
import { Navigation } from '../Components/Navigation'
import { Header } from '../Components/Header'
import "../Components/SinglePage.css"
function SinglePage() {
  let rat = 5 ; 

const rray = new Array(rat).fill(0);
console.log(rray);
  return (
    <div style={{width:"100%"}}>
     <Header/>
     <Navigation/>
     <div className='mainDiv'>
        <div className='MainImgDiv'>
           {/* ====Image===== */}
            <div className='ImageDiv'>
               <img src="https://m.media-amazon.com/images/I/812yohjGZ2L._SY879_.jpg" alt="" className='IMGAGE' />
            </div>
            {/* ====Image===== */}

            {/* INFO */}
            <div className='ImageInfoDiv'>
              {/* === */}
               <div className='ProductTitleDiv' >
                <h1 id='ProductTitle'>
                  MacBook Pro
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
                    <p className='Price'>&#8377;999</p>
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
                    <p className='textsssss'>Apple's latest MacBook Pro with a Retina display, Touch Bar, and powerful processing capabilities</p>
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
                <p className='OfferText'>&#8377;999</p>
            </div>
            <div>
                <p className='ffddll'>FREE delivery Monday, January </p>
            </div>
            <div>
                <p  className='DeliveryTexts'>Or fastest delivery Tomorrow, January. <br />  Order within 9 hrs 40 mins.</p>
            </div>
            <div>
                <p className='SoldByText'>Sold by Appario Retail Private Ltd <br /> and Fulfilled by Amazon</p>
            </div>
            <div id='BTNDIV'>
               <button className='AddToCart'>Add To Cart</button>
               <button className='BuyNow'>Buy Now</button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default SinglePage