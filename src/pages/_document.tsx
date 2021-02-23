/* o _document carrega apenas uma vez a cada visita de usuario 
  é interessante por tudo que for estatico neste arquivo 
*/
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        {/* informações do head que se encontram em todas as paginas da aplicação */}
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
        </Head>
        <body>

          <Main />{/* mostra a aplicaçao */}
          <NextScript /> {/* scripts injetados pelo next */}
        </body>
      </Html>
    )
  }
}