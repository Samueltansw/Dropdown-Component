import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500, setLoading) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // setLoading(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
