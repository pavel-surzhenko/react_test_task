import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { IJob } from '../hooks/useJobs';

interface IProps {
    location: {lat:number, long?:number, lng?: number}
}

export const Map: React.FC<IProps> = ({ location }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCs0eS3xGb7jddV7hZeApo6U7HZrW4Mz2Q",
    });

    const { lat = 44, long: lng = 80 } = location;

    return (
        <div id="map" className="job-column-map-img">
            { isLoaded ? <GoogleMap
                zoom={13}
                center={{ lat, lng }}
                mapContainerClassName="job-column-map-img"
            >
                <Marker position={{ lat, lng }} />
            </GoogleMap> : null}
        </div>
    );
};


export const MapColumn: React.FC<IJob> = (props) => {
    const { name, address, phone, email, location } = props;

    const defLocation = location ? location : { lat: 40, lng: 80 };

    return (
        <div className="job-column-map">
            <h2 className="job-column-map-title">Contacts</h2>
            <hr />
            <div className="job-column-map-details">
                <div className="job-column-map-discriptions">
                    <h3 className="job-column-map-discriptions-title">
                        Department name.
                        <br />
                        {name}
                    </h3>
                    <div className="job-column-map-discriptions-address">
                        <div className="job-column-map-discriptions-address-icon"></div>
                        <p>{address}</p>
                    </div>
                    <p>
                        {phone}, <br /> {email}
                    </p>
                </div>
                <Map location={defLocation} />
            </div>
        </div>
    )
}