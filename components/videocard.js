import Image from "next/image"

export default function VideoCard ( {videos} ) {
    return (
        <>
        {videos.map(data=>{
            return (
                <div className="w-full my-2 flex flex-col relative">
                    <div className="w-full h-56 md:h-52 overflow-hidden relative md:rounded-lg">
                        <Image src={data.snippet.thumbnails.high.url} alt="thumbnail" fill className="object-cover" loading="lazy" />
                        {/* <Image src={'/images/thumbnail.jpg'} alt="thumbnail" fill className="object-cover" /> */}
                    </div>
                    <span className="absolute left-2 bottom-[7rem] px-1 bg-black bg-opacity-70 w-fit rounded-md text-gray-200 md:bottom-[8.5rem]">3:40</span>
                        {/* <div className="w-14 h-14 rounded-full border overflow-hidden relative mr-2">
                            <Image src={'/images/profile-pic.jpg'} alt="thumbnail" fill className="object-cover" />
                        </div> */}
                        <div className="leading-tight w-full px-3 mt-2">
                            <p className="text-lg font-semibold leading-tight">{data.snippet.title}</p>
                            {/* <p className="text-lg font-semibold leading-tight">This Introvert Guitaris is so fcking cute but badass at the same time !</p> */}
                            <p className="text-gray-700">{data.snippet.channelTitle}</p>
                            {/* <p className="text-gray-700">guitarhero</p> */}
                            <p><span>11M views</span> <span>{data.snippet.publishedAt}</span></p>
                        </div>
                    <div className="w-full flex justify-between mt-3 px-5">
                    </div>
                </div>
            )
        })}
        </>
    )
}