var React = require ('react')
var ReactDOM = require ('react-dom')

module.exports = React.createClass({
  //require a render function
  render: function (){
    return(
      <div name="{this.props.name}">
        <h1>Grocery Lists { this.props.name }</h1>
      </div>
    )
  }
})
