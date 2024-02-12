import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "custom-blue": "#007bff"
      }
    }
  },
  plugins: []
};
export default config;
