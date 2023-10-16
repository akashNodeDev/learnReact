/*
// Nested Structure
// <div id="parent">
//     <div id="child">
//         <h1> Nested Struction </h1>
//     </div>
// </div>
// React.createElelemnt(object)=> HTML Browser Understands(ReacctDOM converts the object in the HTML while rendering it on the browser)
*/


const heading = React.createElement("div",
                                {id:"parent"},
                                React.createElement("div",{id:"child"},
                                React.createElement("h1",{},"Hello from inside"))
                                );
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);