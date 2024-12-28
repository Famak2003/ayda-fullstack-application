import ADD from './../../../Asset/icons8-add-50.png'

const AddButton = ({record, callBack}) => {
    // const append = () => {
    //     record((prev) => prev + 1)
    // }
    return (
        <button
            className=" group flex items-center gap-2 ring-1 ring-primary_black rounded-md p-2 duration-300 hover:scale-105 "
            onClick={ callBack }
        >
            <p>Add</p>
            <figure
                className="flex justify-center items-center rounded-md p-1 ring-2 ring-black w-[30px] h-[30px] group-hover:scale-110 duration-500"
            >
                <img className="h-full object-contain" src={ADD} alt="add button" />
            </figure>
        </button>
    )
}

export default AddButton