# Software Developer - Personal Portfolio

A professional, responsive, and minimalist personal portfolio website template designed to showcase web development projects and professional experience.

**[✨ View Live Demo ✨](https://adminrivero.github.io/minimalist-dev-portfolio/)**

---

## 📽️ Preview

<div align="center">
  <a href="https://adminrivero.github.io/minimalist-dev-portfolio/">
    <img src="img/portfolio-demo.gif" alt="Live Portfolio Demo" width="80%">
  </a>
  <p>
    <em>
      👆 Click the preview to visit the live site!<br>
      (Featuring smooth scroll animations and responsive design)
    </em>
  </p>
</div>

## 🚀 Features

-   **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.
-   **Clean Navigation:** Multi-page layout including About, Portfolio, and Contact sections.
-   **Custom Branding:** Includes custom SVG logo design and unique CSS styling.
-   **Interactive Elements:** Smooth transitions and hover effects for an enhanced user experience.
-   **Modern Typography:** Integrated with Google Fonts (Source Code Pro & Source Sans Pro).

## 🛠️ Technologies Used

-   **HTML5:** Semantic structure for better SEO and accessibility.
-   **CSS3:** Custom styles with a focus on Flexbox and Grid.
-   **JavaScript:** Enhancing interactivity.
-   **Normalize.css:** Ensuring consistent rendering across different browsers.
-   **Font Awesome:** High-quality vector icons for social links and UI elements.

## 📂 Project Structure

```text
├── css/
│   ├── style.css      # Main stylesheet
│   └── logo.css       # Specific styles for the SVG logo
├── js/
│   └── index.js       # Custom JavaScript functionality
├── img/               # Images and assets
├── index.html         # Homepage
├── about.html         # About me page
├── portfolio-item.html# Template for individual project details
├── contact.html       # Contact form and links
└── README.md          # Project documentation
```

## 🏁 Getting Started

### Prerequisites
A modern web browser (Chrome, Firefox, Safari, or Edge).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Adminrivero/minimalist-dev-portfolio.git
   ```
2. Open `index.html` in your browser to view the site locally.

## ⚙️ How to Use This Template

1. **Create your own repo**
   - Click the green **"Use this template"** button at the top of this page.
   - Give your new repository a name (e.g., `my-portfolio`) and choose its visibility.

2. **Clone your new repo**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

3. **Personalize the content**

   **Global details**
   - Open `index.html` and update:
     - `<title>` with your name (e.g., `Jane Doe - Portfolio`).
     - Intro/hero section text (name, headline, short bio, call-to-action button).
   - Open `about.html` and replace the placeholder text with your own:
     - Longer bio / story.
     - Skills, experience highlights, or timeline items.

   **Portfolio projects**
   - Open `js/index.js` and update the `arrProject` array:
     - For each project, edit:
       - `title`, `subtitle`, and `desc`.
       - `techList` with the technologies you used.
       - `resLinks` with real URLs (`website`, `github`, etc.).
       - `imgCover`, `thumbnail`, and `imgList` paths to match your own images in `img/portfolio/`.
   - Open `portfolio-item.html` and adjust any static text to better fit how you want to present individual projects.

   **Contact section**
   - Open `contact.html`:
     - Update the visible contact details (email, social links, etc.).
   - Open `js/index.js` and, in the `sendMessage` function, replace the email:
     ```js
     window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${messageBody}`;
     ```
     so form submissions go to your own inbox.

   **Branding & styling**
   - Open `css/style.css`:
     - Under `:root`, customize colors (e.g., `--clr-accent`, `--clr-btn`) to match your brand.
     - Optionally tweak font sizes and spacing variables to change the overall look.
   - Open `css/logo.css` to adjust or simplify the SVG logo styling if you want a different logo treatment.
   - Replace images under `img/` (profile photo, background, and portfolio assets) with your own while keeping the same filenames or updating the paths in HTML/JS accordingly.

4. **Preview locally**
   - Open `index.html` directly in your browser to see your changes.
   - Navigate to `about.html`, `portfolio-item.html`, and `contact.html` to verify all pages and links.

5. **Deploy with GitHub Pages**
   - Commit and push your changes:
     ```bash
     git add .
     git commit -m "Personalize portfolio for <your-name>"
     git push origin main
     ```
   - In your new repository, go to **Settings → Pages**:
     - Set **Source** to `Deploy from a branch`.
     - Choose the `main` branch and `/ (root)` folder.
   - Save and wait a minute or two for GitHub Pages to build.
   - Your site will be live at the URL shown under **Pages** (e.g., `https://<your-username>.github.io/<your-repo-name>/`).

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).

---
Developed by [Hector Rivero](https://github.com/Adminrivero)
