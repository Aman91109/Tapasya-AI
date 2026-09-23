# Tapasya AI — Marketing Website

> Professional marketing website for Tapasya AI, built with **React + Vite + Tailwind CSS + Framer Motion**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How to Update Content

All dynamic content lives in **`/src/data/`** JSON files. No code changes needed — just edit the JSON.

---

### 📸 Adding a New Gallery Photo

Edit **`src/data/sessions.json`** and add a new entry at the top of the array:

```json
{
  "id": 9,
  "image": "https://your-image-url.com/photo.jpg",
  "schoolName": "Name of the School",
  "date": "2025-04-10",
  "caption": "A short description of what happened in this session."
}
```

**Tips:**
- `id` — must be a unique integer
- `image` — can be an absolute URL or a relative path like `/src/assets/photos/session9.jpg`
- `date` — format `YYYY-MM-DD`; gallery sorts by most recent automatically
- `caption` — shown in both the grid card and the lightbox

---

### 🏫 Adding a New Partner School

Edit **`src/data/schools.json`** and add a new entry:

```json
{
  "id": 7,
  "schoolLogo": "https://your-logo-url.com/logo.png",
  "schoolName": "ABC International School",
  "location": "City, State",
  "mouSignedDate": "2025-04-01",
  "status": "active"
}
```

**Tips:**
- `schoolLogo` — use the school's actual logo image URL, or a local path
- `mouSignedDate` — format `YYYY-MM-DD`
- `status` — currently `"active"` (can be extended to filter/badge by status)

---

### 💬 Adding a Testimonial

Edit **`src/data/testimonials.json`**:

```json
{
  "id": 5,
  "name": "Mrs. Sunita Rao",
  "role": "Principal",
  "school": "Greenwood High, Bangalore",
  "quote": "Your testimonial text here...",
  "avatar": "https://ui-avatars.com/api/?name=Sunita+Rao&background=5B28C6&color=fff&size=80"
}
```

---

## Project Structure

```
src/
├── components/      # All React UI components
│   ├── Navbar.jsx
│   ├── Logo.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Programs.jsx
│   ├── Gallery.jsx
│   ├── Schools.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/            # JSON content files (edit these to update content)
│   ├── sessions.json
│   ├── schools.json
│   └── testimonials.json
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Tech Stack

| Tool | Purpose |
|---|---|
| React + Vite | UI framework + build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll animations, transitions |
| React Router | Client-side routing |

## Brand Colors

| Color | Hex |
|---|---|
| Navy (Primary) | `#0A1349` |
| Purple (Accent) | `#5B28C6` |
| Purple Glow | `#8B5CF6` |
