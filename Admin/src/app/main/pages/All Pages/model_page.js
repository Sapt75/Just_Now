import React, { useEffect, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./homepage.css"
// import React from 'react';

function ModelPage() {

    const [advert, setAdvert] = useState({
        image: "https://sfondo.info/i/original/e/b/8/37366.jpg",
        link: "",
        status: true
    })

    async function getItem() {
        let data = await fetch(`/model_advertisement`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let res = await data.json()
        setAdvert({
            image: res[0].advertisement_image,
            link: res[0].advertisement_link,
            status: res[0].status
        })
    }

    async function changeAdvertisement(itm, type) {
        if (type === "image") {
            let data = await fetch(`/change_model_advertisement`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    image: itm
                })
            })
            let res = await data.json()
            alert(res)
        } else {
            let data = await fetch(`/change_advertisement`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    link: itm
                })
            })
            let res = await data.json()
            alert(res)
        }
    }

    async function showStatus(itm) {

        setAdvert({
            image: advert.image,
            link: advert.link,
            status: itm
        })


        let data = await fetch(`/change_model_status/${itm}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let res = await data.json()
        alert(res)
    }


    useEffect(() => {
        getItem()
    }, [])


    return (
        <>
            <div className='m-[3rem]'>
                <div>
                    <h1 className='text-2xl font-semibold mb-[3rem]'>Model Page Advertisement</h1>
                    <div>
                        <img className='w-full h-[25rem] object-cover object-bottom' src={`${advert ? advert.image : null}`} alt="" />
                        <div className='text-center pt-[4rem]'>
                            <label class="p-6 bg-blue-500 text-white">
                                <input accept='image/*' onChange={() => {

                                    let input = document.getElementById("advert-id2");
                                    let fReader = new FileReader();
                                    fReader.readAsDataURL(input.files[0]);
                                    fReader.onloadend = function (event) {
                                        changeAdvertisement(event.target.result, "image")
                                        let newItm = {
                                            image: event.target.result,
                                            link: advert.link,
                                            status: advert.status
                                        }
                                        setAdvert(newItm)
                                    }
                                }} type="file" id='advert-id2' />
                                Change Image
                            </label>
                            <button onClick={() => {
                                if (advert.status === true) {
                                    showStatus(false)
                                } else {
                                    showStatus(true)
                                }
                            }} className='py-5 px-[2rem] mx-[1rem] bg-blue-500 text-white'>{advert.status ? "Visible" : "Hidden"}</button>
                        </div>
                    </div>
                    <div className='text-center pt-[4rem]'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            changeAdvertisement(e.target.link.value, "link")
                            let newItm = {
                                image: advert.image,
                                link: e.target.link.value,
                                status: advert.status
                            }
                            setAdvert(newItm)
                        }}>
                            <input className='py-3' onChange={(e) => {

                                let newItm = {
                                    image: advert.image,
                                    link: e.target.value,
                                    status: advert.status
                                }
                                setAdvert(newItm)

                            }} type="text" name='link' value={`${advert ? advert.link : null}`} />
                            <button className='px-4 py-3 bg-blue-600 font-semibold mx-5 text-white' type='submit'>Change Advertisement</button>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ModelPage
