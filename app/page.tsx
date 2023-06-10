"use client"
import Image from 'next/image'
import slideImages from './ImageData';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Button from './components/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import List from './components/List';
import Link from 'next/link';
export default function Home() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '70vh'
  }
  

  return (
    <main className="flex flex-col items-center">
    
    <section className='w-screen h-full'>
    <Zoom scale={0.4}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Zoom>
      </section>
      <div className='flex mt-6 items-center p-5 gap-5'>
        <p className='text-2xl font-bold '>Start Booking</p>
       <Button
      label='Book Now'
      onClick={() => console.log('clicked')}

       />

      </div>
      <section className='bg-blue-100 h-screen  w-screen relative mt-10 border-2  rounded p-5'>
      <Image src='/hall.png' fill alt='hero' style={{ objectFit: 'cover' }} className='rounded-md bg-cover'/>


      </section>
        <p className=' mt-5 text-2xl font-bold'>Hall Facilities</p>
    
    
      <div className='flex justify-around gap-10 items-center'>
      <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={2000} className=' w-screen p-5 '>
        <div className='flex flex-col p-5'>
          <p className='text-2xl font-bold'>Cost-Effective Living Option</p>
       <List
       label='One Bed per student shall be offered'
/>
<List
        label='Full furnished rooms with beds & underbed drawers'
/>
<List
        label='Studey Table & Chair'
/>

<List
        label='Uble light & LED, Fan'
/>

<List
        label='Dustbin in each room'
/>
       <List
        label='300 squire feet spacious room'
/>
        
          
        </div>
        <div className='flex flex-col p-5'>
          <p className='text-2xl font-bold'>Electricity & Internet</p>
          <List
        label='Electircity Facility'
/>
<List
        label='24/7 Generator Facility'
/>
<List
        label='High speed Internet for each student'
/>
         
          
        </div>
        <div className='flex flex-col p-5'>
          <p className='text-2xl font-bold'>Self Help Amenities</p>
          <List
        label='Self Help Kitchen'
/>
<List
        label='Self Help Laundry'
/>
<List
        label='Self Help Gym'
/>
<List
        label='Self Help Library'
/>
<List
        label='Self Help Study Room'
/>
<List
        label='Self Help Prayer Room'
/>
<List
        label='Medical facility available with first aid/provided to sick Residents'
/>
<List
        label='Doctor on call number(s) to be shared with the students'
/>

          
        </div>
        </Carousel>
      </div>
      
    
<div className='cursor-pointer'>
  <p className='text-2xl font-bold text-center'>Location</p>
  <Link
  target='_blank'
  href='https://www.google.com/maps/place/Daffodil+International+University/@23.8823995,90.3135016,15z/data=!4m6!3m5!1s0x3755b8ada2664e21:0x3c872fd17bc11ddb!8m2!3d23.8768956!4d90.3201592!16s%2Fm%2F027pprm?hl=en-US&entry=ttu'
  >
    <p className='text-center text-blue-500'>Click here to see the location</p>
  </Link>
  <Image src='/location_map_diu1.png' alt='map' width={900} height={500} className='rounded-md'/>
  </div>  



    
  
  


    </main>
  )
}
