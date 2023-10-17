import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"First Element"),
        React.createElement("h2",{},"Sibling")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Second Element Test"),
        React.createElement("h2",{},"Child Sibling")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


