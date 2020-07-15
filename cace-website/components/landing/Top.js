import {useState } from 'react'
import style from "./styles/Top.module.sass"
const Top = () => {
    const [slog, setslog] = useState("l'Artiste")
    
    const cgh = ()=> {
        switch(slog) {
            case "l'Artiste" : setslog("le Musicien") ; break ;
            case "le Musicien" : setslog("l'Acteur") ; break ;
            case "l'Acteur" : setslog("le Dessinateur") ; break ;
            default : setslog("l'Artiste")
        }
    }
    const scrolldown = () => {
        scrollTo({top: 900,
            behavior: 'smooth'})
    }
    return (
        <div className={style.Top}>
            <div className = {style.logo}>
                <img alt="" src={"assets/images/CACE white.png"} />
            </div>
            <div className = {style.slogan} >
                <h1 onAnimationIteration={cgh}>
                    Libérez <span className={style.redslog}>{slog}</span> qui est en vous 
                </h1>
            </div>
            <div className={style.voirplusctn} onClick={scrolldown}>
                <h3>
                    Voir plus
                </h3>
                <div className={style.triangle}>
                    <img src="/assets/images/triangle.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Top
