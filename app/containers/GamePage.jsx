import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default () => (

    // semantic ui grids are 16-section based
    <Grid>
        {/* this row contains game map, players, chat, log */}
        <Grid.Row>
            {/* this is the map */}
            <Grid.Column textAlign={'left'} width={11}>
                <h1>TESTING 3</h1>
            </Grid.Column>

            {/* this is the players, chat, and log menu */}
            <Grid.Column width={5}>
                <h1>TESTING 3</h1>
            </Grid.Column>
        </Grid.Row>

        {/* this row contains the player's cards and action buttons */}
        <Grid.Row>
        </Grid.Row>
    </Grid>
)
