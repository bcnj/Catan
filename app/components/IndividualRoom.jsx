import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default ({allGames}) => (
  <Card.Group>

    { allGames.map(game =>
        <Card key={game.id}>
          <Card.Content>
            <Card.Header>
              Game {game.id}
            </Card.Header>
            <Card.Description>
              <strong>{game.players.length}</strong> /4 Players
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Link to={`/room/wait/${game.id}`}>
                <Button basic color='green'>Join</Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
    )}
  </Card.Group>
)
