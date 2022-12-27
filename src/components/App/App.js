import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import api from '../../utils/api';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Invalid from '../Invalid/Invalid';

function App() {
  const [data, setData] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleCnpjSubmit(cnpj) {
    setData('');
    api
      .getCnpj(cnpj)
      .then(setLoading(true))
      .then((data) => {
        setData(data);
        setLoading(false);
        setIsPopupOpen(false);
      })
      .catch((res) => {
        if (!res.ok) {
          setLoading(false);
          setIsPopupOpen(true);
        }
      });
  }

  function onClose() {
    setIsPopupOpen(false);
  }

  return (
    <div className="App">
      <div className="App_console">
        <Header />
        <div className="divisor"></div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/main"
            element={
              <Main
                onCnpjSubmit={handleCnpjSubmit}
                data={data}
                loading={loading}
                isPopupOpen={isPopupOpen}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isPopupOpen && <Invalid onClose={onClose} />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
