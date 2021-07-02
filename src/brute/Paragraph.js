const Paragraph = (props) => {

    let style = {
        ...props.style,
        borderLeft: "2px solid white",
        paddingLeft: "20px"
    }

    return <div style={style}> {props.children} </div>
}

export {Paragraph}