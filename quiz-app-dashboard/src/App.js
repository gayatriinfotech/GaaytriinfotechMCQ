import logo from './logo.svg';
import './App.css';
import Index from './Pages/Index'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Questions from './Pages/Questions';
import UpdateQuestions from './Pages/UpdateQuestions'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}></Route>
      <Route path="/questions" element={<Questions/>}></Route>
      <Route path='/update/:id' element={<UpdateQuestions/>} />
    </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
