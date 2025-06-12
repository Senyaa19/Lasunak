import { useState } from 'react'
import Hea from './header.jsx'
import Menu from './menu.jsx'
import Intro from './intro.jsx'
import Foot from './footer.jsx'
import style from'./App.module.css'

const arr = [
  {title_item:"234234", gram_item:"234234", structure_item:"234234", price_item:"234234"}, 
  {title_item:"dfdsfdsf", gram_item:"dfdsfdsf", structure_item:"dfdsfdsf", price_item:"dfdsfdsf"}
];
const arr1 = [
  {title_item:"2", gram_item:"3", structure_item:"4", price_item:"5"}, 
  {title_item:"a", gram_item:"s", structure_item:"d", price_item:"f"}
];

function Conteiner ({children}){
  return (
  <div className={style.container}>
    {children}
  </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Conteiner />
        <Hea />
        <Intro />
        {/* <Menu subtitle="Супы" arr={arr}/>
        <Menu subtitle="Грибы" arr={arr1}/> */}
        <Foot />

    </>
  )
}

export default App
