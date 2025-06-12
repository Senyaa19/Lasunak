import Conteiner from './conteiner.jsx'
import style from'./intro.module.css'

function Intro()
{
    return(
    <>
    <div className={style.intro}>
		<Conteiner>
			<div className={style.inner}>
				<h1 className={style.title}>Добро пожаловать в Ласунак!</h1>
				<div className={style.subtitle}>В нашем ресторане мы предлагаем вам уникальное путешествие в мир белорусской кухни</div>
			</div>
		</ Conteiner>
	</div> 
    </>
    )
}

export default Intro