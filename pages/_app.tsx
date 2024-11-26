// pages/_app.tsx
import { AppProps } from 'next/app';
import { ThemeProvider } from '../src/context/ThemeContext'; // Asegúrate de importar el ThemeProvider
import '../src/styles/globals.css';  // Importa tus estilos globales

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Envolver la aplicación con ThemeProvider para que el contexto de tema esté disponible
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
