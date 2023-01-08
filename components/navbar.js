import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {FaSearch} from "react-icons/fa"

export default function Navbar (  ) {
    const [isSearchBar, setIsSearchBar] = useState(false)
    const [qsearch, setQSearch] = useState(null)

    const handleClickSearchBar = () => {
        setIsSearchBar(prev=>!prev)
    }

    
    const handleChangeSearch = (event) => {
      setQSearch(event.target.value)
    }

    
  const handleClickSubmit = (event) => {
    event.preventDefault();
  }


    return (
        <>
        <form className="w-full h-16 border-b flex items-center justify-between" onSubmit={(event)=>handleClickSubmit(event)}>
            <div className="w-10 h-10 overflow-hidden object-cover relative ml-16">
                <Image src={'/images/icon/yt-icon.png'} alt="yt-icon" fill />
            </div>
            <input type={'text'} id={'search'} name={"search"} className="hidden md:block border w-[40rem] mx-5 h-8 rounded-md outline-none px-2 focus:border focus:border-blue-800" onChange={(event)=>handleChangeSearch(event)} />
            <Link href={`/search/${qsearch}`} className="">
            <button type="submit" className="md:hidden mr-5 text-3xl" onClick={handleClickSearchBar}><FaSearch /></button>
            <button className="hidden md:block mr-5 text-3xl text-red-900"><FaSearch /></button>
            </Link>
        </form>
        {isSearchBar && 
        <>
        {/* Mobile */}
        <form className="w-full md:hidden h-16 border flex items-center justify-between absolute z-20 bg-white top-0" onSubmit={(event)=>handleClickSubmit(event)}>
            <input type={'text'} id={'search'} name={"search"} className="border w-full mx-5 h-8 rounded-md outline-none px-2 focus:border focus:border-blue-800" onChange={(event)=>handleChangeSearch(event)} />
            <Link href={`${qsearch !== null ? `/search/${qsearch}` : '/'}`}>
            <button className="mr-5 text-3xl text-yellow-600"><FaSearch /></button>
            </Link>
        </form>
        <button className="md:hidden absolute top-0 w-full h-full bg-black bg-opacity-60 z-10 cursor-default" onClick={handleClickSearchBar}></button>
        </>
        }
        </>
    )
}