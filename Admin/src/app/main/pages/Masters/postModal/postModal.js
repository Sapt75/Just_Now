import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Example({ status, item }) {
    const [open, setOpen] = useState(false)
    const [pin, setPin] = useState(status ? item.pincode : "")
    const [post, setPost] = useState(status ? item.postoffice_name : "")
    const [city, setCity] = useState(status ? item.City : "")
    const [state, setState] = useState(status ? item.State : "")

    const cancelButtonRef = useRef(null)


    if(item){
        if(pin !== item.pincode || post !== item.postoffice_name || city !== item.City || state !== item.State){
            setPin(item.pincode)
            setPost(item.postoffice_name)
            setCity(item.City)
            setState(item.State)
        }
    }


    async function handelChange(e) {
        e.preventDefault()

        setOpen(false)

        let { pincode, City, State, postoffice_name } = e.target

        let data = await fetch(`/${status ? "update_post" : "add_pincode"}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item ? {
                original: item,
                changed: {
                    pincode: pincode.value,
                    City: City.value,
                    State: State.value,
                    postoffice_name: postoffice_name.value
                }
            } : {
                pincode: pincode.value,
                City: City.value,
                State: State.value,
                postoffice_name: postoffice_name.value
            })
        })

    }



    return (
        <>
            {status ? <span onClick={() => setOpen(true)} ><img className='inline cursor-pointer' width={20} src="../assets/icons/editing.png" alt="" /> </span> : <button onClick={() => setOpen(true)} className='px-28 py-8 bg-purple-600 text-white mx-6 rounded-20'>Add New</button>}
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
                                                            <p className='mb-[1rem] font-semibold text-lg'>Pincode</p>
                                                            <input onChange={(e) => setPin(e.target.value)} value={pin} required autoComplete="null" name='pincode' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="number" />
                                                        </div>
                                                        <div>
                                                            <p className='mb-[1rem] font-semibold text-lg'>Post Office</p>
                                                            <input onChange={(e) => setPost(e.target.value)} value={post} required autoComplete="null" name='postoffice_name' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                                                        </div>
                                                        <div>
                                                            <p className='mb-[1rem] font-semibold text-lg'>City</p>
                                                            <input onChange={(e) => setCity(e.target.value)} value={city} required autoComplete="null" name='City' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                                                        </div>
                                                        <div>
                                                            <p className='mb-[1rem] font-semibold text-lg'>State</p>
                                                            <input onChange={(e) => setState(e.target.value)} value={state} required autoComplete="null" name='State' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
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
