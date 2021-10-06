<div align="center">
    <h1>Curso de introducción a React.js</h1>
</div>

# ¿Cuándo usar React.js?

Hay dos flujos de trabajo para crear aplicaciones web

## Modelo en cascada:

Cuando cada equipo tiene un tiempo para hacer todo su respectivo trabajo para construir una app. Por ejemplo: el equipo de diseño diseña la aplicación, el de desarrollo programa todo lo diseñado y finalmente se lanza la app recogiendo el feedback de los usuarios y se vuelve a empezar tomando en cuenta lo dicho por los usuarios. Es problemático porque el esfuerzo puede ser en vano porque no se tiene un feedback hasta que se termina de construir la app.

## Modelo del ciclo imperativo:

Se refiere a que cada equipo se enfocará en ciclos pequeños para construir partes más pequeñas de una app que en conjunto se puedan ir ensamblando para hacer la app completa. Resuelve el problema del modelo anterior, aquí se recibe el feedback al terminar cada pequeño ciclo, recibiendo así el feedback de manera más inmediata que antes.

## MVP’s o :

Se refiere a construir funcionalidades pequeñas que sean completas para que podamos lanzarla y medir su impacto y decidir si seguir ese camino o probar otra cosa.

Hay que escoger el problema más crucial que debe resolver la app.

## Análisis: Componentes y comportamientos

**Componentes**: Son la forma de estructurar las piezas de nuestra página web para hacerlas escalables, nos ahorran tiempo y esfuerzo. Son abstracciones de los elementos de nuestra página web para ser reusados las veces que necesitemos. Trabajan de manera independiente a los demás. Con react todos los componentes tienen una conexión con el resto de componentes de la app para que en conjunto reaccionen a los comportamientos del usuario.

**Comportamiento**: Las interacciones de los usuarios.

React es muy bueno cuando queremos construir rápidamente la primera versión funcional de una app web sin sacrificar su escalabilidad. Si no queremos escalarla después, no usar react, podemos usar JS simple.
# Instalación con Create React App
Se pueden importar los scripts del código fuente de react directamente en el html o creando un entorno de desarrollo completo con empaquetadores y otras herramientas.

Hay varias versiones que podemos usar como lo son la de desarrollo o la de producción que están más optimizadas.

Para hacer el ambiente de desarrollo usamos create react app, el cual podemos personalizar manualmente. En el dado caso de que queramos usar una configuración predeterminada usamos

`npx create-react-app` (npx instala temporalmente nuestras herramientas para ejecutarlas y luego borrarlas, eso permite tener siempre la última versión actualizada de la herramienta que queramos ejecutar). Además de esto, actualiza automáticamente los cambios hechos en el código

**react-scripts** es la configuración que hizo create-react-app por nosotros. Es un paquete que acelera el proceso de trabajo con react, pero no está tan optimizado a diferencia de hacerlo manualmente.

`div id=“root”` es donde se va a renderizar el código escrito en JS con react.

`ReactDOM.render` es donde enviaremos los componentes que queremos renderizar

**Babel** es el que hace la traducción que nos facilita la escritura de código de una manera más cómoda.

`npm start` para ejecutar el servidor de desarrollo.

# JSX: componentes vs. elementos (y props vs. atributos)
JSX
Esta curiosa sintaxis de etiquetas no es ni un string ni HTML.
.
Se llama JSX, y es una extensión de la sintaxis de JavaScript. Recomendamos usarlo con React para describir cómo debería ser la interfaz de usuario. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript. JSX produce “elementos” de React.
.
¿Por qué usar JSX?
React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización.
.
En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas.

Usando las propiedades podemos reutilizar un mismo componente muchas veces ahorrándonos trabajo.

Todas las propiedades las podemos mandar de dos formas, como lo vimos en la clase

<App saludo=“Buenas” /> o usando “children” <App>Buenaaaaaas</App>(donde podemos poner también etiquetas de HTML) y usandolo con props.children

# Componentes de TODO Machine
React.Fragment nos permite enviar una etiqueta por componente, dentro de esta podemos mandar la cantidad que queramos, nos evita usar divs innecesariamente sin afectar la UI de la app.

Una manera más común de utilizar un fragment en react es con las llaves vacías <></>

Para evitar usar nombres que no son al momento de exportar usamos export {nombreFuncion};

key ⇒ para que react pueda identificar cual componente es cuál dentro de una lista y así evitar render innecesarios cuando un elemento no debe cambiar.

# CSS en React
En este curso veremos dos formas de agregar estilos a nuestro proyecto.

Primero hay que recordar que cuando estilabamos en html podiamos hacerlo en el mismo archivo por ejemplo
```html
    <h2 style="color: red; background-color: yellow;">Has completado 2 de 3 TODOs</h2>
```
pero para usarlo en js, en especial con react hay que pasarlo como un objeto, y hay que seguir una nomenclatura diferente.
los valores se los envia en string y las propiedades que teniamos con `-` vamos a tener que escribir todo junto y a cada palabra nueva lo vamos a iniciar con la primera letra en mayuscula.

```js
const estilos = {
  color: 'red',
  backgroundColor: 'yellow', 
};

function TodoCounter() {
  return (
    <h2 style={estilos}>Has completado 2 de 3 TODOs</h2>
  )
}
```

La otra forma de estilar nuestros componentes es usando CSS-in-js
`create-react-app` ya nos da esta caracteristica, basta con importar el archivo css
```js
import './src/App.css'
```

# API de almacenamiento web

**localStorage**: guarda la información en memoria incluso cuando el navegador se cierre y se reabra.

**sesionStorage**: uarda la informacion en memoria mientras dure la sesión de la página.

`Storage.setItem()`
cuando recibe un nombre y valor, lo almacena o actualiza si ya existe.

Ejemplo:
```js
storage.setItem(nombre, valor);
```
`Storage.getItem()`
Devuelve el valor cuando le pasamos el nombre.

Ejemplo
```js
let userBackground = storage.getItem(userBackground); 

// #000000
```
`Storage.removeItem()`
Elimina el valor almacenado cuando le pasamos el nombre:

Ejemplo
```js
let userBackground = storage.removeItem(userBackground); 

// Queda el valor por defecto en caso que exista, por lo ejemplo un background blanco.
```
**Storage.length**
Devuelve un entero que indica el número de elementos guardados en el objeto **Storage.**

Ejemplo
```js
function userSettings() {
  localStorage.setItem('userBackground', '#000000');
  localStorage.setItem('font', comic sans');
  localStorage.setItem('fontSize', '18');

  localStorage.length;

 // 3
}
```
`storage.clear();`
borra todos los registros guardados en local.
