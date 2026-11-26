import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Log } from "../types/Log";

export default function HomePage() {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3000/logs");
      const cleanData = (await rawData.json()) as Log[];
      setLogs(cleanData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome Home !</h1>
      {logs.map((log) => {
        return (
          <p key={log.id}>
            <Link to={`/${log.id}`}>{log.title}</Link>
          </p>
        );
      })}
    </>
  );
}
