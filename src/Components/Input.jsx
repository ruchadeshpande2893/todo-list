export default function Input({type, value, placeholder, ref, className}) {
    return <input className={className} type={type} placeholder={placeholder} ref={ref}>{value}</input>
}