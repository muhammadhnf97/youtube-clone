import { useRouter } from "next/router"
import Link from "next/link"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import Image from "next/image"
import { fetchVideoDetail, fetchSuggestedVideos, fetchChannelDetails, fetchVideoComments } from "../../lib/server"
import SuggestedCard from "../../components/suggestedcard"

export default function Videos () {
    const [videoDetails, setVideoDetail] = useState(null)
    const [suggestedVideos, setSuggestedVideos] = useState(null)
    const [channelDetail, setChannelDetail] = useState(null)
    const [videoComments, setVideoComments] = useState(null)
    const [showMore, setShowMore] = useState(false)
    const router = useRouter()
    const id = router.query.videoId
    const chId = videoDetails?.map(data=>data.snippet.channelId).toString()

    useEffect(()=>{
        if(id !== undefined){
            fetchVideoDetail(id)
            .then(data=>setVideoDetail(data.items))
        }
    },[id])

    useEffect(()=>{
        if(chId !== undefined){
            fetchChannelDetails(chId)
            .then(data=>setChannelDetail(data.items))
        }
    },[chId])
        
    useEffect(()=>{
        if(id !== undefined){
            fetchSuggestedVideos(id)
            .then(data=>setSuggestedVideos(data.items))
        }
    },[id])

    useEffect(()=>{
        if(id !== undefined){
            fetchVideoComments(id)
            .then(data=>setVideoComments(data.items))
        }
    },[id])

    const handleClickShowMore = () => {
        setShowMore(prev=>!prev)
    }
    
    console.log(suggestedVideos)

    return (
        <main className="py-2">
            <div className="flex w-full">
                <div className="w-full h-60 md:w-[1280px] md:h-[720px] mx-auto md:mx-0">
                {id && <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%' height='100%' />}
                </div>
                <div className="hidden md:block mx-auto w-[480px] p-5 h-full">
                    <span className="text-lg font-semibold">Recommendation</span>
                    <div className="w-full h-[650px] overflow-scroll py-1 px-2 rounded-lg my-3">
                        <SuggestedCard suggestedVideos={suggestedVideos} />
                    </div>
                </div>
            </div>
            {videoDetails?.map(data=>{
                return (
                    <div className="px-3" key={data.id.videoId}>
                    <p className="font-semibold text-lg my-2 md:my-0">{data.snippet.title}</p>
                    </div>
                )
            })}
            <div className="px-3">
                <div className="md:flex md:items-center">
                    {channelDetail?.map(data=>{
                        return (
                            <Link href={`/channel/${chId}`} key={data.id}>
                                <div className="flex gap-3 my-3 md:my-2">
                                    <Image src={data.snippet.thumbnails.default.url} alt={'profPictures'} width={50} height={50} className="object-cover rounded-full overflow-hidden" />
                                    <div>
                                        <p className="font-semibold">{data.brandingSettings.channel.title}</p>
                                        <p className="">{data.statistics.subscriberCount < 1000 ? data.statistics.subscriberCount : data.statistics.subscriberCount.slice()} Subscriber</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                <button className="w-full h-14 border mb-3 rounded-full text-2xl font-bold text-white bg-red-500 hover:bg-red-600 md:h-fit md:text-lg md:w-fit md:px-3 md:py-1 md:font-semibold md:mx-5 md:my-auto">Subscribe</button>
                </div>
                {videoDetails?.map(data=>{
                    return (
                        <div className="w-full border bg-gray-200 space-y-3 p-2 rounded-lg overflow-hidden mb-3  md:mb-2" key={data.id.videoId}>
                            <span className="text-sm">{data.statistics.viewCount} views</span>
                            <span className="text-sm"> {data.snippet.publishedAt}</span>
                            <p>{showMore? data.snippet.description : data.snippet.description.slice(0,100) } ...</p>
                            <button className="font-semibold" onClick={handleClickShowMore}>{showMore ? 'Hide More' : 'Show More'}</button>
                        </div>
                    )
                })}
                <span className="text-lg font-semibold md:hidden">Recommendation</span>
                <div className="w-full h-96 overflow-x-hidden border py-1 px-2 rounded-lg my-3 md:hidden">
                    <SuggestedCard suggestedVideos={suggestedVideos} />
                </div>

                
                <h2 className="text-lg font-semibold">Comments</h2>
                <div className="w-full border py-1 px-2 rounded-lg my-3">
                    {videoComments?.map(data=>{
                        return (
                            <div className="flex mb-3" key={data.id}>
                                <Image src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="pp-user-comment" width={50} height={50} className="object-cover rounded-full max-h-[50px]" />
                                <div className="px-3">
                                    <p className="font-semibold">{data.snippet.topLevelComment.snippet.authorDisplayName}</p>
                                    <div dangerouslySetInnerHTML={{__html: data.snippet.topLevelComment.snippet.textDisplay}} className="leading-5" />
                                    <button className="font-semibold text-sm ">Like</button>
                                    <button className="font-semibold text-sm pl-3">Comments</button>
                                </div>
                            </div>
                            
                        )
                    })}
                </div>
 
            </div>
        </main>
    )
}