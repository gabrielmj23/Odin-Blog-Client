import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-expand-lg mb-3' style={{
        backgroundColor: 'darkkhaki'
      }}>
        <a className='navbar-brand text-dark mx-auto fs-3' href='/'><strong>Odin Blog</strong></a>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
