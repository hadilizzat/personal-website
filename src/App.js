
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import WatchList from './components/WatchList';
import Add from './components/Add';
import Watched from './components/Watched';
import ContextProvider  from './components/context/GlobalContext';
const App = () => {
  return (
    <div>
      <Router>
        <ContextProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<WatchList/>}/>
        <Route path='/watched' element={<Watched/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
