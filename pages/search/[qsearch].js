import { useRouter } from "next/router"
import Navbar from "../../components/navbar"

export default function Search (){
    const router = useRouter()
    const tquery = router.query.qsearch

    return (
        <>
            <Navbar />
            <h1>{tquery}</h1>
        </>
    )
}