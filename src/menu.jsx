import Menu_con from './menu_con.jsx'
import style from './menu.module.css'

function Menu(props) {
    const { subtitle, arr } = props;
  
  return (
    <>
    <div className="test">МЕНЮ</div>
		<div className="menu_subtitle">{subtitle}</div>
			<div className="menu_inner">
                {
                    arr.map(el => <Menu_con 
                        title_item={el.title_item} 
                        gram_item={el.gram_item} 
                        structure_item={el.structure_item} 
                        price_item={el.price_item}/>)
                }
			</div> 
    </>
  )
}

export default Menu
