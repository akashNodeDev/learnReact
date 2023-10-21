import React from "react";
import ReactDOM from "react-dom/client";

const myNum = 120;
const Title = ()=> (
    <h1 className="head" tabIndex="5">
        My First Functional Component for title
        <p>{myNum}</p>
    </h1>
)
const Test = () => (
    <h3>Hello</h3>
)

const Heading =() => (
    <div className="container">
        <Title/>
        {Test()}
        <h2> Example of the component composition</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);


