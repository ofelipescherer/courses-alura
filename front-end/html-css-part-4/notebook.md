## Section vs Div

Section é semântico, quando queremos separar em blocos
Div é super genérica e ruim para robôs buscadores

## Float

float: Tanto o float:left quanto o float: right servem para que o elemento se destaque na tela, deixe de ocupar o espaço em que estava, para que os outros elementos possam se posicionar ao redor dele

clear= limpa o float. Ex clear: left


## Iframe

iframe: abre uma janela no site que pode ser preenchida com o conteúdo de um site externo

## Pseudo elements

first-child: Primeiro filho tem uma propriedade

last-child: Ultimo filho

nth-child(n): Qualquer elemento

nth-child(2n): Qualquer elemento par

first-letter: Primeira letra

first-line: Primeira linha

before: Antes

after: Depois

## Selectors

``>`` seleciona somento os filhos daquele elemento

``+`` o elemento que vem apos ao elemento

``~`` seleciona todos os elementos do elemento

``:not()`` exclui uma propriedade

## Calc

``calc()``

## Mobile

```html
<meta name="viewport" content="width=device-width">
```

```css
@media screen and (max-width: 480px) {
  property: value
}
```