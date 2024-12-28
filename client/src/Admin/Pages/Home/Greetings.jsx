import { useEffect, useRef, useState } from "react"
import TextEditor from "../components/TextEditor"
import UploadButton from "../components/UploadButton"
import { useDispatch, useSelector } from "react-redux"
import { updateGreetingsData } from "../../../Redux/actions/homeAction"

const Greetings = () => {
    const dispatch = useDispatch()
    const greetingsData = useSelector((state) => state.persist.greetingsData)
    const [data, setData] = useState(greetingsData)

    
    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(greetingsData)) {
            setData(greetingsData);
        }
    }, [greetingsData]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(greetingsData)) {
            dispatch(updateGreetingsData(data));
        }
    }, [data, dispatch]);
    
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
                {<UploadButton convertToArr={false} data={data} pageName={"home"} type={"greetings"} />}
            </div>
        </div>
      </div>
    )
}

export default Greetings
