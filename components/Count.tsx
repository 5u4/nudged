import React, { useCallback } from "react";
import useSWR, { mutate } from "swr";
import TimeAgo from "timeago-react";

const fetcher = url => fetch(url).then(r => r.json());

export const Count: React.FC = () => {
  const { data, error } = useSWR("/api/count", fetcher);

  const increment = useCallback(() => {
    const count = data.count + 1;
    const ts = Date.now() / 1000;
    fetch("/api/count", { method: "POST" });
    mutate("/api/count", { ...data, count, ts });
  }, [data]);

  if (error) return <div>Fail to load</div>;
  if (!data) return <div className="spinner" />;

  return (
    <>
      <span className="count">{data.count}</span>
      <span className="timeago">
        Last Nudged: <TimeAgo datetime={data.ts * 1000} />
      </span>
      <button className="btn-pill" onClick={increment}>
        Nudge
      </button>
    </>
  );
};

export default Count;
