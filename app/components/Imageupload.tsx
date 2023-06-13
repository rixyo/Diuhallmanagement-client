import React,{useCallback} from 'react';
import {CldUploadWidget} from "next-cloudinary"
import Image from "next/image"
//import {TbPhotoPlus}from "react-icons/tb"

declare global {
    var cloudinary: any;
}
type FormImageUploadProps = {
    value:string;
    onChange:(value:string)=>void;
    label:string;


    
};
const ImageUpload:React.FC<FormImageUploadProps> = ({onChange,value,label}) => {
    const uploadPreset = "tw9uaoam"
    const handleUplaoad=useCallback((result:any)=>{
        onChange(result.info.secure_url)

    },[onChange])

    return (
        <CldUploadWidget 
      onUpload={handleUplaoad} 
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
        maxFileSize: 1048576,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-10
              border-black
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-
              mt-2
            "
          >
         <Image src='/add-image.png' width={100} height={100} alt='add-image' />
            <div className="font-semibold text-lg">
            {label}
            </div>
            {value && (
              <div className="absolute inset-0 w-full h-full "
              >
            
             
                <div className='flex item-center justify-center p-1'>
                        <Image
                         width={140}
                         height={100}
                         src={value}
                     
                        alt="cover"
                        className='rounded-md object-cover'
                        />
                    </div>
              
              </div>
            )}
          </div>
        ) 
    }}
    </CldUploadWidget>
  )
}
    
export default ImageUpload;