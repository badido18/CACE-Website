import React , {useState} from 'react'

const navbar = () => {
    const [imgpath, setimgpath] = useState("/assets/svg/open-menu.svg")
    const ShownavM = (e) => {
        if (document.getElementById("Menu").style.display === "flex")
        {
            document.getElementById("Menu").style.display = "none"
            document.getElementById("NavBarM").style.top = "00px"
            setimgpath("/assets/svg/open-menu.svg")
        }
        else
        {
            document.getElementById("Menu").style.display = "flex"
            document.getElementById("NavBarM").style.top = "70px"
            setimgpath("/assets/svg/close.svg")
        }
    }
    return (
        <div> 
            <div className="nav collapsed" id="NavBar">
                <div className="navctn">
                    <img src="/assets/images/CACE black.png" alt=""/>
                    <h1>Actualités</h1>
                    <h1>Évènement</h1>
                    <h1>Show Room</h1>
                    <h1 className="redish">À Propos</h1>
                </div>
            </div>
            <div className="navM collapsed" id="NavBarM">
                <div className="navMctn">
                    <img src="/assets/images/CACE black.png" alt=""/>
                    <img alt="" src={imgpath} className="svg" onClick={ShownavM}/>
                </div>
                <div className="Menu" id="Menu">
                    <h1>Actualités</h1>
                    <h1>Évènement</h1>
                    <h1>Show Room</h1>
                    <h1 className="redish">À Propos</h1>
                </div>
            </div>
        </div>
    )
}

export default navbar
