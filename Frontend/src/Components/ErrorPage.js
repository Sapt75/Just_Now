import React from 'react';
import Errorimage from './images/404-error-page-not-found.jpg';

function ErrorPage() {
  return (
    <>
    <div className='container text-center p-5'>
    <img className='w-100 border-0' src={Errorimage} alt="Error-Page" />
    </div>
    
    </>
  )
}

export default ErrorPage