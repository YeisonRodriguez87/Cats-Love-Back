# 馃樆Cats Love App

<p align="left">
  <img height="200" src="./cat.png" />
</p>

## 馃摑Descripci贸n:

<p>En este proyecto se desarroll贸 una SPA (Single Page Application), en la cual se pueden ver diversa cantidad de gatos en adopci贸n, para que as铆 se puedan contactar con quien los tiene y les puedan dar un hogar. Los mismos son posteados por las personas que los encuentren y que no puedan tenerlos con ellos o cuidarlos. La misma tiene funcionalidades tales como filtrar/ordenar gatos por sexo y por edad, paginado para poder ver 8 gatos por p谩gina y formulario para postear gatos para ser adoptados.
</p>

# Backend

Se desarroll贸 un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /cats__:
  - Obtiene un listado de los gatos en adopci贸n.
  - Devuelve solo los datos necesarios para la ruta principal.
- [ ] __GET /cats/{id}__:
  - Obtiene el detalle de un gato en particular.
  - Trae solo los datos pedidos en la ruta de detalle de gato.
- [ ] __POST /cats__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de publicaci贸n de gato por body.
  - Crea un gato en la base de datos.


#### Funcionalidades

__Pagina inicial__- Landing page con:
- [ ] Imagen representativa del proyecto.
- [ ] Bot贸n para ingresar al home (`Ruta principal`)

__Ruta principal__- Contiene:
- [ ] 脕rea donde se ver谩 el listado de gatos con su imagen, nombre, edad, sexo y ciudad.
- [ ] Botones/Opciones para filtrar por sexo.
- [ ] Botones/Opciones para ordenar tanto ascendente como descendentemente los gatos por orden alfab茅tico y por edad.
- [ ] Paginado para ir buscando y mostrando los siguientes gatos, 8 gatos por pagina.

__Ruta de detalle de gato__- Contiene:
- [ ] Los campos mostrados en la ruta principal para cada gato (imagen, nombre, edad, sexo y ciudad)
- [ ] Descripci贸n.
- [ ] Tel茅fono.
- [ ] Altura.
- [ ] Peso.

__Ruta de posteo de gato en adopci贸n__- Contiene:
- [ ] Un formulario con los siguientes campos:
  - Nombre
  - Edad
  - Sexo
  - Descripci贸n
  - Tel茅fono
  - Altura
  - Ciudad
  - Imagen
- [ ] Bot贸n/Opci贸n para postear un nuevo gato.


## 馃殌Para poder iniciar el proyecto en su navegador:

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar


__馃毃IMPORTANTE:馃毃__ Es necesario contar m铆nimamente con la 煤ltima versi贸n estable de Node y NPM. Asegurese de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.


Actualmente (Agosto 2022) las versi贸nes necesarias son:

 * __Node__: 16.15.1 o mayor
 * __NPM__: 8.11.0 o mayor

Para verificar que versi贸n tienen instalada:

> node -v
>
> npm -v


#### Tecnolog铆as usadas:
- [ ] ReactJS
- [ ] React-Bootstrap
- [ ] React-Formik
- [ ] React-Router
- [ ] SweetAlert2
- [ ] Redux
- [ ] NodeJS-Express
- [ ] Sequelize - MySQL

