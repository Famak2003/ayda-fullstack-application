import { useState } from 'react';
import WARNING from './../../../Asset/icons8-warning-96.png'
import { Modal } from 'antd';
import { deleteAdmin } from '../../../Redux/actions/adminsAction';
import { useDispatch } from 'react-redux';


const DeleteAdminModal = ({isDeleteModalVisible, setisDeleteModalVisible}) => {
        const dispatch = useDispatch()
        const [confirmLoading, setConfirmLoading] = useState(false);

        const handleOK = async () => {
            setConfirmLoading(true);
            await dispatch(deleteAdmin({id: isDeleteModalVisible})) // used the isDeleteModalVisible to transport id uniquely
            setisDeleteModalVisible(false)
            setConfirmLoading(false);
        }
    
        const handleCancel = () => {
            return setisDeleteModalVisible(false)
        }
    
        const handleClose = () => {
            return setisDeleteModalVisible(false)
        }

    return(
        <Modal
            open={isDeleteModalVisible}
            onOk={() => handleOK()} 
            onCancel={() => handleCancel()} 
            onClose={() => handleClose()}
            confirmLoading={confirmLoading}
        >
            <div className=' flex flex-col justify-center items-center gap-2 ' >
                <img className=' object-cover w-[100px] h-[100px] ' src={WARNING} alt='warning' />
                Are you sure you want to delete admin?
            </div>
        </Modal>
    )
}

export default DeleteAdminModal;