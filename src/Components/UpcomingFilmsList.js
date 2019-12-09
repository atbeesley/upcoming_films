import React, { Component } from 'react'
import UpcomingFilm from './UpcomingFilm'

class UpcomingFilmList extends Component {

render(){

const upcomingFilmNodes = this.props.upcomingFilms.map(upcomingFilm => {
  return (
    <UpcomingFilm
    name={upcomingFilm.name}
    url={upcomingFilm.url}
    key={upcomingFilm.id}
    >
    </ UpcomingFilm>
  )
})

return (
  <ul className="UpcomingFilmList">
  {upcomingFilmNodes}
  </ul>
)

}
}

export default UpcomingFilmList
