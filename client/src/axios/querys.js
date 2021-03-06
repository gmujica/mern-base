import React from 'react'
import axios from 'axios'

export function getItemsData() {
    return (
        axios.get('/posts')
        .then((response) => {
          const data = response.data
          this.setState({ posts: data })
        })
        .catch(() => {
          alert('Error retrieving data!!!')
        })
    )
}
