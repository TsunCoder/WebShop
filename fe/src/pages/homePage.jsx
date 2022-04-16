import React from 'react'
import Product from '../components/product'
import "../css/home.css"

function homePage() {
  return (
    <div className='home'>
      <div className="home_container">
        <div className="home_row">
          <Product 
            image={"./src/asset/iphone13.png"}
            name="Iphone 13 Pro Max" 
            price={23000000}
            rating={4}/>
          <Product />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  )
}

export default homePage