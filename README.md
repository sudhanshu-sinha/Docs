# 🧩 React Draggable Docs. App

A modern React app featuring draggable cards with animations using `framer-motion`, styled with Tailwind CSS, and enhanced with icons from `react-icons`.

---

## 🚀 Features

- 🖱️ **Draggable Cards** – Drag and drop cards within a constrained area.
- 🎨 **Styled with Tailwind CSS** – Utility-first CSS for fast UI development.
- 🎞️ **Smooth Animations** – Powered by `framer-motion`.
- 🔒 **Unselectable Text** – Prevents unwanted text highlighting.
- 🌙 **Dark UI** – Uses semi-transparent dark backgrounds for a modern feel.

---

## 📦 Tech Stack

- **React**
- **Tailwind CSS**
- **Framer Motion**
- **React Icons**

---

## 📁 Project Structure

src/
├── components/
│ ├── Card.jsx # Reusable draggable card component
│ └── Foreground.jsx # Layout and logic for rendering multiple cards
├── App.jsx # Root component
├── main.jsx # Entry point
└── index.css # Tailwind base styles


---

## 🛠️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/sudhanshu-sinha/Docs.git
   cd Docs

2. **Install dependencies**
   ```bash
   npm install

3. **Start the development server**
   ```bash
   npm run dev


---

## 🖼️ Screenshots

Add screenshots or a short gif of your app here if available.


---

## 💡 Tips

Ensure user-select: none is applied correctly via Tailwind's select-none or inline styles for unselectable text.

Each item rendered via .map() must include a unique key prop to avoid React warnings.

Use dragConstraints with framer-motion to prevent cards from being dragged outside a specific area.


---

## 📜 License
MIT License


---

## 🙋‍♂️ Author
Created by Sudhanshu Sinha
GitHub




