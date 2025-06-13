import style from './menu.module.css'

function Menu_con(props) {
  const { title_item, gram_item, structure_item, price_item } = props;

  return (
    <>
				<div className={style.menu_container}>
					<div className={style.title_item}>{title_item}</div>
					<div className={style.gram_item}>{gram_item}</div>
					<div className={style.structure_item}>{structure_item}</div>
					<div className={style.price_item}>{price_item}</div>
				</div>
				
    </>
  )
}

export default Menu_con
