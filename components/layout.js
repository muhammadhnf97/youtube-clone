import Navbar from './navbar'
import Head from 'next/head'
import Sidebar from './sidebar'

export default function Layout({ children }) {
  return (
    <>
    <Head>
      <title>YOUTUBE CLONE</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon/yt-icon.png" />
    </Head>
    <Navbar />
    <div className='flex'>
    <Sidebar />
    <div className='mx-auto w-full md:px-5'>{children}</div>
    </div>
    </>
  )
}