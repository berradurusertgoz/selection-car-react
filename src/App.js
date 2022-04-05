import './App.css';
import BottomBar from './components/BottomBar';
import Colors from './components/Colors';
import Navbar from './components/Navbar'
import Selection from './components/Selection';
import Content from './components/Content';
import './style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summary from './components/Summary';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <>
     <div className="App">
     <Router>
     <DataProvider>
     <Navbar />
       <Routes>
          <Route index element={<Content />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/accessories" element={<Selection />} />
          <Route path="/summary" element={<Summary />} />
       </Routes>
       <BottomBar />
       </DataProvider>
     </Router>
    
    </div>
    </>
   
  );
}

export default App;
