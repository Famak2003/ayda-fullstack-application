import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAdminEmbryoDonorContent, updateAdminEmbryoDonorData } from "../../../../Redux/actions/adminEmbryoDonorAction"
import TextEditor from "../../components/TextEditor"
import AddButton from "../../components/AddButton"
import CustomLine from "../../components/CustomLine"
import UploadButton from "../../components/UploadButton"

const EmbryoDonr = () => {
    const dispatch = useDispatch()
    const adminEmbryoDonor = useSelector(state => state.adminEmbryoDonor.data)
    console.log("adminEmbryoDonor ===> ?",adminEmbryoDonor)
    const [data, setData] = useState(adminEmbryoDonor)

    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminEmbryoDonor)) {
            setData(adminEmbryoDonor);
        }
    }, [adminEmbryoDonor]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminEmbryoDonor)) {
            dispatch(updateAdminEmbryoDonorData(data));
        }
    }, [data, dispatch]);

    useEffect(() => {
        dispatch(getAdminEmbryoDonorContent())
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

    const handleWriteUp = (value) =>{
        setData((prev) =>{
            return {
                ...prev,
                writeUp: value
            }
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
        <section className="flex flex-col gap-2 p-2 relative dark:bg-teal-500 w-full h-fit" >
            <h1 className="font-bold text-blue_head text-[25px] sm:text-[30px] mt-[10px] mb-[20px] " >
                EmbryoDonor
            </h1>

            <UploadButton convertToArr={false} data={data} pageName={"embryodonor"} type={"body"} />
            
            <div className=" flex flex-col gap-2 pl-2 py-4 ">
                <h2 className=" text-[20px] font-semibold " >
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

            <CustomLine/>

            <h2 className=" text-[20px] font-semibold " >
                Buttom Writeup
            </h2>
            <TextEditor header={false} handleContent={handleWriteUp} defaultContent={data?.writeUp} image={false} subHeader={false} data={data}/>

        </section>
    )
}

export default EmbryoDonr