import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { fetchSearch } from "../../lib/youtubeclone" 
import VideoCard from "../../components/videocard"

export default function Search (){
    const [getVideos, setGetVideos] = useState(null)
    const router = useRouter()
    const tquery = router.query.qsearch

    useEffect(()=>{
        if(tquery !== undefined){
            fetchSearch(tquery)
            .then(data=>setGetVideos(data.items))
        }
    },[tquery])

    return (
        <>
        <main className="flex flex-col md:grid md:grid-cols-5 md:max-w-[95rem] md:gap-2">
            <VideoCard videos={getVideos} />
        </main>
        </>
    )
}