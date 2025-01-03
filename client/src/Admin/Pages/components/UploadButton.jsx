import { useDispatch } from "react-redux"
import UPLOAD from "./../../../Asset/icons8-upload-48.png"
import { uploadSection } from "./../../../Redux/actions/homeAction"


const UploadButton = ({convertToArr, pageName, type, data}) => {
    const dispatch = useDispatch()


    return(
        <button className=" group flex justify-center items-center gap-2 bg-green text-white rounded-md p-2 hover:scale-105 duration-300 " 
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
            <p>Upload</p>
            <figure className="flex justify-center items-center rounded-md p-1 w-[30px] h-[30px] group-hover:scale-110 duration-500">
                <img className=" h-full object-contain" src={UPLOAD} alt="upload" />
            </figure>
        </button>
    )
}

export default UploadButton