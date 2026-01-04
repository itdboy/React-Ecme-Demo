import React from 'react';
import { useTheme } from '../theme';
import {
  Container,
  Header,
  Title,
  Button,
  Card,
  Grid,
  Section,
  SectionTitle,
  Text,
  Badge,
  ThemeToggle,
} from './StyledComponents';

const ThemeDemo = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <Container>
      <Header>
        <Title>React Ecme Demo Theme</Title>
        <ThemeToggle onClick={toggleTheme} $isDark={isDarkMode} title="Toggle theme" />
      </Header>

      <Section>
        <SectionTitle>Colors & Buttons</SectionTitle>
        <Grid>
          <Card>
            <Text>Primary Button</Text>
            <Button $variant="primary">Click Me</Button>
          </Card>
          <Card>
            <Text>Secondary Button</Text>
            <Button $variant="secondary">Click Me</Button>
          </Card>
          <Card>
            <Text>Success Button</Text>
            <Button $variant="success">Click Me</Button>
          </Card>
          <Card>
            <Text>Warning Button</Text>
            <Button $variant="warning">Click Me</Button>
          </Card>
          <Card>
            <Text>Error Button</Text>
            <Button $variant="error">Click Me</Button>
          </Card>
          <Card>
            <Text>Disabled Button</Text>
            <Button disabled>Click Me</Button>
          </Card>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>Badges</SectionTitle>
        <Card>
          <Badge>Default</Badge>
          <Badge $variant="success">Success</Badge>
          <Badge $variant="warning">Warning</Badge>
          <Badge $variant="error">Error</Badge>
          <Badge $variant="info">Info</Badge>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Typography</SectionTitle>
        <Card>
          <Text>This is a primary text with default styling.</Text>
          <Text $secondary>This is a secondary text with muted color.</Text>
          <Text>
            The theme includes a comprehensive typography system with various font sizes
            and weights. The current mode is <strong>{isDarkMode ? 'Dark' : 'Light'}</strong>.
          </Text>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Cards & Layout</SectionTitle>
        <Grid>
          <Card>
            <SectionTitle>Feature One</SectionTitle>
            <Text>Cards are flexible containers with shadows and hover effects.</Text>
            <Badge $variant="success">New</Badge>
          </Card>
          <Card>
            <SectionTitle>Feature Two</SectionTitle>
            <Text>The grid layout adapts to different screen sizes automatically.</Text>
            <Badge $variant="info">Popular</Badge>
          </Card>
          <Card>
            <SectionTitle>Feature Three</SectionTitle>
            <Text>All components follow the theme configuration consistently.</Text>
            <Badge $variant="warning">Beta</Badge>
          </Card>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>About This Demo</SectionTitle>
        <Card>
          <Text>
            This React Ecme Demo showcases a complete theming system built with styled-components.
            The theme includes:
          </Text>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Light and Dark mode support</li>
            <li>Comprehensive color palette</li>
            <li>Typography system with various sizes and weights</li>
            <li>Consistent spacing and border radius</li>
            <li>Smooth transitions and animations</li>
            <li>Shadow effects for depth</li>
            <li>Responsive grid layout</li>
            <li>Reusable styled components</li>
          </ul>
          <Text $secondary>
            Toggle the theme using the button in the header to see the colors change smoothly.
            Your preference will be saved in local storage.
          </Text>
        </Card>
      </Section>
    </Container>
  );
};

export default ThemeDemo;
