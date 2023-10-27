import React, { useEffect, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./homepage.css"


const About_Us = () => {

    let [text, setText] = useState()
    

    let mod = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block', 'background', "align", "direction", "video"]
        ]
    }

    async function changeData() {
        let data = await fetch("/change_about", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: text
            })
        })

        let res = await data.json()
    }

    async function getData() {
        let data = await fetch("/get_about", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        setText(res[0].content)
    }

    useEffect(() => {
        getData()
       }, [])


    return (
        <div className='mx-[5rem] my-[3rem]'>
            <h1>About Us</h1>
            <div className='my-[2rem]'>
                <ReactQuill value={text} onChange={(content, delta, source, editor) => {
                    setText(editor.getHTML());
                }} theme="snow" modules={mod} />
                <div className='text-center'>
                    <button onClick={changeData} className='py-4 px-8 bg-blue-500 text-white font-semibold my-[2rem] rounded-md'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default About_Us