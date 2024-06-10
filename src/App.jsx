import { useState, useEffect } from 'react';
import Header from './components/header.jsx'
import Sidebar from './components/sidebar.jsx'
import Body from './components/body.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="App d-flex">
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <div className={`main-container ${collapsed ? 'expanded' : ''}`}>
        <div className="main-content">
        <Header />

          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
