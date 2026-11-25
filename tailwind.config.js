/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#173C2A',
          50: '#E8F0EC',
          100: '#D0E1D8',
          200: '#A7C3B1',
          300: '#7DA58A',
          400: '#54875F',
          500: '#3A6D45',
          600: '#2A5A35',
          700: '#1F4A2B',
          800: '#173C2A',
          900: '#0D241A',
          950: '#081810',
        },
        charcoal: {
          DEFAULT: '#171A18',
          50: '#E8E9E9',
          100: '#D1D3D2',
          200: '#A3A7A5',
          300: '#757A77',
          400: '#474D49',
          500: '#2E3330',
          600: '#232724',
          700: '#1B1E1C',
          800: '#171A18',
          900: '#0E100F',
        },
        timber: {
          DEFAULT: '#F3DA00',
          50: '#FAF3EB',
          100: '#F2E2D0',
          200: '#E5C4A1',
          300: '#D9A872',
          400: '#f3da00',
          500: '#F3DA00',
          600: '#f3da00',
          700: '#7D5635',
          800: '#5C3E27',
          900: '#3D2819',
        },
        warm: {
          DEFAULT: '#F5F2EA',
          50: '#FDFAF5',
          100: '#F5F2EA',
          200: '#EDE8DA',
          300: '#E0D9C5',
          400: '#D9C09A',
          500: '#C9A977',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scrollIndicator: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(16px)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'wood-grain': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 200 200\"%3E%3Cpath d=\"M0 0h200v200H0z\" fill=\"%23B98955\" fill-opacity=\"0.03\"/%3E%3Cpath d=\"M0 50 Q50 48 100 50 T200 50\" stroke=\"%23B98955\" stroke-opacity=\"0.06\" fill=\"none\" stroke-width=\"1\"/%3E%3Cpath d=\"M0 100 Q50 97 100 100 T200 100\" stroke=\"%23B98955\" stroke-opacity=\"0.06\" fill=\"none\" stroke-width=\"1\"/%3E%3Cpath d=\"M0 150 Q50 148 100 150 T200 150\" stroke=\"%23B98955\" stroke-opacity=\"0.06\" fill=\"none\" stroke-width=\"1\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
