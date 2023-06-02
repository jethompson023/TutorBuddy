import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import App from './App';
import Home from './Home/HomePage';
import SignUp from './Forms/signUp';
import NoPage from './404Page/404Page';
import Tutors from './Tutors/tutors';
import ChatRoom from './ChatRoom/ChatRoom';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Forms" element={<SignUp />}/>
        <Route path="Tutors" element={<Tutors />} />
        <Route path="ChatRoom" element={<ChatRoom />} />
        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
