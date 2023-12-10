import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00b6ff",
        
"secondary": "#006b00",
        
"accent": "#bf0000",
        
"neutral": "#03141d",
        
"base-100": "#fcfcfc",
        
"info": "#55ddff",
        
"success": "#6f9e00",
        
"warning": "#e62c00",
        
"error": "#ff0033",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
