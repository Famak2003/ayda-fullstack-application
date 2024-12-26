import { useState } from "react";
import UploadButton from "../components/UploadButton";
import HeroForm from "./components/HeroForm";
import AddButton from "../components/AddButton";

const Hero = () => {
  const [formNumber, setFormNumber] = useState(0);
  const [data, setData] = useState({
    0: {
        id: 0,
        header: "",
        subHeader: "",
        image: "",
        start: "",
        stop: ""
    }
  })
//   const handleAppend = () => {
//     setData((prev) => {
//         return{
//             ...perv,
//             {}
//         }
//     })
//   }

  return (
    <div className="p-2 relative dark:bg-teal-500">
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[20px]">Hero Section</h1>
            <div className=" flex flex-col gap-2 pl-2 " >
                <HeroForm id={0} data={data} setData={setData} />
                {Array.from({ length: formNumber }, (_, idx) => (
                    <HeroForm
                        key={idx + 1}
                        id={idx + 1}
                        data={data} 
                        setData={setData}
                    />
                ))}
            </div>
            <div className=" flex justify-between items-center bg-black px-2 py-4 h-fit rounded-md " >
                {
                    <>
                        <AddButton record={setFormNumber}/>
                        <UploadButton data={data} pageName={"home"} type={"hero"} />
                    </>
                }
            </div>
        </div>
    </div>
  );
};

export default Hero;
