import React, { Component } from 'react'
import { Grid, Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Stage } from 'react-konva'
import { Menu, Segment } from 'semantic-ui-react'

import Tiles from '../components/Tiles'
import Intersections from '../components/Intersections'
import Roads from '../components/Roads'

class GamePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'players'
        }
        this.handelWheel = this.handleWheel.bind(this)
        this.handlePanelClick = this.handlePanelClick.bind(this)
    }

    handleWheel(thisEvent, thisStage) {
        let e = thisEvent.evt;
        let stage = thisStage._stage;
        var scaleBy = 1.03;
        e.preventDefault();

        var oldScale = stage.scaleX();

        var mousePointTo = {
            x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
            y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
        };

        var newScale = e.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
        stage.scale({ x: newScale, y: newScale });

        var newPos = {
            x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
            y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
        };
        stage.position(newPos);
        stage.batchDraw();
    }

    handlePanelClick(e, { name }) {
        this.setState({ activeItem: name })
    }


    render() {

        const { activeItem } = this.state

        return (

            <Grid padded>
                {/* this row contains game map, players, chat, log */}
                <Grid.Row
                    style={{ height: '80vh' }}
                >
                    {/* this is the Konva map */}
                    <Grid.Column
                        textAlign={'center'}
                        color={'red'}
                        width={11}
                    >
                        <Stage
                            ref={(thisStage) => { this.stage = thisStage; }}
                            onWheel={(e) => { handleWheel(e, this.stage); }}
                            width={700}
                            height={640}
                            draggable={true}
                        >
                            <Tiles />
                            <Intersections />
                            <Roads />
                        </Stage>
                    </Grid.Column>

                    {/* this is the players, chat, and log menu */}
                    <Grid.Column
                        textAlign={'center'}
                        color={'blue'}
                        width={5}
                    >
                        <Menu pointing secondary>
                            <Menu.Item name='players' active={activeItem === 'players'} onClick={this.handlePanelClick} />
                            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handlePanelClick} />
                            <Menu.Item name='log' active={activeItem === 'log'} onClick={this.handlePanelClick} />
                            <Menu.Menu position='right'>
                                <Menu.Item name='quit' active={activeItem === 'quit'} onClick={this.handlePanelClick} />
                            </Menu.Menu>
                        </Menu>

                        <Segment>
                            {/* <img src='/assets/images/wireframe/media-paragraph.png' /> */}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

                {/* this row contains the players cards and action buttons */}
                <Grid.Row
                    style={{ height: '20vh' }}
                    color={'yellow'}
                >
                    <h1>TESTING 3</h1>
                    <h2>TESTING 3</h2>
                    <h3>TESTING 3</h3>
                    <h1>TESTING 3</h1>
                </Grid.Row>
            </Grid>
        )
    }
}

export default GamePage;
