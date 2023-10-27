import React, { useEffect, useState, useRef } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LabTabs from './tabs';
import Spectabs from './spectabs';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import JsFileDownloader from 'js-file-downloader';
import './tabs.min.css'



const Add_New_Car = () => {

    let [text, setText] = useState()
    let [brandd, setBrandD] = useState()
    let [colord, setColor] = useState()
    let [mileaged, setMileage] = useState()
    let [versiond, setVersion] = useState()
    let [pros, setPros] = useState()
    let [cons, setCons] = useState()
    let [status, setStatus] = useState(true)
    let [logo, setLogo] = useState([])
    let [main, setMain] = useState([])
    let [exterior, setExterior] = useState([])
    let [interior, setInterior] = useState([])
    let [colors, setColors] = useState([])
    let [thumbs, setThumbs] = useState([])
    let box = useRef(null)
    let [vprice, setVPrice] = useState(false)
    let [mprice, setMPrice] = useState(false)
    let [checkui, setCheckui] = useState()
    let [sub, setSub] = useState(1)

    let mmin_price = useRef(null)
    let mmax_price = useRef(null)
    let vmin_price = useRef(null)
    let vmax_price = useRef(null)

    const usenav = useNavigate();


    let mod = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block', 'background', "align", "direction", "video"]
        ]
    }


    async function addCar(car) {
        await fetch(`/imagekit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(car)
        })


        await fetch(`/add_new_car`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(car)
        })
    }


    function removeImages(name, value) {
        if (name === "logo") {
            setLogo(logo.filter((item) => {
                if (item !== value) {
                    return (item)
                }
            }))

        } else if (name === "main") {
            setMain(main.filter((item) => {
                if (item !== value) {
                    return (item)
                }
            }))
        } else if (name === "exterior") {
            setExterior(exterior.filter((item) => {
                if (item !== value) {
                    return (item)
                }
            }))
        } else if (name === "interior") {
            setInterior(interior.filter((item) => {
                if (item !== value) {
                    return (item)
                }
            }))
        } else if (name === "colors") {
            setColors(colors.filter((item) => {
                if (item !== value) {
                    return (item)
                }
            }))
        }
        console.log(name, value)
    }

    async function getCarData() {
        let data = await fetch(`/manage_brand/Hyundai`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        setText(res.brand_description)
    }

    async function modelDesc() {
        let data = await fetch(`/get_admin_car/Hyundai/Aura`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()

        setBrandD(res.model_description)
    }

    async function colorDesc() {
        let data = await fetch(`/color_desc`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()

        setColor(res.color_algorithm)
    }

    async function mileageDesc() {
        let data = await fetch(`/mileage_desc`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()

        setMileage(res.mileage_algorithm)
    }

    async function varientDesc() {
        let data = await fetch(`/varient_desc`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()

        setVersion(res.varient_description)
    }





    async function allImages(e) {
        let formData = new FormData()


        await Promise.allSettled(Object.keys(e.target.files).map((item, index) => {

            formData.append("images", e.target.files[item])

            let fReader = new FileReader();

            if (e.target.name === "brand_logo") {
                setLogo(preValues => [...preValues, e.target.files[item]])
            } else if (e.target.name === "hero_image") {
                setMain(preValues => [...preValues, e.target.files[item]])
            } else if (e.target.name === "exterior") {
                setExterior(preValues => [...preValues, e.target.files[item]])
            } else if (e.target.name === "interior") {
                setInterior(preValues => [...preValues, e.target.files[item]])
            } else if (e.target.name === "colors") {
                setColors(preValues => [...preValues, e.target.files[item]])
            } else if (e.target.name === "thumbs") {
                setThumbs(preValues => [...preValues, e.target.files[item]])
            }

            fReader.readAsDataURL(e.target.files[item]);

            fReader.onloadend = async function (event) {
                if (e.target.name === "brand_logo") {
                    let el = document.createElement("span")
                    el.classList.add("relative")
                    let im = document.createElement("img")
                    Object.assign(im, {
                        alt: `hero_image`,
                        src: event.target.result,
                        height: 150, // pixels
                        width: 150, // pixels
                        onerror: function (e) {
                            e.target.parentNode.remove()
                        }
                    })

                    let sp = document.createElement("span")
                    Object.assign(sp, {
                        className: "absolute top-0 right-0",
                        onclick: function (e) {
                            removeImages("logo", event.target.result)
                        }
                    })

                    sp.innerHTML = `<span><CancelIcon className='text-white cursor-pointer' /></span>`

                    el.appendChild(im)
                    el.appendChild(sp)
                    document.getElementById("brnd").appendChild(el)
                } else if (e.target.name === "hero_image") {
                    let el = document.createElement("span")
                    el.classList.add("relative")
                    let im = document.createElement("img")
                    Object.assign(im, {
                        alt: "main",
                        src: event.target.result,
                        height: 150, // pixels
                        width: 150, // pixels
                        onerror: function (e) {
                            e.target.parentNode.remove()
                        }
                    })

                    let sp = document.createElement("span")
                    Object.assign(sp, {
                        className: "absolute top-0 right-0",
                        onclick: function (e) {
                            removeImages("main", event.target.result)
                        }
                    })

                    sp.innerHTML = `<span><CancelIcon className='text-white cursor-pointer' /></span>`

                    el.appendChild(im)
                    el.appendChild(sp)
                    document.getElementById("mn").appendChild(el)
                } else if (e.target.name === "exterior") {

                    let el = document.createElement("span")
                    el.classList.add("relative")
                    let im = document.createElement("img")
                    Object.assign(im, {
                        alt: `exterior${index + 1} `,
                        src: event.target.result,
                        height: 150, // pixels
                        width: 150, // pixels
                        onerror: function (e) {
                            e.target.parentNode.remove()
                        }
                    })

                    let sp = document.createElement("span")
                    Object.assign(sp, {
                        className: "absolute top-0 right-0",
                        onclick: function (e) {
                            removeImages("exterior", event.target.result)
                        }
                    })

                    sp.innerHTML = `<span><CancelIcon className='text-white cursor-pointer' /></span>`

                    el.appendChild(im)
                    el.appendChild(sp)
                    document.getElementById("ext").appendChild(el)
                } else if (e.target.name === "interior") {
                    let el = document.createElement("span")
                    el.classList.add("relative")
                    let im = document.createElement("img")
                    Object.assign(im, {
                        alt: `interior${index + 1} `,
                        src: event.target.result,
                        height: 150, // pixels
                        width: 150, // pixels
                        onerror: function (e) {
                            e.target.parentNode.remove()
                        }
                    })

                    let sp = document.createElement("span")
                    Object.assign(sp, {
                        className: "absolute top-0 right-0",
                        onclick: function (e) {
                            removeImages("interior", event.target.result)
                        }
                    })

                    sp.innerHTML = `<span><CancelIcon className='text-white cursor-pointer' /></span>`

                    el.appendChild(im)
                    el.appendChild(sp)
                    document.getElementById("int").appendChild(el)
                } else if (e.target.name === "colors") {
                    let el = document.createElement("span")
                    el.classList.add("relative")
                    let im = document.createElement("img")
                    Object.assign(im, {
                        alt: `colors${index + 1} `,
                        src: event.target.result,
                        height: 150, // pixels
                        width: 150, // pixels
                        onerror: function (e) {
                            e.target.parentNode.remove()
                        }
                    })

                    let sp = document.createElement("span")
                    Object.assign(sp, {
                        className: "absolute top-0 right-0",
                        onclick: function (e) {
                            removeImages("colors", event.target.result)
                        }
                    })

                    sp.innerHTML = `<span><CancelIcon className='text-white cursor-pointer' /></span>`

                    el.appendChild(im)
                    el.appendChild(sp)
                    document.getElementById("col").appendChild(el)
                } else if (e.target.name === "thumbs") {
                    let el = document.createElement("span")
                    el.classList.add("relative")
                    let im = document.createElement("img")
                    Object.assign(im, {
                        alt: `thumbs${index + 1} `,
                        src: event.target.result,
                        height: 150, // pixels
                        width: 150, // pixels
                        onerror: function (e) {
                            e.target.parentNode.remove()
                        }
                    })

                    let sp = document.createElement("span")
                    Object.assign(sp, {
                        className: "absolute top-0 right-0",
                        onclick: function (e) {
                            removeImages("thumbs", event.target.result)
                        }
                    })

                    sp.innerHTML = `<span><CancelIcon className='text-white cursor-pointer' /></span>`

                    el.appendChild(im)
                    el.appendChild(sp)
                    document.getElementById("thumb").appendChild(el)
                }
            }
        }))


        let data = await fetch(`/img/${e.target.name}`, {
            method: "POST",
            body: formData
        })





    }


    async function cityPrices(e) {

        let formData = new FormData()

        formData.append("city", e.target.files[0])


        let data = await fetch(`/city_price`, {
            method: "POST",
            body: formData
        })
    }


    async function checkU(e) {
        setCheckui()
        let data = await fetch(`/check_uid/${e.target.value}`, {
            method: "GET"
        })

        try {
            let res = await data.json()
            setCheckui(res)
        } catch {
            setCheckui()
        }



    }


    async function downloadCsv() {
        let data = await fetch(`/csv_download`, {
            method: "GET"
        })
        let res = await data.json()


        let el = document.createElement("a")

        Object.assign(el, {
            href: res.path,
            download: "Sample.csv"
        })

        // document.getElementById("down").appendChild(el)

        el.click()

        el.remove()
    }





    async function handelData(e) {
        e.preventDefault()

        // subImage()

        let c = sessionStorage.getItem("counter") === null ? 0 : parseInt(sessionStorage.getItem("counter"))

        let allData = JSON.parse(sessionStorage.getItem("data")) === null ? {} : JSON.parse(sessionStorage.getItem("data"))


        Object.values(e.target).map((item) => {
            if ((item.nodeName === "INPUT" && item.type !== "file") || item.nodeName === "TEXTAREA") {
                if (!item.id) {
                    if (item.name === "youtube") {
                        if (Object.keys(allData).includes("youtube")) {
                            allData[item.name].push(item.value)
                        } else {
                            allData[item.name] = [item.value]
                        }
                    } else {
                        console.log(item.name)
                        allData[item.name] = item.value
                    }
                }
            }
        })

        sessionStorage.setItem("data", JSON.stringify(allData))

        // Object.values(e.target).map((item) => {
        //     if (item.nodeName === "INPUT" || item.nodeName === "TEXTAREA") {
        //         Object.defineProperty(allData, item.name, {
        //             value: item.value,
        //             writable: false
        //         })
        //     }
        // })





        Object.keys(allData).includes("brand_description") ? null : text ? allData["brand_description"] = text : null
        Object.keys(allData).includes("model_description") ? null : brandd ? allData["model_description"] = brandd : null
        Object.keys(allData).includes("colors_algorithm") ? null : colord ? allData["colors_algorithm"] = colord : null
        Object.keys(allData).includes("mileage_algorithm") ? null : mileaged ? allData["mileage_algorithm"] = mileaged : null
        Object.keys(allData).includes("varient_description") ? null : versiond ? allData["varient_description"] = versiond : null
        Object.keys(allData).includes("pros") ? null : pros ? allData["pros"] = pros : null
        Object.keys(allData).includes("cons") ? null : cons ? allData["cons"] = cons : null

        console.log(c, allData)


        if (c === box.current.children.length - 1) {
            allData["Features"] = JSON.parse(sessionStorage.getItem("features"))
            allData["Specifications"] = JSON.parse(sessionStorage.getItem("specifications"))
            addCar(allData)
            // usenav("/pages/manage_brand")
        }


        if ((box.current.children.length) - 1 !== c) {
            box.current.children[c + 1].classList.remove("hidden")
            box.current.children[c].classList.add("hidden")
            c += 1
            sessionStorage.setItem("counter", c)
        }
    }



    useEffect(() => {
        if (sessionStorage.getItem("counterr") !== '1') {
            window.location = "/"
            sessionStorage.setItem("counterr", 1)
        }
    }, [])






    return (
        <>
            <div className='flex justify-end m-20'>
                <button className='px-14 py-8 bg-purple-600 text-white mx-6 rounded-20'>View All Brands</button>
                <button className='px-14 py-8 bg-purple-600 text-white mx-6 rounded-20'>Add New</button>
            </div>

            <div ref={box}>
                <div className='mx-[4rem]'>
                    <form onSubmit={handelData}>
                        <div className='flex'>
                            <div className='w-[20rem]'>
                                <p className='text-lg'>Add Brand Name</p>
                            </div>
                            <input required autocomplete="null" name='brand' className='px-[2rem] py-[0.5rem]' type="text" />
                        </div>
                        <div className='flex mt-[4rem]'>
                            <div className='w-[20rem]'>
                                <p className='text-lg'>UID</p>
                            </div>
                            <span className='flex space-x-5'>
                                <input onChange={checkU} required autocomplete="null" name='uid' className='px-[2rem] py-[0.5rem]' type="number" />
                                {checkui ? <p className='text-red-700 mt-5 font-semibold' >UID Already Exists</p> : null}
                            </span>
                        </div>
                        <div className='flex mt-[4rem]'>
                            <div className='w-[20rem]'>
                                <p className='text-lg'>Add Brand Logo</p>
                            </div>
                            <label class="p-5 bg-blue-500 text-white cursor-pointer">
                                <input onChange={allImages} required autocomplete="null" id='brand_logo' name='brand_logo' accept='image/*' type="file" />
                                Brand Logo
                            </label>
                        </div>
                        <div id='brnd' className='flex my-[2rem] space-x-10'></div>
                        <div className='my-[3rem]'>
                            <p className='text-lg'>Add Brand Description</p>
                            <div className='my-[2rem]'>
                                <ReactQuill value={text} onChange={(content, delta, source, editor) => {
                                    setText(editor.getHTML());
                                }} theme="snow" modules={mod} />
                                <label class="mcui-checkbox">
                                    <input onClick={(e) => {
                                        if (e.target.checked) {
                                            getCarData()
                                        } else {
                                            setText()
                                        }
                                    }} type="checkbox" />
                                    <div>
                                        <svg class="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
                                            <title>checkmark-circle</title>
                                            <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                                        </svg>
                                    </div>
                                    <div>Import Brand Algorithm</div>
                                </label>
                                <div className='text-center'>
                                    <p className='font-semibold my-[1rem]'><ReportProblemIcon className="text-red-700" sx={{ color: "red[500]" }} /> To activate a brand at least one car model need to be added.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center m-20'>

                            <button disabled={checkui ? true : false} type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
                        </div>
                    </form>
                </div>
                <div className='mx-[4rem] hidden'>
                    <form onSubmit={handelData}>
                        <div className='flex'>
                            <div className='w-[20rem]'>
                                <p className='text-lg'>Add Car Model Name</p>
                            </div>
                            <input required autocomplete="null" name='model_name' className='px-[2rem] py-[0.5rem]' type="text" />
                        </div>
                        <div className='flex mt-[4rem]'>
                            <div className='w-[20rem]'>
                                <p className='text-lg'>Model Id</p>
                            </div>
                            <input required autocomplete="null" name='model_id' className='px-[2rem] py-[0.5rem]' type="text" />
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Add Model Description</p>
                            <div className='my-[2rem]'>
                                <ReactQuill value={brandd} onChange={(content, delta, source, editor) => {
                                    setBrandD(editor.getHTML());
                                }} theme="snow" modules={mod} />
                            </div>
                            <label class="mcui-checkbox">
                                <input onClick={(e) => {
                                    if (e.target.checked) {
                                        modelDesc()
                                    } else {
                                        setText()
                                    }
                                }} type="checkbox" />
                                <div>
                                    <svg class="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
                                        <title>checkmark-circle</title>
                                        <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                                    </svg>
                                </div>
                                <div>Import Model Algorithm</div>
                            </label>
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Add Color Description</p>
                            <div className='my-[2rem]'>
                                <ReactQuill value={colord} onChange={(content, delta, source, editor) => {
                                    setColor(editor.getHTML());
                                }} theme="snow" modules={mod} />
                            </div>
                            <label class="mcui-checkbox">
                                <input onClick={(e) => {
                                    if (e.target.checked) {
                                        colorDesc()
                                    } else {
                                        setColor()
                                    }
                                }} type="checkbox" />
                                <div>
                                    <svg class="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
                                        <title>checkmark-circle</title>
                                        <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                                    </svg>
                                </div>
                                <div>Import Color Algorithm</div>
                            </label>
                        </div>
                        <p className='text-lg font-semibold my-[4rem]'>Add Model Images</p>
                        <div className='mt-[4rem]'>
                            <p className='text-lg mb-[2rem]'>Add Main Image</p>
                            <label class="p-5 bg-blue-500 text-white cursor-pointer">
                                <input onChange={allImages} required autocomplete="null" name='hero_image' id='hero_image' accept='image/*' type="file" />
                                Add Image
                            </label>
                        </div>
                        <div id='mn' className='flex my-[2rem] space-x-10'></div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg mb-[2rem]'>Add Exterior Images</p>
                            <label class="p-5 bg-blue-500 text-white cursor-pointer">
                                <input
                                    onChange={allImages} required autocomplete="null" id='exterior' name='exterior' accept='image/*' type="file" multiple />
                                Add Image
                            </label>
                        </div>
                        <div id='ext' className='flex my-[2rem] space-x-10'></div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg mb-[2rem]'>Add Interior Images</p>
                            <label class="p-5 bg-blue-500 text-white cursor-pointer">
                                <input
                                    onChange={allImages} required autocomplete="null" id='interior' name='interior' accept='image/*' type="file" multiple />
                                Add Image
                            </label>
                        </div>
                        <div id='int' className='flex my-[2rem] space-x-10'></div>
                        <p className='text-lg font-semibold my-[4rem]'>Add Model Colors</p>
                        <div className='mt-[4rem]'>
                            <p className='text-lg mb-[2rem]'>Add Colors</p>
                            <label class="p-5 bg-blue-500 text-white cursor-pointer">
                                <input onChange={allImages} required autocomplete="null" id='colors' name='colors' accept='image/*' type="file" multiple />
                                Add Image
                            </label>
                        </div>
                        <div id='col' className='flex my-[2rem] space-x-10'></div>
                        <p className='text-lg font-semibold my-[4rem]'>Add Model Thumbs</p>
                        <div className='mt-[4rem]'>
                            <p className='text-lg mb-[2rem]'>Add Colors</p>
                            <label class="p-5 bg-blue-500 text-white cursor-pointer">
                                <input onChange={allImages} required autocomplete="null" id='thumbs' name='thumbs' accept='image/*' type="file" multiple />
                                Add Image
                            </label>
                        </div>
                        <div id='thumb' className='flex my-[2rem] space-x-10'></div>
                        <div>
                            <div className='flex justify-center m-20'>

                                <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
                            </div>


                        </div>
                    </form>
                </div>
                <div className='mx-[4rem] hidden'>
                    <form onSubmit={handelData}>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Pros</p>
                            <div className='my-[2rem]'>
                                <ReactQuill value={pros} onChange={(content, delta, source, editor) => {
                                    setPros(editor.getHTML());
                                }} theme="snow" modules={mod} />
                            </div>
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Cons</p>
                            <div className='my-[2rem]'>
                                <ReactQuill value={cons} onChange={(content, delta, source, editor) => {
                                    setCons(editor.getHTML());
                                }} theme="snow" modules={mod} />
                            </div>
                        </div>
                        <div className='flex mt-[4rem]'>
                            <div className='w-[20rem]'>
                                <p className='text-lg'>Seating Capacity</p>
                            </div>
                            <input required autocomplete="null" name='seating_capacity' className='px-[2rem] py-[0.5rem]' type="text" />
                        </div>
                        <div className='flex mt-[4rem]'>
                            <div className='w-[20rem]'>
                                <p className='text-lg'>Transmission Type</p>
                            </div>
                            <input required autocomplete="null" name='transmission_type' className='px-[2rem] py-[0.5rem]' type="text" />
                        </div>
                        <div className='flex mt-[4rem]'>
                            <div className='w-[20rem]'>
                                <p className='text-lg'>Body Type</p>
                            </div>
                            <input required autocomplete="null" name='body_type' className='px-[2rem] py-[0.5rem]' type="text" />
                        </div>
                        <p className='text-lg font-semibold my-[4rem]'>Add Model Videos</p>
                        <div>
                            {sub > 0 ? Array.from(Array(sub), (e, i) => {
                                return (<div className='mt-[2rem]'>
                                    <p className='mb-10 text-lg'>Add Youtube Url</p>
                                    <input className='px-[3rem] py-[0.8rem]' type="text" name="youtube" />
                                </div>)
                            }) : null}
                            <button className='my-[2rem] px-10 py-6 bg-purple-600 text-white mx-6' onClick={(e) => {
                                e.preventDefault()
                                setSub(sub += 1)
                            }}>Add More</button>
                        </div>
                        <div className='flex justify-center m-20'>
                            <button type='submit' className=' px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
                        </div>
                    </form>
                </div>
                <div className='mx-[4rem] hidden'>
                    <form onSubmit={handelData}>
                        <div className='mt-[4rem]'>
                            <p className='text-lg mb-[2rem]'>Add Rating</p>
                            <input min={1} max={5} required autocomplete="null" name='rating' className='px-[3rem] py-[0.8rem]' type="number" />
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Add Price</p>
                            <div className='space-x-16 mt-[2rem]'>
                                <input onChange={(e) => {
                                    if (e.target.value) {
                                        if (mmax_price.current.value === e.target.value) {
                                            setMPrice(true)
                                        } else {
                                            setMPrice(false)
                                        }
                                    }
                                }} ref={mmin_price} required autocomplete="null" name='min-price' placeholder='min-price' className='px-[3rem] py-[0.8rem]' type="number" />
                                <input onChange={(e) => {
                                    if (e.target.value) {
                                        if (mmin_price.current.value === e.target.value) {
                                            setMPrice(true)
                                        } else {
                                            setMPrice(false)
                                        }
                                    }
                                }} ref={mmax_price} required autocomplete="null" name='max-price' placeholder='max-price' className='px-[3rem] py-[0.8rem]' type="number" />
                                <span className={`${mprice ? null : "hidden"} text-red-800 font-semibold`} >Min Price & Max Price Value Cannot be Same</span>
                            </div>
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Add Mileage Description</p>
                            <div className='my-[2rem]'>
                                <ReactQuill value={mileaged} onChange={(content, delta, source, editor) => {
                                    setMileage(editor.getHTML());
                                }} theme="snow" modules={mod} />
                            </div>
                            <label class="mcui-checkbox">
                                <input onClick={(e) => {
                                    if (e.target.checked) {
                                        mileageDesc()
                                    } else {
                                        setMileage()
                                    }
                                }} type="checkbox" />
                                <div>
                                    <svg class="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
                                        <title>checkmark-circle</title>
                                        <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                                    </svg>
                                </div>
                                <div>Import Mileage Algorithm</div>
                            </label>
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Add Mileage</p>
                            <div className='space-x-16 mt-[2rem]'>
                                <input required autocomplete="null" name='min-mileage' placeholder='min-mileage' className='px-[3rem] py-[0.8rem]' type="number" />
                                <input required autocomplete="null" name='max-mileage' placeholder='max-mileage' className='px-[3rem] py-[0.8rem]' type="number" />
                            </div>
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Add Engine</p>
                            <div className='space-x-16 mt-[2rem]'>
                                <input required autocomplete="null" name='min-engine' placeholder='min-engine' className='px-[3rem] py-[0.8rem]' type="number" />
                                <input required autocomplete="null" name='max-engine' placeholder='max-engine' className='px-[3rem] py-[0.8rem]' type="number" />
                            </div>
                        </div>
                        <div className='flex justify-center m-20'>

                            <button disabled={mprice === true ? true : false} type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
                        </div>
                    </form>
                </div>
                <div className='mx-[4rem] hidden'>
                    <form onSubmit={handelData}>
                        <div className='mt-[4rem] flex space-x-24'>
                            <div className='w-[10rem]'>
                                <p className='text-lg mb-[2rem]'>Car Brand</p>
                            </div>
                            <input disabled value={sessionStorage.getItem("data") ? JSON.parse(sessionStorage.getItem("data")).brand:null} autocomplete="null" name='brand' className='px-[3rem] py-[0.8rem]' type="text" />
                        </div>
                        <div className='mt-[4rem] flex space-x-24'>
                            <div className='w-[10rem]'>
                                <p className='text-lg'>Car Model</p>
                            </div>
                            <div className='space-x-16 mt-[2rem]'>
                                <input disabled value={sessionStorage.getItem("data") ? JSON.parse(sessionStorage.getItem("data")).model_name:null} autocomplete="null" name='model_name' className='px-[3rem] py-[0.8rem]' type="text" />
                            </div>
                        </div>
                        <div className='mt-[4rem] flex space-x-24'>
                            <div className='w-[10rem]'>
                                <p className='text-lg mb-[2rem]'>Car Varient</p>
                            </div>
                            <input required autocomplete="null" name='version_name' className='px-[3rem] py-[0.8rem]' type="text" />
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Add Varient Description</p>
                            <div className='my-[2rem]'>
                                <ReactQuill value={versiond} onChange={(content, delta, source, editor) => {
                                    setVersion(editor.getHTML());
                                }} theme="snow" modules={mod} />
                            </div>
                            <label class="mcui-checkbox">
                                <input onClick={(e) => {
                                    if (e.target.checked) {
                                        varientDesc()
                                    } else {
                                        setVersion()
                                    }
                                }} type="checkbox" />
                                <div>
                                    <svg class="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
                                        <title>checkmark-circle</title>
                                        <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                                    </svg>
                                </div>
                                <div>Import Varient Algorithm</div>
                            </label>
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Add Version Price</p>
                            <div className='space-x-16 mt-[2rem]'>
                                <input onChange={(e) => {
                                    if (e.target.value) {
                                        if (vmax_price.current.value === e.target.value) {
                                            setVPrice(true)
                                        } else {
                                            setVPrice(false)
                                        }
                                    }
                                }} ref={vmin_price} required autocomplete="null" name='vmin-price' placeholder='min-price' className='px-[3rem] py-[0.8rem]' type="number" />
                                <input onChange={(e) => {
                                    if (e.target.value) {
                                        if (vmin_price.current.value === e.target.value) {
                                            setVPrice(true)
                                        } else {
                                            setVPrice(false)
                                        }
                                    }
                                }} ref={vmax_price} required autocomplete="null" name='vmax-price' placeholder='max-price' className='px-[3rem] py-[0.8rem]' type="number" />
                                <span className={`${vprice ? null : "hidden"} text-red-800 font-semibold`} >Min Price & Max Price Value Cannot be Same</span>
                            </div>
                        </div>
                        <div className='mt-[4rem]'>
                            <p className='text-lg'>Select Section</p>
                            <div className='space-x-16 mt-[2rem] flex'>

                                <button onClick={(e) => {
                                    e.preventDefault()
                                    if (!status) {
                                        setStatus(true)
                                    }
                                }} className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Features</button>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    if (status) {
                                        setStatus(false)
                                    }
                                }} className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Specifications</button>

                            </div>
                            {status ? <LabTabs /> : <Spectabs />}
                        </div>
                        <p className='font-semibold my-[1rem]'><ReportProblemIcon className="text-red-700" sx={{ color: "red[500]" }} /> To activate a brand at least one car model need to be added.</p>
                        <div className='flex justify-center m-20'>

                            <button disabled={vprice === true ? true : false} type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
                        </div>
                    </form>
                </div>
                <div className='mx-[4rem] hidden'>
                    <form onSubmit={handelData}>
                        <div className='mt-[4rem]'>
                            <div>
                                <h1 className='text-4xl font-semibold mb-[4rem]'>Provide the list of Price for different cities</h1>
                            </div>
                            <button onClick={downloadCsv} class="p-10 bg-blue-500 mx-[4rem] text-white font-semibold">Download Sample CSV</button>
                            <label class="p-10 bg-blue-500 text-white font-semibold cursor-pointer">
                                <input required onChange={cityPrices} autocomplete="null" accept=".csv" type="file" />
                                Upload CSV
                            </label>
                        </div>
                        <div className='flex justify-center m-20'>
                            <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Save & Proceed</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Add_New_Car
