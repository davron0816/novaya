import React from 'react'
import '../components/section.jsx'
import Logo from '../assets/Logo (6).png'
import Logo2 from '../assets/Logo (7).png'
import Logo3 from '../assets/Logo (8).png'
import Logo4 from '../assets/Logo (9).png'
import Logo5 from '../assets/Logo (10).png'
import Logo6 from '../assets/Logo (11).png'
import Logo7 from '../assets/Logo (12).png'


const main = () => {
  return (
    <div>
        <h1 className='text-center text-4xl'>Our Clients</h1>
        <p className='text-center text-xl mt-3'>We have been working with some Fortune 500+ clients</p>
        <div className="logo flex w-10 ml-80 gap-20">
            <img src={Logo} alt="Logo 1" className='w- h- m-5' />
            <img src={Logo2} alt="Logo 2" className='w- h- m-5' />
            <img src={Logo3} alt="Logo 3" className='w- h- m-5' />
            <img src={Logo4} alt="Logo 4" className='w- h- m-5' />
            <img src={Logo5} alt="Logo5" className='w- m-5 h-10' />
            <img src={Logo6} alt="Logo 6" className='w- m-5 h-10' />
            <img src={Logo7} alt="Logo 7" className='w- m-5 h-10' />
        </div>
        <h1 className='text-center mt-10 text-4xl'>Manage your entire community <br /> in a single system</h1>
    </div>
  )
}

export default main