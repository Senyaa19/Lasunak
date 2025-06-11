import './header.module.css'

function Hea() {
  
  return (
    <>
    <header className={style.header}>
	<div className={style.container}>
		<div className={style.inner}>
			<div className={style._logo}>
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
	</div> 
    </header> 
    </>
  )
}

export default Hea
