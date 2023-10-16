/*
Nested Structure
<div id="parent">
    <div id="child">
        <h1> Nested Struction </h1>
    </div>
</div

*/


const heading = React.createElement("div",
                                {id:"Paarent"},
                                React.createElement("div",{id:"child"},
                                React.createElement("h1",{},"Hello from inside"))
                                );
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);