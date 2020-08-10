import React from 'react'
import axios from 'axios'

class App extends React.Component {

  state = {
    title:'',
    description: ''
  }

  handleChange = ({ target }) => {
    const { name, value } = target

    this.setState({
      [name] : value
    })
    
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title: this.state.title,
      description: this.state.description
    }

    axios({
      url:'http://localhost:4000/posts',
      method:'POST',
      data: payload
    })
    .then(() =>{
      console.log('Data has been sent to the server');
      this.resetUserInputs()
    })
    .catch(() => {
      console.log('Internal server error');
    })

  }

  resetUserInputs = () => {
    this.setState({
      title: '',
      description: ''
    })
  }

  render() {

    console.log('State:', this.state);

    return (
      <div>
        <h2>Hello world</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              name="description"
              placeholder="description"
              cols="30"
              rows="10"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }

}

export default App;
