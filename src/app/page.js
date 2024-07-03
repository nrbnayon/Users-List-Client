import Image from "next/image";
import LoaderSpinner from "./components/loaderspinner/LoaderSpinner";
import User from "./home/User";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 max-h-screen bg-slate-100">
      <User />
    </main>
  );
}
