import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function editUser({ item, getUser }) {
    const [open, setOpen] = useState(false)
    const [role, setRole] = useState(item.role)


    const cancelButtonRef = useRef(null)

    async function handelChange(e) {
        e.preventDefault()

        setOpen(false)

        let { name, email, password, role } = e.target


        let data = await fetch(`/updt_user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: password.value ? JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value,
                role: role.value
            }) : JSON.stringify({
                name: name.value,
                email: email.value,
                role: role.value
            })
        })

        let res = await data.json()

        alert(res.status)

        getUser()

    }



    return (
        <>
            <span onClick={() => setOpen(true)} ><img className='inline cursor-pointer' width={20} src="../assets/icons/editing.png" alt="" /> </span>
            <Transition.Root show={open} as={Fragment}>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-1/3 sm:max-w-full">
                                    <form onSubmit={handelChange}>
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div className='px-10'>
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-xl font-semibold leading-6 py-[2rem] text-gray-900">
                                                        Add New
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <div>
                                                            <p className='mb-[0.5rem] font-semibold text-lg'>Name</p>
                                                            <input disabled value={item.name} required autoComplete="null" name='name' className='mb-[2rem]' type="text" />
                                                        </div>
                                                        <div>
                                                            <p className='mb-[0.5rem] font-semibold text-lg'>Email</p>
                                                            <input disabled value={item.email} required autoComplete="null" name='email' className='mb-[2rem]' type="text" />
                                                        </div>
                                                        <div>
                                                            <p className='mb-[1rem] font-semibold text-lg'>Updated Password</p>
                                                            <input autoComplete="null" name='password' className='px-[2rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                                                        </div>
                                                        <div>
                                                            <p className='mb-[1rem] font-semibold text-lg'>Role</p>
                                                            <select className='px-[2rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' onChange={(e) => setRole(e.target.value)} value={role} name="role" id="">
                                                                <option value="admin">Admin</option>
                                                                <option value="editor">Editor</option>
                                                                <option value="manager">Manager</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-12 py-12 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            >
                                                Add
                                            </button>
                                            <button
                                                type="submit"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-12 py-12 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setOpen(false)
                                                }}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
