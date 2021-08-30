import {useState} from 'react'

const Pill = (props) => {

    let [hovered, setHovered] = useState(false);

    let style = {
        fontWeight: "bold",
        fontSize: "12px",
        border: "1px solid white",
        borderRadius: "20px",
        padding: "7px 18px",
        height: "100%",
        backgroundColor: hovered ? "white" : "transparent",
        color: hovered ? "black" : "white",
        transition: "color 0.2s, background 0.2s",
        ...props.style,
    }

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <button 
            style={style} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        > 
            {props.children}
        </button>
    )

}
export {Pill}