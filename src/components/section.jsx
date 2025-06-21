import React from 'react'
import { Users, Building2, Group } from 'lucide-react'

const Features = () => {
  const items = [
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Membership Organisations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-600" />,
      title: 'National Associations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: <Group className="w-8 h-8 text-green-600" />,
      title: 'Clubs And Groups',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ]

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 bg-white">
      {items.map((item, index) => (
        <div key={index} className="bg-white border rounded-lg shadow-sm w-80 text-center px-6 py-8 hover:shadow-md transition">
          <div className="bg-green-100 w-fit mx-auto rounded-md p-2 mb-4">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default Features
