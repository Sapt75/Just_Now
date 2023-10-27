import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GlobalUsers.css';
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import CancelIcon from '@mui/icons-material/Cancel';
import EditUser from './userModal';


function ManageUsers() {
    const [open, setOpen] = useState({
        state: false,
        value: null
    })

    const cancelButtonRef = useRef(null)

    const [users, setUsers] = useState([])



    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/pages/user/add");
        // console.log('The link was clicked.');
    }


    async function getUsers() {
        let data = await fetch("/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        setUsers(res)
    }

    async function deleteUser(itm) {
        let data = await fetch(`/remove-user/${itm}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        setUsers(res)
        // alert("User Removed Su")
    }




    useEffect(() => {
        getUsers()
    }, [])



    return (
        <>
            <Transition.Root show={open.state} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Deactivate account
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Are you sure you want to delete this account?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => {
                                                deleteUser(open.value)
                                                setOpen({
                                                    state: false
                                                })
                                            }}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen({
                                                state: false
                                            })}
                                            ref={cancelButtonRef}
                                        >
                                            No
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className="md:container md:mx-auto">
                <div className="manage user-box">
                    <div className="manage user-title-box p-20">
                        <div className="manage user-title m-20 ">
                            <h4 className='text-xl'>Manage User</h4>
                            <div className="innerbox my-20">
                                <div className="inner-title-table-box bg-white p-20">
                                    <div className="tabletitle text-end">
                                        <button className='border rounded py-5 px-10 my-10' onClick={handleClick}>Add User</button>
                                    </div>
                                    <div className="overflow-x-auto relative shadow-md mb-10">
                                        <table className="w-full text text-left text-gray-500 dark:text-gray-400">
                                            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">
                                                        #
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Email
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Role
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Created At
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.length > 0 ? users.map((item, index) => {
                                                    return (<tr className="bg-white   dark:bg-gray-900 dark:border-gray-700">
                                                        <td className="py-16 px-6">
                                                            {index + 1}
                                                        </td>
                                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {item.name}
                                                        </th>
                                                        <td className="py-4 px-6">
                                                            {item.email}
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            {item.role}
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            {new Date(item.createdAt).getUTCDate() + "-" + (new Date(item.createdAt).getMonth() + 1) + "-" + new Date(item.createdAt).getUTCFullYear() + "  " + new Date(item.createdAt).getHours() + ":" + new Date(item.createdAt).getMinutes() + ":" + new Date(item.createdAt).getSeconds()}
                                                        </td>
                                                        <td className="py-4 px-6 space-x-[1rem] text-center">
                                                            {/* <a href="#" className="font-medium mx-10"><i className="fa text-blue-300">&#xf06e;</i>&nbsp;View</a> */}
                                                            <button onClick={() => {
                                                                setOpen({
                                                                    state: true,
                                                                    value: item.email
                                                                })
                                                            }} className="font-medium "><CancelIcon fontSize='small' /></button>
                                                            <EditUser getUser={getUsers} item={item} />
                                                        </td>
                                                    </tr>)
                                                }) : null}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageUsers