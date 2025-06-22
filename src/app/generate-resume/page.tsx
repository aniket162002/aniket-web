'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default function GenerateResume() {
  const [downloaded, setDownloaded] = useState(false);

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height || 297;
    let y: number = 20;

    const checkPageOverflow = (y: number): number => {
      if (y > pageHeight - 20) {
        doc.addPage();
        return 20;
      }
      return y;
    };

    const icons: Record<string, string> = {
      email: 'data:image/png;base64,...',
      phone: 'data:image/png;base64,...',
      github: 'data:image/png;base64,...',
      linkedin: 'data:image/png;base64,...',
    };

    const addIconText = (icon: string, text: string, x: number, y: number): void => {
      doc.addImage(icon, 'PNG', x, y - 3, 5, 5);
      doc.text(text, x + 7, y);
    };

    // Header
    doc.setFontSize(22);
    doc.setTextColor(0, 51, 153);
    doc.text('Aniket Shinde', 105, y, { align: 'center' });
    y += 10;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    addIconText(icons.email, 'shindeaniket47328@gmail.com', 20, y);
    addIconText(icons.phone, '+91-9819399470', 110, y);
    y += 6;
    addIconText(icons.github, 'github.com/aniket162002', 20, y);
    addIconText(icons.linkedin, 'linkedin.com/in/aniket-shinde-a10018231', 110, y);
    y += 10;

    doc.setDrawColor(0, 0, 0);
    doc.line(14, y, 196, y);
    y += 6;

    const addSection = (title: string): void => {
      doc.setFontSize(14);
      doc.setTextColor(0, 51, 153);
      doc.text(title, 14, y);
      y += 6;
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
    };

    const addBullets = (items: string[]): void => {
      items.forEach((line: string) => {
        doc.text(`• ${line}`, 18, y);
        y += 6;
        y = checkPageOverflow(y);
      });
      y += 2;
    };

    // Sections
    addSection('Professional Summary');
    const summary = 'Versatile software engineer with solid experience in full-stack development, Flutter, and ML...';
    const summaryLines = doc.splitTextToSize(summary, 180);
    doc.text(summaryLines, 14, y);
    y += summaryLines.length * 5;
    y = checkPageOverflow(y);

    addSection('Skills');
    addBullets([
      'JavaScript, Python, Java, C++, SQL',
      'React.js, Node.js, Next.js, Spring Boot, HTML, CSS, TailwindCSS',
      'Flutter, MongoDB, MySQL, Git, GitHub, Kafka',
      'Machine Learning, REST APIs, Agile'
    ]);

    addSection('Education');
    addBullets([
      'B.E. in IT | CGPA: 8.9 | ACPCE | 2020–2024',
      'Class XII | 61.4% | Kirti College',
      'Class X | 81.2% | Raja Shivaji Vidyalaya'
    ]);

    addSection('Work Experience');
    const workExperiences = [
      {
        role: 'SUD Life | Software Engineer Trainee | Dec 2024 – Present',
        bullets: [
          'Contributed to digital insurance API projects.',
          'Maintained SMART400 systems.'
        ]
      },
      {
        role: 'Utkarsh Bank | Software Engineer | Aug 2024 – Dec 2024',
        bullets: [
          'Managed IT infra and system integrations.'
        ]
      }
    ];

    workExperiences.forEach(({ role, bullets }) => {
      doc.setFont('helvetica', 'bold');
      doc.text(role, 14, y);
      y += 6;
      doc.setFont('helvetica', 'normal');
      addBullets(bullets);
    });

    addSection('Projects');
    addBullets([
      'License Plate Recognition (OpenCV)',
      'Anime Club MERN App',
      'Code Sync Collaboration Tool'
    ]);

    addSection('Certificates');
    addBullets([
      'Full Stack – Codedamn',
      'Cyber Warrior – Hackingflix'
    ]);

    addSection('Achievements');
    addBullets([
      'Ex NSS Volunteer',
      'Ex NCC Cadet'
    ]);

    doc.save('aniket-shinde-resume.pdf');
    setDownloaded(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        {!downloaded ? (
          <>
            <h1 className="text-2xl font-bold text-center mb-4">Generate Resume</h1>
            <p className="text-center mb-6">Click below to download your resume.</p>
            <div className="flex justify-center">
              <button
                onClick={generatePDF}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-4">Resume Downloaded!</h1>
            <p className="text-center mb-6">Your resume has been successfully downloaded.</p>
            <div className="flex justify-center">
              <a
                href="/"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Return to Portfolio
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
