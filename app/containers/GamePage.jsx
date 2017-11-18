import React from 'react'
import { Grid, Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Stage } from 'react-konva'

import Tiles from '../components/Tiles'
import Intersections from '../components/Intersections'
import Roads from '../components/Roads'

const GamePage = (props) => {

    let stage;

    const handleWheel = (thisEvent, thisStage) => {
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

    return (

        <Grid>
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
                        ref={(thisStage) => { stage = thisStage; }}
                        onWheel={(e) => { handleWheel(e, stage); }}
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
                    <h1>TESTING 3</h1>
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

export default GamePage;
