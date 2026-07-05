# Librería de Validaciones

**Carlos Eduardo Castellanos Rios**  
Instituto Tecnológico de Oaxaca 
Ingeniería en Sistemas Computacionales  
Programación Web  
Verano 2026

### ¿Qué problema resuelve?
En el desarrollo web, validar la información ingresada por el usuario antes de enviarla al servidor previene inconsistencias. `utileria.js` es una librería que proporciona las validaciones más comunes: formato de correos, cálculo exacto de edades y contraseñas seguras. 

Además, resuelve un problema en el comercio electrónico: la validación de tarjetas bancarias. Mediante la implementación del Algoritmo matemático de Luhn y un formateador dinámico, la librería detecta tarjetas falsas o con errores tipográficos antes de procesar un pago, adaptando visualmente el formato a bloques (ej. 4-6-5 para American Express o 4-4-4-4 para Visa/Mastercard).

## Instalación

Para implementar esta librería en tu proyecto, asegúrate de tener el archivo `utileria.js` en tu directorio de scripts (por ejemplo, `/js`). Luego, enlaza el archivo en tu documento HTML justo antes del cierre de la etiqueta `</body>`:

```html
<script src="js/utileria.js"></script>
```

## Uso y Ejemplos de Código

A continuación se muestran ejemplos reales de cómo implementar las funciones de la librería en tu código JavaScript.

### 1. Validaciones Básicas (Obligatorias)
Verifica formatos de correo, asegura que un texto solo contenga letras y valida políticas de contraseñas fuertes.

```javascript
// Validar formato de correo electrónico
const correoValido = validarCorreo("usuario@itoaxaca.edu.mx"); 
console.log(correoValido); // true

// Validar que el texto solo contenga letras (incluye acentos y espacios)
const textoValido = soloLetras("Carlos Eduardo Ríos"); 
console.log(textoValido); // true

// Validar contraseña (requiere mayúscula, minúscula, número, especial y mín 8 caracteres)
const passwordSeguro = validarPassword("Sistemas123!"); 
console.log(passwordSeguro); // true
```

### 2. Cálculo de Edad y Mayoría de Edad
Calcula la edad exacta a partir de una fecha de nacimiento (YYYY-MM-DD), tomando en cuenta meses y años bisiestos.

```javascript
const fechaNacimiento = "2005-04-19";

// Calcular la edad en años enteros
const edad = calcularEdad(fechaNacimiento); 
console.log(`El usuario tiene ${edad} años.`); // "El usuario tiene 21 años."

// Verificar si es mayor de edad (>= 18)
const esMayor = esMayorDeEdad(fechaNacimiento); 
console.log(esMayor); // true
```

### 3. Funciones Adicionales: Tarjetas Bancarias (Algoritmo de Luhn)
Asegura que el número de tarjeta ingresado sea matemáticamente válido y formatea la cadena para mejorar la interfaz de usuario.

```javascript
// Validación matemática de la tarjeta usando el Algoritmo de Luhn
const tarjetaValida = validarTarjetaLuhn("4532715498453412"); 
console.log(`¿La tarjeta es válida?: ${tarjetaValida}`); // true / false

// Formatear dinámicamente el número (Ej. Amex vs Visa)
const formatoAmex = formatearTarjeta("378211111111111"); 
console.log(formatoAmex); // "3782 111111 11111" 
```