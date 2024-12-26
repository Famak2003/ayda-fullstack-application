import UploadButton from "../components/UploadButton"
import CANCEL from './../../../Asset/icons8-close-60.png'

const { useState } = require("react")
const { default: TextEditor } = require("../components/TextEditor")
const { default: AddButton } = require("../components/AddButton")

const QuickInfo = () => {
    const [data, setData] = useState()
    const [links, setLinks] = useState(0)

    console.log(data)
    console.log(links)
    

    return(
        <div className=" flex flex-col gap-2 p-2 relative dark:bg-teal-500 w-full h-fit" >
            <h1 className="font-bold text-[20px]" >
                Methods
            </h1>
            <div className=" pl-2 h-fit p-2 ring-2 ">
                {
                    <>
                        <TextEditor data={data} setData={setData} />
                        <div className=" flex flex-col gap-2 " >
                            <LinksComp id={0} setData={setData} />
                            {
                                Array.from({ length: links }, (_, idx) => (
                                    <LinksComp id={idx + 1} key={idx} setData={setData} />
                                ))
                            }
                        </div>
                        <AddButton record={setLinks} />
                    </>
                }

                <div className=" flex justify-end items-center bg-black px-2 py-4 h-fit rounded-md " >
                    {<UploadButton data={data} pageName={"home"} type={"greetings"} />}
                </div>
            </div>
        </div>
      )
}

const LinksComp = ({ id ,setData, data}) => {
    const handleChange = (e) => {
        setData((prev) => (
            {
                ...prev,
                linksArr: [
                    ...prev,
                    {
                        id,
                        [e.target.name]: e.target.value,
                    }

                ]
            }
        ))
    }

    const handleDelete = (id) => {
        const newData = data.filter((item) => item.id !== id)
        console.log(newData)
    }

    return(
        <div className=" relative flex gap-2 border-b-2 border-dashed border-black pb-5 w-fit ">
            <div className="flex flex-col gap-2">
                <label htmlFor={`linkName`} children={"Link Name"} />
                <input
                    id={`linkName`}
                    type="text"
                    className="pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={handleChange}
                    name="linkName"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor={`link`} children={"Link"} />
                <input
                    id={`link`}
                    placeholder="Input link here, e.g iletisim"
                    type="text"
                    className="pl-2 p-1 bg-gray-300 ring-2 rounded-md ring-black"
                    onChange={handleChange}
                    name="link"
                />
            </div>
            <button 
                className=" absolute top-[35%] translate-y-[35%] right-[-50px] w-[25px] h-[25px] p-1 bg-primary_black rounded-md " 
                onClick={handleDelete}
            >
                <img className=" h-full w-full object-cover " src={CANCEL} alt="undo" />
            </button>
        </div>
    )
}

export default QuickInfo