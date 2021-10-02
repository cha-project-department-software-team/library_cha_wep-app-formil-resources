import './App.css';
// eslint-disable-next-line
import FormPage from './components/Form.jsx';
// eslint-disable-next-line
import FormikContainer from './components/FormikContainer';
import LoginForm from './LoginForm/LoginForm';
function App() {
  return (
    <div className="App">
      {/*<FormPage/> */}
      {/* <FormikContainer/> */}
      <LoginForm/>
    </div>
  );
}

export default App;
