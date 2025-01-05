import { useEffect, useState } from "react";
import UploadButton from "../components/UploadButton";
import HeroForm from "./components/HeroForm";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { updateHeroData } from "../../../Redux/actions/adminHomeAction";

const Hero = () => {
    // Extracting hero data START
    const content = useSelector(state => state?.home.content)
    let rawData
    content?.filter((item) => {
        if (item.type === "hero"){
            return rawData = item
        }}
    )
    const hero = rawData ? JSON.parse(rawData?.content) : ""
    const convertToObj = {
        content: hero[0], // First element becomes content
        nextID: hero[1],  // Second element becomes nextID
    }

    console.log(" Hero from Dashboard ",convertToObj)
    // Extracting hero data STOP

    const heroData = useSelector((state) => state.adminHome.heroData)
    const dispatch = useDispatch()
    const [data, setData] = useState(heroData)  
    console.log("===== > Original ", heroData)

    // Sync Redux state to local state
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(heroData)) {
            setData(heroData);
        }
    }, [heroData]);

    // Sync local state to Redux state ( for local updates )
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(heroData)) {
            dispatch(updateHeroData(data));
        }
    }, [data, dispatch]);

    // Adds new entry to hero
    const handleIncrement = () => {
        setData((prev) => {
            const nextID = prev.nextID ? prev.nextID : 1; // Get nextID or default to 1
            return {
                ...prev,
                content: [
                    ...prev.content,
                    {
                        id: nextID, // Assign unique ID
                        header: "",
                        subHeader: "",
                        image: "",
                        start: "",
                        stop: "",
                    },
                ],
                nextID: nextID + 1, // Increment nextID for future use
            };
        })
    }
  

    return (
        <div className="p-2 relative dark:bg-teal-500">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[20px]">Hero Section</h1>
                <div className=" flex flex-col gap-2 pl-2 " >
                    {data?.content?.map((value, idx) => (
                        <HeroForm
                            key={idx}
                            id={value.id}
                            obj={value}
                            data={data.content}
                            setData={setData}
                        />
                    ))}
                </div>
                <div className=" flex justify-between items-center bg-black px-2 py-4 h-fit rounded-md " >
                    {
                        <>
                            <AddButton callBack={handleIncrement}/>
                            <UploadButton convertToArr={true} data={data} pageName={"home"} type={"hero"} />
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;
