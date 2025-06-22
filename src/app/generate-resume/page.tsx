'use client';

import { useEffect } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default function GenerateResume() {
  useEffect(() => {
    const generatePDF = () => {
      const doc = new jsPDF();

      const pageHeight = doc.internal.pageSize.height || 297;
      let y: number = 20;

      // ✅ Types fixed for y
      const checkPageOverflow = (y: number): number => {
        if (y > pageHeight - 20) {
          doc.addPage();
          return 20;
        }
        return y;
      };

      // ✅ Base64 icons
      const icons: Record<string, string> = {
         email:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAMAAACg6A4XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA5FBMVEUAAACZmZn///+ZmZnMzMzm5ubAwMCZmZnZ2dmlpaWZmZnW1tbk5OTg4ODu7u7Pz8+ZmZnq6urR0dHZ2dnJycnGxsbS0tLw8PCZmZnNzc2cnJyjo6Ompqb09PTf398aGhoYGBg2NjauLi5bW1teXl7d3d3Ly8szMzN1dXUtLS2QkJDT09PS0tLExMTmZmZubm5tbW0vLy8qKioqKioWFhYyMjIxMTEqKiotLS2goKDg4OCsrKxtbW1gYGBmZmZ9fX3Ozs6ioqJISEjjI+z6AAAAQHRSTlMAAwoSGyQnLzNHS3yAjpiZnrO2usHAv8DNz9fn6+/z9/f7+/zBwcPGx8jNzs/R1NXW2Nna29zd3+Tl5ujr7vLz9fb3+Pb3CgAAAFtJREFUGBltwYcWwzAMRdGvtVaOqL7+/+dAOmomFDe4vRgkUwnIkMHUsJwn3Aq8dLgM1dRAw40NaYAXcY3OlZQ4ILKn4HgyAcKZ9OKmuw7od4J9cnMCAAAAAElFTkSuQmCC',
        phone:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAV1BMVEUAAACZmZn///+ZmZnMzMxmZmZkZGRnZ2dYWFhISEhLS0tFRUUtLS0zMzM0NDSVlZUlJSUqKioqKioeHh4qKioyMjIkJCQfHx8tLS0dHR0dHR3o6OhcXFw7Ozt3d3cuLi7////WuPNuAAAAHHRSTlMABAcQFBUXGBobHB8gIygsLjM8QkdJTFBhZXaJqra8vdP9B9UAAABPSURBVBjTY2AgCjAwMHFxAAQJzMxMUDAyMzAwKDMyAHR0cDAYiQOMjIwMDUw4QAKMiKQkMxA2cAwMDMwMBQYsCE2MVYMTMYGAbFQKCAAhhBbIKzqv9oAAAAAElFTkSuQmCC',
        github:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAWlBMVEUAAACZmZn///+ZmZnMzMxmZmZlZWV+fn5ycnJsZGRhYWF+fn59fX2hoaHKysoxMTHw8PDMzMzq6urExMRAQECkpKQvLy9TU1MyMjJwcHCKiopISEjZ2dnDw8OAgIBYWFj/////oHdVAAAAIHRSTlMABAMGDhITFhcZHR4hIyUpLzNHS3yAj5uan66yuru/wMHDxcnP2OKNAAAAXklEQVQY02NgwAkEJiYmJkZGBhYmJhYG5iYGRgYGB4+fkFFxaWkpGBQ1NQTkFKSmpqBqKSkFlZWVhZXV0DcXNzCwsLe3u4cvv6BA8tLSwwsLEzMzAwAADYbR0q7ap3UAAAAAElFTkSuQmCC',
        linkedin:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAUVBMVEUAAACZmZn///+ZmZnMzMxmZmZkZGRbW1tTU1NaWlpFRUUlJSUrKyswMDDZ2dnKysrPz8+cnJxuYmKsrKyhoaGQkJD///9ubm5wcHBtbW0+Pj6np6f8MBCnAAAAGnRSTlMAAQIEBQcICQoNDxAREhQVFhcYGR8hIyUqLIrH4bsAAABKSURBVBjTY2BgZGJhYmBgYGBgGBgYBpaWlhYGhgYGBgZGRgaGhgYmBgYIuLh4+fj5eXm5ufo6OkApsbGZGBgoKChpKSkAACAjO0ZcpUArAAAAAElFTkSuQmCC'
      };

      // ✅ Typed addIconText
      const addIconText = (icon: string, text: string, x: number, y: number): void => {
        doc.addImage(icon, 'PNG', x, y - 3, 5, 5);
        doc.text(text, x + 7, y);
      };

      // ✅ Contact Header
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

      // Horizontal separator
      doc.setDrawColor(0, 0, 0);
      doc.line(14, y, 196, y);
      y += 6;

      // ✅ Typed addSection
      const addSection = (title: string): void => {
        doc.setFontSize(14);
        doc.setTextColor(0, 51, 153);
        doc.text(title, 14, y);
        y += 6;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
      };

      // ✅ Typed addBullets
      const addBullets = (items: string[]): void => {
        items.forEach((line: string) => {
          doc.text(`• ${line}`, 18, y);
          y += 6;
          y = checkPageOverflow(y);
        });
        y += 2;
      };

      // === Summary ===
      addSection('Professional Summary');
      const summary =
        'Versatile software engineer with solid experience in full-stack development, Flutter, and ML. Proven in banking and insurance APIs, legacy systems (SMART400), and modern tech. Passionate about AI, growth, and innovation.';
      const summaryLines = doc.splitTextToSize(summary, 180);
      doc.text(summaryLines, 14, y);
      y += summaryLines.length * 5;
      y = checkPageOverflow(y);

      // === Skills ===
      addSection('Skills');
      addBullets([
        'Programming: JavaScript, Python, Java, C++, SQL',
        'Web/Frameworks: React.js, Node.js, Next.js, Spring Boot, HTML, CSS, TailwindCSS',
        'Mobile: Flutter',
        'Database: MongoDB, MySQL',
        'Tools: Git, GitHub, Apache Kafka',
        'Concepts: Machine Learning, RESTful APIs, Agile Development'
      ]);

      // === Education ===
      addSection('Education');
      addBullets([
        'B.E. in IT | CGPA: 8.9 | ACPCE | 2020–2024',
        'Class XII | 61.4% | Kirti College | 2019–2020',
        'Class X | 81.2% | Raja Shivaji Vidyalaya | 2017–2018'
      ]);

      // === Experience ===
      addSection('Work Experience');

      const workExperiences: {
        role: string;
        bullets: string[];
      }[] = [
        {
          role: 'SUD Life | Software Engineer Trainee | Dec 2024 – Present',
          bullets: [
            'Contributed to digital insurance API projects.',
            'Maintained legacy SMART400 systems and debugged issues.'
          ]
        },
        {
          role: 'Utkarsh Small Finance Bank | Software Engineer | Aug 2024 – Dec 2024',
          bullets: [
            'Managed IT infrastructure and integration.',
            'Worked with cross-functional teams on secure systems.'
          ]
        },
        {
          role: 'TT Infotech (Freelance) | Flutter Developer | Jan 2025',
          bullets: [
            'Built full-stack Flutter photo album app with PHP/MySQL backend.',
            'Implemented AI-assisted features and secure image uploads.'
          ]
        },
        {
          role: 'IDBI Intech Ltd | ML Intern | Dec 2022 – Jul 2023',
          bullets: [
            'Built ML models for operational efficiency.',
            'Preprocessed large datasets and automated reports.'
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


      // === Projects ===
      addSection('Projects');
      addBullets([
        'License Plate Recognition (OpenCV, ML) – Real-time char extraction from camera feed',
        'Anime Club (MERN Stack) – CRUD anime site with MongoDB & Node APIs',
        'Code Sync – Real-time code collaboration with login/project rooms'
      ]);

      // === Certificates ===
      addSection('Certificates');
      addBullets([
        'Full Stack Development – Codedamn | Dec 2023',
        'Cyber Warrior – Hackingflix | Dec 2022'
      ]);

      // === Achievements ===
      addSection('Achievements & Extracurriculars');
      addBullets([
        'Ex NSS Volunteer | Dec 2023',
        'Ex NCC Cadet | Jun 2021'
      ]);

      doc.save('aniket-shinde-resume.pdf');
    };

    generatePDF();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Resume Generated!</h1>
        <p className="text-center mb-6">Your resume has been generated and downloaded.</p>
        <div className="flex justify-center">
          <a
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Return to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
