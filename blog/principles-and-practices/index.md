---

title: "3 años de Principios y Prácticas"
date: "2024-01-05"
hero_image: "./main.jpg"
hero_image_alt: "Teclado iluminado delante de dos monitores con código."
description: "Después de un par de años de experiencia de en el desarrollo de software me gustaría compartir lo que son para mí una serie de principios y prácticas, algunos más imprescindible que otros, en mi día a día."
slug: "principles-and-practices"
---

Después de un par de años de experiencia de en el desarrollo de software me gustaría compartir lo que son para mí una serie de principios y prácticas, algunos más imprescindible que otros, en mi día a día.

## Teoría de las ventanas rotas

[La teoría de la ventanas rotas](https://es.wikipedia.org/wiki/Teor%C3%ADa_de_las_ventanas_rotas) es una teoría criminológica introducida por James Q. Wilson y George L. Kelling que plantea que un lugar con signos evidentes de dejadez, vandalismo y desorden invitan a un aumento de estos mismos males.

Por ejemplo, una ventana rota en un edificio es una señal de abandono que atrae a otras personas a abusar de ese estado. Otro ejemplo podría ser el coche abandonado que hay en muchos lugares de nuestras ciudades. Un día aparece un coche aparentemente normal, pero a lo largo de los días se empiezan a detectar los primeros síntomas. Ruedas desinfladas, ventanas rotas. Y a lo largo de las semanas y meses es desguazado hasta quedar en el chasis.

Este fenómeno se reproduce en mayor o menor medida en muchos ámbitos de la vida. También en el software. La sensación de que nada funciona como debería y la decadencia que desmoraliza hasta al más optimista.

En su libro The Pragmatic Programmer de **_**David Thomas y Andrew Hunt**_** también apuntan que lo peor de este estado es la [desesperanza que genera que contagia](https://psycnet.apa.org/record/1995-01924-001) al equipo de desarrollo. Es inevitable caer en una espiral autodestructiva cuando a nadie le importa lo que hace. Donde se acepta que las cosas son como son y no hay tiempo ni intención de hacer lo correcto.

Pero así como la desesperanza es contagiosa también lo es la esperanza. Hacer lo correcto, tomar las riendas de los cambios que son necesarios y construir algo de lo que nos sentamos orgullosos. Construir algo tan bueno que consigamos el efecto contrario. Un código y un ambiente con tanto cuidado y mimo que a todo el mundo le de miedo dejar alguna ventana rota.

## Principio de mínima sorpresa

[El principio de mínima sorpresa](https://en.wikipedia.org/wiki/Principle_of_least_astonishment) nos dice que un artefacto debería de comportarse como la mayoría de personas esperaría que se comportase. Por ejemplo, un comando debería tener side effects y hacer una query no debería tenerlos. Sería muy sorpresivo que al hacer una llamada a un método llamado GetUser(id) este método borrara o actualizara una tabla. Así como también sería sorpresivo que un método llamado DeleteUser(id) te devolviera una respuesta.

Por tanto, este principio es una guía para tratar de reducir los comportamientos inesperados de un sistema y así reduciendo la complejidad accidental derivada de estas decisiones.

## Principio de responsabilidad única

[El principio de responsabilidad única](https://en.wikipedia.org/wiki/Single_responsibility_principle) es un principio de ingeniería de software que establece que un artefacto de software debería tener un motivo de cambio, tal y como lo establece Robert C. Martin. Por ejemplo, si un reporte tiene dos vectores de cambio, uno es el contenido de este reporte y otro es el formato con el que es presentado el reporte, este cambio debería efectuarse cada uno en su módulo. Es decir, tener que tocar el mismo módulo para estos cambios sería una violación del principio.

Este principio no quiere decir que por aplicar un cambio en la presentación solo tengamos que tocar una clase o fichero. Dependiendo del alcance del cambio tendremos que tocar uno o muchos ficheros que pertenezcan, y esto es lo importante, al módulo del cambio. Es decir, si por ejemplo, tenemos que aplicar una modificación al módulo de Usuarios es un mal síntoma que se tengan que aplicar cambios a otros módulos fuera de este.

## Principio de inversión de dependencias

[El principio de inversión de dependencias](https://es.wikipedia.org/wiki/Principio_de_inversi%C3%B3n_de_la_dependencia) establece que los módulos de alto nivel no deberían depender de los módulos de bajo nivel y que las abstracciones no deberían depender de los detalles.

Esto lo aplicamos en el día a día para la gestión de los módulos de persistencia, comunicación, trackeo de errores y loggers. Nos permite aislar tecnologías de nuestro dominio así como facilitar el testing de nuestros casos de uso.

## Inmutabilidad

Como para muchas personas, la apreciación de la inmutabilidad viene dada después de muchos dolores de cabeza. Un objeto se crea al inicio de un proceso y este va cambiando a lo largo y ancho del programa. Sigues los cambios pero llega un momento en el que te sientes estúpido por no entender qué está pasando.

Puedes estar tranquilo, un software con excesiva mutación es muy complejo de entender y mantener. Para reducir y limitar los efectos de la mutación me han sido útiles la utilización de [high order functions](https://en.wikipedia.org/wiki/Higher-order_function) que incluyen algunas funciones como map, reduce, filter entre algunas otras. Estas funciones en vez de mutar un array siempre devuelven uno nuevo lo que hace mucho más fácil seguir el código.

Por otra parte tenemos los objetos que mutan su estado. Hay algunas opciones para limitar su impacto. Tener las propiedades privadas, cambiar el estado solo dentro del propio objeto o instanciar un nuevo objeto con la mutación pueden ser tácticas para generar un código más legible y con menos sorpresas.

Por último, siempre es recomendable, en los lenguajes que lo permitan, usar variables inmutables, como **const** en vez de **let** en JavaScript y otros lenguajes.

## The Boy Scout Rule

Esta es una regla usada por los boy scouts que establece que siempre hay que antes de irse de un campamento tienen que dejarlo más limpio que cuando llegaron.

Esto, aplicado a la programación, significa siempre que trabajemos intentar dejar el código más ordenado, legible y con menos sorpresas. Pueden ser cosas pequeñas como renombrar una variable, extraer un método u organizar el espaciado del código por ejemplo.

El punto es tratar de no perder nunca la oportunidad de identificar y aplicar mejoras en el código. Esto a la larga dejará un código de mejor calidad y la satisfacción de tener una gran atención al detalle.

## Pair programming

Redundancia, feedback, evitar silos de conocimiento son algunas ventajas del [pair programming](https://en.wikipedia.org/wiki/Pair_programming#:~:text=Pair%20programming%20is%20a%20software,two%20programmers%20switch%20roles%20frequently.). Estas ventajas unidas a la reducción de probabilidad de un desastre hace del pair programming un imprescindible para mí. Requiere de una fuerte inversión, sin duda, pero cada vez está ganando más terreno en entornos corporativos por sus grandes ventajas.

De hecho, no siempre en todos los equipos se puede hacer constantemente pair y el índice de errores y bugs generados siempre aumenta con tareas individuales. A menudo hemos tenido que volver a tareas que se han trabajado individualmente cosa que demuestra la gran utilidad de esta práctica.

## TDD

Qué decir de [TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas) que no se haya dicho ya. Una práctica que nos ha ayudado a trabajar con entregas constantes y seguras. Ya sea una aplicación estricta o más laxa haciendo simplemente test first nos ha ayudado en el día a día a trabajar con un paso constante y tratando de entender el problema y aplicar la solución más simple posible.

## DDD

Entre las ventajas de aplicar DDD destaco el uso de **lenguaje ubicuo** entre desarrollo y producto. El hecho de hablar un idioma común entre los equipos hace significativamente más fácil el día a día reduciendo los malos entendidos drásticamente. Como todo, no es una solución mágica pero ayuda a limar asperezas.

Por otra parte, destaco también el lenguaje común en el equipo de desarrollo con el uso de términos como value object, entidad, servicio de aplicación entre otros. Esta mejora de comunicación usando este lenguaje común ayuda a centrarnos en solucionar el problema. Así como la gran ventaja que es un lenguaje ampliamente aceptado en la industria.

Los problemas más comunes a los que nos hemos enfrentado son comunciación entre módulos, agregados y límites del módulo. Para no importar repositorios entre módulos usamos query bus que nos ayuda a desacoplarnos. Sin embargo, esto aumenta la complejidad ya que cada query tiene que tener su response y su handle lo que aumenta la cantidad de código.

Con respecto a los agregados, a menudo tenemos dudas, del tipo, ¿esto se considera una entidad o ya se podría considerar un agregado? Se considera agregado cuando aglutina información de otras entidades, pero muchas veces es complicado conocer el límite. Estos problemas con el tiempo han ido disminuyendo debido a la experiencia y a los acuerdos de equipo.

## Trunk based development

Esta práctica, como otras, depende mucho de las características del equipo con el que estemos trabajando. Por lo general, he encontrado bastantes ventajas de trabajar en esta modalidad con respecto a la clásica de branch merge.

Para quién no conozca esta práctica, [TBD](https://trunkbaseddevelopment.com/) se basa en que un equipo trabaja solo en una rama y nunca se sacan ramas para trabajar en nuevas features.

Sus principales ventajas son no hacer ramas que tardan mucho en integrarse, lo que lleva a hacer pequeños cambios que no rompen la build y aportan valor. También obliga a tener un código más desacoplado que genere pocos o ningún conflicto.

Otra ventaja es que se intenta que la pipeline de despliegue no esté nunca en rojo, ya que eso bloquea la integración de cambios de otros equipos. Esto hace necesario que los cambios que se integren sean pequeños y contenidos, así como ser subidos después de lanzar la suite de tests en local.

## Arquitectura Hexagonal

Esta arquitectura por capas o puertos y adaptadores nos ayuda a desacoplar nuestro dominio de la tecnología de comunicación y persistencia. Sin embargo, la principal ventaja es la mejora en la capacidad de testeo de nuestros casos de uso de dominio junto a la inyección de dependencias.
