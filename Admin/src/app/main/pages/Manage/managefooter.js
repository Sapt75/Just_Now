import React, { useEffect, useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Manage_Footer = () => {


  let [socials, setSocials] = useState()


  async function getSocial() {
    let data = await fetch("/get_social", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()
    setSocials(res)
  }

  async function updt(e) {
    setSocials(() => {
      const entries = Object.entries(socials).map(([key, value]) => key === e.target.name ? [key, e.target.value] : [key, value]);
      const result = Object.fromEntries(entries);
      return result
    })
  }

  let handelSubmit = async (e) => {
    e.preventDefault()

    let { facebook, twitter, instagram, youtube } = e.target

    let dat = {
      facebook: facebook.value,
      twitter: twitter.value,
      instagram: instagram.value,
      youtube: youtube.value
    }

    let data = await fetch("/updt_social", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dat)
    })

    window.location.reload(true)
  }


  useEffect(() => {
    getSocial()
  }, [])






  return (
    <div className='m-[10rem]'>
      <h1 className='mb-[4rem]'>Social Links</h1>
      <form onSubmit={handelSubmit}>
        {socials ? <div className='grid grid-cols-3 gap-20'>
          <div className='flex space-x-[2rem]'>
            <FacebookIcon fontSize='large' />
            <input className='px-[2rem] py-[0.5rem]' onChange={updt} value={socials.facebook} type="text" name='facebook' />
          </div>
          <div className='flex space-x-[2rem]'>
            <TwitterIcon fontSize='large' />
            <input className='px-[2rem] py-[0.5rem]' onChange={updt} value={socials.twitter} type="text" name='twitter' />
          </div>
          <div className='flex space-x-[2rem]'>
            <InstagramIcon fontSize='large' />
            <input className='px-[2rem] py-[0.5rem]' onChange={updt} value={socials.instagram} type="text" name='instagram' />
          </div>
          <div className='flex space-x-[2rem]'>
            <YouTubeIcon fontSize='large' />
            <input className='px-[2rem] py-[0.5rem]' onChange={updt} value={socials.youtube} type="text" name='youtube' />
          </div>
        </div> : null}
        <div className='text-center'>
          <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 my-[3rem] rounded-20'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Manage_Footer