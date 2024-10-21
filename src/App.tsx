import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { loader as rootLoader } from './routes/root';
import { loader as ruleLoader } from './routes/rules';
import './index.css'
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Rule from './pages/Rule';
import ErrorPage from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Dashboard />} errorElement={<ErrorPage />} loader={rootLoader}>
      <Route index element={<Home />} />
      <Route path='/rules/:ruleId' element={<Rule />} loader={ruleLoader} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

export default App
