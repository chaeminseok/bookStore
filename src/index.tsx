import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const queryClient = new QueryClient();

const mock = async () => {
  const { server } = await import("./server/browser");
  server.start();
};

mock().then(() => {
  root.render(
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>,
  );
});
