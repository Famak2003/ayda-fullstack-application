import { useRef, useState } from "react"
import TextEditor from "../components/TextEditor"
import UploadButton from "../components/UploadButton"

const Greetings = () => {
    const [data, setData] = useState()
    
    return(
      <div className=" flex flex-col gap-2 p-2 relative dark:bg-teal-500 w-full h-fit" >
        <h1 className="font-bold text-[20px]" >
            Greetings
        </h1>
        <div className=" pl-2 ">
            {
                <TextEditor data={data} setData={setData} buttomHeaders={true} />
            }
            <div className=" flex justify-end items-center bg-black px-2 py-4 h-fit rounded-md " >
                {<UploadButton data={data} pageName={"home"} type={"greetings"} />}
            </div>
        </div>
      </div>
    )
}

export default Greetings
