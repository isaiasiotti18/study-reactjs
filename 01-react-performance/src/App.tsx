import { useState, useMemo, useCallback, memo } from 'react';

// Example: Expensive computation that benefits from useMemo
function ExpensiveCalculation({ count }: { count: number }) {
  const expensiveResult = useMemo(() => {
    console.log('Computing expensive calculation...');
    let result = 0;
    for (let i = 0; i < count * 1000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return <p>Expensive Result: {expensiveResult}</p>;
}

// Example: Memoized component that only re-renders when props change
const MemoizedChild = memo(function MemoizedChild({
  onClick,
  label
}: {
  onClick: () => void;
  label: string;
}) {
  console.log(`Rendering: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

function App() {
  const [count, setCount] = useState(1);
  const [otherState, setOtherState] = useState(0);

  // useCallback prevents function recreation on every render
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>React Performance Optimization</h1>

      <section>
        <h2>1. useMemo - Memoize expensive calculations</h2>
        <button onClick={() => setCount(c => c + 1)}>
          Increase count: {count}
        </button>
        <ExpensiveCalculation count={count} />
      </section>

      <section>
        <h2>2. memo + useCallback - Prevent unnecessary re-renders</h2>
        <button onClick={() => setOtherState(s => s + 1)}>
          Update other state: {otherState}
        </button>
        <p>Check console - MemoizedChild should NOT re-render when otherState changes</p>
        <MemoizedChild onClick={handleClick} label="Memoized Button" />
      </section>

      <section>
        <h2>Topics to Study</h2>
        <ul>
          <li>React.memo() - Component memoization</li>
          <li>useMemo() - Value memoization</li>
          <li>useCallback() - Function memoization</li>
          <li>Code splitting with React.lazy()</li>
          <li>Virtualization for long lists</li>
          <li>React DevTools Profiler</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
