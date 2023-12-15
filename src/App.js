import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import SpeakButton from './components/SpeakButton';
import View from './components/View';
import "./App.css";


function App() {
  return (
    <Router>
       <Routes>
        <Route path="*" element={<Form />} />
        <Route path="/viewDetails" element={<View />} />
      </Routes>

    </Router>
    
  );
}

export default App;
