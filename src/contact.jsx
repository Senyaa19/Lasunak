import Conteiner from './conteiner'
import style from './contact.module.css'

function Contact (){
    return(
        <>
            <div className={style.contact}>
                <Conteiner>
                    <div className={style.container_contact}>
                        <div className={style.box_title}>
                            <div className={style.title}>Обратная связь</div>
                            <div className={style.subtitle}>Мы будем очень рады вашему письму!</div>
                        </div> 

                        <div className={style.box_top}>
                            <div className={style.item}>
                                <div className={style.img}><img src="./img/contact/contact-1.jpg"></img></div>
                                <div className={style.text}>г. Минск, ул. Октябрьская, д.3</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.img}><img src="./img/contact/contact-2.jpg"></img></div>
                                <div className={style.text}>+375 (29) 458-92-01</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.img}><img src="./img/contact/contact-3.jpg"></img></div>
                                <div className={style.text}>lasunak@gmail.com</div>
                            </div>
                        </div>

                        <div className={style.box_bottom}>
                                <div className={style.box_input_top}>
                                    <input className={style.top} placeholder="Ваше имя" type="" name=""  id="name"></input>
                                    <input className={style.top} placeholder="Ваш email" type="" name="" id="email"></input>
                                </div>
                                <textarea className={style.bottom} placeholder="Ваше сообщение" type="" name="" id="text"></textarea>
                        </div>

                        <div className={style.box_btn}>
                            <a className={style.btn} href="#" id="send">Отправить</a>
                        </div>
                    </div> 
                </Conteiner>
            </div> 

        </>
    )
}

export default Contact
