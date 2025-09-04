import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;