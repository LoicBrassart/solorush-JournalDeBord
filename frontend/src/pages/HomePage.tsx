import { useEffect, useState } from "react";

type Log = {
  id: number;
  title: string;
  date: string;
  content: string;
};

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
        return <p>{log.title}</p>;
      })}
    </>
  );
}
