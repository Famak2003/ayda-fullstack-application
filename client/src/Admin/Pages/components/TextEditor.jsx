import { useEffect, useRef, useState } from "react"
import ReactQuill from "react-quill"
import ADD from './../../../Asset/icons8-add-50.png'
import IMGLOADER from './../../../Asset/image-loader.gif'
import toast from "react-hot-toast"
import imageCompression from 'browser-image-compression';



const TextEditor = ({ data, setData, buttomHeaders=false}) => {
    const [value, setValue] = useState("")
    const [imgLoader, setImgLoader] = useState(false)
    const uploadREF = useRef(null)

    const modules = {
        toolbar: [
            [{'header': [1,2,3,4,5,6,false]}],
            [{'size': []}],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'},   {'indent': '+1'}],
            ['image', 'link', 'video'],
            ['clean']
        ]
    }

    const handleChange = (e) => {
        setData((prev) =>{
          return{
              ...prev,
              [e.target.name]: e.target.value,
            }
        })
    }

    useEffect(() => {
        if(!value) return
        setData((prev) =>{
            return{
                ...prev,
                content: value,
              }
          }
        )
    }, [value])
    
      const handleImageUpload = async(e) => {
        setImgLoader(true)
        e.preventDefault();
        const file = e.target.files[0];
        if (!file) return
    
        const maxSize = 2 * 1024 * 1024; // 2mb is the max image size
    
        if (file.size > maxSize){
          toast.error("Image size too big")
          setImgLoader(false)
          document.getElementById(`file-input`).value = "";
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
                image: base64.result,
                }
            });
          })
          base64.readAsDataURL(compressedFile)
          document.getElementById(`file-input`).value = "";
        } catch (error) {
          console.log(error);
        } finally {
          setImgLoader(false)
        }
        
        
      };
 
    
    return (
        <div>
            <form className=" flex flex-col gap-2 lg:gap-4 mb-[8px] " >
                <div className="flex flex-col gap-2">
                    <label htmlFor={`header`} children={"Header"} />
                    <input
                        id={`header`}
                        type="text"
                        className="pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                        onChange={handleChange}
                        name="header"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor={`subHeader`} children={"Sub-Header"} />
                    <input
                        id={`subHeader`}
                        type="text"
                        className="pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                        onChange={handleChange}
                        name="subHeader"
                    />
                </div>
                <div className=" flex flex-col tab:flex-row items-center justify-center w-full h-[70vh] gap-2 p-1 overflow-x-scroll">
                    <div className=' rounded-lg tab:rounded-r-xl overflow-hidden flex  flex-col gap-2 items-center ring-2 ring-black h-full w-full tab:w-1/2'>
                        <h1 className=' flex justify-center items-center h-[5%] w-full '>
                            Editor
                        </h1>
                        <ReactQuill className='h-[90%] w-full pb-5'
                            theme='snow'
                            value={value}
                            onChange={setValue}
                            modules={modules} />
                    </div>
                    <div className=' rounded-lg tab:rounded-l-xl flex flex-col ring-2 ring-black h-full w-full tab:w-1/2'>
                        <h1 className="flex justify-center items-center h-[6%] w-full border-b-2 border-black">
                            Preview
                        </h1>
                        <div className=" ring-1 ring-black h-[90%] w-full overflow-scroll px-4 py-4 ">
                            <div className='overflow-scroll w-full items-start' dangerouslySetInnerHTML={{ __html: value }} />
                        </div>
                    </div>
                </div>

                
                {
                    buttomHeaders ? 
                        <>
                            <div className="flex flex-col gap-2">
                                <label htmlFor={`buttomHeader`} children={"Buttom Header"} />
                                <input
                                    id={`buttomHeader`}
                                    type="text"
                                    className="pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                                    onChange={handleChange}
                                    name="buttomHeader"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor={`buttomSubHeader`} children={"Bottom Sub-Header"} />
                                <input
                                    id={`buttomSubHeader`}
                                    type="text"
                                    className="pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                                    onChange={handleChange}
                                    name="buttomSubHeader"
                                />
                            </div>
                        </> :
                        ""
                }

                <input
                    className="hidden"
                    id={`file-input`}
                    ref={uploadREF}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e)}
                />
                { imgLoader  ?
                    <div className=" w-[200px] h-[200px] " >
                        <img className=" h-full w-full object-cover " src={IMGLOADER} alt="image-loader" />
                    </div>  :
                    data?.image ? (
                    <div className=" flex flex-col gap-2 " >
                        <div className="w-[200px] h-[200px] overflow-hidden rounded-md shadow-custom5">            
                            <img className="h-full w-full object-cover" src={data?.image} alt="uploaded" />         
                        </div>
                        <button 
                            className=" w-fit rounded-lg p-1 ring-black ring-2 "
                            onClick={(e) => {
                                e.preventDefault()
                                setData((prev) => {
                                return {
                                    ...prev,
                                    image: undefined,
                                    }
                                })
                                
                                document.getElementById(`file-input`).value = "" ;// Clear the input field value
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
        </div>
    )
}

export default TextEditor;