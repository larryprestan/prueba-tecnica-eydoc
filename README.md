# prueba-tecnica-eydoc
prueba técnica proceso de seleccion eydoc 
hola. te repositorio contine la preueba tecnica con las especificaciones suministradas via whatsapp.
encontraran 3 archivos y una carpeta. 

1 archivo Index.html:
  en este se encuentra toda la estructura html de la prueba 
  esta incluye los link's correspondientes al framework Bootstrap version 5 
  y el cdn correspondiente a Jquery 3.5.1.
  este cuenta con la siguiente estructura.
 -un contenedor donde se encuenta el titulo y el numero de identificacion del aspirante.
 -un contenedor con el id="rootcontainer" el cual tiene como fondo una imagen sobre la cual
  se vera el efecto esmerilado del boton.
 -un boton con id="glassbtn" al cual aplicamos el efecto esmerilado desde el archivo indexpage.css.
  un contenedor con id="rangecontainer" el cual contiene el elemento range con id="rangopacidad" el 
  cual utilizaremos para cambiar el valor de la opacidad del efecto esmerilado.
  
1 archivo Indexpage.css 
  en este se encuentra toda la configuracion css de los elementos html

1 archivo indexpage.js 
  en este se encuentra toda la funcionalidad del elemento boton 
  donde se pueden realizar cambios sobre este mismo y el elemento rango el cual varia el nivel de esmerilado del boton 
  utilizando la libreria jquery.
  en este se aplica la propiedad "click" al boton 
 con la cual se realizan los cambios sobre las propiedades css del boton,
 y tambien la propiedad "change" a elemento range donde se toma el valor para
 cambiar la opaciad del efecto esmerilado del boton
  

y 1 carpeta statics donde se encuenta el fondo del contenedor principal donde esta el boton.

funciona de la siguiente manera:
al iniciar se solicita dar clic sobre el boton que funciona como un boton on/off que 
activa o desactiva la propiedad esmerilado de este mismo.
el imput para cambiar el rango de esmerilado del boton se encuentra desactivado. este se
activara al dar click en el boton y permitira en un rango de 1 a 5 cambiar la opacidad de
esmerilado del boton al mismo tiempo aumenta el tamaño de este mismo para poder apreciar mejor
el efecto esmerilado sobre la imagen de fondo. al dar click nuevamente sobre el boton este retoma
su tamaño origial y desactiva el elemento rango y no se podra cambiar la opacidad del esmerilado
