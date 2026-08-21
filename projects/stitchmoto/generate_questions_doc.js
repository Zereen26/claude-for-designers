const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, PageOrientation
} = require("docx");

const ACCENT = "AD2B00";
const DARK = "1A1A1A";
const GRAY = "555555";

function questionBlock(num, title, question, note) {
  const children = [
    new Paragraph({
      spacing: { before: 360, after: 80 },
      children: [
        new TextRun({ text: `Q${num}. `, bold: true, color: ACCENT, size: 24 }),
        new TextRun({ text: title, bold: true, size: 24, color: DARK }),
      ],
    }),
    new Paragraph({
      spacing: { after: note ? 80 : 160 },
      children: [new TextRun({ text: question, size: 22, color: DARK })],
    }),
  ];

  if (note) {
    children.push(
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun({ text: note, italics: true, size: 20, color: GRAY })],
      })
    );
  }

  children.push(
    new Paragraph({
      spacing: { after: 60 },
      children: [new TextRun({ text: "Ans:", bold: true, size: 22, color: DARK })],
    })
  );

  // Three blank lines for handwritten or typed answers
  for (let i = 0; i < 3; i++) {
    children.push(
      new Paragraph({
        spacing: { after: 140 },
        border: {
          bottom: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC", space: 1 },
        },
        children: [new TextRun({ text: " " })],
      })
    );
  }

  return children;
}

const questions = [
  {
    title: "Brand Identity",
    question:
      "What is the final brand name for the website? Is the logo/wordmark final, or does it need to be redesigned?",
    note:
      'Note: the current design shows three different names in different places — "MOTO-ENGINEER", "STITCHMOTO", and "INDUSTRIAL VELOCITY".',
  },
  {
    title: "Navigation",
    question:
      "What should the final main navigation menu items be? Is the current category structure correct, or does it need changes?",
    note:
      'Note: two different versions currently exist — "Shop, Garage, Profile, Technical, Rewards" vs "Shop All, New Arrivals, Helmets, Armor, Parts".',
  },
  {
    title: "Device Scope",
    question:
      "Is this launching for desktop only, or is mobile/tablet also required? If mobile is needed, should it happen in this same phase, or after desktop launches (phase 2)?",
    note: "Note: the current design is 100% desktop-only, built at 1280px width.",
  },
  {
    title: "Site Width / Layout",
    question:
      "What should the maximum content width of the website be — 1280px or 1440px?",
    note:
      "Note: the design file currently has both values mixed in different places, and this needs to be confirmed for development.",
  },
  {
    title: "Missing Pages / States",
    question:
      "Are the following pages/states needed: empty cart, product out-of-stock, 404/error page, payment failed, forgot password? Or can these be skipped for the MVP and added later?",
    note: null,
  },
  {
    title: "Admin Panel",
    question:
      "The design includes an admin/CMS panel (inventory management, product manager). Should this be built in this same release, or is it planned for a future phase?",
    note: null,
  },
  {
    title: "Timeline / Priority",
    question:
      "Should everything go to development at once, or in phases (e.g., customer-facing pages first, admin panel later)?",
    note: null,
  },
];

let body = [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [
      new TextRun({ text: "STITCHMOTO", bold: true, size: 40, color: ACCENT }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [
      new TextRun({ text: "Client Questions — Design Handoff", size: 26, color: DARK }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 8 } },
    spacing: { after: 200 },
    children: [
      new TextRun({
        text: "Please review the design file and answer the questions below so the design and dev team can finalize scope.",
        size: 20,
        color: GRAY,
        italics: true,
      }),
    ],
  }),
];

for (let i = 0; i < questions.length; i++) {
  const q = questions[i];
  body = body.concat(questionBlock(i + 1, q.title, q.question, q.note));
}

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 }, // US Letter
          margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 },
        },
      },
      children: body,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("STITCHMOTO_Client_Questions.docx", buf);
  console.log("done");
});
