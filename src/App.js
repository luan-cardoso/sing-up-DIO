import './App.css';
import Header from './components/Header/Header'
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <Title
          title='A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.'
        />
        <Form/>
      </div>
      
    </div>
  );
}

export default App;
