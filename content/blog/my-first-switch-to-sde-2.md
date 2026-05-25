---
title: "My First Switch to SDE 2"
date: 2026-05-26
tags: [career, interviews, sde-2]
excerpt: "A mix of how-to steps and personal learnings for switching to an SDE 2 role—resume, prep, interviews, and lessons from 300+ applications."
---

This will be a mix of *how to do it* along with some of my personal learnings.

There is already a lot of content online regarding this topic. But this is what I usually share with my friends when they are preparing to switch to an SDE 2 role. Interviews are slowly evolving in this AI era. At the time I'm writing this, I've only seen AI-assisted coding in a few Online Assessments (OA). Most interview rounds are still pretty much the same.

---

## Background

I was working as a Java Backend Engineer at Zoho with 3+ years of experience.

Initially, I spent around 6 months preparing inconsistently. During that period, I mostly solved random DSA problems without any proper direction. After doing some research and planning, I followed a more structured and consistent preparation approach for nearly a year while simultaneously attending interviews.

### Some numbers from my preparation journey

* Total job applications: Around 300–350
  (both focused and random applications)

* Total interview rounds attended: 34

### Companies where I attended face-to-face interviews

* Amazon
* PayPal
* Walmart
* project44
* DevRev
* Plum

### Companies where I attended only Online Assessments

* Microsoft
* Salesforce
* Oracle
* Flexiple (Swiggy)
* Cisco
* Nutanix
* Visa
* IBM
* Agoda
* Expedia

---

## Steps

1. Update the Resume
2. Polish Your LinkedIn Profile
3. Interview Preparation
4. Projects / Skills (Optional)
5. Apply for Jobs
6. Iterate

---

## 1. Update the Resume

For applying to jobs, the bare minimum requirement is a resume. Having a resume ready before preparation helps avoid "preparation procrastination," where we keep delaying applying to jobs in the name of preparation.

Collect all your work and achievements. Write them in terms of impact and measurable outcomes.

Example:

> Revamped the order return service and reduced failure rates by 7%.

Mention only the things you can confidently explain during interviews. Adding fake skills or experiences may backfire in later rounds.

I used Jake's resume template. It's simple and recommended by many engineers.

#### Resume Resources

**Jake's LaTeX Resume Template**

[Overleaf - Jake's Resume Template](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs)

**LaTeX Online Editor**

[Overleaf](https://www.overleaf.com/)

**Alternate DOCX Resume Template**

[Resume Template GitHub Repo](https://github.com/mattyHerzig/resume)

Maintain multiple resume versions and keep experimenting. I mostly used file naming for version control.

Example:

> resume-v23.pdf

---

## 2. Polish Your LinkedIn Profile

Keep your LinkedIn profile complete and up to date. Engage with content and connect with employees from your target companies. These connections may become useful later for referrals.

Don't hesitate to post your learnings and achievements on LinkedIn. I had several recruiters directly reach out to me through LinkedIn because of an active profile.

---

## 3. Interview Preparation

These are the most common interview rounds for SDE 2 roles. The process may vary slightly depending on the company.

---

### Round 0 — Online Assessment (OA)

* Duration: 45–60 mins
* Once your resume gets shortlisted, recruiters will usually send an assessment link that must be completed within a week.
* Platforms are usually HackerRank, CodeSignal, or custom assessment portals.
* Most OAs contain:

  * 1–2 DSA problems
  * MCQs related to your tech stack
  * Debugging tasks
    Example: Fix failing test cases in a Spring Boot application

In OAs, DSA questions are usually longer than standard LeetCode problems. Time management becomes very important.

Some assessment platforms won't allow you to revisit questions, so make sure to check before clicking **Next** or **Save** if you plan to revisit them.

---

### Round 1 — DSA

* Duration: ~60 mins
* Usually consists of two DSA problems.
* Difficulty depends heavily on the company.

For example:

* In Walmart and PayPal, I mostly faced LeetCode Medium-level questions.
* In Amazon, I received harder problems.

Start with the brute-force approach and gradually optimize toward a better solution.

#### DSA Resources

**Take U Forward — Striver's SDE Sheet**

[Take U Forward DSA Sheet](https://takeuforward.org/dsa/strivers-sde-sheet-top-coding-interview-problems)

#### Some observations from my interview experiences

* Most companies ask standard LeetCode problems, which will be covered in most DSA sheets.
* Don't spend too much time chasing every new LeetCode challenge problem.
* Quality of problems > Number of problems.
* Focus on pattern recognition.
* Pick one concept or algorithm and practice multiple variations of problems around it.

Maintain a sheet of problems you struggled with and revisit them after 1–2 weeks if you still can't solve them without checking the answer. Repetition helps a lot.

#### DSA Pattern Weightage

[AlgoMonster Problem Pattern Stats](https://algo.monster/problems/stats)

---

### Round 2 — LLD (Low-Level Design)

* Duration: ~60 mins

There are usually two types of coding-based design rounds:

#### 1. Low-Level Design (LLD)

You explain:

* classes
* fields
* methods
* relationships

and implement a few functionalities of the application.

#### 2. Machine Coding

You implement a complete working application, usually in:

* 2+ hour interview rounds
* take-home assignments
* weekend projects

Here, I'm mainly talking about LLD interviews.

#### LLD Resources

**Hello Interview — LLD Guide**

[Hello Interview LLD Guide](https://www.hellointerview.com/learn/low-level-design/in-a-hurry/introduction)

**Awesome Low-Level Design GitHub Repo**

[Awesome LLD GitHub Repo](https://github.com/ashishps1/awesome-low-level-design)

Practice standard LLD problems like:

* Parking Lot
* Splitwise
* Elevator System

Again, time management matters a lot here. Some interviewers expect runnable code, while others are okay with pseudocode. Clarify this before starting.

---

### Round 3 — System Design / HLD

* Duration: ~60 mins

#### Resource

**Hello Interview — System Design Guide**

[Hello Interview System Design Guide](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction)

Practice mock system design interviews using:

* friends
* peer groups
* AI tools

The more you speak out loud and structure your thoughts, the better you get at these rounds.

---

### Round 4 — Hiring Manager (HM)

This round is usually based on:

* your resume
* projects
* technical decisions
* ownership
* past work

Be ready to explain your current project end-to-end.

Behavioral questions are also common. I found the STAR format useful while answering them.

---

### Round 5 — HR

Common HR questions:

* Why this company?
* Why are you switching?
* How do you handle conflicts?
* Expected compensation?

Compensation discussions also happen here. Research salary ranges beforehand.

I mostly used:

* LeetCode discussions
* Levels.fyi
* Blind

to understand compensation ranges.

---

## Preparation Tips

* Check with recruiters beforehand about:

  * interview rounds
  * expectations
  * interview format
* Practice previously asked questions for the company you are interviewing with.

LeetCode discussion sections and interview experience posts are very useful because many question patterns repeat.

* I would suggest starting with DSA first and moving to other rounds once you reach around 60–70% confidence in DSA. In most companies, DSA is still the knockout round.

---

## 4. Projects / Skills

This section is optional and may not apply to everyone.

Sometimes your current experience may miss a key skill expected in the market.

In my case, I was a Java backend developer, but my previous company didn't use Spring Boot heavily.

A lot of job descriptions required Spring Boot experience, and it affected my resume shortlist rate. So I learned Spring Boot and built a project around it before adding it to my resume.

Compare multiple job descriptions and identify the common missing skills. Then gradually add them to your skill set.

---

## 5. Apply for Jobs

I would suggest applying to a few companies once you become around 60% confident in DSA, even if you haven't fully prepared for other rounds yet.

This helps:

* avoid preparation procrastination
* create a faster feedback loop
* gain real interview exposure

I mostly used LinkedIn and received decent callbacks there. Personally, Naukri didn't work very well for me.

Once you become around 70–80% confident overall, start asking for referrals from employees on LinkedIn.

If you message 10 people for referrals, maybe 2 might respond. Use referrals to your advantage.

Also, apply for jobs that match your core skills. The major skills mentioned in the JD should reasonably align with your resume.

---

## 6. Iterate

You'll probably face several failures during the process.

Use those failures as learnings and keep iterating until you break through.

There are many factors outside our control in job searching. The only controllable factor is continuously improving and showing up consistently.

---

## Tips From Me

* Consistency is the biggest factor. I'm a big fan of the book Atomic Habits, and it genuinely helped me a lot. Build a system where you can consistently prepare instead of depending only on motivation.
* I usually prepared from 5:30 AM to 8:30 AM because that was the most interruption-free time block for me.
* Maintain a failure interview log. Document:

  * what went well
  * what went wrong
  * what can be improved

after every interview. This helps improve consistently over time.

* Balance your health and relationships. Preparation can become mentally consuming, especially with a full-time job. Try to maintain some time for workouts and occasionally spend time with friends instead of completely isolating yourself.

That's all. [Ping me on LinkedIn](https://www.linkedin.com/in/kiran-m-p) if you have any doubts.
