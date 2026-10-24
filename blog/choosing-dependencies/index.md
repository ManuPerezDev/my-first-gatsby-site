---

title: "🌊 Una guía para la elección de dependencias"
date: "2024-02-08"
hero_image: "./connections.jpg"
hero_image_alt: "Lights."
description: "Esta es una pequeña guía para tratar de simplificar el proceso de elección de estas dependencias que invite a la reflexión y el debate dentro de los equipos de desarrollo con el objetivo de que los pilares de nuestra aplicación sean lo más sólidos posibles."
slug: "choose-dependencies"
---

## Introducción

Esta es una pequeña guía para tratar de simplificar el proceso de elección de estas dependencias que invite a la reflexión y el debate dentro de los equipos de desarrollo con el objetivo de que los pilares de nuestra aplicación sean lo más sólidos posibles.

Esto no garantiza que en futuro no tengamos que cambiar nuestras dependencias, por lo que siempre es recomendable hacer uso de técnicas como la inyección de dependencias y wrappers de librerías para abstraer nuestro código de negocio lo más posible de estas dependencia y ayudando a simplificar los cambios lo máximo posible.

## Riesgos

Tenemos que tener en cuenta que hacer uso de dependencias de terceros puede conllevar riesgos que pongan en jaque la confianza de clientes e inversores. Por ejemplo, en los negocios que trabajan con datos la seguridad es un valor muy importante a tener en cuenta y tener vulnerabilidades no es una opción.

Algunos riesgos de usar dependencias de terceros:

### Vulnerabilidades

Con el paso del tiempo, las dependencias que no se actualicen frecuentemente son víctimas de múltiples exploits. Esto es un riesgo añadido que debemos limitar para que la confianza de nuestro código no implique perdida de confianza de la organización.

### Coste de aprendizaje

Adoptar soluciones de terceros siempre tienen curva de aprendizaje. Siempre tendremos que tender a reducirla así como dejárselo fácil a aquellos desarrolladores que van a trabajar después de que nosotros nos hayamos marchado.

### Coste de mantenimiento

Este coste, aunque es menor que el coste de generar y mantener nuestro propio código, también es algo a tener en cuenta, ya que muchas veces, librerías y frameworks suelen tener conflictos entre ellos, cosa que hay que solucionar.

### Riesgo de abandono por parte del creador

Este siempre es un riesgo que existe, no solo en desarrollo de software, sino en cualquier herramienta de terceros. Notion, la herramienta con la que estoy escribiendo ahora mismo, mañana podría cerrar y mandar a la papelera todo mi trabajo. ¿Por qué sigo trabajando en Notion entonces? Porque tengo la confianza de que no lo hará o al menos no lo hará próximamente, lo que me dará un tiempo para buscar otra alternativa.

Entonces, asumiendo este riesgo, debemos encontrar herramientas que sean merecedoras de nuestra confianza y sepamos que no van a caer en los próximos años. (Aunque nunca se sabe!)

## ¿Necesitamos una dependencia?

Lo primero antes de lanzarse a la elección de una dependencia debemos plantearnos si realmente la necesitamos.

¿Existe una solución con las librerías por defecto que puedan solucionar el problema?

Si existe no necesitamos buscar más.

¿Podemos desarrollar una solución?

Si la respuesta es sí hay que valorar si merece la pena en términos de tiempo, esfuerzo y mantenimiento del código.

## Criterios para elegir una dependencia

A continuación vamos a ver una serie de criterios que considero importantes a la hora de elegir una dependencia. Puede haber muchos más y tenemos que adaptarnos a nuestro caso particular. Estas son solo unas sugerencias para poder empezar.

### Impacto de la dependencia en el negocio

Nunca está de más analizar el impacto tiene la adopción de una dependencia en nuestro negocio, así como reflexionar sobre qué pasaría en caso de error fatal.

Esto nos guiará a la hora de decidir si queremos hacer un desarrollo propio o depender de un tercero.

Por lo general, no se suele depender de terceros cuando nuestro negocio depende de ello. Se suelen adoptar soluciones de terceros en detalles referidos a la infraestructura, ya sea propia tecnología como bases de datos o comunicación HTTP. También operaciones que no son core de negocio, como la autenticación de usuarios, frameworks de front end, frameworks de inyección de dependencias entre otros muchos ejemplos.

Por ejemplo, en el caso de una librería de autenticación, si se detectan vulnerabilidades recurrentes o incluso su sistema se ve comprometido, siempre podremos migrar a otro sistema de autenticación. Sería un bache en el camino sin duda, pero podríamos recuperarnos.

Para minimizar este riesgo, podemos analizar otros criterios.

### Popularidad

El nivel de popularidad de una dependencia siempre es un buen indicativo ya que, un alto nivel de adopción por la comunidad indica que su fiabilidad ha sido probada por una gran cantidad de developers.

Para medir la popularidad de una dependencia podemos fijarnos en el **número de descargas** que tiene, ya sean semanales, mensuales o en total. También es deseable ver la **tendencia de uso** de la librería. Si esta es descendente casi que podemos concluir que hay otras opciones mejores en el mercado.

Por otro lado, la **cantidad de estrellas y forks en Github** nos puede dar información valiosa sobre su popularidad. Sin embargo, tenemos que cuidarnos de que estas estrellas no sean fruto de plataformas de venta de estrellas de github. Si bien es verdad que es una práctica minoritaria, esta métrica tenemos que analizarla en contexto con otras métricas para demostrar su veracidad.

### Mantenimiento

El mantenimiento de la solución que vayamos a adoptar es vital. No queremos estar trabajando con una dependencia y darnos cuenta que hace 3 años que no es actualizada.

Para asegurarnos de que la dependencia está adecuadamente mantenida, nos fijaremos en la **última fecha de actualización**, así como la **frecuencia de actualizaciones**. Es deseable también que se incluya un **change log** que especifique los cambios en cada versión, cosa que nos orientará en los cambios que debemos hacer en caso de que rompa nuestra build.

Por otro lado, podemos analizar los **Issues** y las **Pull Requests** de Github. Podemos mirar superficialmente el número de Issues y Pull Requests lo que nos puede dar una ligera idea del estado de salud de la librería. Sin embargo, para que sea una métrica de verdad a tener en cuenta podemos analizar la calidad de estos Issues y PR. Ver issues cerrados y comprobar si son resueltos por los mantenedores o la archivan sin solucionarlo. Ver si las PR son mergeadas o rechazadas sin ninguna razón. Sobre todo, valorar si el mantenedor de la dependencia tiene una buena comunicación con respecto a los posibles problemas de la dependencia o mejoras funcionales.

Otra información interesante es saber **quién o quienes mantienen la dependencia**. ¿Una sola persona? ¿Un grupo de desarrolladores? ¿La comunidad? ¿Una empresa?

### Documentación

Una buena documentación y guías de como usar la dependencia pueden hacer que nos decantemos por una u otra, siendo este uno de los puntos más importantes puesto que, reducir la curva de aprendizaje es muy importante.

### Comunidad

Que exista una comunidad activa detrás del producto siempre es una buena señal. Que haya preguntas y discusiones siempre enriquecedor para todos los usuarios y para los creadores de la herramienta.

En muchos repositorios de estos paquetes podemos encontrar la sección de [Discussions](https://github.com/chakra-ui/chakra-ui/discussions) que viene a ser un foro donde interactúa la comunidad. También podemos buscar en las páginas oficiales en las que a veces encontramos foros oficiales.

## Conclusión

En definitiva, para elegir una dependencia hay que tener en cuenta:
- Popularidad
  - Nº de descargas
  - Tendencia de uso
  - Estrellas y forks de Github
- Mantenimiento
  - Fecha de la última actualización
  - Frecuencia de actualizaciones
  - Calidad del change log
  - Issues y Pull Requests
  - Quién o quienes mantienen la dependencia
- Documentación
- Comunidad

Como ya hemos indicado anteriormente, estas son varios de los criterios que nos pueden guiar nuestra elección, pero no quiere decir que sean los únicos y que tengan el mismo valor en todas las situaciones. Así que siempre tendremos que adaptarnos a nuestro caso en particular, qué problema tenemos y qué criterios tienen más valor a la hora de elegir nuestra dependencia.

Gracias a [Eric Driussi](https://www.linkedin.com/in/eric-driussi/) por hacer este post mejor.
