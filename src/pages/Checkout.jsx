import React, { useState } from 'react'
import '../styles/checkout.css'
import { useSelector } from 'react-redux';
import { TbCurrencyNaira } from 'react-icons/tb';


const Checkout = () => {
  const arrayOfCountries = ['Select Country', 'Ghana','Nigeria', 'United state of america','Japan','China']
  const totalValue = useSelector((state)=>state.totalValue)
  const cart = useSelector((state)=>state.cart)
  const [allChecks,setAllChecks] = useState({
    check1:false,
    check2:false,
    check3:false
  })
  const [isAgreed,setIsagreed] = useState(false)
  
  return (
    <div className='checkoutBody'>
      <div className='vegImage'>
          <div className='homeText'>
          <p>HOME</p>
          <p>CHECKOUT</p>
          </div>
           <div className='imgText'>
            <h1>CHECKOUT</h1>
           </div>
      </div>
      <div className="checkout-secondlayer">
        <div className="checkout-leftwrapper">
        <h3>Billing Details</h3>
      <div className='wrapper'>
        <main>
          <article>
            <label>First Name</label>
            <input type="text" />
          </article>
          <article>
            <label>Last Name</label>
            <input type="text" />
          </article>
        </main>
        <section>
          <label>State / Country</label>
          <select type='text' className='stateCountryHolder'>
            {
              arrayOfCountries.map((item,index)=>(
                <option value="" key={index}>{item}</option>
              ))
            }
          </select>
        </section>
        <main>
          <article>
            <label>Street Address</label>
            <input type="text" placeholder='House number and street name'/>
          </article>
          <article>
            <aside></aside>
            <input type="text" placeholder='Appartment, suite, unit etc: (optional)'/>
          </article>
        </main>
        <main>
          <article>
            <label>Town / City</label>
            <input type="text" />
          </article>
          <article>
            <label>Postcode / ZIP *</label>
            <input type="text" />
          </article>
        </main>
        <main>
          <article>
            <label>Phone</label>
            <input type="text" />
          </article>
          <article>
            <label>Email Address</label>
            <input type="text" />
          </article>
        </main>
          {/* <div className='accountWrapper'>
           <p> <GoDot/>Create an Account?</p>
           <p> <GoDot/>Ship to different address</p>
          </div> */}
        </div>
            </div>
        <div className='rightWrapper'>
                   <div className='rightWrapper-holder'>
                    <div className='cardsContainer3'>
                    <div className='cardTotalHolder1'>Card Totals</div>
                     <div className='wrapper3'>
                     <main>
                        <p>Subtotal</p>
                        <p><TbCurrencyNaira fontSize={20}/>{cart.reduce((acc,item)=>{
              const itemTotal = item.price * item.quantityNum
              acc += itemTotal
              return acc
            },0)}</p>
                     </main>
                     <main>
                        <p>Delivery</p>
                        <p><TbCurrencyNaira fontSize={20}/>0.00</p>
                     </main>
                     <main>
                        <p>Discount</p>
                        <p><TbCurrencyNaira fontSize={20}/>0.00</p>
                     </main>
                     </div>
                     
                     <div className='totalCont1'>
                            <p>TOTAL</p>
                            <h3><TbCurrencyNaira fontSize={20}/>{cart.reduce((acc,item)=>{
              const itemTotal = item.price * item.quantityNum
              acc += itemTotal
              return acc
            },0)}</h3>
                        </div>
          
                    </div>
                   </div>
          <div className='bottomCont'>
            <div className='paymentMethod'>
            <h3>Payment Method</h3>
           <div className='bottomdivholder'>
           <p><input type="radio" checked={allChecks.check1} onChange={(e)=>setAllChecks({...allChecks,check1:e.target.checked,check2:false,check3:false})}/>Direct Bank Transfer</p>
            <p><input type="radio" checked={allChecks.check2} onChange={(e)=>setAllChecks({...allChecks,check2:e.target.checked,check1:false,check3:false})}/>Check Payment</p>
           <p><input type="radio" checked={allChecks.check3} onChange={(e)=>setAllChecks({...allChecks,check3:e.target.checked,check1:false,check2:false})}/>Paypal</p>
           <p><input type="checkbox" checked={isAgreed} onChange={(e)=>setIsagreed(e.target.checked)}/> I have Read and accept the terms and conditions</p>
           </div>
           </div>
           <button className='bottomDiv'>Place your order</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Checkout
