import { useParams } from "react-router";

export default function LogPage() {
  const { id } = useParams();

  return <p>I iz LogPage (n°{id})</p>;
}
