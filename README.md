# ShadowGear Website

A modern React website built from Figma design using TypeScript and Styled Components.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ShadowGear_Website/shadowgear-website
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
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Button/         # Button component with variants
├── styles/             # Global styles and theme
│   ├── theme.ts        # Design tokens and theme configuration
│   └── GlobalStyles.ts # Global CSS reset and utilities
├── assets/             # Images, icons, fonts
├── pages/              # Page components (to be added)
└── utils/              # Helper functions (to be added)
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Colors**: Primary, secondary, accent, and neutral color palettes
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale
- **Shadows**: Elevation and depth system
- **Border Radius**: Consistent corner radius values
- **Breakpoints**: Responsive design breakpoints

### Customizing the Theme

Edit `src/styles/theme.ts` to match your Figma design:

```typescript
export const theme = {
  colors: {
    primary: '#YOUR_PRIMARY_COLOR',
    secondary: '#YOUR_SECONDARY_COLOR',
    // ... other colors
  },
  typography: {
    fontFamily: {
      primary: "'YOUR_FONT', sans-serif",
      // ... other fonts
    },
    // ... other typography settings
  },
  // ... other theme properties
};
```

## 🧩 Components

### Button Component

A flexible button component with multiple variants and sizes:

```tsx
import Button from './components/Button';

// Different variants
<Button>Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>
```

## 📱 Responsive Design

The application is built with a mobile-first approach using:

- CSS Grid and Flexbox for layouts
- Responsive breakpoints: 640px, 768px, 1024px, 1280px, 1536px
- Utility classes for responsive design
- Touch-friendly interactive elements

## 🎯 Converting Your Figma Design

### Step 1: Extract Design Tokens
1. Open your Figma file
2. Identify and extract:
   - Color palette
   - Typography settings
   - Spacing values
   - Border radius values
   - Shadow styles

### Step 2: Update Theme
1. Open `src/styles/theme.ts`
2. Replace the placeholder values with your design tokens
3. Test the changes in the browser

### Step 3: Create Components
1. Identify reusable components in your design
2. Create component files in `src/components/`
3. Use styled-components for styling
4. Follow the Button component pattern

### Step 4: Build Pages
1. Create page components in `src/pages/`
2. Use the design system for consistent styling
3. Implement responsive layouts
4. Add interactivity and animations

## 🛠 Development Tools

- **React Developer Tools**: Browser extension for debugging
- **Styled Components**: CSS-in-JS for component-based styling
- **TypeScript**: Type safety and better developer experience
- **ESLint**: Code linting and formatting

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Styled Components Documentation](https://styled-components.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder to an S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Figma to React Guide](./FIGMA_TO_REACT_GUIDE.md)
2. Review the component examples in the codebase
3. Consult the React and Styled Components documentation
4. Open an issue in the repository

---

Happy coding! 🎉