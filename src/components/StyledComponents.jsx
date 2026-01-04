import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing.lg};
  font-family: ${props => props.theme.typography.fontFamily};
  transition: background-color ${props => props.theme.transitions.normal},
              color ${props => props.theme.transitions.normal};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
  margin-bottom: ${props => props.theme.spacing.xl};
  transition: all ${props => props.theme.transitions.normal};
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.typography.fontSize.xxlarge};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
  margin: 0;
`;

export const Button = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background-color: ${props => {
    if (props.$variant === 'secondary') return props.theme.colors.secondary;
    if (props.$variant === 'success') return props.theme.colors.success;
    if (props.$variant === 'warning') return props.theme.colors.warning;
    if (props.$variant === 'error') return props.theme.colors.error;
    return props.theme.colors.primary;
  }};
  color: ${props => props.$variant === 'secondary' ? props.theme.colors.background : '#ffffff'};
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.typography.fontSize.medium};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.small};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${props => props.theme.shadows.small};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Card = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.small};
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

export const Section = styled.section`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize.xlarge};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const Text = styled.p`
  font-size: ${props => props.theme.typography.fontSize.medium};
  color: ${props => props.$secondary ? props.theme.colors.text.secondary : props.theme.colors.text.primary};
  line-height: 1.6;
  margin: ${props => props.theme.spacing.sm} 0;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background-color: ${props => {
    if (props.$variant === 'success') return props.theme.colors.success;
    if (props.$variant === 'warning') return props.theme.colors.warning;
    if (props.$variant === 'error') return props.theme.colors.error;
    if (props.$variant === 'info') return props.theme.colors.info;
    return props.theme.colors.primary;
  }};
  color: #ffffff;
  border-radius: ${props => props.theme.borderRadius.large};
  font-size: ${props => props.theme.typography.fontSize.small};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  margin-right: ${props => props.theme.spacing.xs};
`;

export const ThemeToggle = styled.button`
  width: 60px;
  height: 30px;
  border-radius: ${props => props.theme.borderRadius.large};
  border: 2px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.surface};
  position: relative;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  overflow: hidden;

  &::before {
    content: '${props => props.$isDark ? '🌙' : '☀️'}';
    position: absolute;
    left: ${props => props.$isDark ? '50%' : '5%'};
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    transition: all ${props => props.theme.transitions.normal};
  }

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;
