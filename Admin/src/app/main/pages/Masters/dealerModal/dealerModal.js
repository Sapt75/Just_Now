import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function DealerModal({ status, item }) {
    const [open, setOpen] = useState(false)

    const [brand, setBrand] = useState(status ? item.brand_name : "")
    const [address, setAddress] = useState(status ? item.complete_address : "")
    const [state, setState] = useState(status ? item.state : "")
    const [pincode, setPincode] = useState(status ? item.pincode : "")
    const [city, setCity] = useState(status ? item.city_name : "")
    const [email, setEmail] = useState(status ? item.email : "")
    const [cityi, setCityI] = useState(status ? item.city_id : "")
    const [phone, setPhone] = useState(status ? item.phone : "")
    const [name, setName] = useState(status ? item.dealer_name : "")

    const cancelButtonRef = useRef(null)


    async function handelChange(e) {
        e.preventDefault()

        setOpen(false)

        let { brand_name, state, city_id, city_name, dealer_name, complete_address, pincode, email, phone } = e.target

        let data = await fetch(`/${status ? "update_dealer" : "add_dealer"} `, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item ? {
                original: item,
                changed: {
                    brand_name: brand_name.value,
                    state: state.value,
                    city_id: city_id.value,
                    city_name: city_name.value,
                    dealer_name: dealer_name.value,
                    complete_address: complete_address.value,
                    pincode: pincode.value,
                    email: email.value,
                    phone: phone.value
                }
            } : {
                brand_name: brand_name.value,
                state: state.value,
                city_id: city_id.value,
                city_name: city_name.value,
                dealer_name: dealer_name.value,
                complete_address: complete_address.value,
                pincode: pincode.value,
                email: email.value,
                phone: phone.value
            })
        })

    }



    return (
        <>
            {status ? <span onClick={() => setOpen(true)} ><img className='inline' width={20} src="../assets/icons/editing.png" alt="" /> </span> : <button onClick={() => setOpen(true)} className='px-28 py-8 bg-purple-600 text-white mx-6 rounded-20'>Add New</button>}
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-1/2 sm:max-w-full">
                                    <form onSubmit={handelChange}>
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div className='px-10'>
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-xl font-semibold leading-6 py-[2rem] text-gray-900">
                                                        Add New
                                                    </Dialog.Title>
                                                    <div className="mt-2 flex justify-evenly">
                                                        <div>
                                                            <div>
                                                                <p className='mb-[1rem] font-semibold text-lg'>Brand</p>
                                                                <input onChange={(e) => setBrand(e.target.value)} value={brand} required autoComplete="null" name='brand_name' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                                                            </div>
                                                            <div>
                                                                <p className='mb-[1rem] font-semibold text-lg'>State</p>
                                                                <input disabled={status ? true : false} value={state} name='state' className={`mb-[2rem] py-[0.5rem] ${status ? null: "border-2 rounded-6 border-gray-500"}`} type="text" />
                                                            </div>
                                                            <div>
                                                                <p className='mb-[1rem] font-semibold text-lg'>City</p>
                                                                <input disabled={status ? true : false} value={city} name='city_name' className={`mb-[2rem] py-[0.5rem] ${status ? null: "border-2 rounded-6 border-gray-500"}`} type="text" />
                                                            </div>
                                                            <div>
                                                                <p className='mb-[1rem] font-semibold text-lg'>City ID</p>
                                                                <input disabled={status ? true : false} value={cityi} name='city_id' className={`mb-[2rem] py-[0.5rem] ${status ? null: "border-2 rounded-6 border-gray-500"}`} type="text" />
                                                            </div>
                                                            <div>
                                                                <p className='mb-[1rem] font-semibold text-lg'>Dealer Name</p>
                                                                <input onChange={(e) => setName(e.target.value)} value={name} required autoComplete="null" name='dealer_name' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div>
                                                                <p className='mb-[1rem] font-semibold text-lg'>Full Address</p>
                                                                <input onChange={(e) => setAddress(e.target.value)} value={address} required autoComplete="null" name='complete_address' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                                                            </div>
                                                            <div>
                                                                <p className='mb-[1rem] font-semibold text-lg'>Pincode</p>
                                                                <input onChange={(e) => setPincode(e.target.value)} value={pincode} required autoComplete="null" name='pincode' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="number" />
                                                            </div>
                                                            <div>
                                                                <p className='mb-[1rem] font-semibold text-lg'>Email</p>
                                                                <input onChange={(e) => setEmail(e.target.value)} value={email} required autoComplete="null" name='email' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                                                            </div>
                                                            <div>
                                                                <p className='mb-[1rem] font-semibold text-lg'>Phone No</p>
                                                                <input onChange={(e) => setPhone(e.target.value)} value={phone} required autoComplete="null" name='phone' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="number" />
                                                            </div>
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
