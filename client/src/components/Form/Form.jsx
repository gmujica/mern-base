import React, { Component } from './node_modules/react'

export default class Form extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
