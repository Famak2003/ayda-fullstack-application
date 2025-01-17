import { Modal } from "antd"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createAdmin } from "../../../Redux/actions/adminsAction"

const CreateAdminModal = ({isCreateModalVisible, setisCreateModalVisible}) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({role: 'user'})
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleChange = (e) => {
        e.preventDefault()
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async () => {
        setConfirmLoading(true);
        await dispatch(createAdmin(formData))
        setConfirmLoading(false);
        disableState(setisCreateModalVisible)
    }
    

    const handleCancel = (state) => {
        return disableState(state)
    }

    const handleClose = (state) => {
        return disableState(state)
    }

    const disableState = (state) => {
        return state(false)
    }
    
    return(
        <Modal 
            open={isCreateModalVisible}
            width={"40%"}
            className=' createAdminForm '
            okText={"Submit"}
            onOk={handleSubmit}
            onCancel={() => handleCancel(setisCreateModalVisible)} 
            onClose={() => handleClose(setisCreateModalVisible)}
            confirmLoading={confirmLoading}
        >
            <div className=' flex flex-col gap-8 bg-white  ' >
                <h1 className=' text-[25px] font-semibold text-center ' >
                    Create Admin
                </h1>
                <form className=' flex flex-col gap-2 w-full h-fit mt-5 px-2 ' >
                    <label htmlFor='name' children={"Name"} />
                    <input required onChange={(e) => handleChange(e)} className=' rounded-lg w-full h-fit px-3 py-2  ' name='name' type='text' />
                    <label htmlFor='email' children={"Email"} />
                    <input required onChange={(e) => handleChange(e)} className=' rounded-lg w-full h-fit px-3 py-2  ' name='email' type='email' />
                    <label htmlFor='password' children={"Password"} />
                    <input required onChange={(e) => handleChange(e)} className=' rounded-lg w-full h-fit px-3 py-2  ' name='password' type='password' />
                    <label htmlFor='role' children={"Role"} />
                    <select required onChange={(e) => handleChange(e)} className=' rounded-lg w-full h-fit px-3 py-2 ' name='role'  >
                        <option value={'user'} >User</option>
                        <option value={'admin'} >Admin</option>
                    </select>
                </form>
            </div>
        </Modal>
    )
}

export default CreateAdminModal