import React from 'react'
import'./arrow.css'

const arrow = (props) => {
    return (
        <div className=' clients-container  '>
            <div className='client-div'>
                <span className='span-container'>
                    <span className='clients-text animation-BA '>{props.title}</span>
                </span>
                <span className='arrow-div' >
                    <svg className='clients-icon' viewBox="0 0 24 24" preserveAspectRatio="none" fill="currentColor" role="presentation" class="LinkSanity_Icon__JmAKV LinkSanity_Icon_triggered__kerGW" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg>
                </span>
            </div>
        </div>

    )
}

export default arrow