
import Menu_con from './menu_con.jsx'
import style from './menu.module.css'
import Conteiner from './conteiner.jsx';

function Menu(props) {
    const { subtitle, arr } = props;
  
  return (
    <>
    <Conteiner>
      <div className={style.test}>МЕНЮ</div>
      <div className={style.subtitle}>{subtitle}</div>
        <div className={style.inner}>
                  {
                      arr.map(el => <Menu_con 
                          title_item={el.title_item} 
                          gram_item={el.gram_item} 
                          structure_item={el.structure_item} 
                          price_item={el.price_item}/>)
                  }
        </div> 
      </Conteiner>
    </>
  )
}

export default Menu
