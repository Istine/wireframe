import { useState } from 'react'

export default function useSwitch () {

    const [state, setUseState] = useState({
        appMode: [ "Entry1", "Entry2", "Entry3", "Entry4", "Entry5"],
        adminMode: ["AdminEntry1", "AdminEntry2", "AdminEntry3"],
        name:"app",
        active:"none"
    })

    // function for changing the state
    const alterState = (name, value) => {
        setUseState((state) => ({
            ...state,
            [name]:value
        }))
    }

    return [state, alterState]
}