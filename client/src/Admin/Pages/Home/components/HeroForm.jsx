import { useRef, useState } from 'react';
import imageCompression from 'browser-image-compression';
import IMGLOADER from './../../../../Asset/image-loader.gif'
import ADD from "./../../../../Asset/icons8-add-50.png";
import toast from 'react-hot-toast';


const HeroForm = ({ id, data, setData, obj }) => {
    const uploadREF = useRef(null);
    const [imgLoader, setImgLoader] = useState(false)
  
    const handleChange = (e) => {
        setData((prev) =>{
            return {
                ...prev,
                content: prev.content.map((item) =>
                    item.id === id
                        ? { ...item, [e.target.name]: e.target.value } // Update the image for the matched id
                        : item // Leave other items unchanged
                    )
            }}
        );
    }
  
    console.log(data)
  
    const handleImageUpload = async(e, id) => {
        setImgLoader(true)
        e.preventDefault();
        const file = e.target.files[0];
        if (!file) return
    
        const maxSize = 2 * 1024 * 1024; // 2mb is the max image size
    
        if (file.size > maxSize){
            toast.error("Image size too big")
            setImgLoader(false)
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
                        content: prev.content.map((item) =>
                            item.id === id
                                ? { ...item, image: base64.result } // Update the image for the matched id
                                : item // Leave other items unchanged
                        )
                    }
                })
            })  
            base64.readAsDataURL(compressedFile)
            document.getElementById(`file-input-${id}`).value = "";
        } catch (error) {
            console.log(error);
        } finally {
            setImgLoader(false)
        }

    };

    const handleDeleteImage = (e, idToRemove) => {
        console.log(idToRemove)
        e.preventDefault()
        const updatedData = data.map((item) => {
            if (item.id === idToRemove) {
                return { ...item, image: "" }; // Remove the image for the matched id
            }
            return item
        } )
        setData( (prev) => {
            return {
                ...prev,
                content: updatedData
            }
        })
        document.getElementById(`file-input-${id}`).value = "" ;// Clear the input field value
    }

    // Delete selected entry from hero
    const handleDelete = (idToRemove) => {
        setData((prev) => {
            return{
                ...prev,
                content: prev.content.filter((item) => item.id !== idToRemove)
            }
        });
    }
    
  
    return (
        <form className="flex flex-col gap-2 lg:gap-4 border-black border-dashed border-b-2 pb-5">
            <div className="flex flex-col gap-2">
                <label htmlFor={`header-${id}`} children={"Header"} />
                <input
                    id={`header-${id}`}
                    type="text"
                    value={obj.header}
                    className=" dark:text-primary_black pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={handleChange}
                    name="header"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor={`subHeader-${id}`} children={"Sub-Header"} />
                <input
                    id={`subHeader-${id}`}
                    type="text"
                    value={obj.subHeader}
                    className=" dark:text-primary_black pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={handleChange}
                    name="subHeader"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p>
                    Schedule
                </p>
                <div className="flex gap-2 " >
                    <input
                        id={`start-${id}`}
                        type="time"
                        value={obj.start}
                        className=" dark:text-primary_black pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                        onChange={handleChange}
                        name="start"
                    />
                    <input
                        id={`stop-${id}`}
                        type="time"
                        value={obj.stop}
                        className=" dark:text-primary_black pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                        onChange={handleChange}
                        name="stop"
                    />
                </div>
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
                obj?.image ? (
                <div className=" flex flex-col gap-2 " >
                    <div className="w-[200px] h-[200px] overflow-hidden rounded-md shadow-custom5">            
                        <img className="h-full w-full object-cover" src={obj?.image} alt="uploaded" />         
                    </div>
                    <button 
                        className=" w-fit rounded-lg p-1 ring-black ring-2 "
                        onClick={(e) => handleDeleteImage(e, id)} 
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
            <button 
                className='group bg-red text-white flex justify-center items-center rounded-md p-2 hover:scale-[99.5%] duration-300 shadow-custom2 '
                onClick={() => (
                    handleDelete(id)
                )}
            >
                Delete Section
            </button>
        </form>
    );
  };

export default HeroForm