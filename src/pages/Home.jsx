import { useEffect, useState } from 'react'
import '../styles/home.css'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { IoMdCart } from 'react-icons/io'
import { FcLikePlaceholder } from 'react-icons/fc'
import { FaQuoteLeft } from 'react-icons/fa'


const Home = () => {
  const [firstlayer,setFirstLayer] = useState(true)

  useEffect(()=>{
    console.log(window.scrollY > 250)

    return  ()=>console.log('clear')
  },[])

  useEffect(()=>{
    const interval = setInterval(() => {
      setFirstLayer(!firstlayer)
    }, 5000);
    return ()=> clearInterval(interval)
  },[firstlayer])
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
          <button>Shop now</button>
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
        <div className="home-productholder">
          <header>
            <p>30%</p>
          </header>
          <main>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg" alt="" />
          </main>
          <footer>
            <p>BELL PEPPER</p>
            <h6><del>$120.00</del>$80.00</h6>
          </footer>
          <aside>
            <div><IoReorderThreeOutline /></div>
            <div><IoMdCart /></div>
            <div><FcLikePlaceholder /></div>
          </aside>
        </div>
        <div className="home-productholder">
          <header></header>
          <main>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg" />
          </main>
          <footer>
            <p>STRAWBERRY</p>
            <h6>$120.00</h6>
          </footer>
          <aside>
            <div><IoReorderThreeOutline /></div>
            <div><IoMdCart /></div>
            <div><FcLikePlaceholder /></div>
          </aside>
        </div>
        <div className="home-productholder">
          <header></header>
          <main>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg" />
          </main>
          <footer>
            <p>GREEN BEANS</p>
            <h6>$120.00</h6>
          </footer>
          <aside>
            <div><IoReorderThreeOutline /></div>
            <div><IoMdCart /></div>
            <div><FcLikePlaceholder /></div>
          </aside>
        </div>
        <div className="home-productholder">
          <header></header>
          <main>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg" />
          </main>
          <footer>
            <p>PURPLE CABBAGE</p>
            <h6><del>$120.00</del>$80.00</h6>
          </footer>
          <aside>
            <div><IoReorderThreeOutline /></div>
            <div><IoMdCart /></div>
            <div><FcLikePlaceholder /></div>
          </aside>
        </div>
        <div className="home-productholder">
          <header>
            <p>30%</p>
          </header>
          <main>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg" />
          </main>
          <footer>
            <p>TOMATOE</p>
            <h6><del>$120.00</del>$80.00</h6>
          </footer>
          <aside>
            <div><IoReorderThreeOutline /></div>
            <div><IoMdCart /></div>
            <div><FcLikePlaceholder /></div>
          </aside>
        </div>
        <div className="home-productholder">
          <header></header>
          <main>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg" />
          </main>
          <footer>
            <p>BROCOLLI</p>
            <h6>$120.00</h6>
          </footer>
          <aside>
            <div><IoReorderThreeOutline /></div>
            <div><IoMdCart /></div>
            <div><FcLikePlaceholder /></div>
          </aside>
        </div>
        <div className="home-productholder">
          <header></header>
          <main>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg" />
          </main>
          <footer>
            <p>CARROTS</p>
            <h6>$120.00</h6>
          </footer>
          <aside>
            <div><IoReorderThreeOutline /></div>
            <div><IoMdCart /></div>
            <div><FcLikePlaceholder /></div>
          </aside>
        </div>
        <div className="home-productholder">
          <header></header>
          <main>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg" />
          </main>
          <footer>
            <p>FRUIT JUICE</p>
            <h6>$120.00</h6>
          </footer>
          <aside>
            <div><IoReorderThreeOutline /></div>
            <div><IoMdCart /></div>
            <div><FcLikePlaceholder /></div>
          </aside>
        </div>
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
          <main>
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
          <main>
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
          <main>
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
