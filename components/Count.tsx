import React, { useCallback } from "react";
import useSWR, { mutate } from "swr";

const fetcher = url => fetch(url).then(r => r.json());

export const Count: React.FC = () => {
  const { data, error } = useSWR("/api/count", fetcher);

  const increment = useCallback(() => {
    const count = data.count + 1;
    fetch("/api/count", { method: "POST" });
    mutate("/api/count", { ...data, count });
  }, [data]);

  if (error) return <div>Fail to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div>
        Count:
        <span>{data.count}</span>
      </div>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Count;
