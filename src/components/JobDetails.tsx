/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, useParams } from "react-router-dom";
import { IJob, useJobs } from "../hooks/useJobs";
import { Button, Image, MapColumn, JobDescription} from "../components";
import M from 'materialize-css';
import { useEffect } from "react";


export const JobDetails: React.FC = () => {
    const { data, isFetched }  = useJobs();

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

    useEffect(()=>{
        const mb = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(mb,{})
    })
    

    return (
        <div className="container2">
            <div className="job-row-4">
                <div className="job-column">
                    <div className="job-column-header">
                        <h2 className="job-header-title">Job Details</h2>
                        <div className="job-header-instruments">
                            <button className="job-header-instruments-save">
                                <i className="large material-icons color-icon">bookmark_border</i>
                                <p className="job-header-instruments-save-text">Save to my list</p>
                            </button>
                            <button className="job-header-instruments-share">
                                <i className="material-icons color-icon">share</i>
                                <p className="job-header-instruments-share-text">Share</p>
                            </button>
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
                        <i className="material-icons color-icon">navigate_before</i>
                        <p className="job-return-text">RETURN TO JOB BOARD</p>
                    </NavLink>
                </div>
                <MapColumn {...jobById as IJob} />
            </div>
        </div>
    );
};
