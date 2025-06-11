import './header.modul.css'

function Hea() {
  
  return (
    <>
    <header className="header">
	<div className="container">
		<div className="header_inner">
			<div className="header_logo">
				<img src="./img/logo.jpg"></img>
				<div className="header_title">Ласунак</div>
			</div>
			<nav className="nav">
				<a className="nav_link" href="index.html">Главная</a>
				<a className="nav_link" href="menu.html">Меню</a>
				<a className="nav_link" href="about.html">О нас</a>
				<a className="nav_link" href="contact.html">Обратная связь</a>
			</nav>	
		</div> 
	</div> 
    </header> 
    </>
  )
}

export default Hea
