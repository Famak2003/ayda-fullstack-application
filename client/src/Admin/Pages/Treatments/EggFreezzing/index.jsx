import { useEffect, useState } from "react"
import { getAdminEggFreezingContent, updateAdminEggFreezingData } from "../../../../Redux/actions/adminEggFreezingAction"
import { useDispatch, useSelector } from "react-redux"
import TextEditor from "../../components/TextEditor"
import AddButton from "../../components/AddButton"
import CustomLine from "../../components/CustomLine"
import UploadButton from "../../components/UploadButton"

const EggFreezing = () => {
    const dispatch = useDispatch()
    const adminEggFreezing = useSelector(state => state.adminEggFreezing.data)
    const [data, setData] = useState(adminEggFreezing)

    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminEggFreezing)) {
            setData(adminEggFreezing);
        }
    }, [adminEggFreezing]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminEggFreezing)) {
            dispatch(updateAdminEggFreezingData(data));
        }
    }, [data, dispatch]);

    // Fetch data
    useEffect(() => {
        dispatch(getAdminEggFreezingContent())
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

    const handleHeaderWriteUp = (value) =>{
        setData((prev) =>{
            return {
                ...prev,
                headerWriteUp: value
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
                EggFreezing
            </h1>
                       
            <div className=" flex flex-col gap-2 pl-2 py-4 ">
                <h2 className=" text-[20px] font-semibold " >
                    Body
                </h2>

                <div className="flex flex-col gap-2 pb-4 " >
                    <h2 className=" text-[16px] font-semibold " >
                        Header Writeup
                    </h2>
                    <TextEditor header={false} handleContent={handleHeaderWriteUp} defaultContent={data?.headerWriteUp} image={false} subHeader={false} data={data}/>

                </div>

                <CustomLine/>

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

            <UploadButton convertToArr={false} data={data} pageName={"eggfreezing"} type={"body"} />

        </section>
    )
}

export default EggFreezing