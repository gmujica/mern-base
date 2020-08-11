import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {

  state = {
    name:'',
    email: '',
    phone: '000000000',
    posts: []
  }

  componentDidMount = () => {
    this.getPostData()
  }

  getPostData = () => {
    axios.get('/posts')
    .then((response) => {
      const data = response.data
      this.setState({ posts: data })
      console.log('Data has been received!!');
    })
    .catch(() => {
      alert('Error retrieving data!!!')
    })
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
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }

    axios({
      url:'http://localhost:8000/posts',
      method:'POST',
      data: payload
    })
    .then(() =>{
      console.log('Data has been sent to the server');
      this.resetUserInputs()
      this.getPostData()
    })
    .catch(() => {
      console.log('Internal server error');
    })

  }

  resetUserInputs = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
    })
  }

  displayItem = (posts) => {
    if(!posts.length) return null

    return posts.reverse().map((post, index) => (
      <div key={index} className="card">
        <h3>{post.name}</h3>
        <p>{post.email}</p>
        <p>{post.phone}</p>
      </div>
    ))
  }

  render() {

    console.log('State:', this.state);

    return (
      <div className="app">
        <h2>Add Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <button>Add Contact</button>
        </form>

        <div>
          {this.displayItem(this.state.posts)}
        </div>
      </div>
    );
  }

}

export default App;
