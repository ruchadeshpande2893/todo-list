export default function Button({type, value, onClickHandler, className}) {
    return <button className={className} type={type} onClick={onClickHandler}>{value}</button>
}