
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

const Header = () => (
  <div className="header">
    <Link to="/">DINATHA PAHASARA</Link>
  </div>
);

const BackButton = () => {
  const navigate = useNavigate();
  return <button className="back-btn" onClick={() => navigate(-1)}>Back</button>;
};

const Home = () => (
  <div className="home wallpaper">
    <Header />
    <div className="buttons">
      <Link to="/photography" className="section-btn photo">Photography</Link>
      <Link to="/cricket" className="section-btn cricket">Cricket</Link>
      <Link to="/gym" className="section-btn gym">Gym</Link>
      <Link to="/day" className="section-btn day">Day</Link>
    </div>
  </div>
);

const Page = ({ title }) => (
  <div className={`section-page ${title.toLowerCase()}`}>
    <Header />
    <BackButton />
    <h2>{title}</h2>
    <p>Add your photos and videos here.</p>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photography" element={<Page title="Photography" />} />
      <Route path="/cricket" element={<Page title="Cricket" />} />
      <Route path="/gym" element={<Page title="Gym" />} />
      <Route path="/day" element={<Page title="Day" />} />
    </Routes>
  </Router>
);

export default App;
