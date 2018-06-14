import { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export default class Index extends Component {
  static async getInitialProps () {
    const apiUrl = process.env.API_URL
    console.log(apiUrl)

    const response = await fetch(
      `${apiUrl}/ping`
    ).then(response => response.json())

    return { response }
  }

  render () {
    const { response } = this.props

    return (
      <div>
        <h1>The server responded with {response.ping}</h1>
      </div>
    )
  }
}
