import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Trending = () => {

    useEffect(()=>{
            axios.get("https://api.coingecko.com/api/v3/search/trending").then((response)=>{
                console.log(response.data.coins)
            }).catch((error)=>console.log(error))
    },[]);

    const [trending,setTrending] = useState('');

  return (
    <div className='bg-white rounded-2xl w-auto'>
      <h1 className='text-2xl font-semibold text-slate text-left mx-4'>Trending Coins(24H)</h1>
    </div>
  )
}

export default Trending
