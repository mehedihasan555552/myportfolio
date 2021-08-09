import './App.css';
import Home from './components/Home'
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <div>
      <Home/>
      <MessengerCustomerChat
      pageId="100032450186880"        
      appId="376127083909737"
               
                 />

    </div>
  );
}

export default App;
