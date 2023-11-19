import React, { lazy } from "react";
const RemoteApp = lazy(() => import("RemoteApp/RemoteApp") as any);
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      I'm the host
      <br />
      <ErrorBoundary fallback={<>⚠️ Something went wrong ⚠️</>}>
        <React.Suspense fallback="Loading App...">
          {/* <button
            onClick={async () => await fetch("http://localhost:5173/assets/remoteEntry.js").then((response) => console.log(response.body))}
          >Clkick</button> */}
          <RemoteApp />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App
