function CustomBtns(props) {
    return (
        <div className={`cursor-pointer ${props.className}`} onClick={props.onClick}>
            <span className={props.textclassName}>{props.Title}</span>
        </div>
    )
}

export default CustomBtns
