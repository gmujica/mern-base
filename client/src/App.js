import React from 'react'
import axios from 'axios'
import './App.css'
//Axios calls
//import { getItemsData } from './axios/querys.js'
// dev

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name:'',
      email: '',
      phone: '000000000',
      posts: [],
      _id: ''
      //personal: 'personal',
      //profesional: 'profesional',
      //type: 'personal'
    }
  }

  

  componentDidMount = () => {
    this.getItemsData()
    //this.getItemsData.bind(this)
  }



  getItemsData = () => {
    axios.get('/items')
    .then((response) => {
      const data = response.data
      console.log('getItemsData',data)
      this.setState({ 
        posts: data,
        //_id: this.state.data.map(data._id)
      })
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

  handleDelete = e => {
    e.preventDefault()

    axios({
      url:`http://localhost:8000/items/${e.target.value}`,
      method:'DELETE',
      //data: payload
    })
    .then(() =>{
      console.log('Data has been delete from the server');
      this.resetUserInputs()
      this.getItemsData()
    })
    .catch(() => {
      console.log('Internal server error');
    })
 
  }

  // Create a Item
  handleSubmit = (e) => {
    e.preventDefault();

    this.saveItem()

  }

  // SAve DAta
  saveItem = () => {
    const payload = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      //type: this.state.type
      //personal: this.state.personal,
      //profesional: this.state.profesional
    }
    axios({
      url:'http://localhost:8000/items',
      method:'POST',
      data: payload
    })
    .then(() =>{
      console.log('Data has been sent to the server');
      this.resetUserInputs()
      this.getItemsData()
    })
    .catch(() => {
      console.log('Internal server error');
    })
  }

  resetUserInputs = () => {
    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  }
  //Show Items
  displayItem = (items) => {
    if(!items.length) return null
    //<p>{post._id}</p>
    return items.reverse().map((item) => (
      <div key={item._id} className="card">
        <h3>{item.name}</h3>
        <div className="info-container">
          <p>{item.email}</p>
        </div>
        <div className="info-container">
          <p>{item.phone}</p>
        </div>
        <div className="info-container">
          <p>{item._id}</p>
        </div> 
        <button className="edit">Edit</button>
        <button className="delete" value={item._id} onClick={this.handleDelete}>Delete</button>
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
              required
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
              required
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
              required
              type="number"
              name="phone"
              placeholder="Phone"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="checkbox-container">
            <div className="checkbox">
              <input
                type="checkbox"
                name="personal"
                value={this.state.value}
                value={this.state.value}
                onChange={this.handleChange}
              />
            <label>Personal</label>
            </div>
            <div className="checkbox">
              <input
              
                type="checkbox"
                value={this.state.value}
                name="personal"
                value={this.state.value}
                onChange={this.handleChange}
              />
            <label>Profesional</label>
            </div>
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
