import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createResumePDF() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions in points (width, height)
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const margin = 50;
  let y = height - 50;
  const contentWidth = width - margin * 2;

  const colorBlack = rgb(0.1, 0.1, 0.1);
  const colorGrey = rgb(0.35, 0.35, 0.35);
  const colorLine = rgb(0.2, 0.2, 0.2);

  // Helper to draw section header
  function drawSectionHeader(title) {
    y -= 14;
    page.drawText(title, {
      x: margin,
      y: y,
      size: 11,
      font: fontBold,
      color: colorBlack,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: width - margin, y: y },
      thickness: 1,
      color: colorLine,
    });
    y -= 14;
  }

  // Helper to draw wrapped text
  function drawWrappedText(text, fontSize = 9.5, font = fontRegular, color = colorBlack, indent = 0, lineGap = 13) {
    const maxWidth = contentWidth - indent;
    const words = text.split(' ');
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const textWidth = font.widthOfTextAtSize(testLine, fontSize);

      if (textWidth > maxWidth && currentLine) {
        page.drawText(currentLine, {
          x: margin + indent,
          y: y,
          size: fontSize,
          font: font,
          color: color,
        });
        y -= lineGap;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      page.drawText(currentLine, {
        x: margin + indent,
        y: y,
        size: fontSize,
        font: font,
        color: color,
      });
      y -= lineGap;
    }
  }

  // 1. Header (Name & Contact)
  const nameText = "Ayaan Shaikh";
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 24);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y: y,
    size: 24,
    font: fontBold,
    color: colorBlack,
  });

  y -= 18;
  const contactText = "ayaanswork24@gmail.com  |  +91 9607889594  |  Git-ayaanshaikh24";
  const contactWidth = fontRegular.widthOfTextAtSize(contactText, 9.5);
  page.drawText(contactText, {
    x: (width - contactWidth) / 2,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: colorBlack,
  });

  y -= 12;

  // 2. WORK EXPERIENCE
  drawSectionHeader("WORK EXPERIENCE");

  // Job 1
  page.drawText("Full-Stack Development Intern | Code-Alpha", {
    x: margin,
    y: y,
    size: 10,
    font: fontBold,
    color: colorBlack,
  });
  const date1 = "June 2026 – July 2026";
  const date1Width = fontRegular.widthOfTextAtSize(date1, 9.5);
  page.drawText(date1, {
    x: width - margin - date1Width,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: colorBlack,
  });
  y -= 14;

  drawWrappedText("• Developed and deployed scalable full-stack web applications using modern JavaScript frameworks within the MERN stack (MongoDB, Express.js, React, Node.js).", 9, fontRegular, colorBlack, 0, 12);
  y -= 2;
  drawWrappedText("• Optimized frontend performance and backend API integration to improve application responsiveness and reliability.", 9, fontRegular, colorBlack, 0, 12);

  y -= 10;

  // Job 2
  page.drawText("Currently | Working as Full-Stack Development Intern at Labmentix", {
    x: margin,
    y: y,
    size: 10,
    font: fontBold,
    color: colorBlack,
  });
  const date2 = "May 2026 – Nov 2026";
  const date2Width = fontRegular.widthOfTextAtSize(date2, 9.5);
  page.drawText(date2, {
    x: width - margin - date2Width,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: colorBlack,
  });
  y -= 14;

  drawWrappedText("• Delivering scalable full-stack projects using full fledged MERN technology", 9, fontRegular, colorBlack, 0, 12);
  y -= 2;
  drawWrappedText("• Part time freelancer delivering market ready products", 9, fontRegular, colorBlack, 0, 12);

  y -= 8;

  // 3. ACHIEVEMENTS
  drawSectionHeader("ACHIEVEMENTS");

  drawWrappedText("• Quasar 4.0 Hackathon (Jan 2026) – Won a national level hackathon.", 9, fontRegular, colorBlack, 0, 12);
  y -= 6;
  drawWrappedText("• Hackathon Club, VPP COE – Represented the college across top regional and national hackathons, leading full-stack implementation and rapid prototyping under high-pressure, time-constrained settings.", 9, fontRegular, colorBlack, 0, 12);
  y -= 6;
  drawWrappedText("• Advocated for modern web technologies (React, Edge Functions, serverless architecture) within departmental projects, helping transition legacy setups to modern full-stack workflows.", 9, fontRegular, colorBlack, 0, 12);

  y -= 8;

  // 4. PROJECTS
  drawSectionHeader("PROJECTS");

  page.drawText("PriceWiseAI: Smart Shopping System", {
    x: margin,
    y: y,
    size: 10,
    font: fontBold,
    color: colorBlack,
  });
  y -= 14;

  drawWrappedText("• Built a full-stack MERN application (MongoDB, Express.js, React, Node.js) enabling online customers to have a simple and very clean UI based comparison Application.", 9, fontRegular, colorBlack, 0, 12);
  y -= 6;
  drawWrappedText("• Implemented different API's and build own Router and Scrapper for product Scraping.", 9, fontRegular, colorBlack, 0, 12);
  y -= 6;
  drawWrappedText("• Designed a real-time dashboard for Product updates and Reviews", 9, fontRegular, colorBlack, 0, 12);

  y -= 8;

  // 5. SKILLS
  drawSectionHeader("SKILLS");

  drawWrappedText("Java, HTML, CSS, JavaScript, TypeScript, MERN Stack (MongoDB, Express.js, React, Node.js), Typescript, Angular", 9.5, fontRegular, colorBlack, 0, 13);

  y -= 8;

  // 6. EDUCATION
  drawSectionHeader("EDUCATION");

  page.drawText("Computer Engineering | VPP COE", {
    x: margin,
    y: y,
    size: 10,
    font: fontBold,
    color: colorBlack,
  });
  const cgpa = "CGPA: 7.8";
  const cgpaWidth = fontBold.widthOfTextAtSize(cgpa, 10);
  page.drawText(cgpa, {
    x: width - margin - cgpaWidth,
    y: y,
    size: 10,
    font: fontBold,
    color: colorBlack,
  });
  y -= 14;

  page.drawText("XII (HSC): 75%", {
    x: margin,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: colorBlack,
  });
  const ssc = "X (SSC): 84%";
  const sscWidth = fontRegular.widthOfTextAtSize(ssc, 9.5);
  page.drawText(ssc, {
    x: width - margin - sscWidth,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: colorBlack,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public', 'resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Official resume PDF successfully generated at: ${outputPath}`);
}

createResumePDF().catch(console.error);
