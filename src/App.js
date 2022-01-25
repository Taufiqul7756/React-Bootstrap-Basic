
import './App.css';

import { Button } from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
import Fragment from './components/Fragment/Fragment';

function App() {
  return (
    <div >
      <h1>React</h1>
      <Button variant="primary">Primary</Button>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>

    </div>
  );
}

export default App;
