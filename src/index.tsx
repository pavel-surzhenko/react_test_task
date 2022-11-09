import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/queryClient";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <HashRouter>
                <App />
            </HashRouter>
        </React.StrictMode>
    </QueryClientProvider>
);
