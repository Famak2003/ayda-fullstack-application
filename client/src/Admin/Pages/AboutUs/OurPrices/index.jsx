import { useEffect, useState } from "react"
import TextEditor from "../../components/TextEditor"
import UploadButton from "../../components/UploadButton"
import { useDispatch, useSelector } from "react-redux"
import CANCEL from './../../../../Asset/icons8-close-60.png'
import { getAdminOurPricesContent, updateAdminOurPricesData } from "../../../../Redux/actions/adminOurPricesAction"
import AddButton from "../../components/AddButton"
import CustomLine from "../../components/CustomLine"


const OurPrices = () => {
    const dispatch = useDispatch()
    const adminOurPrices = useSelector(state => state.adminOurPrices.data)
    console.log("AdminOurPrices ===> ?",adminOurPrices)
    const [data, setData] = useState(adminOurPrices)

    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminOurPrices)) {
            setData(adminOurPrices);
        }
    }, [adminOurPrices]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminOurPrices)) {
            dispatch(updateAdminOurPricesData(data));
        }
    }, [data, dispatch]);

    // Fetch data
    useEffect(() => {
        dispatch(getAdminOurPricesContent())
    }, [])


    const handleWriteUp = (value) =>{
        setData((prev) =>{
            return {
                ...prev,
                writeUp: value
            }
        })
    }

    const handleButtomContent = (value) =>{
        setData((prev) =>{
            return {
                ...prev,
                buttomContent: value
            }
        })
    }

    const handleIncrement = () => {
        setData((prev) => {
            const nextID = prev.nextID ? prev.nextID : 1 
            return {
                ...prev,
                ivfPrices: [
                    ...prev.ivfPrices,
                    {
                        id: nextID,
                        treatmentType: "",
                        price: ""
                    },
                ],
                nextID: nextID + 1 // increment counter
            }
        })
    }


    return (
        <div className=" flex flex-col gap-2 p-2 relative dark:bg-teal-500 w-full h-fit" >
        <h1 className="font-bold text-blue_head text-[25px] sm:text-[30px] mt-[10px] mb-[20px]" >
            OurPrices
        </h1>
        <div className=" z-[99] sticky top-[5px] flex justify-end items-center bg-black px-2 py-2 mobile:py-4 rounded-md " >
            <UploadButton convertToArr={false} data={data} pageName={"ourprices"} type={"body"} />
        </div>
        <div className="flex flex-col gap-2 py-4 " >
            <h2 className=" text-[20px] font-semibold " >
                Top Writeup
            </h2>
            <input 
                className="pl-2 p-1 bg-gray-300 ring-2 rounded-md dark:text-primary_black ring-black w-full"
                name="pageHeader"
                value={data?.pageHeader}
                onChange={(e) => {
                    setData((prev) => {
                        return {
                            ...prev,
                            [e.target.name]: e.target.value
                        }
                    })
                }}
                placeholder="Page header" 
                type="text" 
            />

            <TextEditor header={false} handleContent={handleWriteUp} defaultContent={data?.writeUp} image={false} subHeader={false} data={data}/>
        </div>

        <CustomLine/>

        <div className="flex flex-col gap-2 py-4 " >
            <h2 className=" text-[20px] font-semibold " >
                IVF Prices Table
            </h2>
            <div className=" flex flex-col gap-4 ">
                {
                    data?.ivfPrices.map((obj, _) => {
                        return (
                            <PricesComp obj={obj} id={obj.id} setData={setData} />
                        )
                    })
                }
            
            </div>
            <div className=" flex justify-between items-center bg-black px-2 py-4 h-fit rounded-md " >
                <AddButton callBack={handleIncrement}  />
            </div>
        </div>

        <CustomLine/>

        <div className="flex flex-col gap-2 py-4 " >
            <h2 className=" text-[20px] font-semibold " >
                Buttom Writeup
            </h2>
            <input 
                className="pl-2 p-1 bg-gray-300 ring-2 rounded-md dark:text-primary_black ring-black"
                name="buttomHeader"
                value={data?.buttomHeader}
                onChange={(e) => {
                    setData((prev) => {
                        return {
                            ...prev,
                            [e.target.name]: e.target.value
                        }
                    })
                }}
                placeholder="Buttom header" 
                type="text" 
            />
            <TextEditor header={false} handleContent={handleButtomContent} defaultContent={data.buttomContent} image={false} subHeader={false} data={data}/>
        </div>

        
      </div>
    )
}

const PricesComp = ({ obj, id ,setData}) => {

    const handleChange = (e, idToUpdate) => {
        setData((prev) => ({
            ...prev,
            ivfPrices: prev?.ivfPrices?.map((item) =>
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
            console.log(id)
            return {
                ...prev,
                ivfPrices: prev.ivfPrices.filter((item) => item.id !== id),
            }
        });
    };
    

    return(
        <div className=" flex flex-col lmobile:flex-row gap-2 border-b-2 border-dashed border-black pb-5 w-full lmobile:w-fit ">
            <div className="flex flex-col mobile:flex-row gap-2" >
                <input
                    id={`treatmentType`}
                    type="text"
                    placeholder="Treatment Type"
                    value={obj.treatmentType}
                    className=" w-full pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={(e) => handleChange(e, id)}
                    name="treatmentType"
                />
                <input
                    id={`price`}
                    placeholder="Price"
                    type="text"
                    value={obj.price}
                    className=" w-full pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={(e) => handleChange(e, id)}
                    name="price"
                />
            </div>
            <button 
                className=" flex justify-center items-end h-full w-full lmobile:w-fit p-1 bg-black rounded-md lmobile:bg-transparent " 
                onClick={() => handleDelete(id)}
            >
                <img className=" w-[25px] h-[25px] p-1 rounded-md object-cover bg-primary_black " src={CANCEL} alt="undo" />
            </button>
        </div>
    )
}

export default OurPrices