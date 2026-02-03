# React Performance

## Objective

Study and practice React performance optimization techniques.

## Concepts to Cover

- [ ] React.memo() - Prevent unnecessary re-renders of functional components
- [ ] useMemo() - Memoize expensive calculations
- [ ] useCallback() - Memoize callback functions
- [ ] React.lazy() + Suspense - Code splitting
- [ ] Virtualization (react-window, react-virtualized)
- [ ] React DevTools Profiler
- [ ] Why Did You Render library
- [ ] Bundle size optimization

## How to Run

```bash
npm install
npm run dev
```

## Key Takeaways

### When to use React.memo()
- Component renders often with the same props
- Component is expensive to render
- Parent component re-renders frequently

### When to use useMemo()
- Expensive calculations that depend on specific values
- Referential equality for objects/arrays passed as props

### When to use useCallback()
- Passing callbacks to memoized child components
- Callbacks used in useEffect dependencies

## Notes

...
