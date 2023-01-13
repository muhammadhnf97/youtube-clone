import Image from "next/image"

export default function VideoCard ( {videos} ) {
    return (
        <>
        {videos?.map(data=>{
            return (
                <a href={`/video/${data?.id?.videoId}`}>
                    <div className="w-full my-2 flex flex-col relative mx-auto ">
                        <div className="relative">
                            <div className="w-full md:w-72 h-60 md:h-52 overflow-hidden relative md:rounded-lg">
                                <Image src={data.snippet.thumbnails.high.url} alt="thumbnail" fill className="object-cover" loading="lazy"  sizes="(min-width: 800px) 800px, 100vw" />
                            </div>
                        </div>
                            <div className="leading-tight w-full px-3 mt-2">
                                <div dangerouslySetInnerHTML={{__html: data.snippet.title}} className="text-lg font-semibold leading-tight" />
                                <p className="text-gray-700">{data.snippet.channelTitle}</p>
                                <p><span>{data.snippet.publishedAt}</span></p>
                            </div>
                    </div>
                </a>
            )
        })}
        </>
    )
}