import React, { useEffect } from 'react'
import TradingViewWidget from './TradingViewWidget'
import Trending from './Trending';


const BTC = () => {
  

  return (
    <div className='flex flex-col md:flex-row rounded-xl justify-between my-8 ml-4 bg-slate-200 mr-auto'>
      
      <div className='h-screen w-full'>
      <TradingViewWidget />
      </div>

      <div className='block flex-col mx-auto lg:mx-8 w-auto lg:w-1/2 space-y-8 '>
        <div className='block bg-blue-600 rounded-2xl text-center h-96 space-y-4 pt-4'>
            <h1 className='text-white text-2xl font-semibold mx-12 mt-8 '>Get started with KoinX <br/> for FREE</h1>
            <p className='text-lg text-white w-96 mx-auto my-8'>
              With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports
            </p>
            <button className='px-4 py-2 bg-white text-black text-lg rounded-xl font-semibold w-auto '>
              Get Started for FREE
            </button>
        </div>
        <Trending />
      </div>
    </div>
  )
}

export default BTC
