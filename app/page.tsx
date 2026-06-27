import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black flex flex-col items-center p-8 font-sans">
      <header className="w-full max-w-4xl flex justify-between items-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Amolika Yadav</h1>
        <nav className="space-x-6">
          <Link href="/about" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline">About</Link>
          <Link href="/skills" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline">Skills</Link>
          <Link href="/projects" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline">Projects</Link>
          <a href="/AmolikaYadav_Updated.docx" download className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline">Resume</a>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-4xl">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Welcome to My Portfolio</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Software Engineer passionate about building elegant, high‑performance web applications.</p>
        </section>
        <section className="grid md:grid-cols-3 gap-6">
          <Link href="/about" className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300">Learn more about my background and experience.</p>
          </Link>
          <Link href="/skills" className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Tech Stack</h3>
            <p className="text-gray-600 dark:text-gray-300">Explore the tools and technologies I use.</p>
          </Link>
          <Link href="/projects" className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Projects</h3>
            <p className="text-gray-600 dark:text-gray-300">See the work I've built.</p>
          </Link>
        </section>
      </main>
      <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Amolika Yadav. All rights reserved.
      </footer>
    </div>
  );
}
