import { useState } from 'react'
import {FiMenu} from 'react-icons/fi'

export function Sidebar ( {handleClickSidebarMenu,sidebarMenu} ) {
    const [isSidebar, setIsSidebar] = useState(false)
      
    
    const handleClickSidebar = () => {
        setIsSidebar(prev=>!prev)
    }
    
    
    return (
        <>
        <button className='md:hidden  m-4 p-1 absolute top-0 text-2xl' onClick={handleClickSidebar}><FiMenu /></button>
        {
        <>
            <button className={`z-10 left-0 top-0 w-full h-full bg-black bg-opacity-70 fixed ${!isSidebar ? 'hidden' : 'block duration-300'}`} onClick={handleClickSidebar}></button>
            <div className={`z-10 fixed top-0 w-1/3 h-full py-5 text-gray-700 text-lg bg-white md:static md:left-0 md:w-60 ${!isSidebar ? 'origin-left -left-96' : 'block -left-20 transform translate-x-20 duration-500'  }`}>
                <ul className='px-3 space-y-3 md:sticky'>
                {sidebarMenu.map(data=>{
                    return (
                        <li className={`h-full cursor-pointer font-Varela rounded-lg px-2 ${data.isFocus ? 'bg-red-400 duration-300 font-semibold text-white' : 'bg-transparent'}`} onClick={()=>handleClickSidebarMenu(data.id, data.caption)}>{data.name}</li>
                    )
                })}
                </ul>
            </div>
        </>
        }
        </>
        )

}