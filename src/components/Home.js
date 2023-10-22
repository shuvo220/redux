import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Home() {
  return (
    <>
    <div className='header'>
      <br />
        <ShoppingCartIcon />
      <br />
    </div>
    <hr />
      <div className='cart-wrapper'>
        <div className='container'>
          <div className='img-wrapper item'>
            <img src='./img/1.jpg' alt='image' />
          </div>
          <div className='text-wrapper item'>
            <span>Alerta Country Side Farm</span>
            <span>Price : $250000</span>
          </div>
          <div className='btn-wrapper item'>
            <button>Buy This Farm</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home