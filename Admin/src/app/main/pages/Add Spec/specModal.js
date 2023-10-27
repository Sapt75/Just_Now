import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Example({ title, data, subHead , updateState, status }) {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  function handelChange(e) {
    e.preventDefault()

    let allData = data

    allData[title][((e.target.item.value).toLowerCase()).replace(" ", "_")] = {}

    localStorage.setItem("dat", JSON.stringify(allData))

    updateState(title)

    setOpen(false)
  }

  function handelSub(e) {
    e.preventDefault()

    let allData = data

    allData[title][subHead][((e.target.name.value).toLowerCase()).replace(" ", "_")] = `${e.target.value.value}`

    localStorage.setItem("sub", JSON.stringify(allData))

    updateState()

    setOpen(false)
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className='px-28 py-8 bg-purple-600 text-white mx-6 rounded-20'>Add New</button>
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
                  <form onSubmit={status ? handelSub : handelChange}>
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className='px-10'>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title as="h3" className="text-xl font-semibold leading-6 py-[2rem] text-gray-900">
                            Add {title}
                          </Dialog.Title>
                          {status ? <div className="mt-2">
                          <div>
                            <p className='mb-[1rem] font-semibold text-lg'>Name</p>
                            <input required autocomplete="null" name='name' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                          </div>
                          <div>
                            <p className='mb-[1rem] font-semibold text-lg'>Value</p>
                            <input required autocomplete="null" name='value' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                          </div>
                          </div>:<div className="mt-2">
                            <input required autocomplete="null" name='item' className='px-[3rem] mb-[2rem] py-[0.5rem] border-2 rounded-6 border-gray-500' type="text" />
                          </div>}
                          
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
