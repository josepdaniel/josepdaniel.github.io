const Pill = (props) => {

    let style = {
        fontWeight: "bold",
        fontSize: "12px",
        border: "1px solid white",
        borderRadius: "20px",
        padding: "7px 18px",
        height: "100%",
    }

    return <span style={style}> 
        {props.children}
    </span>

}
export {Pill}