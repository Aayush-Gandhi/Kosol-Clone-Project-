import './App.css';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import { Aboutus, Blog, Bloginner, Careers, Casestudy, Casestudyinner, Contactus, Home, Media, Productinner } from './routes';
import Products from './components/Products/Products';  


function App() {
  return (
    <div>

    <Routes>
        <Route path='/' element={(<Home />)} />
        <Route path='Aboutus' element={(<Aboutus />)} />
        <Route path='Contactus' element={(<Contactus />)} />
        <Route path='Productinner' element={(<Productinner />)} />
        <Route path='Media' element={(<Media />)} />
        <Route path='Careers' element={(<Careers />)} />
        <Route path='Blog' element={(<Blog />)} />
        <Route path='/Blog/Bloginner/:id' element={(<Bloginner />)} />
        <Route path='Products/Products/:searchPr' element={(<Products />)} />
        <Route path='Casestudy' element={(<Casestudy />)} />
        <Route path='/Casestudy/Casestudyinner' element={(<Casestudyinner />)} />
    </Routes>

    </div>
  );
}

export default App;
