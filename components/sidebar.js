import { data } from 'autoprefixer'
import { useState } from 'react'
import {sidebar} from '../lib/constant'
import {FiMenu} from 'react-icons/fi'

export default function Sidebar () {
    const [sidebarMenu, setSidebarMenu] = useState(sidebar)
    const [isSidebar, setIsSidebar] = useState(false)
    const handleClickSidebar = () => {
        setIsSidebar(prev => !prev)
    }
    
    const handleClickFocus = (id) => {
        setSidebarMenu(prev=>{
            return prev.map(data=>{
                return data.id === id ? {...data, isFocus : !data.isFocus}  : {...data, isFocus : false}
            })
        })
    }
    return (
        // <div className='space-y-3 border w-fit h-full px-10 py-5 text-gray-700 text-lg'>
        <>
        <button className='md:hidden  m-4 p-1 absolute top-0 text-2xl' onClick={handleClickSidebar}><FiMenu /></button>
        {
        <>
            <button className={`left-0 top-0 w-full h-full bg-black bg-opacity-70 absolute ${!isSidebar ? 'hidden' : 'block duration-300'}`} onClick={handleClickSidebar}></button>
            <div className={`absolute top-0 w-1/3 h-full py-5 text-gray-700 text-lg bg-white ${!isSidebar ? 'origin-left -left-96' : 'block -left-20 transform translate-x-20 duration-500'  }`}>
                <ul className='px-3 space-y-3'>
                {sidebarMenu.map(data=>{
                    return (
                        <li className={`font-Varela rounded-lg px-2 ${data.isFocus ? 'bg-red-400 duration-300 font-semibold text-white' : 'bg-transparent'}`} onClick={()=>handleClickFocus(data.id)}>{data.name}</li>
                    )
                })}
                </ul>
            </div>
        </>
        }
        </>
        )

}