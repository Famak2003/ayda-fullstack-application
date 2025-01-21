import { useDispatch, useSelector } from "react-redux"
import UploadButton from "../components/UploadButton"
import CANCEL from './../../../Asset/icons8-close-60.png'
import { updateQuickInfoData } from "../../../Redux/actions/adminHomeAction"

const { useState, useEffect } = require("react")
const { default: TextEditor } = require("../components/TextEditor")
const { default: AddButton } = require("../components/AddButton")

const QuickInfo = () => {
    const dispatch = useDispatch()
    const quickInfoData = useSelector((state) => state.adminHome.quickInfoData)
    const [data, setData] = useState(quickInfoData)

    
    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(quickInfoData)) {
            setData(quickInfoData);
        }
    }, [quickInfoData]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(quickInfoData)) {
            dispatch(updateQuickInfoData(data));
        }
    }, [data, dispatch]);

    const handleIncrement = () => {
        setData((prev) => {
            const nextID = prev.nextID ? prev.nextID : 1 
            return {
                ...prev,
                linksArr: [
                    ...prev.linksArr,
                    {
                        id: nextID,
                        linkName: "",
                        link: ""
                    },
                ],
                nextID: nextID + 1 // increment counter
            }
        })
    }

    const handleContent = (value) => {
        setData((prev) =>{
            return{
                ...prev,
                content: value,
              }
          }
        )
    }
    

    return(
        <div className=" flex flex-col gap-2 p-2 relative dark:bg-teal-500 w-full h-fit" >
            <h1 className="font-bold text-[20px]" >
                Methods
            </h1>
            <div className=" flex flex-col gap-2 pl-2 h-fit p-2 ">
                {
                    <>
                        <TextEditor handleContent={handleContent} defaultContent={data.content} data={data} setData={setData} />
                        <div className=" grid grid-cols-1 xxl:grid-cols-2 gap-2 " >
                            {
                                data?.linksArr?.map((obj, idx) => (
                                    <LinksComp obj={obj} id={obj?.id} key={idx} setData={setData} />
                                ))
                            }
                        </div>
                        
                    </>
                }

                <div className=" flex justify-between items-center bg-black px-2 py-4 h-fit rounded-md " >
                    {
                        <>
                            <AddButton callBack={handleIncrement}  />
                            <UploadButton convertToArr={false} data={data} pageName={"home"} type={"quickInfo"} />
                        </>
                    }
                </div>
            </div>
        </div>
      )
}

const LinksComp = ({ obj, id ,setData}) => {

    const handleChange = (e, idToUpdate) => {
        setData((prev) => ({
            ...prev,
            linksArr: prev?.linksArr?.map((item) =>
                item.id === idToUpdate
                    ? {
                          ...item,
                          [e.target.name]: e.target.value, // Update the specific field
                      }
                    : item
            ),
        }));
    }

    const handleDelete = (id) => {
        setData((prev) => {
            return {
                ...prev,
                linksArr: prev.linksArr.filter((item) => item.id !== id),
            }
        });
    };
    

    return(
        <div className=" relative flex flex-col lmobile:flex-row gap-2 border-b-2 border-dashed border-black pb-5 w-full ">
            <div className="flex flex-col mobile:flex-row gap-2" >
                <div className="flex flex-col gap-2">
                    <label htmlFor={`linkName`} children={"Link Name"} />
                    <input
                        id={`linkName`}
                        type="text"
                        value={obj.linkName}
                        className="pl-2 w-[100%] p-1 bg-gray-300 ring-2 rounded-md ring-black"
                        onChange={(e) => handleChange(e, id)}
                        name="linkName"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor={`link`} children={"Link"} />
                    <input
                        id={`link`}
                        placeholder="Input link here, e.g iletisim"
                        type="text"
                        value={obj.link}
                        className="pl-2 w-[100%] p-1 bg-gray-300 ring-2 rounded-md ring-black"
                        onChange={(e) => handleChange(e, id)}
                        name="link"
                    />
                </div>
            </div>
            <button 
                className=" flex justify-center items-end h-full w-full lmobile:w-fit p-1 bg-black rounded-md lmobile:bg-transparent " 
                onClick={() => handleDelete(id)}
            >
                    <img className=" w-[25px] h-[25px] p-1 rounded-md object-cover bg-primary_black  " src={CANCEL} alt="undo" />
                {/* <figure className=" w-full lmobile:w-[25px] h-[25px] p-1 rounded-md" >
                </figure> */}
            </button>
        </div>
    )
}

export default QuickInfo