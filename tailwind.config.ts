import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    light: {
      colors: {
        background: "#FFFFFF", // or DEFAULT
        foreground: "#11181C", // or 50 to 900 DEFAULT
        primary: {
          //... 50 to 900
          foreground: "FF7D9E",
          DEFAULT: "#006FEE",
        },
        // ... rest of the colors
      },
    },

    extend: {

      colors: {
         background: "#FFFFFF", // or DEFAULT
       
        foreground: "#11181C", // or 50 to 900 DEFAULT
        primary: {
          //... 50 to 900
          foreground: "FF7D9E",
          DEFAULT: "#FF7D9E",
        }},
        // ... rest of the 
      

      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"], 
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기
      
        hi: ["SKT", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(
  
    {
      addCommonColors: true ,
      themes:
       {
        light: {
          colors: {
            primary: {
              // DEFAULT: "#FF7D9E",
              // DEFAULT: "#757509",
              DEFAULT : "#FF7D9E",
              foreground: "#FF7D9E",
              background: "#FF7D9E"
            },
            focus:{ DEFAULT: "#FF7D9E",
                    background:"#FF7D9E",
                    foreground: "#FF7D9E",
                    // bg-default :"#FF7D9E",
                  },
            default: "#FF7D9E"

           
          },
        },
      },
    }

  ) ,require("tailwind-scrollbar-hide")]
}
export default config
