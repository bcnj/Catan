import React, { Component } from 'react';
import { Layer, RegularPolygon } from 'react-konva';

const Tiles = (props) => {

    return (
        <Layer>
            {/* row one */}
            <RegularPolygon
                x={250}
                y={150}
                sides={6}
                radius={50}
                fill={'green'}
            />
            <RegularPolygon
                x={350}
                y={150}
                sides={6}
                radius={50}
                fill={'blue'}
            />
            <RegularPolygon
                x={450}
                y={150}
                sides={6}
                radius={50}
                fill={'green'}
            />

            {/* row one */}
            <RegularPolygon
                x={200}
                y={235}
                sides={6}
                radius={50}
                fill={'black'}
            />
            <RegularPolygon
                x={300}
                y={235}
                sides={6}
                radius={50}
                fill={'red'}
            />
            <RegularPolygon
                x={400}
                y={235}
                sides={6}
                radius={50}
                fill={'black'}
            />
            <RegularPolygon
                x={500}
                y={235}
                sides={6}
                radius={50}
                fill={'red'}
            />

            {/* row three */}
            <RegularPolygon
                x={150}
                y={320}
                sides={6}
                radius={50}
                fill={'blue'}
            />
            <RegularPolygon
                x={250}
                y={320}
                sides={6}
                radius={50}
                fill={'green'}
            />
            <RegularPolygon
                x={350}
                y={320}
                sides={6}
                radius={50}
                fill={'yellow'}
            />
            <RegularPolygon
                x={450}
                y={320}
                sides={6}
                radius={50}
                fill={'green'}
            />
            <RegularPolygon
                x={550}
                y={320}
                sides={6}
                radius={50}
                fill={'blue'}
            />


            {/* row four */}
            <RegularPolygon
                x={200}
                y={405}
                sides={6}
                radius={50}
                fill={'red'}
            />
            <RegularPolygon
                x={300}
                y={405}
                sides={6}
                radius={50}
                fill={'black'}
            />
            <RegularPolygon
                x={400}
                y={405}
                sides={6}
                radius={50}
                fill={'red'}
            />
            <RegularPolygon
                x={500}
                y={405}
                sides={6}
                radius={50}
                fill={'black'}
            />

            {/* row five */}
            <RegularPolygon
                x={250}
                y={490}
                sides={6}
                radius={50}
                fill={'green'}
            />
            <RegularPolygon
                x={350}
                y={490}
                sides={6}
                radius={50}
                fill={'blue'}
            />
            <RegularPolygon
                x={450}
                y={490}
                sides={6}
                radius={50}
                fill={'green'}
            />
        </Layer>
    );
};

export default Tiles;
