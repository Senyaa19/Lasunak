import style from './footer.module.css'

function Foot() {

    return (
        <>
            <footer className={style.footer}>
                {/* <div className={style.container}> */}
                    <div className={style.inner}>
                        <div className={style.item}>
                            <div className={style.title}>О нас</div>
                            <div className={style.subtitle}>В самом сердце города расположен наш уютный ресторан, где каждый найдет своё идеальное белорусское блюдо. Мы предлагаем широкий выбор свежих и вкусных блюд, приготовленных по традиционным рецептам. Наша команда опытных шеф-поваров с любовью создаёт каждое блюдо, используя только натуральные и качественные ингредиенты, чтобы передать настоящий вкус и тепло белорусской кухни.</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.title}>Контакты</div>
                                <div className={style.contact}>
                                    <div className={style.contact_title}>Ресторан</div>
                                    <div className={style.contact_row}>+375 (29) 458-92-01</div>
                                </div>
                                <div className={style._contact}>
                                    <div className={style.contact_title}>Минск, ул. Октябрьская, д.3</div>
                                </div>
                                <div className={style.contact}>
                                    <div className={style.contact_title}>Режим работы</div>
                                    <div className={style.contact_row}>пн.,вт.,ср.,чт.,вс. - 11.00 - 00.00</div>
                                    <div className={style.contact_row}>пт.,сб. - 11.00 - 01.00</div>
                                </div>
                                <div className={style.social}>		
                                    <img className={style.social_item} src="icon/instagram.jpg"></img>
                                    <img className={style.social_item} src="icon/facebook.jpg"></img>
                                    <img className={style.social_item} src="icon/twitter.jpg"></img>
                                    <img className={style.social_item} src="icon/vaiber.jpg"></img>
                                </div>
                        </div> 
                        <div className={style.item}>
                            <div className={style.title}>Реквизиты</div>
                                <div className={style.contact}>
                                    <div className={style.contact_row}>ООО "Ласунак"</div>
                                    <div className={style.contact_row}>УНП 475960147</div>
                                    <div className={style.contact_row}>г. Минск, ул. Октябрьская, д.3</div>
                                    <div className={style.contact_row}>р/с BY41ALFA30122B14262010270700</div>
                                    <div className={style.contact_row}>ЗАО «Альфа-Банк», БИК ALFABY2X</div>
                                    <div className={style.contact_row}>lasunak@gmail.com</div>
                                </div>
                        </div> 
                    </div> 
                {/* </div>  */}
            </footer>
        </>
    )
}

export default Foot