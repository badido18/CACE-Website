import Head from 'next/head'
import Top from '../components/landing/Top'
import Pres from '../components/landing/Presentation'
import Even from '../components/landing/EventPres'
import Exp from '../components/landing/Experience'
import Conf from '../components/landing/Confiance'
export class index extends React.Component {


  render() {
    return (
      <div className="container">
        <Head>
          <title>Club Artistique et Culturel de l'ESI</title>
          <link rel="icon" href="/assets/images/CACE white.png" />
        </Head>
        <Top/>
        <Pres/>
        <Even/>
        <Exp/>
        <Conf/>
    </div>
    )
  }
}

export default index
