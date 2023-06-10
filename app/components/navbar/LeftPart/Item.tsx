import React from 'react';
import { Tab } from './RightPart';
import { useRouter } from 'next/navigation'

type ItemProps = {
    tab: Tab
    selectedTab: boolean;
    setSelectedTab: (title: string) => void; 
    
};

const Item:React.FC<ItemProps> = ({tab,selectedTab,setSelectedTab}) => {
    const router=useRouter()
    
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
        <div onClick={()=>router.push(tab.href as string)}>
           {tab.title!="Login/Signup" &&
           <p className={`${selectedTab?"border-b-4 border-red-500":""} `}>{tab.title}</p>
           } 
              {tab.title=="Login/Signup" &&
              <p className={` border-2 text-white font-bold p-2  border-black bg-black`} >{tab.title}</p>}
        </div>

    </div>
    
    )
}
export default Item;