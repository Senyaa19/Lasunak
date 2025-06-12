import Conteiner from "./conteiner"
import style from './about.module.css'

function About() {
    
    return(
        <>
            <div className={style.about}>
                <Conteiner>
                    <div className={style.title}>О НАС</div>
                        {/* <hr className={style.menu_line}>/</hr> */}
                        <div className={style.inner}>
                                <div className={style.container}>
                                    <img className={style.img} src="./img/menu.jpg"></img>
                                    <div className={style.title_item}>Меню</div>
                                    <div className={style.subtitle_item}>В нашем ресторане представлен богатый выбор блюд белорусской кухни, от классических до авторских рецептов. Мы предлагаем как традиционные драники и борщ, так и сытные мясные блюда и оригинальные десерты. У нас найдется что-то для каждого — от вегетарианских опций до насыщенных вкусов для гурманов. Погружайтесь в атмосферу белорусского уюта и наслаждайтесь настоящими вкусами нашей культуры!</div>
                                </div>
                                <div className={style.container}>
                                    <img className={style.img} src="./img/interior.jpg"></img>
                                    <div className={style.title_item}>Интерьер</div>
                                    <div className={style.subtitle_item}>Дизайн ресторана сочетает в себе текстуры натурального дерева и теплое освещение, создавая атмосферу белорусского уюта. В интерьере присутствуют элементы традиционной белорусской культуры: вышитые скатерти и орнаментальные узоры, напоминающие о народных ремеслах и мастерстве. Зона отдыха включает деревянные столы с удобными лавками, которые переносят гостей в атмосферу деревенского дома, где всегда рады разделить трапезу и по-домашнему угостить.</div>
                                </div>
                                <div className={style.container}>
                                    <img className={style.img} src="./img/cook.jpg"></img>
                                    <div className={style.title_item}>Повара</div>
                                    <div className={style.subtitle_item}>Настоящим сердцем нашего ресторана являются талантливые шеф-повара, обладающие глубокими знаниями белорусских кулинарных традиций. Они мастерски передают уникальные вкусы нашей кухни, используя только свежие и натуральные ингредиенты. Благодаря искусству и преданности делу каждого шефа, каждое блюдо становится отражением богатого кулинарного наследия Беларуси, даря вам незабываемые впечатления.</div>
                                </div>
                        </div> 
                </Conteiner> 
            </div> 
        </>
    )
}

export default About