import Head from 'next/head'
import Top from '../components/landing/Top'
import Pres from '../components/landing/Presentation'
import Even from '../components/landing/EventPres'
import Exp from '../components/landing/Experience'
import Conf from '../components/landing/Confiance'
import Footer from '../components/landing/Footer'
import Nav from '../misc/navbar'
export class index extends React.Component {
  
  componentDidMount(){
    var lastScrollTop = 0;
    document.addEventListener("scroll", () => { 
      var state = window.pageYOffset || document.documentElement.scrollTop ;
      if(window.scrollY >= window.innerHeight ) {
        if (state > lastScrollTop){
            document.getElementById("NavBar").classList.add("collapsed")
            document.getElementById("NavBarM").classList.add("collapsed")
            document.getElementById("Menu").classList.remove("menuopen")
        } else {
            document.getElementById("NavBar").classList.remove("collapsed")
            document.getElementById("NavBarM").classList.remove("collapsed")
        }
      }else{
        document.getElementById("NavBar").classList.add("collapsed")
        document.getElementById("NavBarM").classList.add("collapsed")
      }
      lastScrollTop = state <= 0 ? 0 : state; 
    }, false);
  }
  render() {
    return (
      <div className="container" >
        <Head>
          <title>Club Artistique et Culturel de l'ESI</title>
          <link rel="icon" href="/assets/images/CACE white.png" />
        </Head>
        <img src="/thumbnails/landing.png" style={{position : "absolute" , top : 0 , zIndex : "-5000"}}  alt=""/>
        <Nav/>
        <Top/>
        <Pres/>
        <Even/>
        <Exp/>
        <Conf/>
        <Footer/>
    </div>
    )
  }
}

export default index
