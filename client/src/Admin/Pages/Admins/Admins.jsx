import {Modal, Space, Table, Tag, Tooltip} from 'antd'
import UploadButton from '../components/UploadButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { createAdmin, getAdminsContent, updateRole } from '../../../Redux/actions/adminsAction';
import { ReactComponent as Delete } from './../../../Asset/icons8-delete-48.svg';
import WARNING from './../../../Asset/icons8-warning-96.png'
import ADD from './../../../Asset/icons8-add-48.png'
import EDIT from './../../../Asset/icons8-edit-64.png'
import USER from './../../../Asset/icons8-user-48.png'
import CreateAdminModal from './CreateAdminModal';
import DeleteAdminModal from './DeleteAdminModal';
import { useOutsideClick } from '../../../hooks/useOutsideClick';


const Admins = () =>{
    const roleRef = useRef(null)
    const dispatch = useDispatch()
    const { permission } = useSelector(state => state.auth);
    const admins = useSelector(state => state?.admins?.data)
    const [isDeleteModalVisible, setisDeleteModalVisible] = useState(false)
    const [isCreateModalVisible, setisCreateModalVisible] = useState(false)
    const [isAdminRoleVisible, setIsAdminRoleVisible] = useState(false)
    const [scrollX, setScrollX] = useState(800);

    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          setScrollX(screenWidth < 1024 ? 650 : 700); // Adjust scroll width based on screen size
        };
        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);
      
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const closeRoleDropDown = () => {
        setIsAdminRoleVisible(false)
    }


    useOutsideClick(roleRef, closeRoleDropDown)

    useEffect(()=>{
        dispatch(getAdminsContent())
    },[])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_,record) =>{
                return(
                    <div className=' flex justify-center items-center gap-2 ' >
                        {
                            record?.avatar ? 
                                <figure className=' overflow-hidden rounded-full ring-1 ring-primary_black  h-[32px] w-[32px]' >
                                    <img className=" w-full h-full object-cover " src={ record?.avatar } alt="user" />
                                </figure>
                            :
                            <figure className=" p-1 overflow-hidden rounded-full ring-1 ring-primary_black  w-[32px] h-[32px]" >
                                <img className=" w-full h-full object-contain " src={ USER } alt="user" />
                            </figure>
                        }
                        <p className=' capitalize'>{record?.name}</p>
                    </div>
                )
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (email) =>{
                return <p>{email}</p>
            }
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (role) =>{
                return <p className=' capitalize ' >{role}</p>
            }
        },
        {
            title: 'Date joined',
            dataIndex: 'created_at',
            key: 'date joined',
            render: (created_at) =>{
                const date = new Date(created_at)
                const formattedDate = date.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  });
                return <p>{formattedDate}</p>
            }
        },
        {
            title: 'Action',
            width: "5%",
            key: 'action',
            render: (_, record) => {
                if (permission !== "super-admin"){
                    return <p>-</p>
                }
                return (
                    <>
                        {record?.role === "super-admin" ? 
                            <p>-</p> :
                            <div className=' relative flex justify-center items-center p-2 ring-1 ring-black rounded-md gap-1 md:gap-2 ' >
                                <Tooltip trigger={"hover"} title={"Delete Admin"}  >
                                    <button onClick={ () => {
                                        setisDeleteModalVisible(record?.id)
                                    }} >
                                        <Delete className=" w-[20px] h-[20px] "  />
                                    </button>
                                </Tooltip>
                                <hr className=' h-[15px] border-[1px] border-black ' />
                                <button
                                    className=""
                                    onClick={() => {
                                        setIsAdminRoleVisible(isAdminRoleVisible === record?.id ? null : record?.id);
                                    }}
                                    >
                                    <Tooltip trigger={"hover"} title={"Edit Role"}>
                                        <figure className=' h-[20px] w-[20px]' >
                                            <img className=" object-contain w-full h-full " src={EDIT} alt="edit" />
                                        </figure>
                                    </Tooltip>

                                    {isAdminRoleVisible === record?.id && (
                                        <ul
                                            ref={roleRef}
                                            className="flex flex-col gap-2 w-fit cursor-pointer p-2 bg-primary_light_grey ring-1 ring-black rounded-md absolute bottom-0 right-2"
                                        >
                                            <li
                                                onClick={() => dispatch(updateRole({id: record?.id, role: "admin"}))}
                                                className="w-[100px] hover:bg-black hover:text-primary_black rounded-md duration-300"
                                            >
                                                Admin
                                            </li>
                                            <li
                                                onClick={() => dispatch(updateRole({id: record?.id, role: "user"}))}
                                                className="w-[100px] hover:bg-black hover:text-primary_black rounded-md duration-300"
                                            >
                                                User
                                            </li>
                                        </ul>
                                    )}
                                </button>
                                
                            </div>
                        }
                    </>
                )
            },
        },
    ];

   

    return (
        <section className=" flex flex-col gap-2 p-2 relative dark:bg-teal-500 min-w-screen min-h-[100dvh]" >
            <h1 className="font-bold text-blue_head text-[25px] sm:text-[30px] mt-[10px] mb-[20px] " >
                Admins
            </h1>

            <button
                onClick={() => {
                    return setisCreateModalVisible(true)
                }}
                className=' flex gap-4 justify-between items-center rounded-md px-4 py-2 bg-primary_black w-fit text-white '>
                <span> Create Admin </span>
                <img className=' h-[20px] ' src={ADD} alt='add' /> 
                
            </button>

            <Table className=' !border-none text-center w-full ' 
                columns={columns}
                scroll={{
                    x: 656.08, // using a dynamic value to adjust table size based on screen size
                }}
                dataSource={admins || []}
                loading={!admins}
                rowClassName={(record, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
                style={{ border: '1px solid #ddd' }}
            />

            <DeleteAdminModal isDeleteModalVisible={isDeleteModalVisible} setisDeleteModalVisible={setisDeleteModalVisible} />

            <CreateAdminModal isCreateModalVisible={isCreateModalVisible} setisCreateModalVisible={setisCreateModalVisible} />
            
        </section>
    )
}

export default Admins