import './App.css';
import MultiForm from './components/MultiForm/MultiForm';
import Navbar from './components/Navbar/Navbar';
import FormContextProvider from './contexts/FormContextProvider';

function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <Navbar />
        <MultiForm />
      </FormContextProvider>
    </div>
  );
}

export default App;
