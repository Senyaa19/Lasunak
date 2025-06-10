function Menu_con(props) {
  const { title_item, gram_item, structure_item, price_item } = props;

  return (
    <>
				<div className="menu_container">
					<div className="menu_title_item">{title_item}</div>

					<div className="menu_gram_item">{gram_item}</div>
					<div className="menu_structure_item">{structure_item}</div>
					<div className="menu_price_item">{price_item}</div>
				</div>
				
    </>
  )
}

export default Menu_con
