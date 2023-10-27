import React, { useEffect, useState } from 'react'

const PrivacyPolicy = () => {

    let [text, setText] = useState()

    async function getData() {
        let data = await fetch("/get_policy", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        setText({__html: res[0].content})
    }

    useEffect(() => {
     getData()
    }, [])
    


    return (
        <div className='mx-5'>
            <h1>Privacy Policy</h1>
            <div dangerouslySetInnerHTML={text ? text :null}>
            </div>

        </div>
    )
}

export default PrivacyPolicy