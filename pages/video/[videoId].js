import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { fetchVideoDetail } from "../../lib/youtubeclone"

export default function Videos () {
    const [videoDetails, setVideoDetail] = useState(null)
    const router = useRouter()
    const id = router.query.videoId

    useEffect(()=>{
        fetchVideoDetail(id)
        .then(data=>setVideoDetail(data.items))
    },[])
    
    console.log(videoDetails)
    return (
        <div>{id}</div>
    )
}