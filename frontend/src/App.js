import './App.css';
import Home from './components/Home'
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <div>
      <Home/>
      <MessengerCustomerChat
      pageId="1965283286842649"        
      appId="376127083909737"
               
                 />

    </div>
  );
}

export default App;
