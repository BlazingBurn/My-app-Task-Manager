import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import store from './store';
import TasksPage from './tasksPage/page'; // Composant racine

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Page d'accueil</h1>
      <p className="text-lg">
        <Link href="/tasksPage" className="text-blue-500 hover:underline">Page des tâches</Link>
      </p>
    </div>
  </div>
  
      // <TasksPage />
  );
}
