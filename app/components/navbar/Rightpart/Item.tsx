import React, { useRef } from 'react';
import { Tab } from './RightPart';
import { useRouter } from 'next/navigation'


type ItemProps = {
    tab: Tab
    selectedTab: boolean;
    setSelectedTab: (title: string) => void; 

    
};


const Item:React.FC<ItemProps> = ({tab,selectedTab,setSelectedTab}) => {
    const router=useRouter()
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const handleLogout=()=>{
         localStorage.removeItem('token')
            const isRemoved=localStorage.getItem('token')?false:true
         if(isRemoved){
             router.push('/auth')
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
        <div >
           {tab.title!="Login/Signup" && tab.title!=="Logout" &&
           <a href={tab.href}>

               <p className={`${selectedTab?"border-b-4 border-red-500":""} `} onClick={handleItemClick}>{tab.title}</p>
           </a>
           } 
              {tab.title=="Login/Signup" &&
              <p className={` border-2 text-white font-bold p-2  border-black bg-black`} onClick={()=>{router.push(tab.href as string)}} >{tab.title}</p>}
              {
                tab.title=="Logout" &&
                <p className={` border-2 font-bold p-2  `} onClick={handleLogout} >{tab.title}</p>
              }
        </div>

    </div>
    
    )
}
export default Item;