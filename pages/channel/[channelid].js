import { useRouter } from "next/router"
import Image from "next/image"
import { useEffect, useState } from "react"
import { fetchChannelDetails, fetchChannelVideos } from "../../lib/youtubeclone"
import VideoCard from "../../components/videocard"
import SuggestedCard from "../../components/suggestedcard"
import { data } from "autoprefixer"

export default function ChannelDetail () {
    const [channelDetail, setChannelDetail] = useState(null)
    const [channelVideos, setChannelVideos] = useState(null)
    const [isMenuVideos, setIsMenuVideos] = useState(true)
    const [isMenuAbout, setIsMenuAbout] = useState(false)

    const router = useRouter()    
    const channelid = router.query.channelid

    useEffect(()=>{
        // if(channelid !== undefined){
        //     fetchChannelDetails(channelid)
        //     .then(data=>setChannelDetail(data.items))
        // }
        
        // if(channelid !== undefined){
        //     fetchChannelVideos(channelid)
        //     .then(data=>setChannelVideos(data.items))
        // }
    }, [channelid])

    const handleClickMenuVideos = () => {
        setIsMenuVideos(true)
        setIsMenuAbout(false)
    }
    const handleClickMenuAbout = () => {
        setIsMenuAbout(true)
        setIsMenuVideos(false)
    }

    console.log(channelDetail)
    // console.log(channelVideos)
        return (
            <div className="w-full">
                {/* {channelDetail?.map(data=>{
                    return ( */}
                    <>
                        <section className="w-full h-fit relative">
                        <div className="w-full h-32 md:h-72 relative">
                        {/* <Image src={data.brandingSettings.image.bannerExternalUrl} fill className="object-cover"/> */}
                        <Image src={'/images/thumbnail.jpg'} fill className="object-cover"/>
                        </div>
                        <div className="absolute w-28 h-28 rounded-full top-[75px] md:top-[230px] transform right-1/2 translate-x-1/2 overflow-hidden">
                            {/* <Image src={data.snippet.thumbnails.medium.url} fill classname="object-cover" /> */}
                            <Image src={'/images/profile-pic.jpg'} fill classname="object-cover" />
                        </div>
                        </section>
                        <div className="pt-14 w-full text-center">
                            {/* <p className="text-xl font-bold">{data.snippet.title}</p> */}
                            <p className="text-xl font-bold">guitarhero</p>
                            {/* <p className="text-sm">{data.statistics.subscriberCount} Subscriber</p> */}
                            <p className="text-sm">1M Subscriber</p>
                        </div>
                    </>
                    {/* )
                })}  */}
                <div className="w-full flex justify-center gap-5 border my-3 pb-1">
                    <button className={`font-semibold hover:bg-gray-200 px-3 duration-300 border-b-4 border-transparent hover:border-b-red-700 rounded-tr-lg rounded-tl-lg pt-1 ${isMenuVideos ? 'border-b-red-700' : 'border-transparent'}`} onClick={handleClickMenuVideos}>Videos</button>
                    <button className={`font-semibold hover:bg-gray-200 px-3 duration-300 border-b-4 border-transparent hover:border-b-red-700 rounded-tr-lg rounded-tl-lg pt-1 ${isMenuAbout ? 'border-b-red-700' : 'border-transparent'}`} onClick={handleClickMenuAbout}>About me</button>
                </div>
                {isMenuVideos && <div className="w-full border-green-600 text-sm">
                <div className="w-full h-96 border py-1 px-2 rounded-lg my-3 md:hidden">
                    <SuggestedCard suggestedVideos={channelVideos} />
                </div>
                <div className="hidden w-full h-96 border py-1 px-2 rounded-lg my-3 md:grid md:grid-cols-5">
                    <VideoCard videos={channelVideos} />
                </div>
                </div>}
                {isMenuAbout && <div className="w-full border-green-600 text-sm text-center px-5">
                    {/* {channelDetail.map(data=>{
                        return (
                            <p>{data.snippet.description}</p>
                        )
                    })} */}
                </div>}
            </div>
        )
}