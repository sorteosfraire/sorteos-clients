# Sitio Web de Rifas

## Descripción
Plataforma web de rifas que permite a los clientes comprar boletos para participar en sorteos con premios atractivos. Los administradores pueden gestionar múltiples rifas de forma eficiente y los clientes disfrutan de una experiencia de usuario intuitiva para la compra de boletos. El sistema maneja hasta 100,000 boletos por rifa y garantiza la disponibilidad.

## Objetivos
- **Facilitar la compra de boletos**: Proveer una interfaz amigable para que los usuarios puedan comprar boletos de manera rápida y sencilla.
- **Gestión eficiente de rifas**: Permitir a los administradores crear y gestionar rifas de manera eficiente.
- **Experiencia de usuario intuitiva**: Asegurar que los usuarios tengan una experiencia fluida y agradable al interactuar con la plataforma.
- **Soporte para múltiples rifas**: Manejar múltiples rifas simultáneamente sin afectar el rendimiento del sistema.

## Apartado Técnico

### Tecnologías Utilizadas
- **Node.js** (v20.18.1)
- **TypeScript**
- **React**
- **Next.js** (v15.0.3)
- **Tailwind CSS**
- **MongoDB Atlas** (Dedicated M10+)
- **Pusher**

### Estructura del Proyecto
- **src/app**: Contiene las páginas principales de la aplicación.
- **src/components**: Componentes reutilizables como `Navbar`, `Card`, `Grid`, y `Slide`.
- **src/context**: Contextos de React para manejar el estado global, como el tema.
- **src/lib**: Librerías y configuraciones, como la configuración de Pusher.
- **public**: Archivos estáticos como imágenes.

### Funcionalidades Implementadas
- **Navbar**: Barra de navegación con enlaces a las páginas principales.
- **Cambio de Tema**: Soporte para modo claro y oscuro.
- **Página de Métodos de Pago**: Información sobre las cuentas bancarias.
- **Página de Preguntas Frecuentes**: Sección con preguntas comunes.
- **Página de Contacto**: Información de contacto.
- **Verificador de Boletos**: Página para verificar boletos.

### Funcionalidades Pendientes
- **Página de Inicio**:
  - Slide para las rifas vigentes
  - Slide con los ganadores de las rifas finalizadas
  - Cuadrícula de premios entregados

- **Página de Rifa**:
  - Imagen y descripción detallada de los premios
  - Lista de boletos seleccionados con estado de apartado corto plazo
  - Búsqueda de números específicos en la cuadrícula
  - Selección aleatoria de N boletos (múltiplos de 5)
  - Cuadrícula con scroll infinito de boletos disponibles y apartados

- **Confirmación de Apartado**: 
  - Instrucciones para transferencia SPEI
  - Lista de boletos seleccionados
  - Formulario de registro con:
    - Número de WhatsApp
    - Estado (lista desplegable)
    - Nombre (autocompletado si el número existe)
  - Redirección a WhatsApp

- **Sistema de Estados de Boletos**:
  - Disponible
  - Apartado corto plazo (caducidad 6 horas)
  - Apartado largo plazo (caducidad 1 semana)
  - Comprado/Pagado

- **Card de Boleto**:
  - Imagen del premio
  - Número del boleto
  - Estado del boleto
  - Información parcialmente enmascarada del participante:
    - Número de teléfono
    - Nombre del cliente
    - Estado de residencia

- **Verificador de Boletos**: Lista desplegable de sorteos y textbox para ingresar números de boletos.
- **Gestión de Rifas**: Funcionalidades para que los administradores puedan crear y gestionar rifas.
- **Cuadrícula de Boletos**: Mostrar boletos disponibles y apartados con scroll infinito.
- **Integración con WhatsApp**: Redireccionar a WhatsApp para finalizar la compra.

## Instalación y Ejecución
1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Configura las variables de entorno:
   ```sh
   cp .env.example .env.local
   ```

4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm start`: Inicia el servidor de producción
- `npm run lint`: Ejecuta el linter
- `npm run test`: Ejecuta las pruebas

## Despliegue
El proyecto está configurado para ser desplegado en Vercel. Para desplegar:
1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno en el panel de Vercel
3. Despliega automáticamente con cada push a main

## Contribución
1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia
Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## Contacto
Tu Nombre - [@tuTwitter](https://twitter.com/tuTwitter)
Link del proyecto: [https://github.com/tu-usuario/tu-repositorio](https://github.com/tu-usuario/tu-repositorio)