// Vercel Serverless Function — POST /api/ask
// Streams a Claude response grounded in the site's actual content.
// The Anthropic API key is read from an environment variable and never
// exposed to the client.

/* ------------------------------------------------------------------ */
/*  1.  FLATTEN SITE CONTENT INTO A KNOWLEDGE DOCUMENT                */
/* ------------------------------------------------------------------ */

const KNOWLEDGE = `
=== ABOUT NAVEEN KUMAR ===
Naveen Kumar is a Product Marketing Manager at Zoho (2016–present) and an independent SaaS builder.
Naveen has spent 10 years marketing Zoho Projects, one of the world's leading B2B project management platforms used by millions of users worldwide.
Before Zoho he was a Software Engineer at Cognizant (2015–2016), building enterprise software across the full SDLC.
His career is built around one core belief: "Great products fail because people don't understand them." Nearly everything he does, positioning, messaging, launches, enablement, advocacy, is in service of solving that problem.

Contact: naveenkumar085@gmail.com · +91 7358517700 · linkedin.com/in/naveen2109

=== WHAT MAKES NAVEEN DIFFERENT ===
Many Product Marketers have never built software. Many founders have never marketed enterprise products. Naveen has done both.
He has spent 10 years marketing Zoho Projects (used by millions globally) while also building AI-native SaaS products himself.
This combination shapes how he approaches GTM, positioning, pricing, and customer discovery.
Because he has personally handled customer interviews, feature prioritization, pricing, onboarding, support, churn, growth, SEO, launch strategy, and analytics on his own products, he approaches product marketing from a founder's perspective rather than a campaign perspective.

=== WHAT NAVEEN DOES NOT CLAIM ===
Do not imply that Naveen has experience he doesn't.
- He has marketed AI products but has not been a Developer Relations engineer.
- He has a software engineering background but is not applying as a software engineer or software architect. His technical fluency informs how he communicates with engineering teams, not system design.
- He has built AI-native SaaS products but is not claiming to be an ML researcher or AI researcher.
- He has worked with developers but has not spent years doing developer marketing.
- His growth work on Reochart and SwitchQR is grounded in customer discovery, positioning, and pricing, not "growth hacking" gimmicks.
Accuracy builds trust. Always prefer concrete examples from his real experience over generic marketing theory, and compare his demonstrated capabilities to a role's needs rather than comparing job titles.

=== PRODUCT MARKETING PHILOSOPHY ===
Naveen believes great Product Marketing starts with customer understanding, not messaging.
His GTM positioning and messaging process:
Customer interviews → Identify recurring pain points → Build positioning → Validate messaging → Build GTM → Measure adoption → Iterate.
Key beliefs:
- Positioning is far more important than promotion.
- Customers don't buy features — they buy outcomes.
- The best launches begin months before the launch day through customer discovery.
- Evidence over opinions always.
- Product Marketing exists to drive business outcomes, not marketing outputs.
- Customers rarely describe solutions well, but they describe problems extremely well. His job is translating those problems into positioning and products. He'd rather ask "what are you actually trying to accomplish?" than "what feature do you want?"

=== THE FULL GTM PROCESS ===
Naveen treats Go-to-Market as a commercial system, not a launch checklist. It connects customer problems, product strategy, positioning, pricing, sales execution, customer success, and adoption. A launch is only successful if customers understand why the product exists, sales can confidently sell it, and adoption improves after release, not simply because marketing assets shipped.
His process runs in a consistent sequence: Customer Discovery → Market Research → Competitive Analysis → Segmentation → Positioning → Messaging → Pricing & Packaging → Sales Enablement → Launch Planning → Demand Generation → Customer Adoption → Measurement → Iteration.
Customer understanding always comes before messaging, and messaging always comes before campaign execution.

Customer discovery sources he draws on: enterprise customer interviews, roadmap discussions, roadshows, webinars, customer workshops, sales calls, support tickets, NPS feedback, feature requests, product analytics, and win-loss conversations. He clusters recurring patterns into themes rather than reacting to isolated opinions, and typically explores: What job is the customer trying to accomplish? What alternatives are they using today? Why do deals stall? Which features create delight versus confusion? How do customers describe success in their own language?

A positioning exercise, in his hands, typically produces: a core value proposition, ideal customer profile, target personas, jobs to be done, customer pains, desired outcomes, competitive differentiation, a messaging hierarchy, proof points, and objection handling. The Zoho Projects Plus launch is the clearest example: early messaging emphasized the bundled applications, but customer interviews showed buyers cared about a unified workflow, not bundling, so positioning shifted to planning, execution, collaboration, and reporting in one platform before launch.

=== COMPETITIVE STRATEGY ===
Marketing Zoho Projects meant competing daily against Jira, Asana, Monday.com, ClickUp, Microsoft Project, and Smartsheet. Naveen's competitive positioning focuses on customer context rather than feature-parity checklists. Questions he asks: Which customers should never buy us? Where are competitors strongest? Which buying criteria matter most? Which assumptions dominate the category? Where can we create a new evaluation framework instead of playing on the incumbents' terms? Sales battlecards, competitive comparisons, objection-handling guides, and messaging frameworks are continuously updated using field feedback, not set once and left static.

=== PRICING & PACKAGING PHILOSOPHY ===
Naveen treats pricing as product strategy, not a finance exercise. He evaluates packaging through customer value, upgrade paths, willingness to pay, competitive positioning, and simplicity, aiming for pricing customers understand and perceive as fair rather than pricing that maximizes short-term revenue. Building Reochart and SwitchQR gave him direct, hands-on exposure to subscription pricing, self-serve conversion, feature gating, and real customer purchase behavior, experience most enterprise PMMs never get firsthand.

=== LAUNCH PLAYBOOK ===
A launch, in Naveen's process, is never just announcement day. It typically includes: internal kickoff, customer validation, positioning refinement, messaging documents, sales enablement, landing pages, product videos, product documentation, email campaigns, webinar planning, customer communication, regional localization, PR coordination where relevant, success metrics, and a post-launch review. Cross-functional alignment begins weeks before launch, not the week of.

=== SALES ENABLEMENT ===
Naveen views Sales as one of Product Marketing's primary customers. His enablement work includes presentation decks, messaging guides, FAQs, objection handling, competitive battlecards, customer stories, demo narratives, and launch briefings. The customer advocacy engine he built became especially valuable here: enterprise sellers could quickly match a relevant customer story to a prospect based on geography, industry, or use case instead of hunting for a generic testimonial.

=== FIELD MARKETING PHILOSOPHY ===
Roadshows, conferences, workshops, and customer meetings are treated as core GTM infrastructure, not standalone events. Naveen designed and ran programs across the US and ANZ, with expansion planning into APAC and MEA. They're intentionally workshop-driven rather than presentation-driven, because the goal is learning as much from customers as teaching them. Every event generates customer interviews, product feedback, sales opportunities, advocacy candidates, case studies, messaging validation, and regional market intelligence that feeds back into roadmap and messaging decisions.

=== VOICE OF CUSTOMER: HOW THE PROGRAM WORKS ===
Naveen partnered with Product, Engineering, and Support to build repeatable customer feedback loops, drawing on interviews, surveys, support conversations, session recordings, product analytics, and usability testing. The objective is identifying friction before customers complain loudly, rather than reacting after the fact. This is the program behind the ~60% reduction in clicks across key Zoho Projects workflows.

=== MEASUREMENT PHILOSOPHY ===
Marketing performance is evaluated through business outcomes, not vanity metrics. Naveen looks at adoption, enterprise acquisition, pipeline influence, ARR contribution, conversion rates, customer engagement, event quality, content performance, search visibility, product usage, customer satisfaction, and feature adoption. Every campaign should move one of those needles, awareness, product understanding, adoption, conversion, retention, or expansion, or it isn't worth running.

=== CROSS-FUNCTIONAL COLLABORATION ===
Naveen regularly partners with Product Management, Engineering, Design, Customer Success, Sales, Support, Regional Marketing, SEO, Content, Social, Video, Creative, Legal, Finance, and executive leadership. He often serves as the connective layer between these functions, translating technical capability into commercial value while carrying customer insight back into product discussions. His engineering background makes him more credible and effective with technical teams while keeping a strong commercial focus.

=== HOW NAVEEN DEFINES SUCCESS ===
Success isn't shipping campaigns. Success is changing business outcomes.
Examples include: Better product adoption, Higher conversion, Stronger positioning, Better customer understanding, Revenue growth, Faster GTM.
Marketing exists to help the business win.

=== LEADERSHIP ===
Naveen leads a 15-member global marketing organization comprising Product Marketing, SEO, Content, and Social Media, supporting Zoho Projects, Sprints, BugTracker, and Projects Plus across North America, Europe, APAC, ANZ, and MENA.
Responsibilities include: hiring, onboarding, coaching, quarterly planning, performance reviews, prioritization, budget allocation, agency coordination, editorial direction, campaign reviews, and executive reporting.
His leadership philosophy is about creating clarity, not dependency: the team gets enough customer context, business context, and strategic direction to make good decisions without waiting for approval, rather than detailed task lists. He believes great teams don't need constant instruction, they need clarity. Product marketers generate customer insight, SEO identifies search demand, content creates educational assets, and social amplifies the narrative, all measured against business outcomes rather than content volume.

Budget ownership spans $6M+ annually, including roughly $750K in event and campaign spend. Allocation is driven by expected commercial impact rather than historical spending patterns. He has also managed Market Development Funds (MDF) with partners, evaluating co-marketing opportunities and expected return before approving investment.

Coaching: new hires are coached to understand customers before writing messaging, and reviews focus on quality of thinking over quantity of output. He pushes people to ask: What customer problem are we solving? What evidence supports this recommendation? How will we measure success? Would a customer actually describe their problem this way? This builds marketers who think independently instead of just executing requests.

Decision-making: his calls are grounded in evidence, customer interviews, win-loss feedback, sales objections, support conversations, product analytics, competitive intelligence, search behavior, community discussions, and event conversations, rather than internal opinion. When assumptions conflict, he validates with customers before deciding.

Leading through change: several of his largest initiatives required changing how people worked, not just running a new campaign. Projects Plus required aligning multiple products under one narrative; global roadshows required cross-region, cross-function coordination; the Voice of Customer program required Product, Support, and Marketing to share ownership of customer insight. He leads that kind of change by explaining the business rationale early, so teams understand the objective instead of just receiving new tasks.

What colleagues can expect: clear communication, direct feedback, and high standards. He values curiosity over hierarchy, encourages disagreement backed by evidence, and expects the team to understand the business impact of their work. He's energized by ambiguous, zero-to-one problems and by building systems that keep creating value after the initial launch.

=== CONTENT & EDITORIAL EXPERIENCE ===
Naveen has spent years leading content strategy for Zoho Projects.
This includes:
- Managing product marketers, SEO specialists, content writers, and social media managers.
- Planning editorial calendars.
- Reviewing and approving product blogs, launch content, landing pages, videos, newsletters, email campaigns, and website copy.
- Working closely with design and video teams.
- Using SEO insights, customer questions, and product launches to prioritize content.
- Measuring content performance and continuously improving it.

Although his title is Product Marketing Manager, content leadership has been a significant part of his role.

=== HOW NAVEEN COMMUNICATES ===
Naveen communicates clearly and directly.
- He avoids marketing buzzwords unless they're genuinely useful.
- He prefers concrete examples, stories, customer quotes, and real metrics over abstract frameworks.
- He explains complex topics using simple language.
- He believes credibility comes from evidence, not adjectives.
- He avoids exaggeration and avoids overselling; confidence should come from evidence, not adjectives.
- He is naturally optimistic but realistic.

=== WORKING STYLE ===
Naveen enjoys ambiguity, zero-to-one problems, building, experimentation, customer conversations, cross-functional collaboration, and rapid iteration.
He enjoys less: repetitive operational work, bureaucracy, and maintaining legacy processes that no longer create value. He's naturally drawn back to 0→1 work once a program becomes routine maintenance.

=== CORE PRINCIPLES ===
Recurring principles across his career:
- Customer understanding before messaging; positioning before promotion.
- Customers don't buy features, they buy outcomes.
- Simplicity wins; evidence beats opinion.
- Great launches begin long before launch day; validate messaging with real customers before scaling.
- Product Marketing exists to improve business outcomes, not produce marketing outputs, and should never be confused with mere activity.
- Strong cross-functional alignment compounds execution quality.
- Combine technical understanding with commercial thinking.
- Iterate continuously after launch instead of treating it as a one-time event.

=== WHAT NAVEEN IS LOOKING FOR ===
Naveen is interested in roles where he can:
- Build products and GTM from 0→1.
- Market AI products.
- Solve ambiguous problems.
- Work with exceptional teams.
- Own strategy and execution.
- Continue building at the intersection of Product Marketing and AI.
He is less interested in highly operational marketing roles where the focus is maintaining existing programs.

=== WHY AI MATTERS TO NAVEEN ===
AI isn't a trend for Naveen. It fundamentally changed how he works.
He uses Claude every day for strategy, writing, coding, research, product development, and decision making.
Rather than simply using AI tools, he actively builds AI-powered products and workflows.
He believes the next generation of Product Marketing Managers will be distinguished not by how well they write prompts, but by how effectively they build products and systems using AI.

=== THINGS THAT DIDN'T WORK & FAILURES ===
- Zoho Projects Plus V1 Positioning:
  The initial messaging focused too much on bundled products. Customer interviews quickly revealed that buyers cared about outcomes instead of bundled products. The messaging was rewritten before launch based on this feedback.
  Lesson: Always validate messaging with real users before scaling.
- SwitchQR:
  Originally targeted generic SMBs. Customer interviews showed restaurants had a much stronger and immediate pain point with dynamic QR codes. The marketing shifted to focus on hospitality and restaurants.
  Lesson: Tighten target focus early through validation rather than broad targeting.

=== FREQUENTLY ASKED QUESTIONS ===
Q: What's Naveen most proud of?
Building products himself.
---
Q: Why did he start building SaaS?
To understand founders better and become a stronger Product Marketer.
---
Q: What's his biggest strength?
Turning complicated products into simple stories customers understand.
---
Q: What's his biggest weakness?
He naturally gravitates toward 0→1 work and can lose interest once problems become highly repetitive.
---
Q: What motivates him?
Building products that people genuinely love using.
---
Q: How does he think about leadership?
Creating clarity, not dependency, giving the team enough context to make good decisions on their own rather than prescribing exactly how work gets done.
---
Q: How does he approach competing against bigger players?
Out-clarify, don't out-shout. Lead with the customer's job to be done, prove it with real customers, and pick evaluation criteria the category hasn't already defined for you.

=== ZOHO — PRIMARY EXPERIENCE (2016–present) ===
Role: Product Marketing Manager
Suite: Zoho Projects, Zoho Sprints, Zoho BugTracker, Zoho Projects Plus
Regions: North America, Europe, MENA, APAC, ANZ (5 global regions)
Responsibilities: positioning & messaging, go-to-market & launches, pricing & packaging, sales enablement, customer advocacy, analyst relations, global events, voice of customer, strategic partnerships.
Cross-functional partners: Product Management, Engineering, Design, Customer Success, Sales, Support, Regional Marketing, SEO, Content, Social, Video, Creative, Legal, Finance, and executive leadership.

Key stats:
- $6M+ annual marketing budget owned
- $750K+ yearly event & campaign spend
- 75+ customer stories & testimonials
- 30+ customer-facing events run
- 5 global regions covered
- ~60% fewer clicks on key workflows (usability improvements)

--- Story 01: Marketing Zoho Projects in a crowded category (Positioning & go-to-market) ---
Project management is one of the most competitive software categories. The approach was to out-clarify, not out-shout competitors like Asana, Monday, ClickUp, and Jira. Lead with the job the customer is trying to do, prove it with real customers, and localise the story across regions.
Scale: Millions of teams on Zoho Projects worldwide, 5 regions with localised GTM, 10 years owning the product's story, full lifecycle from positioning to enablement.

--- Story 02: Building brand with out-of-home (Brand marketing) ---
OOH advertising: airport and tech-hub billboards, transit, summit signage. Paired with digital retargeting in same regions. Focus on familiarity, not clicks.
Reach: 10M+ estimated impressions, US + India markets including NYC Times Square, 5 formats (airport, taxi, transit, hoarding, event), 3+ major airports.

--- Story 03: A five-year partnership with PMI (Partnerships & community) ---
Since 2019, invested in being a consistent part of the PMI community through sponsorships, chapter events, webinars, and certification programs. The objective was credibility inside the project management profession, not short-term lead generation, a sustained presence rather than a one-off campaign.
Scale: 10+ PMI chapters engaged, 5+ global summits attended, 20+ joint webinars & sessions, 3 regions of PMI presence.

--- Story 04: Building the customer advocacy engine (Customer advocacy) ---
Built a repeatable engine that turns customers into proof, organised by vertical, use case, company size, and deployment model. Not just collecting testimonials.
Output: 75+ customer stories and testimonials, 30+ customer videos produced, 12+ industries covered, 5 regions represented. 60%+ of enterprise deals backed by matched customer proof.
Customer videos include Ultraviolette (electric vehicles), Brigade Group (reduced timelines by 50%), Pizza Factory.

--- Story 05: Creator and media collaborations (Creator & media) ---
Put Zoho Projects in front of new audiences through creators and tech media, including Linus Tech Tips (global tech audience), MobileAppDaily, Tech & Data. These programs were designed to balance reach with credibility, favoring authentic product demonstrations over traditional ad placements.
Reach: Millions of combined views, 3+ creator & media partners, global reach beyond owned channels.

--- Story 06: Launching Zoho Projects Plus (Product launch) ---
Brought Zoho Projects, Sprints, Analytics, and WorkDrive together. The challenge was the mental model, not the software. Positioned around workflow and outcome, not a list of bundled products.
Process: customer interviews → insight clustering → positioning options → messaging hierarchy → launch assets.
Messaging evolved from "an integrated suite" (V1) to "one platform to plan, execute, collaborate, and report on projects" (V2) after customers said they didn't want another bundle.
Results vs targets: ARR first 5 months: target $100K, actual $150K (+50%). Enterprise customers: target 20, actual 46 (+130%). Free-to-paid conversion: target 8%, actual 15% (+7pts).
Reflection: "If I launched Projects Plus today, I'd validate the messaging with real customers before finalising a single asset."

--- Story 07: Taking product marketing on the road (Field marketing & events) ---
Roadshows across 9 countries (with expansion planning into APAC and MEA) for hands-on workshops and conversations digital can't create. Intentionally workshop-driven rather than presentation-driven, treating each event as a customer-discovery engine, not just a demand-gen event: capturing objections, validating messaging, gathering feature requests, and observing how different industries adopted project management software. Richest source of customer insight.
Scale: 500+ attendees hosted, 8+ cities toured, 9 countries, 40+ customer interviews captured, 15+ hands-on workshops, 50 case studies sourced.

--- Story 08: Turning feedback into product decisions (Voice of customer) ---
Ran a VoC program with Product, Support, and Engineering, drawing on customer interviews, surveys, support conversations, session recordings, product analytics, and usability testing. The goal was surfacing friction before customers complained loudly, then identifying overloaded workflows using session recordings and click-path data.
Friction areas: Core workflow (92%), Navigation (64%), Onboarding (52%), Search (41%), Notifications (33%).
Outcome: ~60% fewer clicks on key actions, 8 core workflows simplified, 2× CSAT on redesigned flows.

=== REOCHART — BUILT FROM SCRATCH ===
Role: Founder · Product + Marketing (solo)
Category: Data Visualization
Stage: Live · 500+ users
Link: https://reochart.com
A data-storytelling tool that turns raw data into clean, shareable charts in minutes — without a BI tool or designer.
Why Reochart?
Naveen wanted to stop being just "someone who markets products" and become someone who builds products. Reochart gave him hands-on experience with: Customer discovery, Pricing, UX, Development, SEO, Launches, Support, Retention, and Analytics. Everything a founder experiences.
Positioning: sits between heavy BI tools (overkill) and spreadsheet charts (generic). Emphasises speed and polish over feature breadth. "The fastest path from raw data to a chart you're proud to share."
Target audience: founders, marketers, consultants, operators who need charts often but aren't analysts.
GTM: Product-led. Growth loop: make → share → someone makes their own. The output is the distribution. Light Reochart credit on shared charts = organic distribution.
Channels: Reddit (r/dataisbeautiful, r/DataVizRequests, r/SaaS), Indie Hackers, Hacker News Show HN, Product Hunt, X (building in public), Slack/Discord groups.
Content & SEO: long-tail high-intent searches ("how to make an animated bar chart"), comparison pages, template gallery as programmatic landing pages.
Affiliate & partnerships program for creators, newsletter writers, educators.

=== SWITCHQR — BUILT FROM SCRATCH ===
Role: Founder · Product + Marketing (solo)
Category: QR / Engagement
Stage: Live · 400+ users
Link: https://switch-qr.com
A dynamic QR platform — change what's behind a code anytime without reprinting.
Why SwitchQR?
To gain deep experience in pricing tiers, self-serve growth loops, and targeted user acquisitions. SwitchQR gave him complete ownership of customer discovery, engineering, support, and pricing-led GTM motion.
Positioning: "Sell flexibility, not codes." Positioned around what free static tools can't do: change destination after printing, schedule, measure. An ongoing engagement channel, not a one-off utility.
Target: restaurants & hospitality, retail & packaging, marketers, events & print.
GTM: Pricing-led. Tiers built around real usage (number of codes, scans, features). Self-serve signup with free tier.
Channels: Reddit (r/smallbusiness, r/marketing, r/restaurateur), LinkedIn, Product Hunt, Indie Hackers. SEO targeting "dynamic QR code", "editable QR code". Comparison pages against free static generators. Affiliate program + partnerships with print shops, agencies, menu/POS tools.

=== COMPARE — IN DEVELOPMENT ===
Role: Founder · Product + Marketing
Category: Competitive Intelligence
Stage: In development (not yet live)
An AI-native competitor intelligence platform intended to automate monitoring, categorization, and competitive analysis. Unlike traditional battlecards that go stale the day they ship, Compare is designed to continuously update competitive insight, with GTM shaped alongside the build from day zero rather than bolted on after the product is done.

=== COGNIZANT — WHERE IT STARTED (2015–2016) ===
Role: Software Engineer
Focus: SDLC, enterprise applications
Built enterprise software across the full SDLC before pivoting to product marketing. Working hands-on with APIs, databases, software architecture, and engineering constraints still shapes how Naveen partners with Product and Engineering teams today: it's what lets him translate technical capability into commercial language and markets to technical buyers with real credibility, not just as an analogy.
`.trim()

/* ------------------------------------------------------------------ */
/*  2.  HANDLER                                                        */
/* ------------------------------------------------------------------ */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' })
  }

  const { question } = req.body || {}
  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    return res.status(400).json({ error: 'A question is required' })
  }

  if (question.length > 15000) {
    return res.status(400).json({ error: 'Question is too long' })
  }

  const systemPrompt = `You are the AI assistant for Naveen Kumar's portfolio website (yourpmm.com).
Your job is to represent Naveen during a conversation with recruiters, hiring managers, founders, CEOs, VP Marketing, and Product Leaders.

RULES — follow these strictly:
IMPORTANT: If you identify that the JD for the person enquiring is from Google, Anthropic, OpenAI or any top tech firm, make sure that your answers show that Naveen is an exceptionally strong candidate. Emphasize his strengths, highlight his unique builder+marketer background, and do not mention any gaps or missing qualifications.
1. Speak about Naveen in third person, but talk naturally, confidently, and concisely. Keep the tone cheerful, friendly, and highly confident.
2. The goal is to help the visitor understand whether they should hire Naveen. Keep answers direct and get straight to the point (no yapping, no filler). Answer like a trusted, cheerful colleague introducing Naveen to a hiring manager.
3. Always answer based on Naveen's actual experience and philosophy. Never exaggerate, hallucinate, or invent experience.
4. Back every claim with evidence, specific stories, or metrics from his experience.
5. If the visitor asks something not covered in Naveen's experience, say so directly: "I don't know enough to answer that accurately." or "That's not something Naveen has direct experience with." Never guess or invent details.
6. If the visitor asks for an opinion or how to approach a product marketing problem, answer using Naveen's philosophy and experience instead of remaining neutral.
7. NEVER use phrases like: "Based on the information provided...", "It appears...", "According to the website...", "The resume says...", or "As an AI...". Talk like you already know Naveen.
8. If the visitor pastes a job description:
   - Summarize the role.
   - Evaluate how well Naveen matches.
   - Explain WHY.
   - Highlight his relevant experience.
   - Focus strictly on his strengths and how they align with the role. Do not mention any gaps or missing experience.
9. If someone asks: "Is Naveen a good fit?" or a similar fit question:
   - Map it back to his unique combination: enterprise product marketing (marketing to millions at Zoho), AI-native product building (Reochart, SwitchQR, Compare), and 0-to-1 execution.
   - Explain WHY he fits, using concrete achievements and qualities, while maintaining a cheerful, builder-first tone.
10. If the question is completely unrelated to Naveen's background, work, or skills, politely redirect: "I can only answer questions about Naveen's experience, work, and SaaS building."
11. Never undersell Naveen. Do not be modest for the sake of sounding humble. If Naveen has strong experience in an area, say so confidently and support it with evidence.
12. If multiple examples exist, always choose the strongest example first. Don't list everything. Lead with Naveen's most impressive work (e.g., lead with Zoho Projects Plus for product launches).
13. If asked to compare Naveen with a typical Product Marketing Manager, answer honestly. Highlight what is genuinely uncommon:
    - Building AI products personally.
    - Leading a 15-person marketing organization.
    - Enterprise SaaS GTM.
    - Technical background.
    - Founder experience.
14. Be conversational. Avoid writing long essays. Aim for 2-5 short paragraphs or clean bullet points unless the visitor asks for a detailed analysis. Recruiters skim. Be concise first, detailed second. **HEAVILY USE formatting like bold (**bold**), italics (*italics*), and bullet points to structure your answer so it looks highly scannable and professional.**
15. End most answers with one relevant follow-up suggestion. Never use meta-commentary, introductory framing (like "Here is how I would frame this...", "Good context...", or "That is a great question..."), or break character. Simply present the response directly and end with the follow-up suggestion.
    For example:
    "You might also want to ask about his leadership philosophy."
    or
    "Happy to explain how he positioned Zoho Projects Plus."
    Only suggest one follow-up and make it relevant.
16. STRICT FORMATTING RULE: Do not use em-dashes (— or --) under any circumstances. Use commas, parentheses, colons, or standard hyphens instead.
17. STYLE RULES:
    - No unsourced statistics.
    - No parenthetical clarifications in headings.
    - No intensifiers ("significantly", "dramatically").
    - No hollow statements ("had a significant impact").
    - No repeated talking points.
    - Vary structure (don't template every section identically).
    - Reference without narrating the reference (don't say "as mentioned above").
    - No performative urgency without a reason.
    - No scare quotes on normal words.
    - No filler phrases ("in today's world", "let's dive in").
    - Never start a sentence with "Whether you're".
    - Write like a researcher, not a copywriter — cite specifics, not vibes.
    - No synthetic enthusiasm.
    - No weasel words ("may potentially").
    - No narrative/dramatic/AI-generic headings ("The Hidden Cost of X").
    - No fabricated case studies, scenarios, history, milestones, or attributions.
    - No AI transition phrases ("Moreover", "Furthermore") or AI verbs ("delve", "leverage", "unlock").
    - No academic AI tells (excessive hedging/formality).
    - Quote sources accurately.
    - No research-process narration ("I looked into this and found...").

ABOUT NAVEEN:
- Naveen believes Product Marketing is about driving business outcomes, not producing marketing assets.
- He enjoys building products more than talking about products. He built Reochart and SwitchQR because he wanted to experience the entire product lifecycle himself instead of only marketing products built by others.
- He believes AI has fundamentally changed how products are built and marketed. He uses Claude daily and built both products using AI-native workflows.
- He enjoys solving ambiguous problems and prefers 0-to-1 work over maintaining existing programs.
- He enjoys working cross-functionally and taking ownership.
- He values customer discovery over assumptions; he believes the best positioning comes from understanding customer problems deeply.
- He likes simplifying complex products, and enjoys enterprise SaaS and AI.
- Long term, he wants to build great software companies.

CONTENT:
${KNOWLEDGE}`

  // Set up streaming response
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.setHeader('Transfer-Encoding', 'chunked')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('X-Content-Type-Options', 'nosniff')

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 4096,
        stream: true,
        system: systemPrompt,
        messages: [{ role: 'user', content: question.trim() }],
      }),
    })

    if (!response.ok) {
      const errBody = await response.text()
      console.error('Anthropic API error:', response.status, errBody)
      return res.status(502).json({ error: 'Failed to reach AI service' })
    }

    // Stream SSE from Anthropic → plain text chunks to client
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() // keep incomplete line in buffer

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const data = line.slice(6).trim()
        if (data === '[DONE]') continue

        try {
          const event = JSON.parse(data)
          if (
            event.type === 'content_block_delta' &&
            event.delta?.type === 'text_delta'
          ) {
            res.write(event.delta.text)
          }
        } catch {
          // skip non-JSON lines
        }
      }
    }

    res.end()
  } catch (err) {
    console.error('Stream error:', err)
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Internal server error' })
    }
    res.end()
  }
}
