import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface IProps {
    location: {lat:number, long?:number, lng?: number}
}
export const Map: React.FC<IProps> = ({ location }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCs0eS3xGb7jddV7hZeApo6U7HZrW4Mz2Q",
    });

    const { lat = 44, long: lng = 80 } = location;

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div id="map" className="job-column-map-img">
            <GoogleMap
                zoom={13}
                center={{ lat, lng }}
                mapContainerClassName="job-column-map-img"
            >
                <Marker position={{ lat, lng }} />
            </GoogleMap>
        </div>
    );
};
