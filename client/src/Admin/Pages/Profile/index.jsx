import { Modal } from "antd"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ADD from './../../../Asset/icons8-add-50.png'
import IMGLOADER from './../../../Asset/image-loader.gif'
import USER from './../../../Asset/icons8-user-48.png'
import LARGEUSER from './../../../Asset/icons8-user-100.png'
import { ReactComponent as Delete } from './../../../Asset/icons8-delete-48.svg';
import toast from "react-hot-toast";
import imageCompression from 'browser-image-compression';
import { getProfile, updateProfile } from "../../../Redux/actions/authAction"

const Profile = ({setIsProfileVisible, isProfileVisible}) => {

    const [loadingImg, setLoadingImg] = useState(false)
    const profileImgREF = useRef(null)
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth);
    const [formData, setFormData] = useState({})
    
    
    useEffect(() => {
        setFormData(userInfo)
    }, [])

    useEffect(() => {
        setFormData(userInfo)
    }, [userInfo])
    
    useEffect(() => {
        if(isProfileVisible){
            dispatch(getProfile({id: userInfo.userID}))
        }
    }, [isProfileVisible])
    
    const handleImageUpload = async(e) => {
        setLoadingImg(true)
        e.preventDefault();
        const inputElement = document.querySelector(".file-input");
        const file = e.target.files[0];
        
        // Reset the input value to ensure subsequent uploads trigger onChange
        inputElement.value = ""; 
        if (!file) return
    
        const maxSize = 2 * 1024 * 1024; // 2mb is the max image size
    
        if (file.size > maxSize){
            toast.error("Image too big max 2mb")
            setLoadingImg(false)
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
                setFormData((prev) => {
                    return {
                        ...prev,
                        avatar: base64.result,
                    }
                });
            })
            base64.readAsDataURL(compressedFile)
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingImg(false)
    }
    
    
    };
    
    const handleSubmit = () => {
        dispatch(updateProfile(formData))
        console.log(formData)
        setIsProfileVisible(false)
    }
    
    const handleChange = (e) => {
        e.preventDefault()
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    
    const handleDeleteImage = (e) => {
        e.preventDefault()
        document.getElementById(`file-input`).value = "" ;// Clear the input field value
        setFormData((prev) => {
            return {
                ...prev,
                avatar: undefined,
            }
        })
        
    }
    
    return(
        <Modal
            open={isProfileVisible}
            width={"400px"}
            className=' profileForm '
            okText={"Update"}
            onOk={handleSubmit}
            onCancel={() => setIsProfileVisible(false)} 
            onClose={() => setIsProfileVisible(false)}
        >
            <div className=" flex flex-col justify-center items-center p-2" >
                <div className=" flex flex-col justify-center items-center h-[50%] w-full " >
                    
                    <input
                        className="hidden file-input"
                        id={`file-input`}
                        ref={profileImgREF}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e)}
                    />
                    {
                        loadingImg  ?
                            <div className=" w-[200px] h-[200px] rounded-md shadow-custom5 " >
                                <img className=" h-full w-full object-cover " src={IMGLOADER} alt="image-loader" />
                            </div>  
                            :
                                formData?.avatar ? (
                                    <div className=" flex flex-col justify-center items-center gap-2 " >
                                        <div className="w-[200px] h-[200px] overflow-hidden rounded-md shadow-custom5">            
                                            <img className="h-full w-full object-cover" src={formData?.avatar} alt="uploaded" />         
                                        </div>
                                        <button 
                                            className=" w-fit rounded-lg p-1 "
                                            onClick={handleDeleteImage}
                                        >
                                            <Delete className="w-[80px] h-[25px]" />
                                        </button>
                                    </div>
                                ) :
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <div className="w-[200px] h-[200px] overflow-hidden rounded-md shadow-custom5">            
                                            <img className="h-full w-full object-scale-down" src={LARGEUSER} alt="uploaded" />         
                                        </div>
                                        <button
                                            className="flex justify-center items-center rounded-md p-1 w-[80px] h-[30px] hover:scale-105 duration-300"
                                            onClick={(e) => {
                                                profileImgREF.current.click();
                                            }}
                                        >
                                            <img className="h-full object-contain" src={ADD} alt="add button" />
                                        </button>
                                    </div>
                                
                    }
                </div>
                <form className=" flex flex-col gap-2 flex-1 w-full " >
                    <label htmlFor='name' children={"Name"} />
                    <input value={formData?.name} required onChange={(e) => handleChange(e)} className=' rounded-lg w-full h-fit px-3 py-2  ' name='name' type='text' />
                    <label htmlFor='email' children={"Email"} />
                    <input value={formData?.email} required onChange={(e) => handleChange(e)} className=' rounded-lg w-full h-fit px-3 py-2  ' name='email' type='email' />
                </form>
            </div>
        </Modal>
    )
}

export default Profile