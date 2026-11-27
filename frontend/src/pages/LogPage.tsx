import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Log } from "../types/Log";
import { toast } from "react-toastify";

export default function LogPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState<Log | null>(null);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:3000/logs/${id}`);
      const cleanData = (await rawData.json()) as Log;
      setLog(cleanData);
    }
    fetchData();
  }, []);

  const hDeleteLog = async () => {
    if (confirm("Etes vous sur de vouloir supprimer cet article ?")) {
      await fetch(`http://localhost:3000/logs/${id}`, {
        method: "DELETE",
      });
      navigate("/");
      toast("Article supprimé avec succès !");
    }
    // sinon
    //   🤷
  };

  if (log === null) {
    return <p>Waiting for Log n°{id}...</p>;
  }

  return (
    <article>
      <h2>
        {log.title} (n°{id})<button onClick={hDeleteLog}>X</button>
      </h2>
      <h3>{log.date}</h3>
      <p>{log.content}</p>
    </article>
  );
}
