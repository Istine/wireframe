import React from 'react'
import '../scss/index.scss'
import useSwitch from '../hooks/useSwitch'

export default function Wireframe() {

    //extract state and handler function from useSwitch custom hook.
    const [state, alterState] = useSwitch()

    //check when radio button selection changes
    const onValueChange = (e) => {
        const { value } = e.target
        alterState("name", value)
    }

    // List Items for App Mode
    const listItems = state.appMode.map(item => (
        <li
            onClick={() => alterState('active', item)}
            style={state.active === item ? {
                background: "#999"
            } : {}} key={item}>{item}</li>
    ))

    // List Items for Admin Mode
    const adminItems = state.adminMode.map(item => (
        <li
            onClick={() => alterState('active', item)}
            style={state.active === item ? {
                background: "#ddd"
            } : {}}
            key={item}>{item}</li>
    ))

    //Check which mode and display items accordingly.
    const itemToShow = state.name === "app" ? listItems : adminItems

    return (
        <div className="container">
            <div className="leftSideContent">
                <div className="logo">
                    <span>
                        Logo
                    </span>
                </div>
                <div className={`${state.name == 'app' ? 'greyMode':'menuBar'}`}>
                    <ul>
                        {itemToShow}
                    </ul>
                </div>
            </div>
            <div className="rightSideContent">
                <label>
                    <input checked={state.name == "app"} type="radio" value="app" onChange={onValueChange} />
                app mode
                </label>
                <label>
                    <input checked={state.name == "admin"} type="radio" value="admin" onChange={onValueChange} />
                admin mode
                </label>
            </div>
        </div>
    )
}
