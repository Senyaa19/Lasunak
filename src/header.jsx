import Conteiner from './App.jsx'
import style from'./header.module.css'


function Hea() {
  

  return (
    <>
    <header className={style.header}>
		{/* <Conteiner> */}
			<div className={style.inner}>
				<div className={style.logo}>
					<img src="./img/logo.jpg"></img>
					<div className={style.title}>Ласунак</div>
				</div>
				<nav className={style.nav}>
					<a className={style.link} href="index.html">Главная</a>
					<a className={style.link} href="menu.html">Меню</a>
					<a className={style.link} href="about.html">О нас</a>
					<a className={style.link} href="contact.html">Обратная связь</a>
				</nav>	
			</div> 
		{/* </Conteiner> */}
    </header> 
    </>
  )
}

export default Hea
