import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAdminTripContent, updateAdminTripData } from "../../../Redux/actions/adminTripAction"
import TextEditor from "../components/TextEditor"
import AddButton from "../components/AddButton"
import UploadButton from "../components/UploadButton"

const  Trip = () => {

    const dispatch = useDispatch()
    const adminTrip = useSelector(state => state.adminTrip.data)
    const [data, setData] = useState(adminTrip)

    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminTrip)) {
            setData(adminTrip);
        }
    }, [adminTrip]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminTrip)) {
            dispatch(updateAdminTripData(data));
        }
    }, [data, dispatch]);

    useEffect(() => { // Fetch data from backend
        dispatch(getAdminTripContent())
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


    return(
        <section className="flex flex-col gap-2 p-2 relative dark:bg-teal-500 w-full h-fit" >
            <h1 className="font-bold text-blue_head text-[25px] sm:text-[30px] mt-[10px] mb-[20px] " >
                Trip
            </h1>
           
            <div className=" pl-2 py-4 ">
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
            
            <UploadButton convertToArr={false} data={data} pageName={"trip"} type={"body"} />

        </section>
    )
}

export default Trip