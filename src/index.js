import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import App from './App';
import PostsList from './routes/PostsList';
import Post from './routes/Post';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={
            <main> <PostsList /> </main>
          } />
          <Route path='/posts/:postId' element={<main> <Post /> </main>} />
          <Route path='*' element={
            <main className='mt-5 text-center'>
              <h4>There's nothing here.</h4>
            </main>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
