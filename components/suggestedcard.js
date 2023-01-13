import Image from "next/image"

export default function SuggestedCard ( {suggestedVideos} ) {
    const video = suggestedVideos?.map(data=>{
        return (
        <a href={`/video/${data?.id?.videoId}`}>
        <div className="flex my-2">
            <Image src={data.snippet.thumbnails.high.url} alt="thumbnail" width={120} height={80} className="object-cover rounded-sm max-h-[80px]" />
            <div className="px-2 leading-5">
                <p className="font-semibold">{data.snippet.title}</p>
                <p className="text-">{data.snippet.channelTitle}</p>
            </div>
        </div>
        </a>
        )
    })
    return (
        <>{video}</>
    )
}