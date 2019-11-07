import React, {useState,useEffect} from "react";
import "./App.css";
import axios from "axios";
import Spinner from "../src/components/spinner";
import Image from "../src/components/image";
import Header from "../src/components/header";
import Paragraph from "../src/components/paragraph";

function App() {
const [data, setData] = useState("");
const [date, setDate] = useState("");

useEffect(() => {
axios
.get(
`https://api.nasa.gov/planetary/apod?api_key=AmFnrPrfDDI2HN0uoZFFNsTzGqzCZCgZxuJason5&date=${date}`

)
.then(res => setData(res.data))

.catch(err => console.log(err));
}, [date]);

const changeHandler = e => {
setDate(e.target.value);
};

console.log(data);
if (data) {
return (
<div className = "App">

<form className = "form">
<label>Select a date to display picture:</label>
<input
className = "input"
name = "date"
type = "date"
value = {date}
onChange = {changeHandler}/>
</form>

<div className = "header-content">
< Header title ={data.title}date ={data.date}/>
</div>
<div className = "main-content">
<Image src = {data.url}note = "APOD picture"/>
<Paragraph para = {data.explanation}/>
</div>
</div>
);

} else {
return <Spinner/>;
}
}

export default App;
