import { useDispatch } from "react-redux"
import UPLOAD from "./../../../Asset/icons8-upload-48.png"
import { uploadSection } from "./../../../Redux/actions/homeAction"


const UploadButton = ({pageName, type, data}) => {
    const dispatch = useDispatch()


    return(
        <button className=" group flex gap-2 ring-1 ring-primary_black rounded-md p-2 hover:scale-105 duration-300 " 
            onClick={() => {
                const convertDataToArr = Object.values(data)
                console.log(convertDataToArr)
                // dispatch(uploadSection( pageName, type, JSON.stringify(convertDataToArr)))
            }} 
        >
            <p>Upload</p>
            <figure className="flex justify-center items-center rounded-md p-1 ring-2 ring-black w-[30px] h-[30px] group-hover:scale-110 duration-500">
                <img className=" h-full object-contain" src={UPLOAD} alt="upload" />
            </figure>
        </button>
    )
}

export default UploadButton