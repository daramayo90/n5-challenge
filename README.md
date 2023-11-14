# N5 Challenge - Microfrontends con React

## Descripción del Proyecto

Este proyecto demuestra una implementación avanzada y moderna de microfrontends utilizando React. Consiste en una aplicación web que muestra dos listados de personajes de dos universos diferentes: Rick and Morty y Harry Potter. Cada listado es manejado por un microfrontend independiente, garantizando una arquitectura modular y escalable.

## Características Principales

-  **Microfrontends Independientes:** Tres proyectos completamente independientes (Host, Harry-Potter, Rick-And-Morty) que se combinan en un solo punto de entrada.
-  **Cambio de Idioma:** El proyecto host incluye una funcionalidad para cambiar el idioma (Inglés/Español), afectando la visualización de descripciones y textos en toda la aplicación.
-  **Styled Components con BEM:** Uso de Styled Components para el estilo de la aplicación, aplicando la metodología BEM para una mejor organización y legibilidad del código CSS.
-  **Escalabilidad:** Diseño y arquitectura pensados para una fácil escalabilidad y mantenimiento del proyecto.

## Tecnologías Utilizadas

-  **React:** Para la construcción de interfaces de usuario.
-  **Webpack:** Para la compilación y manejo de módulos.
-  **Styled Components:** Para el manejo de estilos.
-  **i18next:** Para la internacionalización y cambio de idioma.
-  **React Router:** Para la navegación entre diferentes vistas en el host.
-  **Lerna:** Para gestionar múltiples paquetes en un monorepo.
-  **TypeScript:** Para agregar tipado fuerte y mejorar la calidad del código.

## Patrones de Diseño Utilizados y Principios SOLID

Se incorporaron patrones de diseño y principios SOLID al challenge, de esta manera se garantiza un código fácil de mantener y escalar, alineado con las mejores prácticas

### Patrones de Diseño

-  **Factory Pattern:**

   -  Utilizado para la gestión dinámica de componentes en el proyecto host.
   -  Facilita la creación y renderización de los componentes de cada universo (Harry Potter, Rick and Morty) de manera modular.
   -  Ejemplo: `UniverseFactory` gestiona la creación de listas de personajes según el universo seleccionado.

-  **Adapter Pattern:**
   -  Implementado para encapsular y abstraer el uso de librerías externas, permitiendo en este caso la gestión eficiente de llamadas a APIs.
   -  Permite la flexibilidad de reemplazar o actualizar las librerías subyacentes en el futuro sin necesidad de realizar cambios significativos en la lógica de negocio.
   -  Ejemplo: `castApi` actúa como un adaptador, normalizando y simplificando las respuestas de diversas APIs para su uso uniforme en toda la aplicación.

### Principios SOLID

-  **Single Responsibility Principle (SRP):**

   -  Cada módulo o componente se enfoca en una única responsabilidad.
   -  Ejemplo: Los componentes `UniverseTable` y `UniverseModal` tienen responsabilidades claramente definidas y separadas.

-  **Open/Closed Principle (OCP):**

   -  El diseño permite la expansión (agregar más universos o funcionalidades) sin modificar el código existente.
   -  Ejemplo: Se pueden añadir nuevos universos o características a los microfrontends existentes sin alterar su implementación base.

-  **Liskov Substitution Principle (LSP):**

   -  Los componentes son intercambiables sin afectar el funcionamiento de la aplicación.
   -  Ejemplo: Los componentes de listado de personajes de Harry Potter y Rick and Morty pueden ser intercambiados o modificados independientemente.

-  **Interface Segregation Principle (ISP):**

   -  Se evita la dependencia de los componentes en interfaces que no utilizan.
   -  Ejemplo: La separación de interfaces en los componentes de listado y modal asegura que solo utilicen lo que necesitan.

-  **Dependency Inversion Principle (DIP):**
   -  Los módulos de alto nivel no dependen directamente de los módulos de bajo nivel, sino de abstracciones.
   -  Ejemplo: El proyecto host interactúa con los microfrontends a través de abstracciones, no directamente, lo que permite su independencia y escalabilidad.

## Pasos para la Ejecución

1. Clonar el repositorio.
2. Navega al directorio raíz del proyecto y ejecuta npm install o yarn install.
3. Usa npm start o yarn start para iniciar todos los microfrontends y el host simultáneamente.
