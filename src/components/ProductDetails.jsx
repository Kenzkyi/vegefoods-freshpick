import React, { useState } from 'react'
import { MdOutlineStarOutline } from "react-icons/md";
import "../styles/productDetails.css"
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { productId } = useParams();

  const Product = [
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg",
        title: "BELL PEPPER",
        price: "$80",
        id: 1,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg",
         title: "STRAYBERRY",
        price: "$120.00",
        id: 2,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg",
         title: "GREEN BEANS",
        price: "$120.00",
        id: 3,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg",
        title: "PURPLE CABBAGE",
        price: "$120.OO",
        id: 4,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg",
        title: "TOMATOE",
        price: "$80.00",
        id: 5,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg",
        title: "BROCOLLI",
        price: "$120.00",
        id: 6,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg",
        title: "CARROT",
        price: "$120.00",
        id: 7,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg",
        title: "FRUIT JUICE",
        price: "$120.00",
        id: 8,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-9.jpg",
        title: "ONION",
        price: "$80.00",
        id: 9,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-10.jpg",
        title: "APPLE",
        price: "$120.00",
        id: 10,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-11.jpg",
        title: "GARLIC",
        price: "$120.00",
        id: 11,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-12.jpg",
        title: "CHILLI",
        price: "$120.00",
        id: 12,
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the  copy said could convince her and so it didnt take long until. ",
    },
 ]

 const product = Product.find(p => p.id === parseInt(productId));

  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    count < 1 ? 0 : setCount(count - 1)
  }

  if (!product) {
    return <h2>Product not found</h2>
  }


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
          <img src={product.image} alt={product.title} />
        </div>
        <div className='Single-product-main-div-wrap-img2'>
          <div className='Single-product-main-div-wrap-div1'>
            <div className='product-title-when-clicked'>{product.title}</div>
            <div className='product-rating-when-clicked'>
              <div className='product-rating-when-clicked-star-rating'>5.0 <MdOutlineStarOutline/><MdOutlineStarOutline/><MdOutlineStarOutline/><MdOutlineStarOutline/><MdOutlineStarOutline/></div>
              <div className='product-rating-when-clicked-main-rating'><p style={{fontWeight: "600"}}>100</p><p style={{fontWeight: "600", color: "gray"}}>Rating</p></div>
              <div className='product-rating-when-clicked-sold-rating'><p style={{fontWeight: "600"}}>500</p><p style={{fontWeight: "600", color: "gray"}}>Sold</p></div>
            </div>
            <div className='product-price-when-clicked'>{product.price}</div>
          </div>
          <div className='Single-product-main-div-wrap-div2'>{product.description}</div>
          <div className='Single-product-main-div-wrap-div3'>
            <div className='Counter-App'>
              <div className='decrement-btn'><button onClick={handleDecrease} className='my-btn'>-</button></div>
              <div className='Count-container'>{count}</div>
              <div className='increment-btn'><button onClick={handleIncrease} className='my-btn'>+</button></div>
             
            </div>
            <div className='weight-div'><p>600 kg available</p></div>
            <div className='Add-to-cart-div'>
              <button className='Add-cart-btn-main'>Add to Cart</button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
</div>
  )
}

export default ProductDetails
