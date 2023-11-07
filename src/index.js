import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Contacts from './views/Contacts'
import { NotFound } from './views/NotFound';
import News from './views/News';
import Article from './views/Article';
import ScrollTop from './components/Generics/scrollToTop';
import { ArticelProvider } from './contexts/ArticelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ArticelProvider>
        <ScrollTop/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/news/:id' element={<Article/>}/>
            <Route path='*' element={<NotFound/>} />
          </Routes>
      </ArticelProvider>
    </BrowserRouter>
  </React.StrictMode>
);


