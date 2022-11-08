import { PointIcon, RatingIcon, RatingMobIcon, RectangleIcon } from "../img";
import { Link } from "react-router-dom";

import { formatDistanceStrict } from "date-fns";

export const Job = (props) => {
    const { title, pictures, name, createdAt, id } = props;

    const relatedDate = formatDistanceStrict(new Date(createdAt), new Date(), {
        addSuffix: true,
    });

    return (
        <div className="job">
            <div className="job-img">
                <img src={`${pictures[1]}`} alt="avatar"></img>
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
                                <PointIcon />
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
                        <a href="#" className="job-bookmark">
                            <RectangleIcon />
                        </a>
                        <p className="job-hours-text"> Posted {relatedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
