import ObjectForm from "../components/ObjectForm";
import ObjectList from "../components/ObjectList";

export default function Home() {
  return (
    <div>
      <h1>Gestion des objets</h1>

      <ObjectForm />
      <ObjectList />
    </div>
  );
}