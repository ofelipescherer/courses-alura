## Vantagens de se usar um pré-processador como o SASS

    Aninhamento de código
    Capacidade de usar variáveis
    Capacidade de criar mixins
    Capacidade de usar operações matemáticas/lógicas
    Capacidade de usar loops e condições
    Junção de vários arquivos

## Mixin

Mixin são as funções em SASS, com o decorator @mixin, podemos criar uma for

## Aninhamento

Um dos poderes do SASS é a possibilidade de aninhar propriedades como por exemplo:
  ```
    nav {
      ul {
        li {
          color: red
        }
      }
    }
  ```

## Partials

Partials são jeitos de deixar os arquivos SASS mais organizados, dividindo eles em arquivos menores chamados "partials"

## Variables

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