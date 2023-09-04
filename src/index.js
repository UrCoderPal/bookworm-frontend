import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nopage  from './CompPages/Nopage/Nopage';
import Header from "./CompPages/Navbars/Header";
import Home from "./CompPages/Home/Home";
import Feedback from "./Feedback";
import Search from "./CompPages/Navbars/Search";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Account from './CompPages/Account/Account';
import Library from './CompPages/Library/Library';
import Myshelf from './CompPages/Shelf/Myshelf';
import SignIn from './CompPages/Signin/SignIn';
import SignUp from './CompPages/Signup/SignUp';
import Cart from './CompPages/Cart/Cart';
import AudioList from './CompPages/List/AudioList';
import EBookList from './CompPages/List/EBookList';
import VideoList from './CompPages/List/VideoList';
import LanguagePage from './CompPages/List/LanguagePage';
import MusicPage from './CompPages/Music/MusicPage'
import Videos from './CompPages/Videos/Videos'
import Invoice from './CompPages/Invoice/Invoice'

import LanguagePageForMusic from './CompPages/Music/LaguagePageForMusic'



import Product from './CompPages/List/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Header" element={<Header />} />
          <Route path="Product" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="EBook" element={<EBookList />} />
          <Route path="AudioBook" element={<AudioList />} />
          <Route path="VideoBook" element={<VideoList />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="Search" element={<Search />} />
          <Route path="Myshelf" element={<Myshelf />} />
          <Route path="Account" element={<Account />} />
          <Route path="Library" element={<Library />} />
          <Route path="Language" element={<LanguagePage />} />
          <Route path="Cart/:userId" element={<Cart />} />
          <Route path="*" element={<Nopage />} />
          <Route path="Videos" element={<Videos />} />
          <Route path="Music" element={<MusicPage />} />
          <Route path="Invoice" element={<Invoice />} />
          <Route path="LanguagePageForMusic" element={<LanguagePageForMusic />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
