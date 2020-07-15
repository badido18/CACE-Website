import style from "./styles/Pres.module.sass"
import Qnav from '../../misc/quicknav'
import React from 'react'


const Presentation = () => {
    return (
        <div className={style.Pres}>
            <Qnav/>
            <h1 className={style.Title} >Qui sommes nous ?</h1>
            <p className={style.Text}>
            Le C.A.C.E a été fondé en 2016 par un groupe d'étudiants-artistes de l'ESI, dans le but d'alléger le stress de la vie estudiantine, ce à travers de nombreux événements et formations pertinentes aux arts et cultures diverses, organisés par ses 300+ membres tout  au long de ses 4 ans d'existence, ayant pour objectif d'encourager les étudiants à enrichir leur culture ainsi que leur donner goût à l'art sous toutes ses formes !
            </p>
            <div className="video">

            </div>
        </div>
    )
}

export default Presentation
