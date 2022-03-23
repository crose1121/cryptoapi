import './App.css';
import CryptoFetch from './components/CryptoFetch';
import CryptoAxios from './components/CryptoAxios';
import CryptoAxiosUseEffect from './components/CryptoAxiosUseEffect';

function App() {
  return (
    <div className="App">
      <h1>Crypto API!</h1>
      <hr />
      {/* <CryptoFetch></CryptoFetch> */}
      {/* <CryptoAxios></CryptoAxios> */}
      <CryptoAxiosUseEffect></CryptoAxiosUseEffect>
    </div>
  );
}

export default App;
