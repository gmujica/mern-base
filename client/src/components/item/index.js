import React, { Component } from 'react'
import { connect } from 'react-redux'

export const Card = (posts) => {
    if(!posts.length) return null
    //<p>{post._id}</p>
    return posts.reverse().map((post, index) => (
      <div key={index} className="card">
        <h3>{post.name}</h3>
        <div className="info-container">
          <p>{post.email}</p>
        </div>
        <div className="info-container">
          <p>{post.phone}</p>
        </div>    
        <button className="edit">Edit</button>
        <button className="delete" onClick={this.handleDelete}>Delete</button>
      </div>
    ))
  }

