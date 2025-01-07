import { use, useEffect, useRef, useState } from "react"
import ReactQuill from "react-quill"
import ADD from './../../../Asset/icons8-add-50.png'
import IMGLOADER from './../../../Asset/image-loader.gif'
import toast from "react-hot-toast"
import imageCompression from 'browser-image-compression';
import 'react-quill/dist/quill.snow.css';
import TRASH from './../../../Asset/trash.svg'


const TextEditor = ({ 
    data,
    allowRichTextImage=false,
    setData,
    header=true,
    requireID,
    subHeader=true,
    image=true,
    buttomHeaders=false,
    customHandleChange,
    handleContent,
    showDelete=false,
    customImageFunc,
    customImageRemoveFunc,
    defaultContent,
    }) => {
    const [value, setValue] = useState(defaultContent ?? data?.content)
    const [imgLoader, setImgLoader] = useState(false)
    const uploadREF = useRef(null)


    const modules = {
        toolbar: [
            [{'header': [1,2,3,4,5,6,false]}],
            [{'size': []}],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'},   {'indent': '+1'}],
            [{ 'color': [] }], 
            ...(allowRichTextImage ? [['image', 'link']] : [['link']]), // Conditionally include image and link
            ['clean'],
        ],
        
    }

    const handleChange = (e) => {
        setData((prev) =>{
          return{
              ...prev,
              [e.target.name]: e.target.value,
            }
        })
    }

    useEffect(() => { // rich text content
        if(!value) return
        if (requireID){
            handleContent(data.id, value)
        }else{
            handleContent(value)
        }
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
            customImageFunc ? customImageFunc(base64.result, data.id)
            :
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

    const handleDeleteImage = (e) => {
        e.preventDefault()
        setData((prev) => {
        return {
            ...prev,
            image: undefined,
            }
        })
        
        document.getElementById(`file-input`).value = "" ;// Clear the input field value
    }

    const handleDeleteSection = (idToRemove) => {
        console.log(idToRemove)
        // e.preventDefault(data.id)
        setData((prev) => {
            return{
                ...prev,
                body: prev.body.filter((item) => {
                    console.log(item.id)
                    return item.id !== idToRemove})
            }
        });
    }
 
    
    return (
        <div>
            <form className=" flex flex-col gap-2 lg:gap-4 mb-[8px] " >
                {
                    header ? (
                        <input
                            id={`header`}
                            placeholder="Header"
                            type="text"
                            value={data?.header}
                            className=" dark:text-primary_black pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                            onChange={ customHandleChange ? (e) => customHandleChange(e, data.id) : handleChange}
                            name="header"
                        />
                    ):
                    ""
                }
                {
                    subHeader ? (
                        <div className=" dark:text-primary_black flex flex-col gap-2">
                            <label htmlFor={`subHeader`} children={"Sub-Header"} />
                            <input
                                id={`subHeader`}
                                type="text"
                                value={data?.subHeader}
                                className="pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                                onChange={ customHandleChange ? (e) => customHandleChange(e, data.id) : handleChange}
                                name="subHeader"
                            />
                        </div>
                    ) : (
                        ""
                    )
                }
                <div className=" flex flex-col tab:flex-row items-center justify-center w-full h-[90vh] tab:h-[70vh] gap-2 p-1 overflow-x-scroll">
                    <div className=' rounded-lg tab:rounded-r-xl overflow-hidden flex flex-col gap-2 items-center ring-2 ring-black h-1/2 tab:h-full w-full tab:w-1/2'>
                        <h1 className=' flex justify-center items-center h-[5%] w-full '>
                            Editor
                        </h1>
                        <ReactQuill className='h-[90%] w-full pb-[70px] tab:pb-[70px]'
                            theme='snow'
                            value={value}
                            onChange={setValue}
                            modules={modules}
                        />
                    </div>
                    <div className=' rounded-lg tab:rounded-l-xl flex flex-col ring-2 ring-black h-1/2 tab:h-full w-full tab:w-1/2'>
                        <h1 className="flex justify-center items-center h-[6%] w-full border-b-2 border-black">
                            Preview
                        </h1>
                        <div className=" ring-1 ring-black h-[90%] w-full overflow-scroll px-4 py-4 ">
                            <div className='overflow-scroll w-full items-start' id="content" dangerouslySetInnerHTML={{ __html: value }} />
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
                                    value={data?.buttomHeader}
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
                                    value={data?.buttomSubHeader}
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
                {
                    image ? (
                        <>
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
                                        onClick={customImageRemoveFunc ? (e) => customImageRemoveFunc(e, data.id) : handleDeleteImage} 
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
                        </>
                    ) : ""
                }
                
                {
                    showDelete ? 
                        <button onClick={() => handleDeleteSection(data.id)} className=" group bg-red text-white w-full flex justify-center items-center rounded-md p-2 hover:scale-[99.5%] duration-300 shadow-custom2 " >
                            Delete Section
                        </button>
                        :
                        ""
                }
            </form>
        </div>
    )
}

export default TextEditor;