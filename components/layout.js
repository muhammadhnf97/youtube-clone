import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { sidebar } from '../lib/constant'
import { useState } from "react";

export default function Layout ( {children} ) {

    const [sidebarMenu, setSidebarMenu] = useState(sidebar)

    return (
        <>
        <Navbar />
        <div className='md:flex md:mx-5'>
            <Sidebar sidebarMenu={sidebarMenu} />
            {children}
        </div>
        </>
    )
}