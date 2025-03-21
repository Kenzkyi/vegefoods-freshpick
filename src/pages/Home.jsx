import { useEffect, useState } from 'react'
import '../styles/home.css'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { IoMdCart } from 'react-icons/io'
import { FcLikePlaceholder } from 'react-icons/fc'
import { FaQuoteLeft } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { addCart, setProductId } from '../global/slice'
import { useDispatch } from 'react-redux'
import { TbCurrencyNaira } from 'react-icons/tb'
import { ScaleLoader } from 'react-spinners'


const Home = () => {
  const [firstlayer,setFirstLayer] = useState(true)
      const [Product,setProduct] = useState([])
      const navigate = useNavigate();
      const dispatch = useDispatch()

  useEffect(()=>{
    // console.log(window.scrollY > 250)

    // return  ()=>console.log('clear')
  },[])

  useEffect(()=>{
    const interval = setInterval(() => {
      setFirstLayer(!firstlayer)
    }, 5000);
    return ()=> clearInterval(interval)
  },[firstlayer])

  const baseUrl = 'https://vege-food.onrender.com/api/v1/'

  const getAllProducts = async () => {
     try {
         const res = await axios.get(`${baseUrl}getAllProducts`)
         setProduct(res.data.data)
     } catch (error) {
     }
  }
 
  useEffect(()=>{
     getAllProducts()
  },[])

  const handleProductClick = (name) => {
    navigate(`/shop/${name}`);
 };
  return (
    <div className='home'>
      {firstlayer ? <div className="home-firstlayer1">
        <div className="home-firstlayertext">
          <main>
            <h3>100% Fresh & Organic Foods</h3>
            <p>We Deliver Organic vegetables & Foods</p>
            <button>View Details</button>
          </main>
        </div>
      </div> :
      <div className="home-firstlayer2">
        <div className="home-firstlayertext">
          <main>
            <h3>We Serve Fresh Vegetables & Fruits</h3>
            <p>We Deliver Organic vegetables & Foods</p>
            <button>View Details</button>
          </main>
        </div>
      </div>}
      <div className="home-secondlayer">
        <div className="home-secondlayerholder">
          <nav>
            <main className='home-one'>
              <div>
                <img src="https://cdn4.iconfinder.com/data/icons/shopping-e-commerce-43/64/x-47-4096.png" alt="" />
              </div>
            </main>
            <h6>FREE SHIPPING</h6>
            <p>ON ORDER OVER $100</p>
          </nav>
          <nav>
            <main className='home-two'>
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/7910/7910612.png" alt="" />
              </div>
            </main>
            <h6>FREE SHIPPING</h6>
            <p>ON ORDER OVER $100</p>
          </nav>
          <nav>
            <main className='home-three'>
              <div>
                <img src="https://cdn2.iconfinder.com/data/icons/strategy-and-management-thick-line/1000/4369-Achievement-512.png" alt="" />
              </div>
            </main>
            <h6>FREE SHIPPING</h6>
            <p>ON ORDER OVER $100</p>
          </nav>
          <nav>
            <main className='home-four'>
              <div>
                <img src="https://cdn1.iconfinder.com/data/icons/user-worker-employee-business-avatars/100/26-1User_34-1024.png" alt="" />
              </div>
            </main>
            <h6>FREE SHIPPING</h6>
            <p>ON ORDER OVER $100</p>
          </nav>
        </div>
      </div>
      <div className="home-thirdlayer">
        <nav>
          <div className='home-fifth'>
            <p>Fruits</p>
          </div>
          <div className='home-sixth'>
            <p>Vegetables</p>
          </div>
        </nav>
        <main>
          <article>
          <h6>Vegetables</h6>
          <p>Protect the health of every home</p>
          <button onClick={()=>navigate('/shop')}>Shop now</button>
          </article>
          <section></section>
        </main>
        <nav>
          <div className='home-seven'>
            <p>Juices</p>
          </div>
          <div className='home-eight'>
            <p>Dried</p>
          </div>
        </nav>
      </div>
      <div className="home-fourthlayer">
        <nav>
          <h6>Featured Products</h6>
          <h5>Our Products</h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </nav>
      </div>
      <div className="home-fifthlayer">
        {
          Product.length === 0 ? <ScaleLoader /> : (
        Product.slice(0,8).map((item,index)=>(
          <div className="home-productholder" key={index} onClick={()=>{handleProductClick(item.name),dispatch(setProductId(item._id))}}>
          <main>
            <img src={item.productImage.imageUrl} alt="" />
          </main>
          <footer>
            <p>{item.name}</p>
            <h6><TbCurrencyNaira />{item.price}</h6>
          </footer>
          <aside>
            <div><IoReorderThreeOutline /></div>
            <div><IoMdCart onClick={(e)=>{e.stopPropagation(),dispatch(addCart(item))}}/></div>
            <div><FcLikePlaceholder /></div>
          </aside>
        </div>
        )))}
      </div>
      <div className="home-sixthlayer">
        <div className="home-sixthlayerright">
          <div className="home-sixthlayerholder">
            <h6>Best Price For You</h6>
            <h3>Deal of the day</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <h4>Spinach</h4>
            <h5>$10 <span>now $5 only</span></h5>
            <section>
              <div>
                <h1>-1907</h1>
                <a>DAYS</a>
              </div>
              <div>
                <h1>08</h1>
                <a>HOURS</a>
              </div>
              <div>
                <h1>21</h1>
                <a>MINUTES</a>
              </div>
              <div>
                <h1>10</h1>
                <a>SECONDS</a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="home-sevenlayer">
        <h6>Testimony</h6>
        <h5>Our satisfied customer says</h5>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
      </div>
      <div className="home-eightlayer">
        <header>
          <main className='home-eightlayerholder'>
            <div className="home-lineholder">
              <div></div>
            </div>
            <article>
              <div><FaQuoteLeft /></div>
            </article>
            <section>
                 <p>Far Far away, behind the word</p> 
              <p>mountains,far from the countries</p>
              <p>Vokalia and Consonantia, there live</p>
                            <p>the blind texts.</p>
            </section>
            <aside>
              <h5>Garreth Smith</h5>
              <p>SYSTEM ANALYST</p>
            </aside>
          </main>
          <main className='home-eightlayerholder2'>
            <div className="home-lineholder">
              <div></div>
            </div>
            <article>
              <div><FaQuoteLeft /></div>
            </article>
            <section>
                 <p>Far Far away, behind the word</p> 
              <p>mountains,far from the countries</p>
              <p>Vokalia and Consonantia, there live</p>
                            <p>the blind texts.</p>
            </section>
            <aside>
              <h5>Garreth Smith</h5>
              <p>SYSTEM ANALYST</p>
            </aside>
          </main>
          <main className='home-eightlayerholder3'>
            <div className="home-lineholder">
              <div></div>
            </div>
            <article>
              <div><FaQuoteLeft /></div>
            </article>
            <section>
                 <p>Far Far away, behind the word</p> 
              <p>mountains,far from the countries</p>
              <p>Vokalia and Consonantia, there live</p>
                            <p>the blind texts.</p>
            </section>
            <aside>
              <h5>Garreth Smith</h5>
              <p>SYSTEM ANALYST</p>
            </aside>
          </main>
        </header>
        <footer>
          <main>
            <div style={{backgroundColor:'#82AE46'}}></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </main>
        </footer>
      </div>
      <div className="home-lastlayer">
        <main>
          <div>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/partner-1.png" alt="" />
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/partner-2.png" alt="" />
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/partner-3.png" alt="" />
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/partner-4.png" alt="" />
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/partner-5.png" alt="" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
