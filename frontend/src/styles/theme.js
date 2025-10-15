// Light Theme
export const lightTheme = {
  name: 'light',
  colors: {
    primary: '#dc2626',
    primaryDark: '#b91c1c',
    primaryLight: '#ef4444',
    secondary: '#1e40af',
    secondaryDark: '#1e3a8a',
    secondaryLight: '#3b82f6',
    
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceAlt: '#f1f5f9',
    
    text: {
      primary: '#111827',
      secondary: '#374151',
      muted: '#6b7280',
      inverse: '#ffffff'
    },
    
    border: '#e5e7eb',
    divider: '#f3f4f6',
    
    success: '#16a34a',
    warning: '#ea580c',
    error: '#dc2626',
    info: '#0ea5e9',
    
    white: '#ffffff',
    black: '#000000',
    
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700',
      lineHeight: '1.2',
      color: '#111827' // text.primary
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '600',
      lineHeight: '1.3',
      color: '#111827' // text.primary
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '1.4',
      color: '#111827' // text.primary
    },
    body: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#374151' // text.secondary
    },
    small: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.4',
      color: '#6b7280' // text.muted
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  }
};

// Dark Theme
export const darkTheme = {
  name: 'dark',
  colors: {
    primary: '#ef4444',
    primaryDark: '#dc2626',
    primaryLight: '#f87171',
    secondary: '#3b82f6',
    secondaryDark: '#1e40af',
    secondaryLight: '#60a5fa',
    
    background: '#111827',
    surface: '#1f2937',
    surfaceAlt: '#374151',
    
    text: {
      primary: '#f9fafb',
      secondary: '#e5e7eb',
      muted: '#9ca3af',
      inverse: '#111827'
    },
    
    border: '#374151',
    divider: '#4b5563',
    
    success: '#22c55e',
    warning: '#f97316',
    error: '#ef4444',
    info: '#0ea5e9',
    
    white: '#ffffff',
    black: '#000000',
    
    gray: {
      50: '#374151',
      100: '#4b5563',
      200: '#6b7280',
      300: '#9ca3af',
      400: '#d1d5db',
      500: '#e5e7eb',
      600: '#f3f4f6',
      700: '#f9fafb',
      800: '#ffffff',
      900: '#ffffff'
    }
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700',
      lineHeight: '1.2',
      color: '#f9fafb' // text.primary
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '600',
      lineHeight: '1.3',
      color: '#f9fafb' // text.primary
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '1.4',
      color: '#f9fafb' // text.primary
    },
    body: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#e5e7eb' // text.secondary
    },
    small: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.4',
      color: '#9ca3af' // text.muted
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.5)'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  }
};

// Themes object for easy access
export const themes = {
  light: lightTheme,
  dark: darkTheme
};

// Default export for backward compatibility
export const theme = lightTheme;