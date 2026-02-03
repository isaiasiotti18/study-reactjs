# useRef no React: Quando e Como Usar

O `useRef` é um hook fundamental do React que permite acessar elementos DOM diretamente e armazenar valores mutáveis sem causar re-renderizações. Neste post, vamos explorar suas principais aplicações através de exemplos práticos.

## O que é useRef?

O `useRef` retorna um objeto com uma propriedade `current` que persiste durante todo o ciclo de vida do componente. Diferente do `useState`, mudanças no valor de `useRef` não causam re-renderização do componente.

## 1. Acessando Elementos DOM

O uso mais comum do `useRef` é para acessar elementos DOM diretamente:

```tsx
import { useRef } from "react";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  function handleClick() {
    if (divRef.current!.style.backgroundColor === "red") {
      divRef.current!.style.backgroundColor = "blue";
      h1Ref.current!.style.color = "yellow";
    } else {
      divRef.current!.style.backgroundColor = "red";
      h1Ref.current!.style.color = "blue";
    }
  }

  return (
    <div ref={divRef} style={{ backgroundColor: "red" }}>
      <h1 ref={h1Ref} style={{ color: "blue" }}>
        Hello World
      </h1>
      <button onClick={handleClick}>Click aqui para mudar as cores</button>
    </div>
  );
}
```

Neste exemplo, manipulamos diretamente os estilos dos elementos DOM sem precisar de estado.

## 2. useRef vs useState: A Diferença Crucial

### Com useRef (Sem Re-renderização)

```tsx
import { useRef } from "react";

export function CounterComponentUseRef() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current = countRef.current + 1;
    console.log("Count:", countRef.current);
  };

  return (
    <div>
      <p>Count: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### Com useState (Com Re-renderização)

```tsx
import { useState } from "react";

export function CounterComponentUseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## Principais Diferenças

| useRef | useState |
|--------|----------|
| Não causa re-renderização | Causa re-renderização |
| Valor persiste entre renders | Valor persiste entre renders |
| Mudanças não atualizam a UI automaticamente | Mudanças atualizam a UI |
| Ideal para valores que não afetam a UI | Ideal para dados que afetam a UI |

## Quando Usar useRef?

- **Acessar elementos DOM**: Focus, scroll, medições
- **Armazenar valores mutáveis**: Timers, contadores internos
- **Valores que não precisam re-renderizar**: Cache, referências
- **Evitar re-renderizações desnecessárias**: Performance

## Quando NÃO Usar useRef?

- Para dados que devem aparecer na UI
- Para estado que afeta a renderização
- Como substituto direto do useState

## Conclusão

O `useRef` é uma ferramenta poderosa para casos específicos onde você precisa de mutabilidade sem re-renderização ou acesso direto ao DOM. Use-o com sabedoria, sempre considerando se o valor realmente não precisa causar uma atualização na interface.