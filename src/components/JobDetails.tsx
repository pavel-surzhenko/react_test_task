import { RectangleIcon, ShareIcon, ArrowIcon } from "../img";
import { NavLink, useParams } from "react-router-dom";
import { useJobs } from "../hooks/useJobs";
import { formatDistanceStrict } from "date-fns";
import { Button, Image, Map, List } from ".";


export const JobDetails: React.FC = () => {
    const { data }  = useJobs();

    const { id } = useParams();

    const jobById = data.filter((job) => job.id === id)[0];

    const {
        address,
        benefits,
        createdAt,
        description,
        email,
        employment_type,
        location,
        name,
        phone,
        pictures,
        salary,
        title,
    } = jobById || {};

    const defLocation = location ? location : { lat: 40, lng: 80 };

    const descriptionArr = description?.split("\n") || [];

    const listJSX = descriptionArr[7]
        ? descriptionArr[7].split(".").map((str) => {
                if (str !== "") return <List key={str} text={str} />;
            })
        : "Loading...";

    const salaryView = salary?.replace(/[k]/g, "00");

    const buttonJSX = employment_type?.map((type) => (
        <Button key={type} text={type} className={"job-info-button"} />
    ));

    const button2JSX = benefits?.map((type) => (
        <Button key={type} text={type} className={"job-info-button-orange"} />
    ));

    const imageJSX = pictures?.map((image, index) => (
        <Image key={index} img={image} />
    ));

    const relatedDate = formatDistanceStrict(
        new Date(createdAt || "2022-11-07T15:49:49.047Z"),
        new Date(),
        {
            addSuffix: true,
        }
    );

    return (
        <div className="container2">
            <div className="job-row-4">
                <div className="job-column">
                    <div className="job-column-header">
                        <h2 className="job-header-title">Job Details</h2>
                        <div className="job-header-instruments">
                            <a href="#1" className="job-header-instruments-save">
                                <RectangleIcon />
                                <p className="job-header-instruments-save-text">
                                    Save to my list
                                </p>
                            </a>
                            <a
                                href="#2"
                                className="job-header-instruments-share"
                            >
                                <ShareIcon />
                                <p className="job-header-instruments-share-text">
                                    Share
                                </p>
                            </a>
                        </div>
                    </div>
                    <hr />
                    <button className="btn header-btn">APPLY NOW</button>
                    <div className="job-descriptions">
                        <div className="job-descriptions-header">
                            <h3 className="job-descriptions-title">{title}</h3>
                            <div className="job-descriptions-sallery">
                                <p className="job-descriptions-sallery-size">
                                    € {salaryView}
                                </p>
                                <p className="job-descriptions-sallery-text">
                                    Brutto, per year
                                </p>
                            </div>
                        </div>
                        <div className="job-descriptions-posted">
                            Posted {relatedDate}
                        </div>
                        <div className="job-descriptions-text">
                            {descriptionArr[1]}
                        </div>
                        <div className="job-descriptions-responsobilities">
                            <h4 className="job-descriptions-responsobilities-title">
                                {descriptionArr[3]}
                            </h4>
                            <p className="job-descriptions-responsobilities-text">
                                {descriptionArr[4]}
                            </p>
                        </div>
                        <div className="job-descriptions-compensations">
                            <h4 className="job-descriptions-compensations-title">
                                {descriptionArr[6]}
                            </h4>
                            <ul className="job-descriptions-compensations-list">
                                {listJSX}
                            </ul>
                        </div>
                        <button className="job-descriptions-btn btn">
                            APPLY NOW
                        </button>
                    </div>
                    <div className="job-info">
                        <h3 className="job-info-title">Additional info</h3>
                        <hr />
                        <p className="job-info-text">Employment type</p>
                        <div className="job-info-buttons">{buttonJSX}</div>
                        <p className="job-info-text-2">Benefits</p>
                        <div className="job-info-buttons-2">{button2JSX}</div>
                    </div>
                    <div className="job-image">
                        <h3 className="job-image-title">Attached images</h3>
                        <hr />
                        <div className="job-image-list">{imageJSX}</div>
                    </div>
                    <NavLink to="/board" className="job-return">
                        <ArrowIcon />
                        <p className="job-return-text">RETURN TO JOB BOARD</p>
                    </NavLink>
                </div>
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
            </div>
        </div>
    );
};
