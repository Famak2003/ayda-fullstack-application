const Table = ({data, headers}) => {
    return <div>
        <table className=' w-full sm:w-[598px] '>
            <tr className=' '>
                {
                    headers.map((item, idx) =>{
                        return(
                            <th key={idx} >{item}</th>
                        )
                    })
                }
            </tr>
            {data.map((obj, idx) => {
                return (
                    <tr key={idx}>
                        <td>{obj.treatmentType}</td>
                        <td>{obj.price}</td>
                    </tr>
                )
            })}

        </table>
    </div>
}

export default Table