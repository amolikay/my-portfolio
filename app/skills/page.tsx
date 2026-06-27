import React from 'react';

export default function SkillsPage() {
  const skills = [
    { name: 'JavaScript / TypeScript', level: 'Expert' },
    { name: 'React / Next.js', level: 'Expert' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Git / CI‑CD', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 p-8">
      <div className="max-w-3xl bg-white bg-opacity-80 rounded-lg shadow-lg p-6 backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Skills &amp; Tech Stack</h1>
        <ul className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <li key={skill.name} className="p-4 bg-gray-100 rounded-lg text-center">
              <span className="text-xl font-medium text-gray-900">{skill.name}</span>
              <br />
              <span className="text-sm text-gray-600">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
