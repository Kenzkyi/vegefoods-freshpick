import React from 'react'
import "../styles/shop.css"
import { useNavigate } from 'react-router-dom'

const Shop = () => {

    const navigate = useNavigate();

  const Product = [
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg",
        title: "BELL PEPPER",
        price: "$80",
        id: 1,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg",
         title: "STRAYBERRY",
        price: "$120.00",
        id: 2,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg",
         title: "GREEN BEANS",
        price: "$120.00",
        id: 3,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg",
        title: "PURPLE CABBAGE",
        price: "$120.OO",
        id: 4,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg",
        title: "TOMATOE",
        price: "$80.00",
        id: 5,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg",
        title: "BROCOLLI",
        price: "$120.00",
        id: 6,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg",
        title: "CARROT",
        price: "$120.00",
        id: 7,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg",
        title: "FRUIT JUICE",
        price: "$120.00",
        id: 8,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-9.jpg",
        title: "ONION",
        price: "$80.00",
        id: 9,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-10.jpg",
        title: "APPLE",
        price: "$120.00",
        id: 10,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-11.jpg",
        title: "GARLIC",
        price: "$120.00",
        id: 11,
    },
    {
        image: "https://preview.colorlib.com/theme/vegefoods/images/product-12.jpg",
        title: "CHILLI",
        price: "$120.00",
        id: 12,
    },
 ]

 const handleProductClick = (id) => {
    navigate(`/shop/${id}`);
 };


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
                    <div key={item.id} onClick={()=>handleProductClick(item.id)} className='vegetable-image-1'>
                        <div className='vegetable-image-div'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='vegetable-text-div'>
                            <div className='item-title-div'>{item.title}</div>
                            <div className='item-price-div'>{item.price}</div>
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
