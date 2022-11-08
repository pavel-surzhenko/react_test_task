import { RectangleIcon, ShareIcon, ArrowIcon } from "../img";
import { NavLink, useParams } from "react-router-dom";
import { IJob, useJobs } from "../hooks/useJobs";
import { Button, Image, MapColumn, JobDescription} from "../components";

export const JobDetails: React.FC = () => {
    const { data }  = useJobs();

    const { id } = useParams();

    const jobById = data.find((job) => job.id === id);

    const {
        benefits,
        employment_type,
        pictures,
    } = jobById || {};

    const employmentButtonJSX = employment_type?.map((type) => (
        <Button key={type} text={type} className={"job-info-button"} />
    ));

    const benefitsButtonJSX = benefits?.map((type) => (
        <Button key={type} text={type} className={"job-info-button-orange"} />
    ));

    const imageJSX = pictures?.map((image, index) => (
        <Image key={index} img={image} />
    ));

    return (
        <div className="container2">
            <div className="job-row-4">
                <div className="job-column">
                    <div className="job-column-header">
                        <h2 className="job-header-title">Job Details</h2>
                        <div className="job-header-instruments">
                            <a href="#1" className="job-header-instruments-save">
                                <RectangleIcon />
                                <p className="job-header-instruments-save-text">Save to my list</p>
                            </a>
                            <a href="#2" className="job-header-instruments-share">
                                <ShareIcon />
                                <p className="job-header-instruments-share-text">Share</p>
                            </a>
                        </div>
                    </div>
                    <hr />
                    <button className="btn header-btn">APPLY NOW</button>
                    <JobDescription {...jobById as IJob}/>
                    <div className="job-info">
                        <h3 className="job-info-title">Additional info</h3>
                        <hr />
                        <p className="job-info-text">Employment type</p>
                        <div className="job-info-buttons">{employmentButtonJSX}</div>
                        <p className="job-info-text-2">Benefits</p>
                        <div className="job-info-buttons-2">{benefitsButtonJSX}</div>
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
                <MapColumn {...jobById as IJob} />
            </div>
        </div>
    );
};
