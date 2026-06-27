import React from 'react';

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-8">
      <div className="max-w-2xl text-center bg-white bg-opacity-80 rounded-lg shadow-lg p-6 backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>
        <p className="text-lg text-gray-700">
          Hello! I'm a software engineer passionate about building elegant, high‑performance web applications. I specialize in JavaScript/TypeScript, React, and modern cloud‑native tooling.
        </p>
      </div>
    </section>
  );
}
