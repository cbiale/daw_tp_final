# Autor:  Claudio Omar Biale - 2020

# Introducción

El proyecto corresponde al trabajo final de la asignatura **Desarrollo de Aplicaciones Web** de la *Especialización en Internet de las Cosas* dictada en la *Facultad de Ingenieria* de la *Universidad de Buenos Aires*.

El sistema permite controlar el apagado y encendido de dispositivos, existiendo dos tipos de dispositivos:
- lampararas y
- persianas


Tabla De contenidos:
=========================
* [Correr la aplicación](#Correr-la-aplicación)  
* [Detener la aplicación](#Detener-la-aplicación)
* [Notas sobre la aplicación](#notas-sobre-la-aplicación)
* [API](#API)
    * [Consideraciones sobre datos recibidos](#Consideraciones-sobre-datos-recibidos)
    * [Ejemplo de formatos de retorno](#Ejemplo-de-formatos-de-retorno)    
* [Contribuir](#Contribuir)
* [Licencia](#Licencia)



## Correr la aplicación

Para correr la aplicación es necesario descargar el repositorio y luego ejecutar el siguiente comando:

```sh
docker-compose up
```

## Detener la aplicación

Para detener la aplicación es necesario ejecutar el siguiente comando:

```sh
docker-compose down
```

También es posible realizar `Ctrl-C` desde el shell donde se encuentra corriendo el sistema.

## Notas sobre la aplicación

Para obtener un detalle de lo necesario para correr la aplicación dirijase al siguiente enlace:
[notas](doc/notes.txt)

## API

| Método | Punto Final |  Uso | Recibe | Retorna |
| ---- | ---- | ---- | ---- | ---- |
| GET | /devices | Obtiene los dispositivos existentes | Filtro | Dispositivos |
| GET | /devices/{id} | Obtiene datos de un dispositivo |  | Dispositivo |
| POST | /devices | Cambia el estado de un dispositivo | Estado | Estado |

### Consideraciones sobre datos recibidos

En `GET /devices` puede recibir un argumento `filter` que puede tomar los siguientes valores"
- 0 :  filtrar por lamparas.
- 1 :  filtrar por persianas.

En `POST /devices` recibe un JSON de formato Estado.

### Ejemplo de formatos de retorno:

- Dispositivo:

    ```
    {
        "id":4,
        "name":"Persiana 1",
        "description":"Persiana living",
        "state":0,
        "type":1
    }
    ```
- Estado:

    ```
    {
        "id":"dev_4",
        "state":true
    }
    ```

## Contribuir

Para contribuir realizar un pull request con las sugerencias.

## Licencia

GPL
