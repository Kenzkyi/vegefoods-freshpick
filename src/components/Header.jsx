import { FaUser } from 'react-icons/fa'
import '../styles/header.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdShoppingCart } from 'react-icons/md'
import { useState } from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const [headerDropdown,setHeaderDropdown] = useState(false)
  const [headerMenu,setHeaderMenu] = useState(false)
  const [headerDropdownMenu,setHeaderDropdownMenu] = useState(false)
  const nav = useNavigate()
  const cart = useSelector((state)=>state.cart)
  const productId = useSelector((state)=>state.productId)
  return (
    <div className='header'>
      <div className='header-holder'>
        <h3 onClick={()=>{nav('/'),setHeaderDropdown(false)}}>VEGEFOODS</h3>
        <ul>
          <li onClick={()=>{nav('/'),setHeaderDropdown(false)}}>HOME</li>
          <li onMouseEnter={()=>setHeaderDropdown(!headerDropdown)}>SHOP<IoMdArrowDropdown /></li>
          <div className="header-dropdown" style={{display:headerDropdown?'flex':'none'}} onMouseLeave={()=>setHeaderDropdown(false)}>
            <p onClick={()=>{nav('/shop'),setHeaderDropdown(false)}}>Shop</p>
            <p onClick={()=>{
              if (productId) {
                nav(`/shop/${productId}`),setHeaderDropdown(false)
              }
            }}>Single Product</p>
            <p onClick={()=>{nav('/cart'),setHeaderDropdown(false)}}>Cart</p>
          </div>
          <li>ABOUT</li>
          <li>BLOG</li>
          <li>CONTACT</li>
          <li onClick={()=>{nav('/cart'),setHeaderDropdown(false)}}><MdShoppingCart />[ {cart?.length} ]</li>
        </ul>
        <div className="header-menubar">
          <p onClick={()=>setHeaderMenu(!headerMenu)}><IoReorderThreeOutline fontSize={30} /> MENU</p>
        </div>
      </div>
      <div className="header-profile" onClick={()=>nav('/profile')}>
      <FaUser />
      </div>
      <div className="header-fullcontent" style={{display:headerMenu?'flex':'none'}}>
      <ul>
          <li onClick={()=>{nav('/'),setHeaderMenu(false)}}>HOME</li>
          <li onMouseEnter={()=>setHeaderDropdownMenu(!headerDropdownMenu)}>SHOP<IoMdArrowDropdown /></li>
          <div className="headermobile-dropdown" style={{display:headerDropdownMenu?'flex':'none'}} onMouseLeave={()=>setHeaderDropdownMenu(false)}>
            <p onClick={()=>{nav('/shop'),setHeaderMenu(false),setHeaderDropdownMenu(false)}}>Shop</p>
            <p onClick={()=>{
              if (productId) {
                nav(`/shop/${productId}`),setHeaderMenu(false),setHeaderDropdownMenu(false)
              }
            }}>Single Product</p>
            <p onClick={()=>{nav('/cart'),setHeaderMenu(false),setHeaderDropdownMenu(false)}}>Cart</p>
          </div>
          <li>ABOUT</li>
          <li>BLOG</li>
          <li>CONTACT</li>
          <h6 onClick={()=>{nav('/cart'),setHeaderMenu(false)}}><MdShoppingCart />[ {cart?.length} ]</h6>
        </ul>
      </div>
    </div>
  )
}

export default Header
