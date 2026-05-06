import React from 'react'
import "./Home.css"
import Product from '../Product/Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className='home__image'
          src="https://m.media-amazon.com/images/G/01/AmazonExports/Events/2026/MDay26/LandingPage/Karu_MDay26_LandingPageBanner_EN.jpg" 
          alt=''
        />

        <div className="home__row">
          <Product title="hp gaming laptop" price={36.99}
            image="https://m.media-amazon.com/images/I/71XSld5P-TL._AC_UY218_.jpg" rating={1}
          />
          <Product title="wireless mouse" price={29.99}
            image="https://m.media-amazon.com/images/I/610qzHRTFOL._AC_UY218_.jpg" rating={2}
          />
        </div>

        <div className="home__row">
          <Product title="smartphone" price={199.99}
            image="https://m.media-amazon.com/images/I/61aU1bmGyML._AC_SX148_SY213_QL70_.jpg" rating={3}
          />
          <Product title="Headphones" price={299.99}
            image="https://m.media-amazon.com/images/I/515FE+S4yLL._AC_SX148_SY213_QL70_.jpg" rating={4}
          />
          <Product title="Casio F91W Series" price={599.99}
            image="https://m.media-amazon.com/images/I/51mu4w1lJwL._AC_SR175,263_QL70_.jpg" rating={5}
          />
        </div>

        <div className="home__row">
          <Product title="LG 34' Curved UltraWide" price={99.99}
            image="https://m.media-amazon.com/images/I/61c3ChJVf2L._AC_SX148_SY213_QL70_.jpg" rating={1}
          />
        </div>

      </div>
    </div>
  )
}

export default Home;