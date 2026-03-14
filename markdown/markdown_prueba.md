# Título Principal del Documento

## Introducción

![[imagen1.png]]

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis laoreet nulla, 
quis consequat sapien commodo in. Phasellus sed sem arcu. Etiam tempus sem at ligula 
viverra eleifend. Proin ullamcorper, justo in pellentesque venenatis, massa massa finibus 
mauris, quis pellentesque lorem lectus sed ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor venenatis odio, 
a posuere elit cursus et. Pellentesque euismod magna nec gravida eleifend.

### Tabla de ejemplo

| Producto | Cantidad | Precio |
|---------|----------|--------|
| Manzanas | 5 | $3.50 |
| Naranjas | 8 | $4.20 |
| Peras    | 4 | $2.90 

## Sección Intermedia

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo neque et ligula rutrum 
faucibus. Curabitur suscipit ipsum vel ligula bibendum, nec accumsan elit malesuada. Donec 
gravida nibh sed arcu finibus, sed gravida justo porta.

Sed in pulvinar ex. Maecenas sit amet risus id mauris pretium placerat. Vestibulum non urna 
sit amet elit fringilla imperdiet quis ac leo.

![[imagen2.png]]
### Lista de elementos

- Elemento uno de ejemplo
- Elemento dos con más texto para que se vea mejor
- Elemento tres final

## Ejemplo de Código en Python

A continuación un bloque de código genérico:

```python
def procesar_datos(lista):
    resultados = []
    for elemento in lista:
        if validar(elemento):
            resultados.append(transformar(elemento))
    return resultados

def validar(x):
    return isinstance(x, int) and x > 0

def transformar(x):
    return x * 2

print(procesar_datos([1, -3, 5, 10]))
```