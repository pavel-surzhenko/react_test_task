import { formatDistanceStrict } from "date-fns";
import { IJob } from "../hooks/useJobs"
import { ListItem } from "../components";


export const JobDescription: React.FC<IJob> = (props) => {
    const { title, salary, createdAt, description } = props;

    const salaryView = salary?.replace(/[k]/g, "000");

    const descriptionArr = description?.split("\n") || [];

    const listItemJSX = descriptionArr[7]
        ? descriptionArr[7].split(".").map((str) => {
                if (str !== "") return <ListItem key={str} text={str} />
                return null
            })
        : null;

    const relatedDate = formatDistanceStrict(
        new Date(createdAt || "2022-11-07T15:49:49.047Z"),
        new Date(),
        {
            addSuffix: true,
        }
    );

    return (
        <div className="job-descriptions">
            <div className="job-descriptions-header">
                <h3 className="job-descriptions-title">{title}</h3>
                <div className="job-descriptions-sallery">
                    <p className="job-descriptions-sallery-size">€ {salaryView}</p>
                    <p className="job-descriptions-sallery-text">Brutto, per year</p>
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
                    {listItemJSX}
                </ul>
            </div>
            <button className="job-descriptions-btn btn">
                APPLY NOW
            </button>
        </div>
    )
}