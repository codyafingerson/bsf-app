import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import IndexPage from "./pages/IndexPage";

// Context import
import { VolunteerProvider } from "./services/VolunteerContext";

function App() {
  return (
    <VolunteerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
    </VolunteerProvider>
  );
}
export default App;
