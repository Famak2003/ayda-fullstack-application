import { useEffect, useState } from "react"
import TextEditor from "../../components/TextEditor"
import UploadButton from "../../components/UploadButton"
import { useDispatch, useSelector } from "react-redux"
import { getAdminOurTeamContent, updateOurTeamData } from "../../../../Redux/actions/ourTeamAdminAction"

const OurTeam = () => {
    const dispatch = useDispatch()
    const adminOurTeam = useSelector(state => state.adminOurTeam.data)
    console.log("AdminOurTeam ===> ?",adminOurTeam)
    const [data, setData] = useState(adminOurTeam)

    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminOurTeam)) {
            setData(adminOurTeam);
        }
    }, [adminOurTeam]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(adminOurTeam)) {
            dispatch(updateOurTeamData(data));
        }
    }, [data, dispatch]);

    useEffect(() => {
        dispatch(getAdminOurTeamContent())
    }, [])


    const handleChange = (e, id) => {
        setData((prev) =>{
            return prev?.map((item) =>
                item.id === id
                    ? { ...item, [e.target.name]: e.target.value } // Update the image for the matched id
                    : item // Leave other items unchanged
            )
        }
        );
    }

    const handleImageUpload = (imageData, id) => {
        setData((prev) =>{
            return prev?.map((item) =>
                item.id === id
                    ? { ...item, image: imageData} // Update the image for the matched id
                    : item // Leave other items unchanged
            )
        }
        );
    }

    const handleImageRemove = (e, id) => {
        e.preventDefault()
        setData((prev) =>{
            return prev?.map((item) =>
                item.id === id
                    ? { ...item, image: ""} // Update the image for the matched id
                    : item // Leave other items unchanged
            )
        }
        );
    }

    const handleContent = (id, value) => {
        setData((prev) =>{
            console.log(id)
            return prev.map((item) =>
                item.id === id
                    ? { ...item, content: value } // Update the image for the matched id
                    : item // Leave other items unchanged
            )
        }
        )
    }

    return (
        <div className=" flex flex-col gap-2 p-2 relative dark:bg-teal-500 w-full h-fit" >
            <h1 className="font-bold text-blue_head text-[25px] sm:text-[30px] mt-[10px] mb-[20px]" >
                OurTeam
            </h1>
            <div className=" z-[99] sticky top-[5px] flex justify-end items-center bg-black px-2 py-4 rounded-md " >
                <UploadButton convertToArr={false} data={data} pageName={"ourteam"} type={"body"} />
            </div>
            <div className=" flex flex-col gap-2 py-4  pl-2 ">
                <h2 className=" text-[20px] font-semibold " >
                    Body
                </h2>
                {
                    data?.map((obj, idx) => {
                        return (
                            <TextEditor handleContent={handleContent} key={idx} parentComp={"ourteam"}  customHandleChange={handleChange} subHeader={false} data={obj} setData={setData} customImageFunc={handleImageUpload} customImageRemoveFunc={handleImageRemove} />
                        )
                    })
                }
            
            </div>
      </div>
    )
}

export default OurTeam