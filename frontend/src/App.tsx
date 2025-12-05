import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/api';
import Dashboard from './pages/Dashboard/Dashboard';
import NewsItemForm from './pages/NewsItemForm/NewsItemForm';
import './App.css'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-news-item" element={<NewsItemForm />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;