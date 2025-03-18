import React from 'react'
import '../styles/checkout.css'
import { GoDot } from "react-icons/go";
import { TbCurrencyNaira } from 'react-icons/tb';

const Checkout = () => {
  return (
    <div className='checkoutBody'>
      <div className='vegImage'>
      <div className='vege-image-checkout-top'>
      <p>HOME CHECKOUT</p>
      <h1>CHECKOUT</h1>
      </div>
      </div>
      <div className='Billings'>
        <h3 style={{fontSize: "25px"}}>BILLING DETAILS</h3>
      </div>
      <div className='wrapper'>
        <div className='leftWrapper'>
          <div className='nameHolder'>
            <p>First name</p>
            <p>Last name</p>
          </div>
          <div className='nameWrapper'>
            <input type='text' className='firstName' placeholder='Enter Your FirstName'/>
            <input type='text' className='lastName' placeholder='Enter Your LasttName'/>
          </div>
          <div className='stateCountry'>
            <p>State / Country</p>
          </div>
          <input type='text' className='stateCountryHolder'placeholder='Enter Your State/Country'/>
          <section streetAddress>
            <p>Street Home Address</p>
          </section>
          <div className='addressHolder'>
            <input type='text' className='houseHolder' placeholder='Enter Your Home Address'/>
          </div>
          <div className='townPostCode'>
            <p>Town / City</p>
            <p>Postcode / Zip *</p>
          </div>
          <div className='townWrapper'>
            <input type='text' className='townHolder' placeholder='Enter Your Town/City'/>
            <input type='text' className='postCardHolder' placeholder='Enter Your Postcode/Zip'/>
          </div>
          <div className='phoneEmailHolder'>
            <p>Phone</p>
            <p>Email Address</p>
          </div>
          <div className='phoneEmailWrapper'>
            <input type='text' className='phoneContainer' placeholder='Enter Your Phone Number'/>
            <input type='text' className='emailContainer' placeholder='Enter Your Email Address'/>
          </div>
        </div>
        







        <div className='rightWrapper'>
          <div className='cardTotalCont'>
           <div className='cardTotalHolder'>
                <h4>Card Total</h4>
           </div>
           <div className='wrapper2'>
            <div className='subTotal'>
              <p style={{display: "flex", alignItems: "center", fontSize: "20px"}}>Subtotal</p>
              <p style={{display: "flex", alignItems: "center", fontSize: "20px"}}>Delivery</p>
              <p style={{display: "flex", alignItems: "center", fontSize: "20px"}}>Discount</p>
            </div>
            <div className='amount'>
              <p style={{display: "flex", alignItems: "center", fontSize: "20px", color: "black"}}><TbCurrencyNaira style={{fontSize: "25px"}}/>200.60</p>
              <p style={{display: "flex", alignItems: "center", fontSize: "20px", color: "black"}}><TbCurrencyNaira style={{fontSize: "25px"}}/>150.00</p>
              <p style={{display: "flex", alignItems: "center", fontSize: "20px", color: "black"}}><TbCurrencyNaira style={{fontSize: "25px"}}/>5000.00</p>
              {/* <hr style={{width:`100%`}}/> */}
            </div>
           </div>
           
              <div className='totalCont'>
                <section className='total'>
                  <p style={{fontWeight: "600", color: "black"}}>TOTAL</p>
                </section>
                <section className='amount2'>
                  <p style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}} ><TbCurrencyNaira style={{fontSize: "25px"}}/>5350.60</p>
                </section>
              
              </div>
                
          </div>
          <div className='bottomCont'>
            <div className='paymentMethod'>
            <div className='payment'>
            <h3>Payment Method</h3>
            </div>
           <div className='bottomdivholder'>
           <p style={{color: "black"}}><GoDot/>Direct Bank Transfer</p>
            <p style={{color: "black"}}><GoDot/>Check Payment</p>
           <p style={{color: "black"}}><GoDot/>Pay with Card</p>
           <p style={{display: "flex", gap: "5px"}}><input style={{cursor: "pointer", width: "5%"}} type="checkbox" />I have Read and accept the terms and conditions</p>
           </div>
           </div>
           <div className='bottomDiv'>
            <p>Place your order</p>
           </div>
          </div>
    
        </div>

      </div>
    

      
    </div>
  )
}

export default Checkout
