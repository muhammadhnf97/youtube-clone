import Link from 'next/link'
import { useState } from 'react'
import {sidebar} from '../lib/constant'

export default function Sidebar (){

    const [sidebarMenu, setSidebarMenu] = useState(sidebar)
    
    const handleClickSidebarMenu = (id) => {
      setSidebarMenu(prev=>{
          return prev.map(data=>{
              return data.id === id ? {...data, isFocus : data.isFocus? data.isFocus : !data.isFocus}  : {...data, isFocus : false}
          })
      })
    }

    return (
        <>
        <div className='hidden md:block flex-col w-1/12 border-r px-2'>{
            sidebarMenu.map(data=>{
                return (
                    <Link href={`${data.name === "Home" ? `/` : `/search/${data.name}`}`} key={data.name}>
                        <li className={`list-none h-fit cursor-pointer font-Varela rounded-lg px-2 py-2 my-2 md:block  ${data.isFocus ? 'bg-red-400 duration-300 font-semibold text-white' : 'bg-transparent'}`} onClick={()=>handleClickSidebarMenu(data.id)} >{data?.icon}{data.name}</li>
                    </Link>
                )
            })
        }</div>
        </>
    )
}