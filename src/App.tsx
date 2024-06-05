import { Route, Routes, useRoutes } from "react-router";
import "./App.css";
import { UserRouter, AdminRouter } from "./router";

function App() {
  const UserRouting = useRoutes(UserRouter);
  const AdminRouting = useRoutes(AdminRouter);

  return (
    <>
      <Routes>
        <Route path="/*" element={UserRouting} />
        <Route path="/admin/*" element={AdminRouting} />
      </Routes>
    </>
  );
}

export default App;
