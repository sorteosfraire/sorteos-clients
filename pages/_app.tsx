// pages/_app.tsx
import '../src/styles/globals.css';  // Importa tus estilos globales

import { AppProps } from 'next/app'; // Importa AppProps para definir el tipo de las props

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Aquí puedes agregar el Navbar o cualquier otro componente común para todas las páginas
    <>
      <Component {...pageProps} />  {/* Este es el componente de la página actual */}
    </>
  );
}

export default MyApp;
