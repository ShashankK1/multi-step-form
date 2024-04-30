import './App.css';
import Navbar from './components/Navbar/Navbar';
import FormContextProvider from './contexts/FormContextProvider';

function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <Navbar />
      </FormContextProvider>
    </div>
  );
}

export default App;
