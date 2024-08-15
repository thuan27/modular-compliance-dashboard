import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomLoader from "./elements/Loader";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

const TaskOverview = lazy(
  () => import("./components/task-overview/TaskOverview")
);
const ComplianceStatus = lazy(
  () => import("./components/compliance-status/ComplianceStatus")
);
const RecentActivity = lazy(
  () => import("./components/recent-activity/RecentActivity")
);
const Header = lazy(() => import("./components/header"));

const App: React.FC = () => {
  const loading = useSelector((state: RootState) => state.global.loading);

  return (
    <Router>
      <div className="app-container">
        {loading && <CustomLoader />}
        <Suspense fallback={<CustomLoader />}>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<TaskOverview />} />
              <Route path="/compliance-status" element={<ComplianceStatus />} />
              <Route path="/recent-activity" element={<RecentActivity />} />
            </Routes>
          </main>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
