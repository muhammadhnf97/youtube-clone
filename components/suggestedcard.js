import Image from "next/image"
import Link from "next/link"

export default function SuggestedCard ( {suggestedVideos} ) {
    const video = suggestedVideos?.map(data=>{
        return (
        <Link href={`/video/${data?.id?.videoId}`} key={data.id.videoId}>
        <div className="flex my-2">
            <Image src={data.snippet.thumbnails.high.url} alt="thumbnail" width={120} height={80} className="object-cover rounded-sm max-h-[80px]" />
            <div className="px-2 leading-5">
                <p className="font-semibold">{data.snippet.title}</p>
                <p className="text-">{data.snippet.channelTitle}</p>
            </div>
        </div>
        </Link>
        )
    })
    return (
        <>{video}</>
    )
}