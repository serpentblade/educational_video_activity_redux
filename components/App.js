import React from 'react'
import { Link } from 'react-router'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css'

export default function App ({ children }) {
  return (
    <div className='container-fluid'>
      <header>
        <h1><Link to='/'>Educational Video Demo</Link></h1>
      </header>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.element
}
