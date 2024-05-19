import './App.css';
import {useEffect} from 'react'
import Page from './components/Page/Page.jsx'
import { useDispatch } from 'react-redux';
import { getTicketsAction } from './store/reducers/ticketReducer.js';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTicketsAction());
  }, [dispatch])

  return (
    <div className="App">
      <Page></Page>
    </div>
  );
}

export default App;
