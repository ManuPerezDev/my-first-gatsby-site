---
title: "🛫 CQRS"
date: "2022-02-12"
hero_image: "./main.jpg"
hero_image_alt: "Big building."
description: "Command Query Responsibility Segregation es un patrón de diseño de software que separa los modelos de escritura y lectura de datos con el objetivo principal de mejorar el rendimiento de un sistema con alta tasa de concurrencia garantizando la escalabilidad del mismo."
slug: "cqrs"
---

**Command Query Responsibility** Segregation es un patrón de diseño de software que separa los modelos de escritura y lectura de datos con el objetivo principal de mejorar el rendimiento de un sistema con alta tasa de concurrencia garantizando la escalabilidad del mismo.

Por ejemplo, supongamos que tenemos una tienda online de libros y ejecutamos nuestra operativa normal centralizando la gestión del portal desde una sola base de datos. Ejecutamos nuestra operativa normal y de repente empezamos a vender el libro de George R.R. Martin por lo que recibe muchas operaciones de lectura y escritura con comentarios y compras.

Lo que pasa aquí es que este pico de usuarios atacando con muchas operaciones hacen que la base de datos sufra y ralentice el funcionamiento del portal.

En este caso la solución sería CQRS. Al separar las operaciones de lectura y escritura garantizaríamos la integridad de nuestro servicio en picos de concurrencia.

## Command

Es un DTO que expresa la intención de modificar nuestro sistema, es decir, que generará un side effect.

## Query

Es un DTO que expresa la intención de recuperar información de nuestro sistema sin modificar el mismo.

## Handler

Es el encargado de gestionar el command o query correspondiente transformando sus primitivos a value objects y llamando al caso de uso. Solo existe un handler para cada command o query.

## Bus

El bus es el encargado de llevar el DTO a su Handler y este handler transformará los primitivos en value objects y ejecutará el caso de uso.

El beneficio de esta complejidad adicional es desacoplar el comportamiento del dominio del controlador estando estos totalmente aislados comunidados por el bus.

## Problemas

Como hemos visto el uso de este patrón aumenta sustancialmente la complejidad del sistema por lo que solo es recomendable usarlo en productos en los que se espere un alto volumen de concurrencia.

En la mayoría de casos deberemos separar las bases de datos por lo que puede ocasionar inconsistencia de los datos de lectura por lo que es necesario sincronizar dichas bases de datos.

## Para finalizar

Entender todas las implicaciones de CQRS es complicado y necesita tiempo de estudio y práctica.

Aquí dejo un enlace a una implementación muy simple de CQRS.

[Implementación CQRS en TS](https://github.com/ManuPerezDev/cqrs)
