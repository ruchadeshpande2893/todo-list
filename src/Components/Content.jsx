import Input from "./Input";
import Button from "./Button";
import ListItem from "./ListItem";
import { useState, useRef } from "react";

export default function Content() {

    const [list, setList] = useState([]);
    const inputValue = useRef("");

    function handleClick() {
        setList((prev) => {
            const newList = [...prev, inputValue.current.value];
            inputValue.current.value = "";
            return newList;
        })
    }

    function deleteItem(index) {
        setList((prev) => {
            const newList = [...prev];
            newList.splice(index, 1);
            return newList;
        })
    }

    return (
        <div className="content">
            <div className="input">
                <Input type="text" placeholder="Add Todo" ref={inputValue}/>
            </div>
            <div className="button">
                <Button type="submit" value="+" onClickHandler={handleClick}/>
            </div>
            <div className="list">
                <ul>
                {list.map((item, index) => {
                    return (
                        <div>
                            <ListItem key={index} value={item}/>
                            <Button onClickHandler={() => {
                                deleteItem(index)
                            }} value="X"/>
                        </div>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}