import requests from "../utils/requests";
import {useRouter} from "next/router"

function Nav() {
    const router = useRouter();
    return (
        <nav className="mb-4 relative">
            <div className="flex  overflow-x-scroll scrollbar-hide px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 ">
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 key={key} className="last:pr-24 cursor-pointer my-2 transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
                    onClick={() =>{
                        router.push(`/?genre=${key}`)
                    }}>
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12" />
        </nav>
    )
}

export default Nav;
