
const Burger = (props) => {

    let style = {
        "stroke": "rgb(255,255,255)",
        "strokeWidth": 2
    }

    return (
        <svg height="40" width="25">
            <line x1="3" y1="0" x2="3" y2="40" style={style}/>
            <line x1="12" y1="0" x2="12" y2="40" style={style}/>
            <line x1="21" y1="0" x2="21" y2="40" style={style}/>
        </svg>
    )    
}
export {Burger}