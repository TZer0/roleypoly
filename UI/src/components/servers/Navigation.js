import React, { Component, Fragment } from 'react'
import Radium from 'radium'
import serverStyles, { navigation as styles } from './styles'

import ServerCard from './ServerCard'
import UserCard from './UserCard'

class ServersNavigation extends Component {
  render () {
    return <Fragment>
      <UserCard user={this.props.user} />
      <div className={this.props.className}>
        { this.props.servers.map((s, i) => <ServerCard server={s} key={i} />) }
      </div>
    </Fragment>
  }
}

export default Radium(ServersNavigation)
