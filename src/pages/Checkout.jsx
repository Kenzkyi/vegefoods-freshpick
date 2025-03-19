import React from 'react'
import '../styles/checkout.css'
import { GoDot } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";


const Checkout = () => {
  const arrayOfCountries = ['Select Country', 'Ghana','Nigeria', 'United state of america','Japan','China']
  return (
    <div className='checkoutBody'>
      <div className='vegImage'>
        <p>Home</p>
         <p>checkout</p>
           <div className='imgText'>
            <h1>Checkout</h1>
           </div>
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
            <input type='text' className='firstName'/>
            <input type='text' className='lastName'/>
          </div>
          <div className='stateCountry'>
            <p>State / Country</p>
          </div>
          <select type='text' className='stateCountryHolder'>
            {
              arrayOfCountries.map((item,index)=>(
                <option value="" key={index}>{item}</option>
              ))
            }
          </select>
          <section streetAddress>
            <p>Street Address</p>
          </section>
          <div className='addressHolder'>
            <input type='text' className='houseHolder'/>
            <input type='text' className='apartment'/>
          </div>
          <div className='townPostCode'>
            <p>Town / City</p>
            <p>Postcode / Zip *</p>
          </div>
          <div className='townWrapper'>
            <input type='text' className='townHolder'/>
            <input type='text' className='postCardHolder'/>
          </div>
          <div className='phoneEmailHolder'>
            <p>Phone</p>
            <p>Email Address</p>
          </div>
          <div className='phoneEmailWrapper'>
            <input type='text' className='phoneContainer'/>
            <input type='text' className='emailContainer'/>
          </div>
          <div className='accountWrapper'>
           <p> <GoDot/>Create an Account?</p>
           <p> <GoDot/>Ship to different address</p>
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
