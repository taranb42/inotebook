
import noteContext from "./noteContext"

const noteContext = (props)=> {
    const state = {
        "name": "Harry",
        "class": "5b"
    }
    return (
        <noteContext.Provider value={state} > {props.children} </noteContext.Provider>
    )
}

export default noteState;