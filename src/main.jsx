import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hea from './header.jsx'
import Menu from './menu.jsx'


const arr = [
  {title_item:"234234", gram_item:"234234", structure_item:"234234", price_item:"234234"}, 
  {title_item:"dfdsfdsf", gram_item:"dfdsfdsf", structure_item:"dfdsfdsf", price_item:"dfdsfdsf"}
];
const arr1 = [
  {title_item:"2", gram_item:"3", structure_item:"4", price_item:"5"}, 
  {title_item:"a", gram_item:"s", structure_item:"d", price_item:"f"}
];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hea />
    <Menu subtitle="Супы" arr={arr}/>
    <Menu subtitle="Грибы" arr={arr1}/>
  </StrictMode>,
)
