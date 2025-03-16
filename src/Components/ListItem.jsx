import Button from "./Button";

export default function ListItem({value, index}) {
    return <li key={index}>{value}</li>
}