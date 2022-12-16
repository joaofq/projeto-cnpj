import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer';
import Resultado from './Resultado/Resultado';
import Form from './Form/Form';
import api from '../utils/api';

function App() {
  const [data, setData] = React.useState('');

  function handleCnpjSubmit(cnpj) {
    api.getCnpj(cnpj).then((data) => {
      setData(data);
    });
  }

  return (
    <div className="App">
      <div className="App_console">
        <Header />
        <br></br>
        <div style={{ backgroundColor: '#026E81' }}>#026E81</div>
        <div style={{ backgroundColor: '#00ABBD' }}>#00ABBD</div>
        <div style={{ backgroundColor: '#0099DD' }}>#0099DD</div>
        <div style={{ backgroundColor: '#FF9933' }}>#FF9933</div>
        <div style={{ backgroundColor: '#A1C7E0' }}>#A1C7E0</div>
        <Form onCnpjSubmit={handleCnpjSubmit} />
        <Resultado data={data} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
