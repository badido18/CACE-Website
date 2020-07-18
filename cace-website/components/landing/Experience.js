import React from 'react'
import style from './styles/Exp.module.sass'
import Card from '../../misc/temoinCard'

const experience = () => {
    return (
        <div className={style.Exp}>
            <h1 className={style.Title}>
                Leur Expérience
            </h1>
            <div className={style.Expctn}>
                <div className={style.ctn}>
                    <Card  
                        text = {`Grace au Club artistique et culturel de
                        l'ESI j'ai réussi à réanimer mon esprit 
                        artistique que j'ai perdu il y a très
                        longtemps , la convivialité au sein des
                        membres et la passion qu'on partage
                        ici à fait de ce club l'une de mes 
                        meilleures expérience universitaire et
                        artistique.`}
                        pic = "/assets/images/Zack.png"
                        name = "Zakaria Gouttel"
                        post = "Vice-président"
                    />
                    <Card  
                        text = {`J'ai intégré le club à ma première année
                        à l'ESI, et il m'a permis de sortir de ma
                        bulle, reprendre goût à l'art, et me
                        développer personnellement ! Le CACE
                        est vite devenu si cher à mes yeux que
                        je me suis engagée à me donner corps
                        et âme à sa bonne gestion.`}
                        pic = "/assets/images/Dyna.png"
                        name = "Dyna Ouchebara"
                        post = "Présidente 2019/2020"
                    />
                    <Card  
                        text = {`Pour Moi, Le CACE n'est pas seulement 
                        un club, mais plutôt une famille dans
                        laquelle on grandit, on apprend, on se
                        développe en arts, culture, savoir être et
                        savoir faire, et on s'amuse en faisant
                        tout ceci bien sûr.`}
                        pic = "/assets/images/Abdessalem.png"
                        name = "Abdessalem Oumellal"
                        post = "Président 2018/2019"
                    />
                </div>
            </div>
        </div>
    )
}

export default experience
