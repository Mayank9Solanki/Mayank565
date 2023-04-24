import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users").then((resp) => {
      resp.json().then((result) => {
        console.warn(result.data);
        this.setState({ users: result.data });
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Fecth API Data</h1>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div>
                <form>
                  <p>
                    No:{i}
                    Name:{item.first_name}<br/>
                    Surname:{item.last_name}<br/>
                    Email:{item.email}<br/>
                    Image:{item.avatar}<br/>
                  </p>
                </form>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default App;
