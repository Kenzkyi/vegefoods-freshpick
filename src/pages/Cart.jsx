import React, { useEffect } from 'react'
import '../styles/cart.css'
import { MdCancelPresentation } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, setTotalValue } from '../global/slice';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const cart = useSelector((state)=>state.cart)
  const totalValue = useSelector((state)=>state.totalValue)
  
  const dispatch = useDispatch()

  const nav = useNavigate()


  useEffect(()=>{
    dispatch(setTotalValue(cart.reduce((acc,item)=>{
      const itemTotal = item.price * item.quantityNum
      acc += itemTotal
      return acc
    },0)))
  },[cart])

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
        cart.length === 0 ?  <div className='empty-cart-div'>
           <div className='empty-cart-image-div-main'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNQomkYBtMziAZTJwcLZfUt2s2XbgT_x6LA&s" alt="" />
           </div>
        </div> : <div className="all-productdiv">
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
              <MdCancelPresentation size={35} cursor={'pointer'} onClick={()=>dispatch(removeCart(item?._id))}/>
            </div>
            <div className='fruits2'>
              <img src={item?.productImage?.imageUrl} alt="" />
            </div>
            <div className='product2'>
              <h3 style={{color:`#000000`}}>{item.name}</h3>
              <p>{item?.description?.length > 105? item.description.substr(0,105) + ' ...':item?.description}</p>
            </div>
            <div className='prices'>
              <p><TbCurrencyNaira fontSize={20}/>{item?.price}</p>
            </div>
            <div className='quantity2'>{item?.quantityNum}</div>
            <div className='total2'>
              <p><TbCurrencyNaira fontSize={20}/>{item?.price * item?.quantityNum}</p>
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
            <h4 style={{color:`#808080`}}>Enter your coupon code if you have one</h4>
            <p>Coupon Code</p>
            <input type='text' className='couponBox'/>
          </div>
          <button className='apply'>Apply Coupon</button>
         </div>

         {/* estimate line */}
         <div className='estimate'>
           <div className='shipping'>
            <div className='shippingTask'>
              <h3>Estimate shipping and tax</h3>
              <p>Enter your Destination to get a shipping
              estimate</p>
            </div>
            <div className='estimateCountry'>
              <main>
              <label>Country</label>
              <input type="text" className='pressMe'/>
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
                  <h3><TbCurrencyNaira fontSize={20}/>{totalValue}</h3>
              </div>

          </div>
          <button className='proceed' onClick={()=>{dispatch(setTotalValue(cart.reduce((acc,item)=>{const itemTotal = item.price * item.quantityNum; acc += itemTotal; return acc},0))),nav('/checkout')}}>Proceed to Checkout</button>
         </div>
      </div>

    </div>
  )
}

export default Cart
