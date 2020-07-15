import React from 'react'
import style from './styles/Foot.module.sass'
import Button from '../../misc/Button'
const Footer = () => {
    return (
        <div className={style.Foot}>
            <div className={style.Resum}>
                <div className={style.Logo}>
                    <img src="assets/images/CACE white.png" alt=""/>
                </div>
                <div className={style.Infos}>
                    <div className={style.social}>
                        <h3>Facebook</h3>
                        <h3>Instagram</h3>
                    </div>
                    <h1> Club Artistique et Culturel de l'esi</h1>
                    <p>École nationale supérieure d'informatique Alger
Oued Smar , 16039 , Alger </p>
                    <span>Email : Cace@esi.dz</span>
                </div>
                <div className={style.Contact}>
                    <h1>Contactez-Nous</h1>
                    <input placeholder="Email" type="text"/>
                    <input placeholder="Object" type="text"/>
                    <textarea placeholder="Votre Message" ></textarea>
                    <Button text="Envoyer" className={style.ctbtn} />
                </div> 
            </div>
            <div className={style.message}>
                <p>
                Club Artistique et Culturel de l'Esi © 2020  Fait avec ❤️ 
                {//par Mohamed Abdelmadjid Boudis 
                }
                </p>
            </div>
        </div>
    )
}

export default Footer
