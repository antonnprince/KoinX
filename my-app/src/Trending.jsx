import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Trending = () => {

    useEffect(()=>{
            axios.get("https://api.coingecko.com/api/v3/search/trending").then((response)=>{
                console.log(response.data.coins)
                setTrending(response.data.coins)
            }).catch((error)=>console.log(error))
    },[]);

    const [trending,setTrending] = useState([]);

  return (
    <div className='bg-white rounded-2xl w-auto py-4'>
      <h1 className='text-3xl font-semibold text-slate-900 text-left mx-4 py-4'>Trending Coins (24h)</h1>
    {
    trending.slice(0,3).map((coin) => (
        <div className='flex flex-row mx-4 space-y-8'>
                <div className='flex flex-row space-x-2 my-2'>
                    <>
                        <img src={coin.item.small} className='w-8 h-8' />
                        <h2 className='text-xl text-black font-semibold'>{coin.item.name}<span>({coin.item.symbol})</span></h2>
                    </>

                    <h1 className='text-xl text-right text-green-600 font-semibold'>{coin.item.data.price_change_percentage_24h.btc.toFixed(2)} </h1>
                </div>
        </div>
    ))
    }



     
    </div>
  )
  }

export default Trending
