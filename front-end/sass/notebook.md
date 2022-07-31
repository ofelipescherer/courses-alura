## Vantagens de se usar um pré-processador como o SASS

  - Aninhamento de código
  - Capacidade de usar variáveis
  - Capacidade de criar mixins
  - Capacidade de usar operações matemáticas/lógicas
  - Capacidade de usar loops e condições
  - Junção de vários arquivos

## Mixin

Mixin são as funções em SASS, com o decorator @mixin, podemos criar uma for

## Aninhamento

Um dos poderes do SASS é a possibilidade de aninhar propriedades como por exemplo:
  ```
    ul {
      li {
        color: red
      }
    }
  ```

## Partials

Partials são jeitos de deixar os arquivos SASS mais organizados, dividindo eles em arquivos menores chamados "partials"

## Variables

Conceito: Variáveis no SASS têm escopo. Exemplo (Somente dentro da nav que a ``$cor`` será ``red``):
  ```
  nav {
    $cor: red
    color: $cor
  }
  ```
Criar uma variável: $nome_da_variavel

## Selectors

Seletores são utilizados para facilitar a legibilidade e diminuir a complexidade dos arquivos SASS:
```
nav {
  &:hover {
    color: red
  }
}
```

## Math Operations 

Uma coisa incrível para se utilizar com o SASS são operações matemáticas com variáveis. É muito bom utilizar isso com tamanho de fonte, que ao invés de criar um tamanho novo, podemos dividir ou multiplicar o valor de outro tamanho

## Palavras reservadas

| Palavra | O que faz |   
|---|---|
| @use | carrega mixins, functions e variáveis de outras folhas de estilos Sass e combina o CSS de diversas folhas de estilo juntos. |   
| @forward | carrega uma folha de estilo Sass e torna os mixins, functions e variáveis disponíveis quando a folha de estilo é carregada pela regra do @use. |  
| @import | estende as regras de CSS para carregar styles, mixins, functions e variáveis de outras folhas de estilo. | 
| @mixins e @include | facilitam a reutilização de trechos de código. | 
| @function | define funções customizadas que podem ser utilizadas em expressões. | 
| @extend | permite que os seletores herdem estilos uns dos outros. | 
| @at-root | coloca estilos dentro dele na raiz do documento CSS. | 
| @error | faz com que a compilação falhe com uma mensagem de erro. | 
| @warn	| imprime um aviso sem parar totalmente a compilação. | 
| @debug | imprime uma mensagem para fins de debugging. | 

## If-Else

Exemplo de como utilizar condicionais em SASS

```
@mixin bg-cores($lado, $cores...)
    @if $lado == left
        background: linear-gradient(to left, $cores)
    @else 
        background: linear-gradient(to right, $cores)
```