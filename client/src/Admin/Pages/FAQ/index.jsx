import { useDispatch, useSelector } from "react-redux"
import AddButton from "../components/AddButton"
import CustomLine from "../components/CustomLine"
import TextEditor from "../components/TextEditor"
import UploadButton from "../components/UploadButton"
import { useEffect, useState } from "react"
import { getAdminFAQContent, updateAdminFAQData } from "../../../Redux/actions/adminFAQAction"

const FAQ = () => {
    const dispatch = useDispatch()
    const adminFAQ = useSelector(state => state.adminFAQ.data)
    const [data, setData] = useState(adminFAQ)
    console.log("FAQ ===?  ", adminFAQ)

    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminFAQ)) {
            setData(adminFAQ);
        }
    }, [adminFAQ]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminFAQ)) {
            dispatch(updateAdminFAQData(data));
        }
    }, [data, dispatch]);

    useEffect(() => { // Fetch data from backend
        dispatch(getAdminFAQContent())
    }, [])



    const handleIncrement = () => {
        setData((prev) => {
            const nextID = prev.nextID ? prev.nextID : 1; // Get nextID or default to 1
            return {
                ...prev,
                body: [
                    ...prev?.body,
                    {
                        id: nextID, // Assign unique ID
                        header: "",
                        content: "",
                    },
                ],
                nextID: nextID + 1, // Increment nextID for future use
            };
        })
    }

    const handleChange = (e, id) => {
        setData((prev) =>{
            return {
                ...prev,
                body: prev?.body?.map((item) =>
                    item.id === id
                        ? { ...item, [e.target.name]: e.target.value } 
                        : item
                    )
            }}
        );
    }

    const handleContent = (id, value) => {
        setData((prev) =>{
            return {
                ...prev,
                body: prev.body.map((item) =>
                    item.id === id
                        ? { ...item, content: value } 
                        : item
                    )
            }}
        );
    }


    return (
        <section className=" flex flex-col gap-2 p-2 relative dark:bg-teal-500 w-full h-fit" >
            <h1 className="font-bold text-blue_head text-[25px] sm:text-[30px] mt-[10px] mb-[20px] " >
                FAQ
            </h1>

            <UploadButton convertToArr={false} data={data} pageName={"faq"} type={"body"} />

            <div className=" pl-2 flex flex-col gap-2 py-4 " >
                <h2 className="text-[20px] font-semibold" >
                    Header
                </h2>
                <input 
                    className=" p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    placeholder="Page Header" 
                    value={data?.header}
                    type="text" 
                    onChange={(e) => { 
                        setData((prev) => {
                            return {
                                ...prev,
                                header: e.target.value
                            }
                        })
                    }}
                />
            </div>

            <CustomLine/>

            <div className=" flex flex-col gap-2 pl-2 py-4 ">
                <h2 className="text-[20px] font-semibold" >
                    Body
                </h2>
                {
                    data?.body?.map((obj, idx) => {
                        return (
                            <TextEditor defaultContent={obj.content} handleContent={handleContent} key={idx} requireID={true} customHandleChange={handleChange} image={false} subHeader={false} data={obj} setData={setData} showDelete={true} />
                        )
                    })
                }
            
            </div>
            <div className=" flex justify-end items-center bg-black px-2 py-4 h-fit rounded-md " >
                <AddButton callBack={handleIncrement}/>
            </div>
        </section>
    )
}

export default FAQ