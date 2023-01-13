import Head from 'next/head'
import Navbar from '../components/navbar'
import VideoCard from '../components/videocard'
import { sidebar } from '../lib/constant'
import { useEffect, useState } from 'react'
import { fetchSearch } from '../lib/youtubeclone'

export default function Home(  ) {
  const [getVideos, setGetVideos] = useState([])
  
  useEffect(()=>{
    fetchSearch('trending')
    .then(data=>setGetVideos(data.items))
  },[])
  

  return (
    <>
    <main className="flex flex-col md:grid md:grid-cols-5 md:max-w-[95rem] md:gap-2">
        <VideoCard videos={getVideos} />
    </main>
    </>
  )
}
