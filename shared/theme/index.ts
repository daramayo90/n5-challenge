const theme = {
   colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      success: '#28a745',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      light: '#f5f5f5',
      dark: '#343a40',
      muted: '#6c757d',
      white: '#fff',
      black: '#000',
      grey: '#b4b4b4',
   },

   fonts: {
      primary: '"Roboto", "Segoe UI", "Oswald", Helvetica Neue, sans-serif',
   },

   fontSizes: {
      small: '0.8rem',
      medium: '1rem',
      large: '1.2rem',
      extraLarge: '1.5rem',
   },

   spacing: {
      small: '0.5rem',
      medium: '1rem',
      large: '2rem',
   },

   borders: {
      none: 'none',
      thin: '1px solid',
      thick: '2px solid',
   },

   borderRadius: {
      small: '5px',
      medium: '14px',
      large: '25px',
      rounded: '50%',
   },

   shadows: {
      small: '0 1px 3px rgba(0, 0, 0, 0.12)',
      medium: '0 4px 6px rgba(0, 0, 0, 0.12)',
      large: '0 10px 20px rgba(0, 0, 0, 0.12)',
   },

   transitions: {
      default: '0.3s ease-in-out',
   },

   breakpoints: {
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
   },

   zIndex: {
      dropdown: 1000,
      sticky: 1020,
      fixed: 1030,
      modalBackdrop: 1040,
      popover: 1050,
      modal: 1060,
      tooltip: 1070,
   },
};

export default theme;
