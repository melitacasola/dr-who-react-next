
import './globals.css'
import {montserrat} from './fonts'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


export default function RootLayout({ children }) {
  

  return (
    

    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Dr. Who</title>
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
      
        <Footer/>
      </body>
      
    </html>
    
  )
}
