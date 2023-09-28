import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RealisationItem from '@pages/RealisationItem';
import Page404 from '@pages/Page404';
import WebDeveloppement from '@pages/WebDeveloppement';
import GAds from '@pages/GAds';
import SEA from '@pages/SEA';
import SEO from '@pages/SEO';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogId from './pages/BlogId';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/developpement-web" element={<WebDeveloppement />} />
            <Route path="/google-ads" element={<GAds />} />
            <Route path="/referencement-naturel" element={<SEO />} />
            <Route path="/referencement-payant" element={<SEA />} />
            <Route path="/blog/:id" element={<BlogId />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/realisation/:id" element={<RealisationItem />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
