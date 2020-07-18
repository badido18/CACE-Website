import React from 'react'
import style from './styles/Even.module.sass'
import Button from '../../misc/Button'
const EventPres = () => {
    return (
        <div className={style.Even} id="Events">
            <h1 className={style.Title}>
                Nos Évènements
            </h1>
            <div className={style.singit } >
                <div className = {style.eventxt}>
                    <h1 className={style.tit}>
                    Sing it !
                    </h1>
                    <p>
                    Des concerts qui permettent aux talents musicaux de l'école de faire leur premier pas sur scène et dévoiler leur potentiel, ainsi qu'offrir un moment de détente aux étudiants. +20 organisateurs, et 250 à 400 personnes en audience
                    <br/><span className={style.voirplus}>Voir plus</span>
                    </p>
                </div>
                <div className={style.pic}>
                    <img src="assets/images/singit.png" alt=""/>
                </div>
            </div>
            <div className={style.yennayer}>
                <div className={style.pic2}>
                    <img src="assets/images/yennayer.png" alt=""/>
                </div>
                <div className = {style.eventxt}>
                    <h1 className={style.tit}>
                    Yennayer
                    </h1>
                    <p>
                    Le nouvel an amazigh est exclusivement fêté par CACE au niveau de l'école, une occasion pour faire revivre la culture et l'identité si riches de notre pays. +10 Organisateurs  +50 contributions et 400 personnes en audience .
                    <br/><span className={style.voirplus}>Voir plus</span>
                    </p>
                </div>
            </div>
            <div className={style.ftour}>
                <div className = {style.eventxt}>
                    <h1 className={style.tit}>
                    Ftour ESI
                    </h1>
                    <p>
                    Iftar collectif organisé chaque année en mois de ramadan, rassemblant étudiants, enseignants et employés de l'école autour d'une même table dans une ambiance familiale. +40 organisateurs, +250 contributeurs, et 300 à 700 personnes à table.
                    {" "}<span className={style.voirplus}>Voir plus</span>
                    </p>
                </div>
                <div className={style.pic}>
                    <img src="assets/images/ftour.png" alt=""/>
                </div>
            </div>
            <div className={style.evenbtn}>
                <Button text="Voir tous nos événements" className="pinkbtn"/>
            </div>
        </div>
    )
}

export default EventPres
