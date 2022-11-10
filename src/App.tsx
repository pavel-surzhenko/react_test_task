import "./index.css";

import { JobList } from "./components";
import { JobDetailsPage } from "./pages/JobDetailsPage";
import { Route, Routes, Navigate } from "react-router-dom";

export const App: React.FC = () => {
    return (
            <Routes>
                <Route path="/board" element={<JobList />}></Route>
                <Route path="/board/:id" element={<JobDetailsPage />}></Route>
                <Route path="*" element={<Navigate to = '/board' replace/>}></Route>
            </Routes>
    )
}


// "homepage": "https://pavel-surzhenko.github.io/react_test_task#",