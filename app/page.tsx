"use client"
import Image from 'next/image'
import slideImages from './ImageData';
import {Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Button from './components/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import Footer from './components/Footer';
export default function Home() {
  const router = useRouter();
  const sectionRef = useRef(null);


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
    
    <section className='w-screen h-full p-5'>
    <Slide  >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage?.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </section>
      <div className='flex mt-6 items-center p-5 gap-5'>
        <p className='text-2xl font-bold '>Start Booking</p>
       <Button
      label='Book Now'
      onClick={() => router.push('/booking')}

       />

      </div>
      <section className='bg-blue-100 h-screen  w-screen relative mt-10 border-2  rounded p-5'>
      <Image src='/hall.png' fill alt='hero' style={{ objectFit: 'cover' }} className='rounded-md bg-cover'/>


      </section>
    
    
      <section className='' id='section1'>
        <p className=' mt-5 text-2xl font-bold text-center'>Hall Facilities</p>
        <div className='flex justify-around gap-10 items-center'>
      <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={2000} className=' w-screen p-5 '>
        <div className='flex flex-col p-5'>
          <p className='text-2xl font-bold'>Cost-Effective Living Option</p>
          <ul>

       <li> One Bed per student shall be offered</li>
       <li>Full furnished rooms with beds & underbed drawers</li>
       <li>Studey Table & Chair</li>
       <li>Uble light & LED, Fan</li>
       <li>Dustbin in each room</li>
       <li>300 squire feet spacious room</li>
          </ul>


        
          
        </div>
        <div className='flex flex-col p-5'>
          <p className='text-2xl font-bold'>Electricity & Internet</p>
          <ul>

          <li>Electircity Facility</li>
          <li>24/7 Generator Facility</li>
          <li>High speed Internet for each student</li>
          </ul>
        </div>
        <div className='flex flex-col p-5'>
          <p className='text-2xl font-bold'>Self Help Amenities</p>
          <ul>

          <li>Self Help Kitchen</li>
          <li>Self Help Laundry</li>
          <li>Self Help Gym</li>
          <li>Self Help Library</li>
          <li>Self Help Study Room</li>
          <li>Self Help Prayer Room</li>
          <li>Medical facility available with first aid/provided to sick Residents</li>
          <li>Doctor on call number(s) to be shared with the students</li>
          </ul>
         

          
        </div>
        </Carousel>
        </div>
      </section>
      
    
<section className='cursor-pointer' id='section2' ref={sectionRef}>
  <p className='text-2xl font-bold text-center'>Location</p>
  <Link
  target='_blank'
  href='https://www.google.com/maps/place/Daffodil+International+University/@23.8823995,90.3135016,15z/data=!4m6!3m5!1s0x3755b8ada2664e21:0x3c872fd17bc11ddb!8m2!3d23.8768956!4d90.3201592!16s%2Fm%2F027pprm?hl=en-US&entry=ttu'
  >
    <p className='text-center text-blue-500'>Click here to see the location</p>
  </Link>
  <Image src='/location_map_diu1.png' alt='map' width={900} height={500} className='rounded-md'/>
  </section>  
 <section id="section3" className='w-screen' ref={sectionRef}>
  <Footer/>

 </section>
    </main>
  )
}
