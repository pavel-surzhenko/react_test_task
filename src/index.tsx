import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/queryClient";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </QueryClientProvider>
);
