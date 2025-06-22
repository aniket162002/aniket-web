'use client';

export default function GenerateResume() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">My Resume</h1>
        <p className="mb-6">Choose an option below to view or download my resume.</p>

        <div className="flex flex-col gap-4">
          {/* View Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            📄 View Resume
          </a>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="aniket-shinde-resume.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            ⬇️ Download Resume
          </a>

          {/* Return to Portfolio Button */}
          <a
            href="/"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            🏠 Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}
