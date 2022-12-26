import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header.js';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Resultado from './Resultado/Resultado';
import api from '../utils/api';
import About from './About/About';
import NotFound from './NotFound/NotFound';

function App() {
  const [data, setData] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  function handleCnpjSubmit(cnpj) {
    api
      .getCnpj(cnpj)
      .then(setLoading(true))
      .then((data) => {
        console.log(loading);
        setData(data);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <div className="App_console">
        <Header />
        <div className="divisor"></div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/main"
            element={
              <Main
                onCnpjSubmit={handleCnpjSubmit}
                data={data}
                loading={loading}
              />
            }
          />
        </Routes>
        <Footer />
        <div style={{ backgroundColor: '#026E81' }}>#026E81</div>
        <div style={{ backgroundColor: '#00ABBD' }}>#00ABBD</div>
        <div style={{ backgroundColor: '#fad149' }}>#fad149</div>
        <div style={{ backgroundColor: '#0099DD' }}>#0099DD</div>
        <div style={{ backgroundColor: '#FF9933' }}>#FF9933</div>
        <div style={{ backgroundColor: '#edecec' }}>#edecec</div>
        <div style={{ backgroundColor: '#A1C7E0' }}>#A1C7E0</div>
      </div>
    </div>
  );
}

export default App;
