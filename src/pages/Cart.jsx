import React from 'react'
import '../styles/cart.css'
import { MdCancelPresentation } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../global/slice';


const Cart = () => {

  const cart = useSelector((state)=>state.cart)
  
  const dispatch = useDispatch()

  return (
    <div className='cartBody'>

      {/* cart background image */}
      <div className='cartVegImg'>
        {/* cart image inner text */}
        <div className='cartImgText'>
          <p>HOME</p>
          <p>CART</p>
         </div>
         <div className='cartImgH1'>
          <h1>MY CART</h1>
        </div>
      </div>

           {/* product header */}
      <div className='productHeader'>
        <div className='icon'></div>
        <div className='fruits'></div>
        <div className='product'>
          <p>Product Name</p>
        </div>
        <div className='price'>
          <p>Price</p>
        </div>
        <div className='quantity'>
          <p>Quantity</p>
        </div>
        <div className='total1'>
          <p>Total</p>
        </div>
      </div>


                 {/* middle product */}
          {
            cart.map((item,index)=>(
            <div className='middleProduct' key={index}> 
              <div className='icons1'>
            <MdCancelPresentation size={35} cursor={'pointer'} onClick={()=>dispatch(removeCart(item._id))}/>
          </div>
          <div className='fruits2'>
            <img src={item.productImage.imageUrl} alt="" />
          </div>
          <div className='product2'>
            <h3 style={{color:`#000000`}}>{item.name}</h3>
            <p>{item.description.length > 120? item.description.substr(0,120) + ' ...':item.description}</p>
          </div>
          <div className='prices'>
            <p>{item.price}</p>
          </div>
          <div className='quantity2'>{item.quantityNum}</div>
          <div className='total2'>
            <p>{item.price * item.quantityNum}</p>
          </div>
        </div>))
          }

      
           {/* proceed to checkout section */}
      <div className='finalBottom'>
         <div className='couponWrapper'>
          <div className='coupon'>
            <h3>Coupon Code</h3>
            <h4 style={{color:`#808080`}}>Enter your coupon code if you have one</h4>
            <p>Coupon Code</p>
            <input type='text' className='couponBox'/>
          </div>
          <button className='apply'>
            <h3>Apply Coupon</h3>
          </button>
         </div>

         {/* estimate line */}
         <div className='estimate'>
           <div className='shipping'>
            <div className='shippingTask'>
              <h3 style={{color:`#000000`}}>Estimate shipping and tax</h3>
              Enter your Destination to get a shipping
              <p>estimate</p>
            </div>
            <div className='estimateCountry'>
              <div>
                <p style={{color:`#000000`}}>Country</p>
              </div>
              <input type="text" className='pressMe'/>

              <div className='stateCont'>
                <div><p>State/Province</p></div>
                <input type="text" className='provinceInput'/>

                <div className='zipCont'>
                <div><p>Zip/Postal Code</p></div>
                <button className='zipInput'/>
              </div>
              </div>
            
            </div>
            
          
           </div>
           
           <button className='estimate2'>
            <h3>Estimate</h3>
           </button>
         </div>

         {/* my checkout */}
         <div className='checkout'>
          <div className='cardsContainer1'>
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
          <button className='proceed'>
            <h3>Proceed to Checkout</h3>
          </button>
         </div>
      </div>

    </div>
  )
}

export default Cart
