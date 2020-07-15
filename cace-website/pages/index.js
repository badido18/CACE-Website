import Head from 'next/head'
import Top from '../components/landing/Top'


export class index extends React.Component {


  render() {
    return (
      <div className="container">
        <Head>
          <title>Club Artistique et Culturel de l'ESI</title>
          <link rel="icon" href="/assets/images/CACE white.png" />
        </Head>
        <Top/>
    </div>
    )
  }
}

export default index
