import { Routes, Route } from "react-router-dom";
import Dashboard from "../Componants/Dashboard";
import Schedule from "../Componants/Schedule";
import Courses from "../Componants/Courses";
import Gradebook from "../Componants/Gradebook";
import Performance from "../Componants/Performance";
import Anouncements from "../Componants/Anouncement"; // Fixed typo here
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import RequireAuth from "../Guard/requireAuth ";

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<MainPage />}>
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gradebook" element={<Gradebook />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/announcements" element={<Anouncements />} />
      </Route>
    </Routes>
  );
}
