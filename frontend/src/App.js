import './App.css';

import Home from './Pages/Home';
import chatPage from'./Pages/Chats';
import { Route, BrowserRouter } from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      
        <Route path="/" component={Home}exact />
        <Route path="/Chat" component={chatPage} />
     
     </BrowserRouter>
    </div>
  );
}

export default App;
