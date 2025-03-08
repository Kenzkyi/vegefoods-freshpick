import React from 'react'
import "../styles/shop.css"

const Shop = () => {

  const Product = [
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
 ]



  return (
    <div className='Shop'>
        <div className='Shop-hero'>
        <div className='Shop-hero-inner-div'>
            <p>HOME PRODUCTS</p>
            <h1>PRODUCTS</h1>
        </div>
        </div>
        <div className='All-vegetables-header'>
            <div className='All-vegetables-header-inner'>
                <div className='All-vegetables-header-inner-box-1'>All</div>
                <div className='All-vegetables-header-inner-box-2'>Vegetables</div>
                <div className='All-vegetables-header-inner-box-2'>Fruits</div>
                <div className='All-vegetables-header-inner-box-2'>Juice</div>
                <div className='All-vegetables-header-inner-box-2'>Dried</div>
            </div>
        </div>
        <div className='Vegeatbles-main-table'>
            <div className='Vegeatbles-main-table-wrap'>
                {
                    Product.map(()=>(
                        <div className='vegetable-image-1'></div>
                    ))
                }
                
            </div>
        </div>
    </div>
    
  )
}

export default Shop
