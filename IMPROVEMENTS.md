# Improvement Backlog

## High Priority

- **[Development] Establish automated CI/CD** — Configure continuous integration and deployment to run the required checks and streamline releases. **Target: Next phase.**
- **[Development] Review environment variable configuration** — Remove unused entries from `backend/.env.sample`, document the required variables, and replace hardcoded configuration values with environment variables. **Target: High priority.**
- **[Development] Add a frontend environment template** — Create `frontend/.env.sample` and ensure `.env` files are excluded from version control. **Target: High priority.**

## This Sprint

- **[Development] Require approval on pull requests** — Update repository branch protection so pull requests require reviewer approval before merging.

## Later

- **[Development] Expand automated test coverage** — Identify critical application flows and add tests to improve confidence in future changes. **Target: Next phase.**
- **[Design] Improve responsive behavior** — Ensure the application works well across supported screen sizes.
- **[Design] Add pagination to the leads table** — Make it easier to navigate large lead lists.
- **[Design] Explain email verification status** — Add tooltips to the email verification icons.
- **[Design] Preserve selected-row styling on hover** — Keep selected rows visually distinct when hovered.
- **[Development] Introduce reusable Tailwind theme tokens** — Consolidate shared colors and other design values.
- **[Development] Reduce repeated styling** — Extract reusable components where repeated Tailwind classes make the UI harder to maintain.
- **[Accessibility] Improve accessibility** — Review the application against accessibility best practices and address identified gaps.
- **[Development] Refactor the leads list** — Split `LeadList.tsx` into smaller components with clear responsibilities.
- **[Development] Verify lead ID strategy** — Confirm whether lead IDs should be incremental or UUID-based, then document or update the implementation as needed.
