# Six Figure RAG Web

Hi 👋 I'm Harish Neel!

This project is well explained in my course. Check it out here:

👉 [Six Figure RAG Course](https://harishneel.com/six-figure-rag)

## 00_Setup

- Ensure that you have install node
- Official docs : https://nextjs.org/docs/app/getting-started/installation

## 01_ClerkAuth

- Set up middleware and wrap app with Clerk Provider
  - Docs: https://clerk.com/docs/nextjs/getting-started/quickstart
- Build custom `/sign-in` and `/sign-up` pages
  - Docs: https://clerk.com/docs/nextjs/guides/development/custom-sign-in-or-up-page
  - Ensure all auth routes are covered:
    - `/sign-in` (main sign-in page)
    - `/sign-in/sso` (SSO authentication)
    - `/sign-in/password-reset` (password reset flow)
- Maintain auth flow using Clerk's `auth` helper
