import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { fetchVideoDetail, fetchSuggestedVideos, fetchChannelDetails } from "../../lib/youtubeclone"

export default function Videos () {
    const [videoDetails, setVideoDetail] = useState(null)
    const [suggestedVideos, setSuggestedVideos] = useState(null)
    const [channelDetail, setChannelDetail] = useState(null)
    const router = useRouter()
    const id = router.query.videoId
    const chId = videoDetails?.map(data=>data.snippet.channelId).toString()
    const videoId = videoDetails?.map(data=>data.id).toString()

    useEffect(()=>{
        if(id !== undefined){
            fetchVideoDetail(id)
            .then(data=>setVideoDetail(data.items))
        }
    },[id])

    useEffect(()=>{
        if(videoId !== undefined){
            fetchSuggestedVideos(videoId)
            .then(data=>setSuggestedVideos(data.items))
        }
    },[videoId])
    
    useEffect(()=>{
        if(chId !== undefined){
            fetchChannelDetails(chId)
            .then(data=>setChannelDetail(data.items))
        }
    },[chId])
    
    console.log(videoDetails)

    return (
        <main className="border border-red-800 py-2 px-3">
            <div className="border w-full h-64 mx-auto">
            {id && <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%' height='100%' />}
            </div>
            {videoDetails?.map(data=>{
                return (
                    <>
                    <p className="font-semibold text-lg my-2">{data.snippet.title}</p>
                    <div className="w-full border bg-gray-200 space-y-3 p-2 rounded-lg overflow-hidden">
                        <span className="text-sm">{data.statistics.viewCount} views</span>
                        <span className="text-sm"> {data.snippet.publishedAt}</span>
                        <p>{data.snippet.description}</p>
                        <div className="w-full">
                            {data.snippet.tags.map(tags=>{
                                return (
                                <span className="border w-fit h-fit mx-1 text-xs text-blue-600">#{tags}</span>
                                )
                            })}
                            </div>           
                    </div>
                    </>
                )
            })}
        </main>
    )
}