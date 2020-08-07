## Arrays

Como podemo declarar um array?

```js
var avgTemp = [];
avgTemp[0] = 31.9
avgTemp[1] = 35.3   
avgTemp[2] = 42 
avgTemp[3] = 38 
avgTemp[4] = 25.5

console.log(avgTemp);

var daysOfWeek = new Array('Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo');

for(var i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}
```

Como podemos fazer o calculo de Fibonacci dos 20 primeiros termos? 

```js

var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    fibonacci[2] = 2;

for(var i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

for(var i = 0; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}
```

## Adicionando elementos no Array

1. Como adicionar um 10º elemento no nosso array `numbers`;

```js
var numbers = [0,1,2,3,4,5,6,7,8,9];

numbers[10] = 10;
numbers[numbers.length] = 10;
numbers[numbers.length] = 11;
```

2. Utilizando os métodos do nosso Array, usando o `push`.
> Basicamente o método push ele sempre irá inserir elmentos a partir do último elemento do nosso array:

```js
numbers.push(12);
numbers.push(13);
numbers.push(13);
numbers.push(15);
```

3. Utilizando os métodos do nosso Array, usando o `unshift`;
> Basicamente o método unshift ele sempre irá inserir elmentos a partir do primeiro elemento do nosso array:

```js
numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);
numbers.unshift(-4);
numbers.unshift(-5);
```

## Removendo elementos do Array

Utilizando o método `pop`
> Basicamente o método pop ele sempre irá remover elmentos a partir do último elemento do nosso array:

```js
numbers.pop();
numbers.pop();
numbers.pop();
```

Utilizando o método `shift`
> Basicamente o método shift ele sempre irá remover elmentos a partir do primeiro elemento do nosso array:

```js
numbers.shift();
numbers.shift();
numbers.shift();
```

## Como lidar com  elementos em posição específica?

1. Como podemos fazer para remover os elementos [3, 4, 5] de um array de 10 posições?

> Podemos utilizar o método splice, ele irá "fatiar" uma parte do nosso array.

```js
numbers.splice(3, 3);  // a partir da 3º posição do nosso array vamos pegar os 3 elements.

```

> Como inserir elementos á partir da 3ª posição?

Sendo 3 a nossa posição para ser inserida
Sendo 0 informando que não será removido nenhum elemento
Sendo 3, 4, 5 os elementos que serão inseridos no meu array.

```js
numbers.splice(3, 0, 3, 4, 5);
```
## Arrays Bidimensionais

> Cenário do dia-a-dia nosso, são arrays de 2 dimensões. (a vahhhh)

Suponha o cenário, uma média de temperatura de duas semanas.
Imagine o segundo problema, se tivermos que calcular para 100 semanas?

Como fazer? Adicione uma váriavel 0 a 99 adicionando cada temperatura? 

```js

var avgTempWeek = [];
var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [41, 29.2, 33, 21.2, 19.5, 17, 33.8];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

console.log('tempatura | semana 1 e 2:', avgTempWeek);

// acessando posição como ficaria?


console.log('temperatura | semana 1 | dia 4:', avgTempWeek[0][3]);
console.log('temperatura | semana 1 | dia 6:', avgTempWeek[0][5]);
console.log('temperatura | semana 2 | dia 3:', avgTempWeek[1][2]);

```

Como percorrer todo o array e imprimir todos os valores?

```js
for (var i = 0; i < avgTempWeek.length; i++) {
  for (var j = 0; j < avgTempWeek[i].length; j++) {
    console.log('0', avgTempWeek[i][j]); 
  }
}
```

Como podemos lidar com arrays trimendisionais?

```js

var avgTempWeek = [];
var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [41, 29.2, 33, 21.2, 19.5, 17, 33.8];
var avgTempWeek3 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek4 = [41, 29.2, 33, 21.2, 19.5, 17, 33.8];

firstWeeks =  [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];
console.log('?', month[1][1][4]);

for (var x = 0; x < month.length;  x++ ) {
  for (var y = 0; y < month[x].length; y++) {
    for (var z = 0; z < month[y].length; z++) {
      console.log(month[x][y][z]);
    }
  }
}



```