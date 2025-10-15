import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.body.fontSize};
    line-height: ${props => props.theme.typography.body.lineHeight};
    color: ${props => props.theme.typography.body.color};
    background-color: ${props => props.theme.colors.background};
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.text.primary};
  }

  h1 {
    font-size: ${props => props.theme.typography.h1.fontSize};
    font-weight: ${props => props.theme.typography.h1.fontWeight};
    line-height: ${props => props.theme.typography.h1.lineHeight};
  }

  h2 {
    font-size: ${props => props.theme.typography.h2.fontSize};
    font-weight: ${props => props.theme.typography.h2.fontWeight};
    line-height: ${props => props.theme.typography.h2.lineHeight};
  }

  h3 {
    font-size: ${props => props.theme.typography.h3.fontSize};
    font-weight: ${props => props.theme.typography.h3.fontWeight};
    line-height: ${props => props.theme.typography.h3.lineHeight};
  }

  p {
    margin-bottom: ${props => props.theme.spacing.sm};
    line-height: 1.6;
    color: ${props => props.theme.colors.text.secondary};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${props => props.theme.colors.primaryDark};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    border-radius: ${props => props.theme.borderRadius.md};
    transition: all 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  input, select, textarea {
    font-family: inherit;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.md};
    padding: ${props => props.theme.spacing.sm};
    background: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.text.primary};
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
    }

    &::placeholder {
      color: ${props => props.theme.colors.text.muted};
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.sm};
  }

  .text-center {
    text-align: center;
  }

  .text-primary {
    color: ${props => props.theme.colors.text.primary};
  }

  .text-secondary {
    color: ${props => props.theme.colors.text.secondary};
  }

  .text-muted {
    color: ${props => props.theme.colors.text.muted};
  }

  .bg-surface {
    background: ${props => props.theme.colors.surface};
  }

  .bg-surface-alt {
    background: ${props => props.theme.colors.surfaceAlt};
  }

  /* Utility classes */
  .mt-1 { margin-top: ${props => props.theme.spacing.xs}; }
  .mt-2 { margin-top: ${props => props.theme.spacing.sm}; }
  .mt-3 { margin-top: ${props => props.theme.spacing.md}; }
  .mt-4 { margin-top: ${props => props.theme.spacing.lg}; }
  .mt-5 { margin-top: ${props => props.theme.spacing.xl}; }
  
  .mb-1 { margin-bottom: ${props => props.theme.spacing.xs}; }
  .mb-2 { margin-bottom: ${props => props.theme.spacing.sm}; }
  .mb-3 { margin-bottom: ${props => props.theme.spacing.md}; }
  .mb-4 { margin-bottom: ${props => props.theme.spacing.lg}; }
  .mb-5 { margin-bottom: ${props => props.theme.spacing.xl}; }
  
  .p-1 { padding: ${props => props.theme.spacing.xs}; }
  .p-2 { padding: ${props => props.theme.spacing.sm}; }
  .p-3 { padding: ${props => props.theme.spacing.md}; }
  .p-4 { padding: ${props => props.theme.spacing.lg}; }
  .p-5 { padding: ${props => props.theme.spacing.xl}; }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.surfaceAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.text.muted};
  }
`;

export default GlobalStyles;