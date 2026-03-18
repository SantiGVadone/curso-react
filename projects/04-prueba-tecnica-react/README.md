# 🐱 Cat Facts App - Prueba Técnica React

Este proyecto es una aplicación desarrollada en React que consume dos APIs públicas para mostrar datos curiosos de gatos junto con imágenes personalizadas. Es un ejercicio clásico en entrevistas de **Live Coding** para perfiles **Junior y Trainee**.

---

## 🚀 Objetivo de la Prueba
La aplicación debe realizar el siguiente flujo de datos:
1.  **Recuperar un hecho aleatorio** de gatos desde la primera API.
2.  **Extraer la primera palabra** del hecho recuperado.
3.  **Mostrar una imagen de un gato** (desde la segunda API) que incluya esa palabra específica.

---

## 🛠️ Stack Tecnológico
* **React** (Vite)
* **JavaScript (ES6+)**
* **CSS3** para el diseño.
* **Standard JS / ESLint** para el estilo de código.

---

## 🔌 APIs Utilizadas
* [**Cat Facts API**](https://catfact.ninja/fact): Para obtener el hecho aleatorio (`fact`).
* [**CATAAS (Cats as a Service)**](https://cataas.com/): Para generar la imagen dinámica utilizando la palabra extraída.

---

## 📋 Pasos del Desarrollo

1.  **Fetch de Datos:** Implementación de una petición asíncrona al endpoint de hechos.
2.  **Lógica de Negocio:** Uso de métodos de strings (`split(' ', 1)`) para obtener la primera palabra de forma limpia.
3.  **Construcción de URL:** Generación de la URL dinámica para la imagen: `https://cataas.com/cat/says/${firstWord}`.
4.  **Manejo de Estado:** Uso de `useState` para almacenar el hecho y la imagen, y `useEffect` para disparar la lógica al cargar la página.

---

## 🔧 Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/SantiGVadone/curso-react.git
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Correr el proyecto:**
    ```bash
    npm run dev
    ```

---

## 💡 Conceptos Aplicados
* **Hooks:** `useState` y `useEffect`.
* **Asincronía:** Promesas con `.then()` o `async/await`.
* **Renderizado Condicional:** Para asegurar que los datos existan antes de mostrarlos.
* **Clean Code:** Estructura de archivos organizada y nombres de variables descriptivos.

* **Video 4 🕛:** Me quede en el minuto 21 de la clase 4, terminando de crear el primer customHook.
 