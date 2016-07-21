var React = require ('react')
var ReactDOM = require ('react-dom')
console.log('hello from jsx');


var GroceryItemList = require('./components/GroceryItemList.jsx');

ReactDOM.render(<GroceryItemList name="Dominon" />,document.getElementById("app"))
