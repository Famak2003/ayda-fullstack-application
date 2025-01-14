import { useDispatch } from "react-redux"
import UPLOAD from "./../../../Asset/icons8-upload-48.png"
import { uploadSection } from "./../../../Redux/actions/homeAction"


const UploadButton = ({convertToArr, pageName, type, data}) => {
    const dispatch = useDispatch()


    return(
        <div className=" z-[99] sticky bottom-[15px] flex justify-end items-center bg-black ring-1 ring-primary_black dark:ring-white shadow-custom1 dark:shadow-custom1 px-2 py-4 rounded-md " >
            <button className=" group flex justify-center items-center gap-2 bg-green text-white rounded-md p-2 hover:scale-105 duration-300 w-full mobile:w-fit shadow-custom2 " 
                onClick={() => {
                    if(convertToArr){
                        const convertDataToArr = Object.values(data)
                        console.log(convertDataToArr)
                        dispatch(uploadSection( pageName, type, JSON.stringify(convertDataToArr)))
                    }else{
                        console.log(data)
                        dispatch(uploadSection( pageName, type, JSON.stringify(data)))
                    }
                }} 
            >
                <p>Update</p>
                <figure className="flex justify-center items-center rounded-md p-1 w-[30px] h-[30px] group-hover:scale-110 duration-500">
                    <img className=" h-full object-contain" src={UPLOAD} alt="upload" />
                </figure>
            </button>
        </div>
    )
}

export default UploadButton