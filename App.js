/** 
 *  Nested Structure
 * <div id="parent">
 *  <div id="child">
 *      <h1> First Element </h1>
 *      <h2> Sibling </h2>
 *  </div>
 *  <div id="child2">
 *      <h1> Second Element</h1>
 *      <h2> Child Sibling </h2>
 *  </div>
 * </div>
 * ReactElelemt(Object)=> HTML (Browser Understands)
 * 
*/

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"First Element"),
        React.createElement("h2",{},"Sibling")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Second Element"),
        React.createElement("h2",{},"Child Sibling")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


