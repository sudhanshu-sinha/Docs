# 🧩 React Draggable Docs. App

A modern React app featuring draggable cards with animations using `framer-motion`, styled with Tailwind CSS, and enhanced with icons from `react-icons`.

🌐 **Live Demo:** [Click Here...](https://docs-six-rho-98.vercel.app/)

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

![image](https://github.com/user-attachments/assets/2b27b2f9-37a3-47cb-802a-320e93556a0d)
![image](https://github.com/user-attachments/assets/928fe4a2-7359-4828-8e7b-042e5b893dd3)


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

[GitHub](https://github.com/sudhanshu-sinha)


----

## 📁 Project Structure

   ```bash
   src/
   ├── components/
   │   ├── Background.jsx   # Background visual or logic component
   │   ├── Card.jsx         # Reusable draggable card component
   │   └── Foreground.jsx   # Layout and logic for rendering multiple cards
   ├── App.jsx              # Root component
   ├── main.jsx             # Entry point
   └── index.css            # Tailwind base styles




