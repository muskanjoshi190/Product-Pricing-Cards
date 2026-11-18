# Project 03 — Responsive Product Pricing Cards

A responsive SaaS pricing page built using HTML5, CSS3 and vanilla JavaScript.

## Requirements covered
- Three pricing plans: Starter, Pro and Team
- Monthly / Yearly billing switch using real button elements and `aria-pressed`
- Plan prices stored in HTML `data-monthly` and `data-yearly` attributes
- Yearly prices are approximately 20% cheaper than paying monthly for 12 months
- Highlighted Popular plan with a ribbon-style label
- CSS Grid layout, rounded cards, soft shadows and generous spacing
- Smooth hover movement and stronger hover shadow
- Reduced-motion support through `prefers-reduced-motion`
- Responsive single-column layout below 800px; Popular plan appears first
- Visible keyboard focus styles and accessible form/dialog labels
- Clear call-to-action button on every card

## Working interactions
- Plans and Why Nova navigation links scroll to their sections
- Talk to us scrolls to the contact form
- Each plan button opens a confirmation dialog showing the chosen plan and active billing period
- Dialog can be closed with its close button, Got it button, backdrop, or Escape key
- Contact form validates required fields and email format, then shows an on-page confirmation

## Demo limitation
This is a front-end learning project. The contact form does not send or store messages, and the plan dialog does not create an account or process payment. Real email delivery, account creation, or checkout requires a backend or external service and is outside the supplied task requirements.

## Run locally
1. Extract the ZIP archive.
2. Open the project folder in Visual Studio Code.
3. Right-click `index.html` and choose **Open with Live Server** (or open it directly in a browser).
4. Test Monthly and Yearly, all three plan buttons, navigation links, and the contact form.
5. Check the page at 360px, 768px and 1280px widths.
6. Capture one screenshot of the Monthly view and one of the Yearly view for submission.

## Project files
- `index.html` — page structure and plan data
- `style.css` — design, hover effects and responsive rules
- `script.js` — billing toggle and interactions

All prices and the Nova brand are fictional.
