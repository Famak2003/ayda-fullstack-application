const handleChange = (e, setData) => {
    setData((prev) =>{
        return{
            ...prev,
            [e.target.name]: e.target.value,
          }
    })
}

export default handleChange