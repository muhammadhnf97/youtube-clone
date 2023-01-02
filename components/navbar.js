import Image from "next/image"
import { useState } from "react"
import {FaSearch} from "react-icons/fa"

export default function Navbar () {
    const [isSearchBar, setIsSearchBar] = useState(false)

    const handleClickSearchBar = () => {
        setIsSearchBar(prev=>!prev)
    }

    return (
        <>
        <div className="w-full h-16 border flex items-center justify-between">
            <div className="w-10 h-10 overflow-hidden object-cover relative ml-16">
                <Image src={'/images/icon/yt-icon.png'} alt="yt-icon" fill />
            </div>
            <div className="mr-5 text-3xl" onClick={handleClickSearchBar}><FaSearch /></div>
        </div>
        {isSearchBar && 
        <>
        <div className="w-full h-16 border flex items-center justify-between absolute z-20 bg-white top-0">
            <input type={'text'} id={'search'} name={"search"} className="border w-full mx-5 h-8 rounded-md outline-none px-2 focus:border focus:border-blue-800" />
            <div className="mr-5 text-3xl"><FaSearch /></div>
        </div>
        <button className="absolute top-0 w-full h-full bg-black bg-opacity-60 z-10" onClick={handleClickSearchBar}></button>
        </>
        }
        </>
    )
}