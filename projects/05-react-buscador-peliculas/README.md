## Enunciado

Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/
Consigue la API Key en la propia página web registrando tu email.

✔️ Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

✋ Primera iteración (vamos a complicarlo un poco): 

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)

Vamos a hacer el debounce DESDE CERO (Usando just-debounce-it) sin copiar ninguno echo, asi aprendemos de CERO como es realmente
pero en un futuro podriamos usar alguno ya echo como useDebounce
(Un DEBOUNCE es por ejemplo, que si estamos actualizando la busqueda cada vez que el usuario escribe, vamos a hacer un debounce que lo que haga es
esperar que el usuario termine de escribir (capaz por 300ms o algo asi) para recien ahi hacer la busqueda, de esta forma no hacemos 300busquedas 
si el usuario esta buscando algo que tiene un titulo de 300caracteres)

⬇️
📹 https://www.youtube.com/watch?v=GOEiMwDJ3lc&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=5&t=5640s
⬆️
