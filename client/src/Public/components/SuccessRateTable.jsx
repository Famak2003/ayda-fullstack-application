const SuccessRateTable = ({data, headers}) => {
    return <div>
        <table className=' w-full '>
            <tr className='  '>
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
                        <td>{obj.age}</td>
                        <td>{obj.ivf}%</td>
                        <td>{obj.spermDonor}%</td>
                        <td>{obj.eggDonor}%</td>
                        <td>{obj.embryoDonor}%</td>
                    </tr>
                )
            })}

        </table>
    </div>
}

export default SuccessRateTable