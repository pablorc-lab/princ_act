# Web de principios activos y fitoterapias
[![My Skills](https://skillicons.dev/icons?i=react,js,html,css)](https://skillicons.dev)

**Prueba la aplicación directamente en este enlace: [https://pablorc-lab.github.io/princ_act/](https://pablorc-lab.github.io/princ_act/)**

Esta página desarrollada con React permite al usuario interactuar con una lista de elementos (principios activos o fitoterapias), ingresando información relacionada con ellos. Una vez completada la tarea, se mostrará una ventana de resultados que incluye un resumen con el número de respuestas correctas, la calificación final, un botón para reiniciar, y un desglose de las respuestas incorrectas junto con sus soluciones correspondientes.


## 🛠️ Instrucciones para poder visualizar el  proyecto

> [!NOTE]
> 
> Antes de ejecutar el proyecto, es necesario asegurarse de tener **Node.js** instalado, disponible en https://nodejs.org/es
>
> Una vez instalado podemos ejecutar en nuestra terminal `node -vp` para verificar que se ha instalado correctamente

### **Paso 1: Clonar el repositorio en nuestra máquina local**
```bash
git clone https://github.com/{usuario}/{tu_repositorio}.git
cd tu_repositorio
```

### **Paso 2: (Opcional) Instalar Vite si no está configurado**
```bash
npm install @vitejs/plugin-react --save-dev
```

### **Paso 3: Instalar las dependencias necesarias**
```bash
npm install
```

### **Paso 4: Iniciar en nuestro servidor local**
```bash
npm run dev
```

## 🖼️ Ejemplos Visuales de la Web

[![Home.png](https://i.postimg.cc/3wLFL7zm/Captura.png)](https://postimg.cc/wtmNMKqj)

### Home
En la página principal (*Home*), al pulsar en el icono del libro (*Apuntes*) se muestra una lista completa de los principios activos o plantas disponibles en la web, acompañados de sus respectivas soluciones.

[![Apuntes.png](https://i.postimg.cc/hj1s9Tc4/Captura.png)](https://postimg.cc/tZ7Fb1s8)

Además, desde esta misma sección, se puede alternar entre la visualización de principios activos o fitoterapias utilizando los botones ubicados en la parte superior izquierda.

[![Captura.png](https://i.postimg.cc/XY0YGCHD/Captura.png)](https://postimg.cc/zV0r4V1n)

### Modos de juego

Actualmente se cuenta con dos modos de juego:
- *Practicar* : En este modo, se muestran todos los principios activos o plantas disponibles, y al responder, la solución correcta se revela automáticamente, indicando además si la respuesta ingresada por el usuario es correcta o incorrecta.
  
- *Quiz*: En este modo, el usuario puede seleccionar la cantidad de preguntas que desea responder. A diferencia del modo *Practicar*, las respuestas no se muestran de forma automática al responder, sino que se presentan en un resumen final con los resultados generales.

La interfaz general de ambos modos de juego permite al usuario ingresar el uso correspondiente para cada principio activo o planta

[![Captura.png](https://i.postimg.cc/vTZ6KSxj/Captura.png)](https://postimg.cc/5YD0Yg3q)

En el modo *Practicar*, los resultados muestran si la respuesta ingresada es correcta o incorrecta, junto con la solución correspondiente. Además, pulsando en el ícono del pulgar hacia arriba, se puede cambiar la respuesta ingresada a la verdaderamente correcta.

[![Captura.png](https://i.postimg.cc/5y8LLFv9/Captura.png)](https://postimg.cc/N2fKwFpZ)

### Resultados finales

Estos resultados son comunes a ambos modos de juego, en él se muestra el número de correctas, la nota valorada sobre 10, un botón para reiniciar y abajo las respuestas incorrectas, junto con sus respectivas soluciones.

[![Resultados.png](https://i.postimg.cc/gj426v4P/Captura.png)](https://postimg.cc/ctgSptVD)
