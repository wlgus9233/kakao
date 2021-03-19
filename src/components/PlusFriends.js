import React from 'react'

function PlusFriends({id, icon, title}) {
    return (
            <div>
                <i className={icon}></i>
                <span>{title}</span>
            </div>
    )
} 

export default PlusFriends