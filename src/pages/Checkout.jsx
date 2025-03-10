import React from 'react'
import '../styles/checkout.css'
import { GoDot } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";


const Checkout = () => {
  return (
    <div className='checkoutBody'>
      <div className='vegImage'>
      </div>
      <div className='Billings'>
        <h3>Billing Details</h3>
      </div>
      <div className='wrapper'>
        <div className='leftWrapper'>
          <div className='nameHolder'>
            <p>First name</p>
            <p>Last name</p>
          </div>
          <div className='nameWrapper'>
            <section className='firstName'></section>
            <section className='lastName'></section>
          </div>
          <div className='stateCountry'>
            <p>State / Country</p>
          </div>
          <section className='stateCountryHolder'></section>
          <section streetAddress>
            <p>Street Address</p>
          </section>
          <div className='addressHolder'>
            <section className='houseHolder'></section>
            <section className='apartment'></section>
          </div>
          <div className='townPostCode'>
            <p>Town / City</p>
            <p>Postcode / Zip *</p>
          </div>
          <div className='townWrapper'>
            <section className='townHolder'></section>
            <section className='postCardHolder'></section>
          </div>
          <div className='phoneEmailHolder'>
            <p>Phone</p>
            <p>Email Address</p>
          </div>
          <div className='phoneEmailWrapper'>
            <section className='phoneContainer'></section>
            <section className='emailContainer'></section>
          </div>
          <div className='accountWrapper'>
          <GoDot/>  <p>Create an Account?</p>
          <GoDot/> <p>Ship to different address</p>
          </div>
        </div>
        







        <div className='rightWrapper'>
          <div className='cardTotalCont'>
           <div className='cardTotalHolder'>
                <h4>Card Total</h4>
           </div>
           <div className='wrapper2'>
            <div className='subTotal'>
              <p>Subtotal</p>
              <p>Delivery</p>
              <p>Discount</p>
            </div>
            <div className='amount'>
              <p>$20.60</p>
              <p>$0.00</p>
              <p>$3.00</p>
              {/* <hr style={{width:`100%`}}/> */}
            </div>
           </div>
           
              <div className='totalCont'>
                <section className='total'>
                  <p>TOTAL</p>
                </section>
                <section className='amount2'>
                  <p>$17.60</p>
                </section>
              
              </div>
                
          </div>
          <div className='bottomCont'>
            <div className='paymentMethod'>
            <div className='payment'>
            <h3>Payment Method</h3>
            </div>
           <div className='bottomdivholder'>
           <p><GoDot/>Direct Bank Transfer</p>
            <p><GoDot/>Check Payment</p>
           <p><GoDot/>Paypal</p>
           <p><IoIosCheckboxOutline/>I have Read and accept the terms and conditions</p>
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
