🛍️ Product Explorer Dashboard

<img width="1365" height="720" alt="Screenshot 2026-01-11 140727" src="https://github.com/user-attachments/assets/a6355537-a722-423a-81da-b11a62455074" />


<img width="1345" height="718" alt="Screenshot 2026-01-11 140745" src="https://github.com/user-attachments/assets/273d14c2-a2b1-4792-955f-a66ced2a4c27" />


<img width="1364" height="717" alt="Screenshot 2026-01-11 140800" src="https://github.com/user-attachments/assets/f526d5c5-e6ad-4464-bfe2-fe9343dd5460" />


<img width="1356" height="716" alt="Screenshot 2026-01-11 141322" src="https://github.com/user-attachments/assets/4ed27641-cf09-433c-918c-7f3ad8c3c621" />


<img width="1365" height="724" alt="Screenshot 2026-01-11 141350" src="https://github.com/user-attachments/assets/f617264c-2cbf-42cf-af37-63ae63576999" />

A production-style Product Explorer Dashboard built using Next.js (App Router), TypeScript, and Tailwind CSS.
This application demonstrates clean component architecture, server/client data handling, filtering, routing, state persistence, and responsive UI design.

🚀 Live Demo

🔗 Live URL: https://prismatic-longma-7c5bcb.netlify.app/

📌 Tech Stack

Next.js 16 (App Router)

React 19

TypeScript (Strict Mode)

Tailwind CSS

Fake Store API – https://fakestoreapi.com

Netlify (Deployment)

🎯 Features Implemented
1️⃣ Product Listing Page

Fetches product data from a public API

Displays products in a responsive grid

Each product card includes:

Product image

Title

Category

Price

Favorite (❤️) toggle

Proper loading, empty, and error-safe handling

2️⃣ Search & Filtering

Search by product title (client-side)

Filter by category using chip-style buttons

Favorites filter (shows only favorited products)

Case-insensitive filtering

Clean and intuitive UX

3️⃣ Product Details Page

Dynamic route: /products/[id]

Displays:

Large optimized image

Title

Description

Price

Category

Uses Next.js dynamic routing

Includes a Back button for easy navigation

Gracefully handles invalid or missing product IDs (404)

4️⃣ Favorites Feature

Users can mark/unmark products as favorites

Favorites are:

Persisted using localStorage

Reflected instantly in the UI

Favorites state is safely handled to avoid hydration issues

5️⃣ Dark Mode

Light / Dark theme toggle

Theme preference persisted in localStorage

Applies globally across all pages

Smooth transitions and proper contrast

Enhanced card styling in dark mode

6️⃣ Responsive Design

Mobile-first approach

Fully responsive across:

Mobile

Tablet

Desktop

Tailwind Grid & Flex utilities used extensively

🧠 Architecture & Design Decisions
Server & Client Separation

Server Components:

Fetch data from API

Handle routing and rendering

Client Components:

Search

Filtering

Favorites

Dark mode toggle

This ensures:

Optimal performance

Clean separation of concerns

Compatibility with production environments like Netlify

Data Fetching Strategy

Fully dynamic data fetching using:

cache: "no-store"


Avoids ISR conflicts and ensures consistent production behavior

Errors are handled explicitly instead of silently failing

Hydration Safety

Browser-only APIs (localStorage) are accessed only after mount

Prevents hydration mismatches between server and client

Ensures stable production builds


⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone <GitHub Repository Link>
cd product-explorer

2️⃣ Install Dependencies
npm install

3️⃣ Run Locally
npm run dev

Open: http://localhost:3000
