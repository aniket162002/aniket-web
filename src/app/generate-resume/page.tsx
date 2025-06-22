'use client';

export default function GenerateResume() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Resume</h1>
        <p className="text-center mb-6">Click below to download my resume.</p>
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download="aniket-shinde-resume.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
