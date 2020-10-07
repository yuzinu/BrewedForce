import react from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



export class MapContainer extends React.Component {
    componentDidMount() {
        const { google } = this.props;
    }


    render() {
        return (
            <Map google={this.props.google} 
                zoom={14}
                initialCenter={{
                    lat: 0,
                    lng: 0,
                }}>
                <Market onClick={this.onMarketClick}
                    name={'Current location'} />
            
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDOBQykSV8dyFlHs-aMmGSQUFF2jixPeMU')
})(MapContainer)

