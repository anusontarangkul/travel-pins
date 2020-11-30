import React, { PureComponent } from 'react';
import ReactMapGL from 'react-map-gl';
import { Container, Col, Row } from 'reactstrap';

const mapStyle = {
    width: '100%',
    height: 600
}

const mapboxApiKey = 'pk.eyJ1IjoiY29kaW5nZGF2aWQiLCJhIjoiY2tobnMzNTl6MWM5aTJ5cGV1ZnE2c2VsYiJ9.mOoyaL49RBuUijTy3MmiRw';

class MapView extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 45.50884,
                longitude: -73.58781,
                zoom: 15
            }
        };

    }

    render() {
        const { viewport } = this.state;
        return (
            <Container fluid={true}>

                <ReactMapGL
                    mapboxApiAccessToken={mapboxApiKey}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    {...viewport}
                    {...mapStyle}
                    onViewportChange={(viewport) => this.setState({ viewport })}
                >
                </ReactMapGL>
            </Container>
        );
    }
}

export default MapView;