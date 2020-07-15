import Head from 'next/head'
import Top from '../components/landing/Top'
import Pres from '../components/landing/Presentation'

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
    </div>
    )
  }
}

export default index
