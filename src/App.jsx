import { useState } from 'react'
import Header from './components/header.jsx'
import Body from './components/Body.jsx'
import Sidebar from './components/sidebar.jsx'
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
        <Header />
        <div className="main-content">
          <div className="content">
            <h1>Analysis page</h1>
            <p>Some content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
