import { useRef, useState } from "react"

const Greetings = () => {
    const [value, setValue] = useState("")
    const modules = {
        toolbar: [
            [{'header': [1,2,3,4,5,6,false]}],
            [{'size': []}],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['image', 'link', 'video'],
            ['clean']
        ]
    }

    return(
      <div className="p-2 relative dark:bg-teal-500" >
        <div className=" flex items-center justify-center h-[100vh]">
           <div className=' flex gap-2 w-full h-full p-1 '>
             <div className=' rounded-r-xl overflow-hidden flex flex-col gap-2 items-center ring-2 ring-black h-full w-1/2'>
               <h1 className=' flex justify-center items-center h-[5%] w-full '>
                 Editor
               </h1>
               <ReactQuill className='h-[84vh] w-full'
                theme='snow'
                value={value}
                onChange={setValue}
                modules={modules}
               />
             </div>
             <div className=' rounded-l-xl overflow-hidden flex flex-col justify-center items-center ring-2 ring-black h-full w-1/2'>
               <h1>
                 Preview
               </h1>
               <div className='overflow-scroll' dangerouslySetInnerHTML={{__html: value}} />
             </div>
           </div>
         </div>
      </div>
    )
}

export default Greetings