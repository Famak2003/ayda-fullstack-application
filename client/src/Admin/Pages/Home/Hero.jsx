import { useRef, useState } from "react";
import ADD from "./../../../Asset/icons8-add-50.png";
import UPLOAD from "./../../../Asset/icons8-upload-48.png"
import { uploadHeroSection } from "../../../Redux/actions/homeAction";
import imageCompression from 'browser-image-compression';
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import IMGLOADER from './../../../Asset/image-loader.gif'

const Hero = () => {
  const [formNumber, setFormNumber] = useState(0);
  const [data, setData] = useState({})
  const dispatch = useDispatch()

  return (
    <div className="p-2 relative dark:bg-teal-500">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <h1 className="font-bold text-[20px]">Hero Section</h1>
        </div>
        <div className=" flex flex-col gap-5" >
          <HeroForm id={0} data={data} setData={setData} />
          {Array.from({ length: formNumber }, (_, idx) => (
            <HeroForm
              key={idx + 1} // Unique key for each form
              id={idx + 1}
              data={data} 
              setData={setData}
            />
          ))}
        </div>
        <div className=" flex justify-between items-center" >
          <div className="flex items-center gap-2">
            <p>Add</p>
            <button
              className="flex justify-center items-center rounded-md p-1 ring-2 ring-black w-[30px] h-[30px] hover:scale-105 duration-300"
              onClick={() => setFormNumber((prev) => prev + 1)}
            >
              <img className="h-full object-contain" src={ADD} alt="add button" />
            </button>
          </div>
          <button className=" flex gap-2 " 
            onClick={() => {
              const convertDataToArr = Object.values(data)
              dispatch(uploadHeroSection(JSON.stringify(convertDataToArr)))
            }} 
          >
            <p>Upload</p>
            <div className="flex justify-center items-center rounded-md p-1 ring-2 ring-black w-[30px] h-[30px] hover:scale-105 duration-300">
              <img className=" h-full object-contain" src={UPLOAD} alt="upload" />
            </div>
          </button>
          
        </div>
      </div>
    </div>
  );
};

const HeroForm = ({ id, data, setData }) => {
  const uploadREF = useRef(null);
  const [imgLoader, setImgLoader] = useState(false)

  const handleChange = (e) => {
    setData((prev) =>{
      return{
        ...prev,
        [id]: {
          ...prev[id],
          [e.target.name]: e.target.value,
        }
      }
    })
  }

  const handleImageUpload = async(e, id) => {
    setImgLoader(true)
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return

    const maxSize = 2 * 1024 * 1024; // 2mb is the max image size

    if (file.size > maxSize){
      toast.error("Image size too big")
      document.getElementById(`file-input-${id}`).value = "";
      return
    }

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(file, options);
      const base64 = new FileReader()
      base64.addEventListener("load", ()=>{
        setData((prev) => {
          return {
          ...prev,
          [id]: {
            ...prev[id],
            image: base64.result,
          },
        }});
      })
      base64.readAsDataURL(compressedFile)
      document.getElementById(`file-input-${id}`).value = "";
    } catch (error) {
      console.log(error);
    } finally {
      setImgLoader(false)
    }
    
    
  };
  

  return (
    <form className="flex flex-col gap-2 lg:gap-4 pl-2 border-black border-dashed border-b-2 pb-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={`header-${id}`} children={"Header"} />
        <input
          id={`header-${id}`}
          type="text"
          className="pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
          onChange={handleChange}
          name="header"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor={`subHeader-${id}`} children={"Sub-Header"} />
        <input
          id={`subHeader-${id}`}
          type="text"
          className="pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
          onChange={handleChange}
          name="subHeader"
        />
      </div>
      <input
        className="hidden"
        id={`file-input-${id}`}
        ref={uploadREF}
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e, id)}
      />
      { imgLoader  ?
        <div className=" w-[200px] h-[200px] " >
          <img className=" h-full w-full object-cover " src={IMGLOADER} alt="image-loader" />
        </div>  :
        data[id]?.image ? (
        <div className=" flex flex-col gap-2 " >
          <div className="w-[200px] h-[200px] overflow-hidden rounded-md shadow-custom5">            
            <img className="h-full w-full object-cover" src={data[id]?.image} alt="uploaded" />         
          </div>
          <button 
            className=" w-fit rounded-lg p-1 ring-black ring-2 "
            onClick={(e) => {
              e.preventDefault()
              setData((prev) => {
                return {
                  ...prev,
                  [id]: {
                    ...prev[id],
                    image: undefined,
                  },
                }
              })
              
              document.getElementById(`file-input-${id}`).value = "" ;// Clear the input field value
            }} 
          >
              remove image
          </button>
        </div>

      ) : (
        <div className="flex gap-2">
          <p>Please upload an image</p>
          <button
            className="flex justify-center items-center rounded-md p-1 ring-2 ring-black w-[80px] h-[30px] hover:scale-105 duration-300"
            onClick={(e) => {
              e.preventDefault();
              uploadREF.current.click();
            }}
          >
            <img className="h-full object-contain" src={ADD} alt="add button" />
          </button>
        </div>
      )}
    </form>
  );
};

export default Hero;
