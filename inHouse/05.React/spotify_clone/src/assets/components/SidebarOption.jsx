import React from 'react'
import '../css/screen/SidebarOption.css'

function SidebarOption({ title, Icon }) {
  return (
    <div className='sidebar_option'>
        {Icon && <Icon className='sidebar_option_icon' />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption