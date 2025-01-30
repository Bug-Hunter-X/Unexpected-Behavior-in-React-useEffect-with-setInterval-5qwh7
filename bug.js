```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic.  The conditional check is not effective.
    if (count > 0) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```