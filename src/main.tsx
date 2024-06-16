import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ChatComponent from './components/Chat/index.tsx'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <ChatComponent />
  </React.StrictMode>,
)
