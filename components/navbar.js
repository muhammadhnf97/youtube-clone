import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {FaSearch} from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import { sidebar } from "../lib/constant"

export default function Navbar (  ) {
    const [isSidebar, setIsSidebar] = useState(false)
    const [qsearch, setQSearch] = useState(null)
    const [sidebarMenu, setSidebarMenu] = useState(sidebar)
    
    const handleClickSidebarMenu = (id) => {
      setSidebarMenu(prev=>{
          return prev.map(data=>{
              return data.id === id ? {...data, isFocus : data.isFocus? data.isFocus : !data.isFocus}  : {...data, isFocus : false}
          })
      })
    }

    const handleClickSideBar = () => {
      setIsSidebar(prev=>!prev)
    }
    
    const handleChangeSearch = (event) => {
      setQSearch(event.target.value)
    }

    
  const handleClickSubmit = (event) => {
    event.preventDefault();
  }

  console.log(isSidebar)

    return (
        <>
        <div className="sticky top-0 w-full h-16 border-b flex items-center justify-between px-5 z-10 bg-white">
          <div className="flex w-fit gap-3">  
            <button className="text-3xl" onClick={handleClickSideBar}><FiMenu /></button>
            <a href="/">
              <div className="w-10 h-10 overflow-hidden object-cover relative">
                  <Image src={'/images/icon/yt-icon.png'} alt="yt-icon" fill />
              </div>
            </a>
          </div>
          <form className="flex items-center justify-between" onSubmit={(event)=>handleClickSubmit(event)}>
            <input type={'text'} id={'search'} name={"search"} value={qsearch} className="block md:block border w-full md:w-[40rem] mx-5 h-8 rounded-md outline-none px-2 focus:border focus:border-blue-800" onChange={(event)=>handleChangeSearch(event)} />
            <Link href={`/search/${qsearch}`}>
            <button className="text-3xl  pt-2"><FaSearch /></button>
            </Link>
          </form >
        </div>
        <button className={`w-full h-full fixed bg-black z-10 top-0 bg-opacity-70 ${!isSidebar ? "hidden" : "block"}`} onClick={handleClickSideBar}></button>
        <div className={`fixed w-1/3 md:w-1/6 h-full bg-white top-0 z-20 px-2 py-5 leading-10 ${!isSidebar ? "hidden" : "block"}`}>
          <h2 className="font-bold text-lg mb-3">Categories</h2>
          {
            sidebarMenu.map(data=>{
                return (
                    <Link href={`${data.name === "Home" ? `/` : `/search/${data.name}`}`} key={data.name}>
                        <li className={`list-none h-fit cursor-pointer font-Varela rounded-lg px-2 py-2 my-2 md:block  ${data.isFocus ? 'bg-red-400 duration-300 font-semibold text-white' : 'bg-transparent'}`} onClick={()=>handleClickSidebarMenu(data.id)} >{data.name}</li>
                    </Link>
                )
            })
          }
        </div>
        </>
    )
}