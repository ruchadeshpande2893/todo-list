export default function Input({type, value, placeholder, ref}) {
    return <input type={type} placeholder={placeholder} ref={ref}>{value}</input>
}