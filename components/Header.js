import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LighningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

import Image from 'next/image';
import HeaderItem from '../components/HeaderItem'


function Header() {
    return (
        <header className="">
           <div>
             <HeaderItem title="Home" Icon={} />  
           </div>
            <Image
             className="object-contain"
             src="https://links.papareact.com/ua6" 
             width={200} 
             height={100} />
        </header>
    )
}

export default Header
