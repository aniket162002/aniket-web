'use client';

import { useEffect } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default function GenerateResume() {
  useEffect(() => {
    const generatePDF = async () => {
      const doc = new jsPDF();

      const pageHeight = doc.internal.pageSize.height || 297;
     const checkPageOverflow = (y: number): number => {
        if (y > pageHeight - 20) {
          doc.addPage();
          return 20;
        }
        return y;
      };

      // Base64 icons
      const icons = {
        email:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAMAAACg6A4XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA5FBMVEUAAACZmZn///+ZmZnMzMzm5ubAwMCZmZnZ2dmlpaWZmZnW1tbk5OTg4ODu7u7Pz8+ZmZnq6urR0dHZ2dnJycnGxsbS0tLw8PCZmZnNzc2cnJyjo6Ompqb09PTf398aGhoYGBg2NjauLi5bW1teXl7d3d3Ly8szMzN1dXUtLS2QkJDT09PS0tLExMTmZmZubm5tbW0vLy8qKioqKioWFhYyMjIxMTEqKiotLS2goKDg4OCsrKxtbW1gYGBmZmZ9fX3Ozs6ioqJISEjjI+z6AAAAQHRSTlMAAwoSGyQnLzNHS3yAjpiZnrO2usHAv8DNz9fn6+/z9/f7+/zBwcPGx8jNzs/R1NXW2Nna29zd3+Tl5ujr7vLz9fb3+Pb3CgAAAFtJREFUGBltwYcWwzAMRdGvtVaOqL7+/+dAOmomFDe4vRgkUwnIkMHUsJwn3Aq8dLgM1dRAw40NaYAXcY3OlZQ4ILKn4HgyAcKZ9OKmuw7od4J9cnMCAAAAAElFTkSuQmCC',
        phone:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAV1BMVEUAAACZmZn///+ZmZnMzMxmZmZkZGRnZ2dYWFhISEhLS0tFRUUtLS0zMzM0NDSVlZUlJSUqKioqKioeHh4qKioyMjIkJCQfHx8tLS0dHR0dHR3o6OhcXFw7Ozt3d3cuLi7////WuPNuAAAAHHRSTlMABAcQFBUXGBobHB8gIygsLjM8QkdJTFBhZXaJqra8vdP9B9UAAABPSURBVBjTY2AgCjAwMHFxAAQJzMxMUDAyMzAwKDMyAHR0cDAYiQOMjIwMDUw4QAKMiKQkMxA2cAwMDMwMBQYsCE2MVYMTMYGAbFQKCAAhhBbIKzqv9oAAAAAElFTkSuQmCC',
        github:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAWlBMVEUAAACZmZn///+ZmZnMzMxmZmZlZWV+fn5ycnJsZGRhYWF+fn59fX2hoaHKysoxMTHw8PDMzMzq6urExMRAQECkpKQvLy9TU1MyMjJwcHCKiopISEjZ2dnDw8OAgIBYWFj/////oHdVAAAAIHRSTlMABAMGDhITFhcZHR4hIyUpLzNHS3yAj5uan66yuru/wMHDxcnP2OKNAAAAXklEQVQY02NgwAkEJiYmJkZGBhYmJhYG5iYGRgYGB4+fkFFxaWkpGBQ1NQTkFKSmpqBqKSkFlZWVhZXV0DcXNzCwsLe3u4cvv6BA8tLSwwsLEzMzAwAADYbR0q7ap3UAAAAAElFTkSuQmCC',
        linkedin:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAUVBMVEUAAACZmZn///+ZmZnMzMxmZmZkZGRbW1tTU1NaWlpFRUUlJSUrKyswMDDZ2dnKysrPz8+cnJxuYmKsrKyhoaGQkJD///9ubm5wcHBtbW0+Pj6np6f8MBCnAAAAGnRSTlMAAQIEBQcICQoNDxAREhQVFhcYGR8hIyUqLIrH4bsAAABKSURBVBjTY2BgZGJhYmBgYGBgGBgYBpaWlhYGhgYGBgZGRgaGhgYmBgYIuLh4+fj5eXm5ufo6OkApsbGZGBgoKChpKSkAACAjO0ZcpUArAAAAAElFTkSuQmCC'
      };

     const addIconText = (icon: string, text: string, x: number, y: number): void => {
        doc.addImage(icon, 'PNG', x, y - 3, 5, 5);
        doc.text(text, x + 7, y);
      };

      let y = 20;

      // Header
      doc.setFontSize(22);
      doc.setTextColor(0, 51, 153);
      doc.text('Aniket Shinde', 105, y, { align: 'center' });
      y += 10;

      // Contact Info with Icons
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      addIconText(icons.email, 'shindeaniket47328@gmail.com', 20, y);
      addIconText(icons.phone, '+91-9819399470', 110, y);
      y += 6;
      addIconText(icons.github, 'github.com/aniket162002', 20, y);
      addIconText(icons.linkedin, 'linkedin.com/in/aniket-shinde-a10018231', 110, y);
      y += 10;

      // Horizontal Line
      doc.setDrawColor(0, 0, 0);
      doc.line(14, y, 196, y);
      y += 6;

      // Section Function
      const addSection = (title) => {
        doc.setFontSize(14);
        doc.setTextColor(0, 51, 153);
        doc.text(title, 14, y);
        y += 6;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
      };

      const addBullets = (items) => {
        items.forEach(line => {
          doc.text(`• ${line}`, 18, y);
          y += 6;
          y = checkPageOverflow(y);
        });
        y += 2;
      };

      // Professional Summary
      addSection('Professional Summary');
      const summary =
        'Versatile and enthusiastic software engineer with solid experience in full-stack development, API integration, and machine learning. Proven ability to deliver high-quality solutions in banking and insurance sectors. Adept at collaborating in cross-functional teams, maintaining legacy systems like SMART400, and building Flutter apps with AI integration. Passionate about learning new technologies and contributing to impactful projects.';
      const summaryLines = doc.splitTextToSize(summary, 180);
      doc.text(summaryLines, 14, y);
      y += summaryLines.length * 5;
      y = checkPageOverflow(y);

      // Skills
      addSection('Skills');
      addBullets([
        'Programming: JavaScript, Python, Java, C++, SQL',
        'Web/Frameworks: React.js, Node.js, Next.js, Spring Boot, HTML, CSS, TailwindCSS',
        'Mobile: Flutter',
        'Database: MongoDB, MySQL',
        'Tools: Git, GitHub, Apache Kafka',
        'Concepts: Machine Learning, RESTful APIs, Agile Development'
      ]);

      // Education
      addSection('Education');
      addBullets([
        'B.E. in Information Technology | CGPA: 8.9 | Annasaheb Chudaman Patil College of Engineering | 2020–2024',
        'MSBSHSE (Class XII) | 61.4% | Kirti College | 2019–2020',
        'MSBSHSE (Class X) | 81.2% | Raja Shivaji Vidyalaya | 2017–2018'
      ]);

      // Work Experience
      addSection('Work Experience');
      const experiences = [
        {
          role: 'SUD Life | Software Engineer Trainee | Dec 2024 – Present',
          bullets: [
            'Contributing to enterprise API projects for digital insurance solutions.',
            'Maintaining and enhancing SMART400-based legacy systems.',
            'Providing support and improvements for debugging issues.'
          ]
        },
        {
          role: 'Utkarsh Small Finance Bank | Software Engineer | Aug 2024 – Dec 2024',
          bullets: [
            'Optimized banking IT infrastructure for seamless operations.',
            'Implemented secure and efficient tech with cross-functional teams.'
          ]
        },
        {
          role: 'TT Infotech (Freelance) | Flutter Developer | Jan 2025',
          bullets: [
            'Built full-stack Flutter photo album app with AI features.',
            'Integrated secure uploads and authentication with PHP/MySQL.'
          ]
        },
        {
          role: 'IDBI Intech Ltd | Machine Learning Intern | Dec 2022 – Jul 2023',
          bullets: [
            'Built ML models to improve operations.',
            'Processed large datasets and collaborated for deployment.'
          ]
        }
      ];
      experiences.forEach(exp => {
        doc.setFont(undefined, 'bold');
        doc.text(exp.role, 14, y);
        y += 6;
        doc.setFont(undefined, 'normal');
        addBullets(exp.bullets);
      });

      // Projects
      addSection('Projects');
      addBullets([
        'Real-Time License Plate Recognition | Dec 2023',
        'Anime Club (MERN Stack App) | Jun 2023',
        'Code Sync (Collaboration Tool) | Dec 2023'
      ]);

      // Certificates
      addSection('Certificates');
      addBullets([
        'Full Stack Development – Codedamn | Dec 2023',
        'Cyber Warrior – Hackingflix Academy | Dec 2022'
      ]);

      // Achievements
      addSection('Achievements & Extracurriculars');
      addBullets(['Ex NSS Volunteer | Dec 2023', 'Ex NCC Cadet | Jun 2021']);

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
