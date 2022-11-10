import { Job } from "./Job";
import { useJobs } from "../hooks/useJobs";
import { Pagination } from "./Pagination";

export const Loading : React.FC = () => {
    return (
        <span style={{ color: "#3A4562", fontSize: "25px" }}>Loading...</span>
    );
};

export const JobList: React.FC = () => {
    const { data, isFetched } = useJobs();

    const jobJSX = data.map((job) => <Job key={job.id} {...job} />);

    return (
        <div className="container">
            <div className="job-list">{isFetched ? jobJSX : <Loading />}</div>
            <Pagination />
        </div>
    );
};
