import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default () => (

  <div>
    <div className='landing'>
      <div className='mx-auto'>
        <div className='display-4 pb-3'> Settlers of Catan </div>
        <div>
          <div style={{ textAlign: 'center' }}>
            <Link to='/lobby'>
              <Button color='green'> Join Game </Button></Link>
            <Link to='/lobby'><Button color='red'> Create Game </Button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className='background-overlay'></div>
  </div>
)
