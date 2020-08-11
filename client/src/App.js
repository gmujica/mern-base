import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {

  state = {
    title:'',
    description: '',
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
      title: this.state.title,
      description: this.state.description
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
      title: '',
      description: ''
    })
  }

  displayItem = (posts) => {
    if(!posts.length) return null

    return posts.reverse().map((post, index) => (
      <div key={index} className="card">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    ))
  }

  render() {

    console.log('State:', this.state);

    return (
      <div className="app">
        <h2>MERN Base for dev</h2>
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

        <div>
          {this.displayItem(this.state.posts)}
        </div>
      </div>
    );
  }

}

export default App;
