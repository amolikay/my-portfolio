import React from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'Project Alpha',
    description: 'A cutting‑edge web app built with React and Node.',
    image: '/placeholder.png',
  },
  {
    name: 'Project Beta',
    description: 'An AI powered tool using Python and TensorFlow.',
    image: '/placeholder.png',
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 p-8">
      <div className="max-w-4xl bg-white bg-opacity-80 rounded-lg shadow-lg p-6 backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj) => (
            <div key={proj.name} className="p-4 bg-gray-50 rounded-lg shadow">
              <Image src={proj.image} alt={proj.name} width={300} height={200} className="rounded" />
              <h2 className="mt-2 text-2xl font-semibold text-gray-900">{proj.name}</h2>
              <p className="text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
