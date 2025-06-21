import React from 'react'
import Perfect from '../assets/Frame 35.png'
const footer = () => {
  return (
    <div>
        <div className='footer flex'>
            <img src={Perfect} className='w-147  h-109' alt="Frame" />
            <h1>The unseen of spending three <br /> years at Pixelgrade</h1>
            <div className="lorem flex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus velit nam earum quam aliquam reiciendis numquam atque, molestiae quas quaerat obcaecati <br /> ab aperiam. Consequatur, id sed aliquid, doloremque earum voluptate accusantium laboriosam explicabo odio, br nesciunt tenetur dolores? Minima atque ipsam eveniet. <br /> Nulla quibusdam obcaecati suscipit <br /> molestias similique nostrum minima placeat odio sequi commodi sint, quia dolorem, harum a cupiditate libero. Error nisi earum maxime.
            </div>
            <button className='bg-green-600 w-50 h-18 mt-50 mr100' >Learn More</button>
        </div>
    </div>
  )
}

export default footer