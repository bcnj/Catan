import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layer, Circle } from 'react-konva';
import { buildSettlement, buildCity } from '../../store';

const Intersections = (props) => {

    console.log('==========', props.p1_settlement);

    let color;
    if (props.p1_settlement) { color = 'green' }
    else { color = 'transparent' }
    if (props.p1_city) { color = 'red' }

    return (
        <Layer>
            {/* row one */}
            <Circle
                x={250}
                y={95}
                radius={10}
                fill={color}
                shadowBlur={5}
                onClick={(e) => props.intersectionClickHandler(e, props.p1_settlement, props.p1_city)}
            />
            <Circle
                x={350}
                y={95}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={450}
                y={95}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row two */}
            <Circle
                x={200}
                y={120}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={300}
                y={120}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={400}
                y={120}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={500}
                y={120}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row three */}
            <Circle
                x={200}
                y={180}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={300}
                y={180}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={400}
                y={180}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={500}
                y={180}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row four */}
            <Circle
                x={150}
                y={205}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={250}
                y={205}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={350}
                y={205}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={450}
                y={205}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={550}
                y={205}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row five */}
            <Circle
                x={150}
                y={265}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={250}
                y={265}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={350}
                y={265}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={450}
                y={265}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={550}
                y={265}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row six */}
            <Circle
                x={100}
                y={290}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={200}
                y={290}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={300}
                y={290}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={400}
                y={290}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={500}
                y={290}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={600}
                y={290}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row seven */}
            <Circle
                x={100}
                y={350}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={200}
                y={350}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={300}
                y={350}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={400}
                y={350}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={500}
                y={350}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={600}
                y={350}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row eight */}
            <Circle
                x={150}
                y={375}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={250}
                y={375}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={350}
                y={375}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={450}
                y={375}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={550}
                y={375}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row nine */}
            <Circle
                x={150}
                y={435}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={250}
                y={435}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={350}
                y={435}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={450}
                y={435}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={550}
                y={435}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row ten */}
            <Circle
                x={200}
                y={460}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={300}
                y={460}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={400}
                y={460}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={500}
                y={460}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row eleven */}
            <Circle
                x={200}
                y={520}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={300}
                y={520}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={400}
                y={520}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={500}
                y={520}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />

            {/* row twelve */}
            <Circle
                x={250}
                y={545}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={350}
                y={545}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
            <Circle
                x={450}
                y={545}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
        </Layer>
    );
};

const mapState = (state) => {
    return {
        p1_settlement: state.p1_settlement,
        p1_city: state.p1_city,
    };
};

const mapDispatch = (dispatch) => {
    return {
        intersectionClickHandler: function(e, p1_settlement, p1_city) {
            if (!p1_settlement) {dispatch(buildSettlement())}
            else if (!p1_city) {dispatch(buildCity())}
         }
    };
};

export default connect(mapState, mapDispatch)(Intersections);
