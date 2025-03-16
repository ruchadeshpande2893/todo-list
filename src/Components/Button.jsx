export default function Button({type, value, onClickHandler}) {
    return <button type={type} onClick={onClickHandler}>{value}</button>
}