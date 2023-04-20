import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users").then((resp) => {
      resp.json().then((result) => {
        // console.warn(result.data);
        this.setState({users:result.data})
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>
          Fecth API Data
        </h1>
        {
          this.State.users ?
          this.State.users.map((item,i)=>
            <div>
              <p>{i}--- {item.first_name}
              </p>
            </div>
             )
          :
          null
        }
      </div>
    );
  }
}

export default App;
