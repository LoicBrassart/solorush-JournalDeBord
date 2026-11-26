import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Log } from "../types/Log";

export default function LogPage() {
  const { id } = useParams();

  const [log, setLog] = useState<Log | null>(null);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:3000/logs/${id}`);
      const cleanData = (await rawData.json()) as Log;
      setLog(cleanData);
    }
    fetchData();
  }, []);

  if (log === null) {
    return <p>Waiting for Log n°{id}...</p>;
  }

  return (
    <p>
      {log.title} (n°{id})
    </p>
  );
}
