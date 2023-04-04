import './App.css';
import Layout from './pattern/layouts';
import { Quotes } from './pattern/containers/quotes-container';
import Navbar from './pattern/organisms/navbar';

function App() {

  return (
    <Layout>
      <Navbar/>
      <Quotes/>
    </Layout>
  );
}

export default App;
