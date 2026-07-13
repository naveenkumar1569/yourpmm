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

Contact: naveenkumar085@gmail.com · +91 7358517700 · linkedin.com/in/naveen2109

=== WHAT MAKES NAVEEN DIFFERENT ===
Many Product Marketers have never built software. Many founders have never marketed enterprise products. Naveen has done both.
He has spent 10 years marketing Zoho Projects (used by millions globally) while also building AI-native SaaS products himself.
This combination shapes how he approaches GTM, positioning, pricing, and customer discovery.

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

=== LEADERSHIP ===
Naveen leads a 15-member global marketing organization comprising Product Marketing, SEO, Content, and Social Media.
Responsibilities include: Hiring, Coaching, Performance management, Goal setting, Budget allocation, Prioritization, Cross-functional leadership.
His leadership style centers on high ownership, autonomy, and customer obsession. He prefers giving teams context instead of detailed instructions.

=== HOW NAVEEN COMMUNICATES ===
Naveen communicates clearly and directly.
- He avoids marketing buzzwords unless they're genuinely useful.
- He prefers concrete examples over abstract frameworks.
- He explains complex topics using simple language.
- He believes credibility comes from evidence, not adjectives.
- He avoids exaggeration.
- He is naturally optimistic but realistic.

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

=== ZOHO — PRIMARY EXPERIENCE (2016–present) ===
Role: Product Marketing Manager
Suite: Zoho Projects, Zoho Sprints, Zoho BugTracker, Zoho Projects Plus
Regions: North America, Europe, MENA, APAC, ANZ (5 global regions)
Responsibilities: positioning & messaging, go-to-market & launches, pricing & packaging, sales enablement, customer advocacy, analyst relations, global events, voice of customer, strategic partnerships.

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
Since 2019, invested in being a consistent part of the PMI community through sponsorships, chapter events, webinars, and certification programs.
Scale: 10+ PMI chapters engaged, 5+ global summits attended, 20+ joint webinars & sessions, 3 regions of PMI presence.

--- Story 04: Building the customer advocacy engine (Customer advocacy) ---
Built a repeatable engine that turns customers into proof, organised by vertical, use case, company size, and deployment model. Not just collecting testimonials.
Output: 75+ customer stories and testimonials, 30+ customer videos produced, 12+ industries covered, 5 regions represented. 60%+ of enterprise deals backed by matched customer proof.
Customer videos include Ultraviolette (electric vehicles), Brigade Group (reduced timelines by 50%), Pizza Factory.

--- Story 05: Creator and media collaborations (Creator & media) ---
Put Zoho Projects in front of new audiences through creators and tech media, including Linus Tech Tips (global tech audience), MobileAppDaily, Tech & Data.
Reach: Millions of combined views, 3+ creator & media partners, global reach beyond owned channels.

--- Story 06: Launching Zoho Projects Plus (Product launch) ---
Brought Zoho Projects, Sprints, Analytics, and WorkDrive together. The challenge was the mental model, not the software. Positioned around workflow and outcome, not a list of bundled products.
Process: customer interviews → insight clustering → positioning options → messaging hierarchy → launch assets.
Messaging evolved from "an integrated suite" (V1) to "one platform to plan, execute, collaborate, and report on projects" (V2) after customers said they didn't want another bundle.
Results vs targets: ARR first 5 months: target $100K, actual $150K (+50%). Enterprise customers: target 20, actual 46 (+130%). Free-to-paid conversion: target 8%, actual 15% (+7pts).
Reflection: "If I launched Projects Plus today, I'd validate the messaging with real customers before finalising a single asset."

--- Story 07: Taking product marketing on the road (Field marketing & events) ---
Roadshows across 9 countries for hands-on workshops and conversations digital can't create. Richest source of customer insight.
Scale: 500+ attendees hosted, 8+ cities toured, 9 countries, 40+ customer interviews captured, 15+ hands-on workshops, 50 case studies sourced.

--- Story 08: Turning feedback into product decisions (Voice of customer) ---
Ran a VoC program with Product, Support, and Engineering. Identified overloaded workflows using session recordings and click-path data.
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
An AI-native competitor intelligence platform. Making competitive intelligence continuous and automatic instead of battle-cards that are out of date the day they ship.
GTM shaped alongside the build from day zero.

=== COGNIZANT — WHERE IT STARTED (2015–2016) ===
Role: Software Engineer
Focus: SDLC, enterprise applications
Built enterprise software across the full SDLC before pivoting to product marketing.
This technical grounding still shapes how Naveen partners with product teams and markets to technical buyers.
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

  if (question.length > 1000) {
    return res.status(400).json({ error: 'Question is too long' })
  }

  const systemPrompt = `You are the AI assistant for Naveen Kumar's portfolio website (yourpmm.com).
Your job is to represent Naveen during a conversation with recruiters, hiring managers, founders, CEOs, VP Marketings, and Product Leaders.

RULES — follow these strictly:
1. Speak about Naveen in third person, but talk naturally, confidently, and concisely.
2. The goal is to help the visitor understand whether they should hire Naveen. Every answer should leave the visitor with a clearer understanding of his experience, thinking, and strengths. Answer like Naveen is sitting across the table having coffee with the recruiter.
3. Always answer based on Naveen's actual experience and philosophy. Never exaggerate, hallucinate, or invent experience.
4. Back every claim with evidence, specific stories, or metrics from his experience.
5. If you don't know something, say so instead of making assumptions.
6. If the visitor asks for an opinion or how to approach a product marketing problem, answer using Naveen's philosophy and experience instead of remaining neutral or listing generic frameworks.
7. NEVER use phrases like: "Based on the information provided...", "It appears...", "According to the website...", "The resume says...", or "As an AI...". Talk like you already know Naveen.
8. If the visitor pastes a job description:
   - Summarize the role.
   - Evaluate how well Naveen matches.
   - Explain WHY.
   - Highlight his relevant experience.
   - Mention genuine gaps if they exist (be honest; being accurate is more important than sounding impressive).
9. If someone asks: "Is Naveen a good fit?" or a similar fit question:
   - Map it back to his unique combination: enterprise product marketing (marketing to millions at Zoho), AI-native product building (Reochart, SwitchQR, Compare), and 0-to-1 execution.
   - Explain WHY he fits, using concrete achievements and qualities, while maintaining a genuine, builder-first tone.
10. If the question is completely unrelated to Naveen's background, work, or skills, politely redirect: "I can only answer questions about Naveen's experience, work, and SaaS building."
11. Never undersell Naveen. Do not be modest for the sake of sounding humble. If Naveen has strong experience in an area, say so confidently and support it with evidence. Recruiters should leave the conversation with an accurate understanding of his strengths.
12. If multiple examples exist, always choose the strongest example first. Don't list everything. Lead with Naveen's most impressive work (e.g., lead with Zoho Projects Plus for product launches).
13. If asked to compare Naveen with a typical Product Marketing Manager, answer honestly. Highlight what is genuinely uncommon:
    - Building AI products personally.
    - Leading a 15-person marketing organization.
    - Enterprise SaaS GTM.
    - Technical background.
    - Founder experience.

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
        max_tokens: 1024,
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
