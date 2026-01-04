# React Ecme Demo Theme

A React application demonstrating a comprehensive theming system with light and dark mode support.

## Features

- 🎨 **Complete Theme System**: Light and dark themes with smooth transitions
- 💅 **Styled Components**: Built with styled-components for dynamic styling
- 🌓 **Theme Toggle**: Switch between light and dark modes with persistence
- 📱 **Responsive Design**: Grid layout that adapts to different screen sizes
- 🎯 **Component Library**: Reusable styled components (Buttons, Cards, Badges, etc.)
- 🔧 **Customizable**: Easy to extend and customize theme configuration

## Theme Configuration

The theme includes:

- **Colors**: Primary, secondary, success, warning, error, info colors
- **Typography**: Font families, sizes, and weights
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl, xxl)
- **Border Radius**: Multiple radius sizes for different components
- **Shadows**: Three shadow levels (small, medium, large)
- **Transitions**: Smooth animations with different speeds

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itdboy/React-Ecme-Demo.git
   cd React-Ecme-Demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/
│   ├── StyledComponents.jsx  # Reusable styled components
│   └── ThemeDemo.jsx          # Demo showcase component
├── theme/
│   ├── theme.js               # Theme configuration (light & dark)
│   ├── ThemeProvider.jsx      # Theme context provider
│   └── index.js               # Theme exports
├── App.jsx                    # Main App component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles
```

## Usage

### Using the Theme in Components

```jsx
import { useTheme } from './theme';
import styled from 'styled-components';

const MyComponent = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  
  return (
    <StyledDiv>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing.md};
`;
```

### Customizing the Theme

Edit `src/theme/theme.js` to customize colors, spacing, typography, and more:

```javascript
export const lightTheme = {
  colors: {
    primary: '#your-color',
    // ... more customization
  },
  // ... other theme properties
};
```

## Technologies Used

- [React](https://react.dev/) - UI library
- [Vite](https://vite.dev/) - Build tool and dev server
- [styled-components](https://styled-components.com/) - CSS-in-JS library
- [ESLint](https://eslint.org/) - Code linting

## License

MIT License - feel free to use this project for learning or as a template for your own projects.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

