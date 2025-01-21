import { useDispatch, useSelector } from "react-redux"
import { getAdminOurSuccessRateContent, updateOurSuccessRateData } from "../../../../Redux/actions/adminOurSuccessRateAction"
import { useEffect, useState } from "react"
import TextEditor from "../../components/TextEditor"
import AddButton from "../../components/AddButton"
import UploadButton from "../../components/UploadButton"
import CustomLine from "../../components/CustomLine"


const OurSuccessRates = () => {
    const dispatch = useDispatch()
    const adminOurSuccessRate = useSelector(state => state.adminOurSuccessRate.data)
    const [data, setData] = useState(adminOurSuccessRate)

    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminOurSuccessRate)) {
            setData(adminOurSuccessRate);
        }
    }, [adminOurSuccessRate]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminOurSuccessRate)) {
            dispatch(updateOurSuccessRateData(data));
        }
    }, [data, dispatch]);

    useEffect(() => { // Fetch data from backend
        dispatch(getAdminOurSuccessRateContent())
    }, [])


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
                        ? { ...item, [e.target.name]: e.target.value } // Update the image for the matched id
                        : item // Leave other items unchanged
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
                        : item // Leave other items unchanged
                    )
            }}
        );
    }

    const handleBodyIncrement = () => {
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

    const handleIVFDetailsIncrement = () => {
        setData((prev) => {
            const nextID = prev.nextID ? prev.nextID : 1 
            return {
                ...prev,
                ivfDetails: [
                    ...prev.ivfDetails,
                    {
                        id: nextID,
                        age: "",
                        ivf: "",
                        spermDonor: "",
                        eggDonor: "",
                        embryoDonor: ""
                    }
                ],
                nextID: nextID + 1 // increment counter
            }
        })
    }



    return (
        <div className=" relative flex flex-col gap-2 p-2 dark:bg-teal-500 w-full h-fit overflow-visible" >
            <h1 className="font-bold text-blue_head text-[25px] sm:text-[30px] mt-[10px] mb-[20px]" >
                Our Success Rates
            </h1>

           
            <div>
                <div className=" flex flex-col gap-2 py-4 " >
                    <h2 className="text-[20px] font-semibold">
                        Page Header
                    </h2>
                    <input
                        id={`pageHeader`}
                        type="text"
                        value={data?.pageHeader}
                        className=" text-primary_black w-full pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                        onChange={(e) => {
                            setData((prev) => {
                                return {
                                    ...prev,
                                    pageHeader: e.target.value
                                }
                            })
                        }}
                        name="pageHeader"
                        // placeholder="Page Header" 
                    />
                    <h2 className=" text-[20px] font-semibold " >
                        IVF Table
                    </h2>
                    <div className=" flex flex-col gap-4 ">
                        {
                            data?.ivfDetails.map((obj, idx) => {
                                return (
                                    <IVFInfo key={obj.id} obj={obj} id={obj.id} setData={setData} />
                                )
                            })
                        }
                    </div>
                    <div className=" flex justify-between items-center bg-black px-2 py-4 h-fit rounded-md " >
                        <AddButton callBack={handleIVFDetailsIncrement}  />
                    </div>
                </div>

                <CustomLine/>

                <div className="flex flex-col gap-2 py-4 " >
                    <h2 className=" text-[20px] font-semibold " >
                        Write up
                    </h2>
                    <TextEditor handleContent={handleWriteUp} defaultContent={data?.writeUp} image={false} header={false} subHeader={false} data={data} />
                </div>


                <CustomLine/>
                
                <div className="flex flex-col gap-2 py-4 " >
                    <h2 className=" text-[20px] font-semibold " >
                        Page Body
                    </h2>
                    <div className=" flex flex-col gap-6 pl-2 ">
                        {
                            data?.body?.map((obj, idx) => {
                                return (
                                    <TextEditor defaultContent={obj.content} handleContent={handleContent} key={idx} requireID={true}  customHandleChange={handleChange}  subHeader={false} data={obj} setData={setData} image={false} showDelete={true} />
                                )
                            })
                        }
                        <div className=" flex justify-between items-center bg-black px-2 py-4 h-fit rounded-md " >
                            <AddButton callBack={handleBodyIncrement}/>
                        </div>
                
                    </div>
                
                </div>

            </div>
            
            <UploadButton convertToArr={false} data={data} pageName={"oursuccessrate"} type={"body"} />

        </div>
    )
}

const IVFInfo = ({ obj, id ,setData}) => {

    const handleChange = (e, idToUpdate) => {
        setData((prev) => ({
            ...prev,
            ivfDetails: prev?.ivfDetails?.map((item) =>
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
                ivfDetails: prev.ivfDetails.filter((item) => item.id !== id),
            }
        });
    };
    

    return(
        <div className={` relative flex flex-col justify-center items-center gap-2 border-b-2 border-dashed border-black pb-5 w-fit `}>
            <form className=" flex justify-center mobile:justify-normal items-center flex-wrap gap-3 w-fit" > 
                <input
                    id={`age`}
                    type="text"
                    placeholder="Lady's age"
                    value={obj.age}
                    className=" dark:text-primary_black w-[150px] lg:w-[15%] pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={(e) => handleChange(e, id)}
                    name="age"
                />
                <input
                    id={`ivf`}
                    placeholder="IVF"
                    type="number"
                    value={obj.ivf}
                    className=" dark:text-primary_black w-[150px] lg:w-[15%] pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={(e) => handleChange(e, id)}
                    name="ivf"
                />
                <input
                    id={`spermDonor`}
                    placeholder="Sperm Donation"
                    type="number"
                    value={obj.spermDonor}
                    className=" dark:text-primary_black w-[150px] lg:w-[15%] pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={(e) => handleChange(e, id)}
                    name="spermDonor"
                />
                <input
                    id={`eggDonor`}
                    placeholder="Egg Donation"
                    type="number"
                    value={obj.eggDonor}
                    className=" dark:text-primary_black w-[150px] lg:w-[15%] pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={(e) => handleChange(e, id)}
                    name="eggDonor"
                />
                <input
                    id={`embryoDonor`}
                    placeholder="Embryo Donation"
                    type="number"
                    value={obj.embryoDonor}
                    className=" dark:text-primary_black w-[150px] lg:w-[15%] pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={(e) => handleChange(e, id)}
                    name="embryoDonor"
                />
            </form>
            <button 
                className=" group bg-red text-white w-full flex justify-center items-center rounded-md p-2 hover:scale-[99.5%] duration-300 shadow-custom2 " 
                onClick={() => handleDelete(id)}
            >
                Delete Section
                {/* <img className=" w-[20px] h-[20px] object-cover " src={CANCEL} alt="undo" /> */}
            </button>
        </div>
    )
}

export default OurSuccessRates