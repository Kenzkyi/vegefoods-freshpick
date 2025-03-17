import React, { useEffect, useState } from 'react'
import "../styles/shop.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProductId } from '../global/slice';
import { TbCurrencyNaira } from 'react-icons/tb';

const Shop = () => {

    const navigate = useNavigate();
    const [Product,setProduct] = useState([])


 const handleProductClick = (name) => {
    navigate(`/shop/${name}`);
 };

 const baseUrl = 'https://vege-food.onrender.com/api/v1/'

 const getAllProducts = async () => {
    try {
        const res = await axios.get(`${baseUrl}getAllProducts`)
        setProduct(res.data.data)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
 }
 console.log(Product)

 useEffect(()=>{
    getAllProducts()
 },[])

 const dispatch = useDispatch()

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
                Product.map((item)=>(
                    <div key={item.id} onClick={()=>{handleProductClick(item.name),dispatch(setProductId(item._id))}} className='vegetable-image-1'>
                        <div className='vegetable-image-div'>
                            <img src={item.productImage.imageUrl} alt={item.name} />
                        </div>
                        <div className='vegetable-text-div'>
                            <div className='item-title-div'>{item.name}</div>
                            <div className='item-price-div'><TbCurrencyNaira />{item.price}</div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
</div>
  )
}

export default Shop
