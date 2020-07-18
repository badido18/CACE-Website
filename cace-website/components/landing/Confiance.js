import React from 'react'
import style from './styles/Conf.module.sass'
import Button from '../../misc/Button'
const Confiance = () => {
    return (
        <div className={style.Conf}>
            <h1 className={style.Title}>
                Ils nous ont fait confiance
            </h1>
            <div className={style.Confctn}> 
                <div className={style.ctn}>
                    <img src="/assets/svg/ETIC.svg" alt=""/>
                    <img src="/assets/svg/gdg.svg" alt=""/>
                    <img src="/assets/svg/Solei HEC.svg" alt=""/>
                </div>
            </div>
            <div className={style.evenbtn}>
                <Button text="Devenir Sponsor / partenaire" className="redishbtn"/>
            </div>
            <div className={style.end}>

            </div>
        </div>
    )
}

export default Confiance
