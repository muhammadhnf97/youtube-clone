import VideoCard from '../components/videocard'
import { useEffect, useState } from 'react'
import { fetchSearch } from '../lib/server'

export default function Home(  ) {
  const [getVideos, setGetVideos] = useState([])
  
  useEffect(()=>{
    fetchSearch('trending')
    .then(data=>setGetVideos(data.items))
  },[])
  

  return (
    <>
    <main className="flex flex-col md:grid md:grid-cols-5 md:max-w-[95rem] md:gap-2 md:mx-auto">
        <VideoCard videos={getVideos} />
    </main>
    </>
  )
}
