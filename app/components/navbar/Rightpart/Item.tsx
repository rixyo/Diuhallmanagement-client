import React, { useRef } from 'react';
import { Tab } from './RightPart';
import { useRouter } from 'next/navigation'
import { useRouter as useroute } from 'next/router';
import { redis } from '@/app/libs/redis';
import Link from 'next/link';


type ItemProps = {
    tab: Tab
    selectedTab: boolean;
    setSelectedTab: (title: string) => void; 
};
const Item:React.FC<ItemProps> = ({tab,selectedTab,setSelectedTab}) => {
    const router=useRouter()
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const handleLogout=async()=>{
        await redis.del('token')
            const isRemoved= await redis.get('token') === null;
         if(isRemoved){
             router.push('/auth')
             router.refresh()
         }
    }
    const handleItemClick = () => {
        if(sectionRef.current){
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
 
    
    return (
        <div className='flex items-center xl:justify-normal  cursor-pointer mt-2'   onClick={()=>setSelectedTab(tab.title)}>
        <div  className='p-1
           rounded-full 
           h-14
           w-14
           flex
           items-center
           hover:bg-slate-300 
           hover:bg-opacity-10 
           cursor-pointer 

        ' >
          
        </div>
        <div>
           {tab.title!="Login/Signup" && tab.title!=="Logout" &&
           <Link href={tab.href as string}>

               <p className={`${selectedTab?"border-b-4 border-red-500":""} `} onClick={handleItemClick}>{tab.title}</p>
           </Link>
           } 
             <>
             {tab.title=="Login/Signup" &&
             <Link href={tab.href as string}>
              <p className={` border-2 text-white font-bold p-2  border-black bg-black`}  >{tab.title}</p>
             </Link>
             
        }
        
             </>
              {
                tab.title=="Logout" &&
                <p className={` border-2 font-bold p-2  `} onClick={handleLogout} >{tab.title}</p>
              }
        </div>

    </div>
    
    )
}
export default Item;