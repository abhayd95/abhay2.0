# Abhay Virus - Portfolio Website

A modern, fully responsive React portfolio website featuring smooth scrolling, animations, and a bold color scheme.

## 🚀 Features

- **Smooth Scrolling**: Powered by Lenis for buttery-smooth scroll experience
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern UI**: Bold color theme with glassmorphism effects
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with live demos

## 🎨 Color Scheme

- **Background**: `#1B1B1B` (Deep Black)
- **Primary**: `#F8B400` (Vibrant Yellow)
- **Secondary**: `#E63946` (Rich Red)
- **Accent**: `#FFFFFF` (White)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Lenis** - Smooth scrolling library
- **React Icons** - Beautiful icon library
- **React Router** - Client-side routing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd abhay-virus-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## 📱 Sections

### 1. Hero Section
- Eye-catching introduction with animated background elements
- Call-to-action buttons
- Tech stack showcase

### 2. About Section
- Personal introduction and values
- Statistics and achievements
- Interactive cards with hover effects

### 3. Skills Section
- Categorized skill sets with progress bars
- Technology icons and proficiency levels
- Responsive grid layout

### 4. Projects Section
- Filterable project gallery
- Project cards with live demos and GitHub links
- Featured project highlighting

### 5. Contact Section
- Contact information and social links
- Functional contact form with validation
- Success/error states

### 6. Footer
- Quick navigation links
- Social media links
- Copyright and additional information

## 🎯 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#F8B400', // Change this
    dark: '#E6A300',
    light: '#FAC733'
  },
  // ... other colors
}
```

### Content
- Update personal information in respective components
- Replace project data in `Projects.js`
- Modify contact information in `Contact.js`
- Update social links throughout the application

### Animations
Customize animations in `index.css` or individual components using Framer Motion.

## 📱 Mobile Menu

The mobile menu features:
- Smooth slide-in animation
- Overlay with blur effect
- Social links integration
- Touch-friendly navigation

## 🚀 Performance

- Optimized images and assets
- Lazy loading for better performance
- Smooth 60fps animations
- Responsive images and icons

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
├── App.js
├── index.js
└── index.css
```

## 🌟 Key Features Implementation

### Lenis Smooth Scrolling
```javascript
import { Lenis } from '@studio-freight/react-lenis';

function App() {
  return (
    <Lenis root>
      {/* Your app content */}
    </Lenis>
  );
}
```

### Framer Motion Animations
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Glassmorphism Effects
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

**Abhay Virus**
- Email: hello@abhayvirus.dev
- GitHub: [@abhayvirus](https://github.com/abhayvirus)
- LinkedIn: [abhayvirus](https://linkedin.com/in/abhayvirus)

---

Made with ❤️ and lots of ☕ by Abhay Virus
