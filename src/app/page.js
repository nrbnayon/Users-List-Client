import Image from "next/image";
import LoaderSpinner from "./components/loaderspinner/LoaderSpinner";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 bg-slate-300">
      <h3>User List</h3>
      <LoaderSpinner />
    </main>
  );
}
