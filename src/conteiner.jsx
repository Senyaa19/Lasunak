import style from './conteiner.module.css'

function Conteiner ({children}){
  return (
  <div className={style.container}>
    {children}
  </div>
  )
}

export default Conteiner