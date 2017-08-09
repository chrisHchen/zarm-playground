import React, {PureComponent,Component} from 'react';
import ReactDOM from 'react-dom';
import {Checkbox, Button} from 'zarm';
import 'zarm/dist/zarm.min.css'
class App extends PureComponent{
  state = {
    checkbox:[]
  }
  constructor(props){
    super(props)
  }
  handleChange = (values) => {
    console.log(this.state.checkbox)
    console.log(values)
  }
  handleClick = () => {
    this.setState({
      checkbox:["0"]
    })
  }
  render(){
    return(
      <div>
        <Button onClick={this.handleClick}>Push</Button>
        <div><br/></div>
        <Checkbox.Group
          value={this.state.checkbox}
          onChange={this.handleChange}>
          <Checkbox value="0">选项一</Checkbox>
          <Checkbox value="1">选项二</Checkbox>
          <Checkbox value="2">选项三</Checkbox>
        </Checkbox.Group>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById( 'app' ))

export default App
