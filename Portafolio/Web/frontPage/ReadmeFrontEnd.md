Crear una condicion @media(condicion o features){
    etiqueta{
        #modificacion
    }
}

### Features
- Width
- Heigth
- aspect-ratio (number/number)
- orientation (landscape o portrait)
- overflow-block (none, scroll, paged)
- overflow-inline (none, scroll)
- display-mode	(fullscreen | standalone | browser
                minimal-ui | picture-in-picture)
- scripting	(none | initial-only | enabled)
- 


Conainers queries
- .container{
    container: nombre / tipo(inlines-size)
}

 @container nombre (condicion){

 }


PREFERENCIAS DE USUARIOS
@media(prefers-color-scheme: dark){
    :root{
        --foreground-color: white;
        --background-color: black;
    }
}



## display 
flex - bloques 
block - filas
inline-block - bloques
grid - cuadricula

tamaño completo de pagina
heigth - 100vh

Recomendacion utilizar %


cargar fuentes
pnpm install @fontsource/"nombre de la fuente"

´´
## TRANCICIONES
En el elemento se crea el llamado de la transicion con el tiempo
.element{
    color: 2s;
}
En la propiedad se crea el tipo de trancision
.element:hover{
    color: black;
}

## DESENCADENANTES
HOVER:
Al mover el raton sobre el elemento

NOT:(:HOVER)
Mientras el raton no pasa sobre el elemento

ACTIVE:
Cuando el estas pulsando con el raton

FOCUS:
Cuando el elemento gana el foco

### ESTILOS A LA BARRA DE DESPLAZAMIENTO

scrollbar-color - color (Primer parametro/ barra, segundo parametro/ fondo)

scrollbar-width - tamaño (auto, thin, none)

scrollbar-glutter - reservar espacio ()

::-webkit-scrollbar - Diseños al scroll
-thumb - interior de la barra

-webkit-scrollbar-butto - botones en la barra de scroll

--webkit-resizer - redimencionar un container

scroll-behavior - transaladarse de manera suave

## MODO DE FUSION PARA ELEMENTOS

mix-blend-mode

    multiply (multiplicar)
    screen (trama)
    overlay (superponer)
    darken (oscurecer)
    lighten (aclarar)
    color-dodge (sobreexponer color)
    color-burn (subexponer color)
    hard-light (luz fuerte)
    soft-light (luz suave)
    difference (diferencia)
    exclusion (exclusión)
    hue (tono)
    saturation (saturación)
    color
    luminosity (luminosidad)


### FLOAT Y SHAPE

Float - para que la imagen flote hacia una direccion

Shape-outside - se acopla a la forma de la imagen

shape-margin - le saca margenes a la imagen

## MASCARAS DE IMAGENES

mask-image - usa una mascara partiendo de una imagen o una forma (none | | url(image) | url(svgfile#id))

mask-mode  (match-source | alpha | luminance)

mask-repeat (repeat | repeat-x | repeat-y | no-repeat
space | round)

mask-position (0% 0% | x y) 

mask-clip   (border-box | no-clip | content-box | padding-box |
fill-box | stroke-box | view-box)

mask-origin (	border-box | content-box | padding-box |
fill-box | stroke-box | view-box)

mask-size (auto auto | | cover | contain)

mask-composite (	add | subtract | intersect | exclude)

mask


## TRANSICIONES CON JS 

Podemos crear un evento en este caso para el scroll el cual llama a una clase 

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header")
    header.classList.toggle("prueba", this.window.scrollY>0)
})


