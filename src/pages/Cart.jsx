import React from 'react'
import '../styles/cart.css'
import { MdCancelPresentation } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../global/slice';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const nav = useNavigate();

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
      {
        cart.length === 0 ? <h3 style={{margin:100,fontSize:50}}>Your Cart is Empty</h3> : <div className="all-productdiv">
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
              <p>{item.description.length > 105? item.description.substr(0,105) + ' ...':item.description}</p>
            </div>
            <div className='prices'>
              <p><TbCurrencyNaira fontSize={20}/>{item.price}</p>
            </div>
            <div className='quantity2'>{item.quantityNum}</div>
            <div className='total2'>
              <p><TbCurrencyNaira fontSize={20}/>{item.price * item.quantityNum}</p>
            </div>
          </div>))
            }
        </div> 
      }
           {/* proceed to checkout section */}
      <div className='finalBottom'>
         <div className='couponWrapper'>
          <div className='coupon'>
            <h3>Coupon Code</h3>
            <h5 style={{color: "black"}}>Enter your coupon code if you have one.</h5>
            <p>Coupon Code</p>
            <input type='text' className='couponBox'/>
          </div>
          <button className='apply'>Apply Coupon</button>
         </div>

         {/* estimate line */}
         <div className='estimate'>
           <div className='shipping'>
            <div className='shippingTask'>

              <h3 style={{color: "black"}}>Estimate shipping and tax.</h3>
             <p style={{color: "black"}}> Enter your Destination to get a shipping.</p>
              <p style={{color: "black"}}>Estimate</p>

              <h3>Estimate shipping and tax</h3>
              <p>Enter your Destination to get a shipping
              estimate</p>
            </div>
            <div className='estimateCountry'>
              <main>
              <label>Country</label>
              <input type="text" className='pressMe'/>

              <div className='stateCont'>
                <div><p>State/Province</p></div>
                <input type="text" className='provinceInput'/>

                <div className='zipCont'>
                <div><p>Zip/Postal Code</p></div>
                <input type="text" className='zipInput'/>
              </div>
              </div>
            
              </main>
              <main>
              <label>State/Province</label>
              <input type="text" className='provinceInput'/>
              </main>
              <main>
              <label>Zip/Postal Code</label>
              <input type="text" className='zipInput'/>
              </main>

            </div>
           </div>
           <button className='estimate2'>Estimate</button>
         </div>
         {/* my checkout */}
         <div className='checkout'>
          <div className='cardsContainer1'>
          <div className='cardTotalHolder'>
                <h3>Card Total</h3>
           </div>
           <div className='wrapper2'>
            <div className='subTotal'>
              <p  style={{display: "flex", alignItems: "center", fontSize: "20px", color: "black"}}>Subtotal</p>
              <p  style={{display: "flex", alignItems: "center", fontSize: "20px", color: "black"}}>Delivery</p>
              <p  style={{display: "flex", alignItems: "center", fontSize: "20px", color: "black"}}>Discount</p>
            </div>
            <div className='amount'>
               <p style={{display: "flex", alignItems: "center", fontSize: "20px", color: "black"}}><TbCurrencyNaira style={{fontSize: "25px"}}/>3900.00</p>
              <p style={{display: "flex", alignItems: "center", fontSize: "20px",  color: "black"}}><TbCurrencyNaira style={{fontSize: "25px"}}/>460.00</p>
               <p style={{display: "flex", alignItems: "center", fontSize: "20px",  color: "black"}}><TbCurrencyNaira style={{fontSize: "25px"}}/>150.00</p>
            </div>
           </div>
           
           <div className='totalCont'>
                <section className='total'>
                  <p style={{fontSize: "20px", color: "black", fontWeight: "600"}}>TOTAL</p>
                </section>
                <section className='amount2'>
                  <p  style={{display: "flex", alignItems: "center", fontSize: "20px", color: "black", fontWeight: "600"}}><TbCurrencyNaira style={{fontSize: "25px"}}/>4510.00</p>
                </section>
              </div>

          </div>
          <button onClick={()=>nav("/checkout")} className='proceed'>
            <h3>Proceed to Checkout</h3>
          </button>
          <div className='cardTotalHolder1'>Card Totals</div>
           <div className='wrapper3'>
           <main>
              <p>Subtotal</p>
              <p>$20.60</p>
           </main>
           <main>
              <p>Delivery</p>
              <p>$0.00</p>
           </main>
           <main>
              <p>Discount</p>
              <p>$3.00</p>
           </main>
           </div>
           
           <div className='totalCont1'>
                  <p>TOTAL</p>
                  <h3>$17.60</h3>
              </div>

          </div>
          <button className='proceed'>Proceed to Checkout</button>
         </div>
      </div>
  )
}

export default Cart
