import Image from "next/image"

export default function VideoCard ( {videos} ) {
    return (
        <>
        {videos.map(data=>{
            return (
                <a href={`/video/${data?.id?.videoId}`}>
                    <div className="w-full my-2 flex flex-col relative">
                        <div className="relative">
                            <div className="w-full h-56 md:h-52 overflow-hidden relative md:rounded-lg">
                                <Image src={data.snippet.thumbnails.high.url} alt="thumbnail" fill className="object-cover" loading="lazy" />
                            </div>
                            <span className="absolute left-2 bottom-2 px-1 bg-black bg-opacity-70 w-fit rounded-md text-gray-200 md:bottom-2">3:40</span>
                        </div>
                            <div className="leading-tight w-full px-3 mt-2">
                                <p className="text-lg font-semibold leading-tight">{data.snippet.title}</p>
                                <p className="text-gray-700">{data.snippet.channelTitle}</p>
                                <p><span>11M views</span> <span>{data.snippet.publishedAt}</span></p>
                            </div>
                        <div className="w-full flex justify-between mt-3 px-5">
                        </div>
                    </div>
                </a>
            )
        })}
        </>
    )
}