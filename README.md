# Platzom

Platzom es un idioma inventado para el Curso de [Fundamentos 
de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), es un buen lugar de educación online

## Descripción del idioma.

- Si la palabra termina con ar se le quitan estas dos letras
un ejemplo: sería Programar = Program

- Si la palabra inicia con Z se le añade "pe" al final.
ejemplo: platzom("zorro" = zorrope)
platzom("zarpar" = zarppe) por la regla 1

- Si la palabra traducida tiene 10 o mas letras, 
se debe partir en dos por la mitad y unir con un guión medio.
platzom("abecedario" = abece-dario)

- Si la palabra original es un palindromo, ninguna regla anterior cuenta y
se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas 
 platzom("sometemos" = SoMeTeMoS)

 ## Instalación

```
npm install platzom
```

 ## Uso

```

import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro"); // Zorrope
platzom("Zarpar"); // Zarppe
platzom("abecedario"); // abece-dario
platzom("sometemos"); // SoMeTeMoS
```

## Créditos
- [Jasan Hernández](https://twitter.com/jasan_azael)

## License

[MIT](https://opensource.org/licenses/MIT)