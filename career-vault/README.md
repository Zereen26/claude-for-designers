---
created: 2026-07-27
type: reference
status: complete
tags: [ostad, batch-02, career-vault, readme]
---

# Career Vault

**This folder does not open until Class 7.** If you are in week one or week two of the course, you can close it. Nothing in here is your assignment yet, and reading ahead will not help you, because every file in here needs work you have not done yet as its raw material. The vault is where you turn the screen you build in Class 6 into something you can be hired for. Without that screen there is nothing to write about.

Come back in Class 7.

## What this folder is

Everything else in this workspace is about the project. This folder is about you.

The premise is simple and it is the reason the course ends here instead of at the shipped screen. Most junior designers can do the work but cannot describe it. They sit in an interview, get asked about a project, and narrate the screens. Meanwhile another designer in Dhaka with the same skills and the same portfolio talks about the decision they made when the brief turned out to be wrong, and gets the offer. The gap is not talent. It is that one of them wrote it down in advance.

Five files. You fill them in during Classes 7 and 8, then you keep updating them for the rest of your career. Over a year this becomes the most useful folder in the workspace.

## The five files, and when you open each one

| File | Class | What it holds |
|---|---|---|
| `01-positioning.md` | Class 7 | Who you are, what you are good at, what you are not good at yet, what makes you not interchangeable |
| `02-portfolio-story.md` | Class 7 | The five-part story of one project: what you decided, not what AI produced |
| `03-resume.md` | Class 8 | Resume source content, built from your projects rather than from job descriptions |
| `04-interview-answers.md` | Class 8 | The AI objection, STAR answers, the questions you ask them |
| `05-linkedin-content.md` | Class 8 | Bio, post templates, outreach messages |

The numbering is the order. Do not skip. `01` feeds `02`, and both feed everything in Class 8. If you try to write the resume before the positioning, you will write a resume assembled out of job-posting language, which is what everyone else sends.

## How each file works

All five follow the same shape, the same as every other workbook file in this course:

1. What the file is for, and why Claude needs it.
2. Which class it belongs to.
3. A filled EduBridge example, clearly labelled. It exists so you can see the shape. It is not a template to fill with your own nouns.
4. A `## YOUR TURN` section with questions you answer in place.
5. A line telling you to delete the scaffolding.

That last part matters. Once you have filled in `YOUR TURN`, delete everything above it. The example and the instructions were for you, not for Claude, and leaving them in place means Claude reads course furniture as if it were facts about you. A positioning file that still contains the example designer's positioning will produce a bio about someone who does not exist.

## How this folder pairs with `projects/`

Every project in `projects/` should end with a story in here.

```
projects/edubridge/                  the work
career-vault/portfolio-stories/      the story about the work
```

`02-portfolio-story.md` is the master template. When you finish a real project, copy it:

```bash
mkdir -p career-vault/portfolio-stories
cp career-vault/02-portfolio-story.md career-vault/portfolio-stories/{project-name}.md
```

So when a recruiter says "tell me about a project," you are not improvising. You open the right story and talk from something you already thought through carefully, once, when you had time.

## The AI question

Half of this folder exists to answer one question you will be asked in every interview for the next few years: did you do this, or did the AI do it?

The answer is not a denial. You did use AI, everyone knows it, and pretending otherwise fails immediately. The answer is to be precise about what you directed and what you decided. Every file here is structured to force you to name decisions instead of outputs. That is why `02-portfolio-story.md` has a section for what you rejected, and why `04-interview-answers.md` will not let you write an answer whose only concrete noun is a tool name.

By the end of Class 8 you should be able to say "I directed, I decided, I rejected, I shipped" and point at a file for each one.
