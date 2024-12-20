/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//*.{js,ts,jsx,tsx,mdx}",
    "./src/app//*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        'primary-button': '#635BFF',
        
        border: {
         default: '#808080',
         form: '#818181',
        },
        background: {
          light: '#FAFAFA',
          input: '#FFFFFF',
        },
      },
      spacing: {
        '100': '100px',
        '215': '215px',
        '405': '405px',
        '427': '427px',
        '518': '518px',
        '161': '161px',
        '14' : '14px',
        '1348': '1348px',
        '1517': '1517px',
        '1667': '1667px',
      },
      width: {
        'screen-custom': '1440px',
        'frame-custom': '630px',
        'button': '518px',
      },
      height: {
        'screen-custom': '1024px',
        'frame-custom': '633px',
        'button': '64px',
      },
      
      borderRadius: {
        'md': '16px',
        'sm': '8px',
        'xs': '6px',
      },
      borderWidth: {
        '2': '2px',
        '1': '1px',
      },
      borderOpacity: {
        '40': '0.4',
      },
      boxShadow: {
        'custom': '7px 10px 33.7px  -5px #0D447A08',
        'custom-2': '0px 0px 31.2px 5px #00000008'
      },
      padding: {
        'button': '14px 161px',
        'input': '14px',
        'frame': '2rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
  },
  plugins: [],
};
