import Input from "./Input";
import Button from "./Button";
import ListItem from "./ListItem";
import { useState, useRef } from "react";
import "./Content.css";

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

    function clearAll() {
        setList([])
    }


    return (
        <div className="content">
            <div className="input-button">
                <Input className="input" type="text" placeholder="Add your task here" ref={inputValue}/>
                <Button className="button" type="submit" value="+" onClickHandler={handleClick}/>
            </div>
            <div className="list">
                <ol>
                {list.map((item, index) => {
                    return (
                        <div className="list-item">
                            <ListItem key={index} value={item}/>
                            <Button className="delete" onClickHandler={() => {
                                deleteItem(index)
                        }} value={<i class="material-icons">delete</i>}/>
                        </div>
                    )
                })}
                </ol>
                <Button className= "clear-all" type="button" value="Clear All" onClickHandler={clearAll}/>
            </div>
        </div>
    )
}