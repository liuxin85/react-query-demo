import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamaicParallelPage from "./components/DynamaicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";
import InfiniteQueriesPage from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-parallel">RQ parallel</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-parallel">RQ dynamic-parallel</Link>
              </li>
              <li>
                <Link to="/rq-dependent">RQ /rq-dependent</Link>
              </li>
              <li>
                <Link to="/rq-paginated">RQ /rq-paginated</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/rq-infinite" element={<InfiniteQueriesPage />} />
            <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
            <Route
              path="/rq-dependent"
              element={<DependentQueriesPage email="john@example.com" />}
            />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamaicParallelPage heroIds={[1, 3]} />}
            />
            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroPage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
