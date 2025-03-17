import "./Heading.css";

export default function Heading() {
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
    const monthName = monthNames[month];

    function greeting() {
        const hour = new Date().getHours();
        if(hour >=5 && hour <=12) {
            return "Good Morning!"
        } else if (hour >12 && hour <=18) {
            return "Good Afternoon!"
        } else {
            return "Good Evening!"
        }
    }

    return (
        <div className="heading">
            <div className="common title">
                <h1>To-Do List </h1>
            </div>
            <div className="common full-date">
                <h2>{monthName}</h2>
                <h2>{date}</h2>
            </div>
            <div className="common greeting">
                <h2>{greeting()}</h2>
                <p>What's on your mind today?</p>
            </div>
        </div>
    )
}