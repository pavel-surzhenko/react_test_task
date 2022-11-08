import { Job } from "./Job";
import { useJobs } from "../hooks/useJobs";
import { Loading } from "./Loading";

export const JobList: React.FC = () => {
    const { data, isFetched } = useJobs();

    const jobJSX = data.map((job) => <Job key={job.id} {...job} />);

    return (
        <div className="container">
            <div className="job-list">{isFetched ? jobJSX : <Loading />}</div>
        </div>
    );
};
