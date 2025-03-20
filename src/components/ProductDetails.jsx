import React, { useEffect, useState } from 'react'
import { MdOutlineStarOutline } from "react-icons/md";
import "../styles/productDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { TbCurrencyNaira } from 'react-icons/tb';
import { addCart } from '../global/slice';

const ProductDetails = () => {

  const productId = useSelector((state)=>state.productId)

  const dispatch = useDispatch()
  const [product,setProduct] = useState({})


  const baseUrl = 'https://vege-food.onrender.com/api/v1/'

  const getOneProduct = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}getOneProduct/${id}`)
      setProduct(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getOneProduct(productId)
  },[])

  return (
    <div className='ProductDetails'>
    <div className='ProductDetails-hero'>
    <div className='ProductDetails-hero-inner-div'>
        <p>HOME PRODUCTS---PRODUCTS SINGLE</p>
        <h1>PRODUCTS SINGLE</h1>
    </div>
    </div>
    <div className='Single-product-main-div'>
      <div className='Single-product-main-div-wrap'>
        <div className='Single-product-main-div-wrap-img1'>
          <img src={product?.productImage?.imageUrl} alt={product.name} />
        </div>
        <div className='Single-product-main-div-wrap-img2'>
          <div className='Single-product-main-div-wrap-div1'>
            <div className='product-title-when-clicked'>{product.name}</div>
            <div className='product-rating-when-clicked'>
              <div className='product-rating-when-clicked-star-rating'>5.0 <MdOutlineStarOutline/><MdOutlineStarOutline/><MdOutlineStarOutline/><MdOutlineStarOutline/><MdOutlineStarOutline/></div>
              <div className='product-rating-when-clicked-main-rating'><p style={{fontWeight: "600"}}>100</p><p style={{fontWeight: "600", color: "gray"}}>Rating</p></div>
              <div className='product-rating-when-clicked-sold-rating'><p style={{fontWeight: "600"}}>500</p><p style={{fontWeight: "600", color: "gray"}}>Sold</p></div>
            </div>
            <div className='product-price-when-clicked'><TbCurrencyNaira />{product.price}</div>
          </div>
          <div className='Single-product-main-div-wrap-div2'>{product.description}</div>
          <div className='Single-product-main-div-wrap-div3'>
            <div className='Counter-App'>
              <div className='Count-container'>1</div>
             
            </div>
            <div className='weight-div'><p>{product.quantity} kg available</p></div>
            <div className='Add-to-cart-div'>
              <button className='Add-cart-btn-main' onClick={()=>dispatch(addCart(product))}>Add to Cart</button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
</div>
  )
}

export default ProductDetails
