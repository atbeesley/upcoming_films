import React, { Component } from 'react'

class UpcomingFilm extends Component {

render(){

return(
  <li className="UpcomingFilm">
  <h4>{this.props.children}</h4>
  <a href={this.props.url} target="_blank" >{this.props.name}</a>

  </li>
)
}
}

export default UpcomingFilm
