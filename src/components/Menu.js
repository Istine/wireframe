import React from 'react'

export default function Menu(props) {

    const Items = props.data.map((item) => 
    (
    <li
        onClick={() => props.alterState('active', item)}
        style={props.active === item ? {
            background: props.name == 'app' ? "#999" : "#eee"
        } :
         {}
        } key={item}>{item}</li>)
        )

    return (Items)
}
