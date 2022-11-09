import { RatingIcon, RatingMobIcon } from "../img";
import { Link } from "react-router-dom";

import { formatDistanceStrict } from "date-fns";
import { IJob } from '../hooks/useJobs'

export const Job: React.FC<IJob> = (props) => {
    const { title, pictures, name, createdAt, id } = props;

    const relatedDate: String = formatDistanceStrict(new Date(createdAt), new Date(), {
        addSuffix: true,
    });

    return (
        <div className="job">
            <div className="job-img">
                <img src={`${pictures[0]}`} alt="avatar"></img>
            </div>
            <div className="job-row">
                <div className="job-row-2">
                    <div className="job-info">
                        <Link to={id} className="job-title">
                            {title}
                        </Link>
                        <div className="job-departament">
                            Department name • {name}
                        </div>
                        <div className="job-country">
                            <div className="job-country-icon">
                                <i className="material-icons color-icon">room</i>
                            </div>
                            <p className="job-country-name">Vienna, Austria</p>
                        </div>
                    </div>
                </div>
                <div className="job-row-3">
                    <div className="job-rating">
                        <RatingIcon />
                    </div>
                    <div className="job-rating-mob">
                        <RatingMobIcon />
                    </div>
                    <div className="job-hours">
                        <button className="job-bookmark">
                            <i className="material-icons color-icon">bookmark_border</i>
                        </button>
                        <p className="job-hours-text"> Posted {relatedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
