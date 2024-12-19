import { useRef, useState } from "react"

const Hero = () => {
    const [preview, setPreview] = useState(null)
    const uploadREF = useRef(null)

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
    
        if(file){
          setPreview(URL.createObjectURL(file))
        }
    }

    return(
      <div className="p-2 relative dark:bg-teal-500" >
        <div className=' flex flex-col gap-2' >
          <div className=' flex gap-2 items-center ' >
            <h1 className=' font-bold text-[20px] ' >
              Hero Section
          </h1>
            {/* <button className=' flex justify-center items-center rounded-md p-1 ring-2 ring-black w-[80px] h-[30px] hover:scale-105 duration-300 ' >  
              <img className=' h-full object-contain' src={ADD} alt='add button' />
            </button> */}
          </div>
          {/* // FORM START // */}
          <form>
            <div className=' flex flex-col gap-2  p-1  '>
              <label htmlFor='header' children={"Header"} />
              <input type='text' className=' pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black ' name='header' />
            </div>
            <div className=' flex flex-col gap-2  p-1  '>
              <label htmlFor='content' children={"Content"} />
              <input type='text' className=' pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black ' name='content' />
            </div>
            <input className='hidden' ref={uploadREF} type='file' accept='image/*' onChange={handleImageUpload} />
          </form>
          {
            preview ? (
              <div className=" w-[200px] h-[200px] overflow-hidden rounded-md shadow-custom2" >
                <img className='h-full w-full object-cover' src={preview} alt='uploaded image' />
              </div>
            ) :
            <div className=' flex gap-2' >
              <p>
                Please upload an image
              </p>
              <button 
                className=' flex justify-center items-center rounded-md p-1 ring-2 ring-black w-[80px] h-[30px] hover:scale-105 duration-300 '
                onClick={() => {
                  uploadREF.current.click()
                }}
              >  
                <img className=' h-full object-contain' src={ADD} alt='add button' />
              </button>
            </div>
          }
        </div>
      </div>
    )
}

export default Hero