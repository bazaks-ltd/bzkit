const primary = {
  50: "#fff0f0",
  100: "#ffdddd",
  200: "#ffc0c0",
  300: "#ff9494",
  400: "#ff5757",
  500: "#ff2323",
  600: "#ff0000",
  700: "#d70000",
  800: "#b10303",
  900: "#920a0a",
  950: "#500000",
};

const secondary = {
  50: "#fffcea",
  100: "#fff5c5",
  200: "#ffeb85",
  300: "#ffda46",
  400: "#ffc71b",
  500: "#ffa500",
  600: "#e27c00",
  700: "#bb5502",
  800: "#984208",
  900: "#7c360b",
  950: "#481a00",
};

const accent = {
  50: "#fdf4ff",
  100: "#fae8ff",
  200: "#f5d0fe",
  300: "#f0abfc",
  400: "#e879f9",
  500: "#d946ef",
  600: "#c026d3",
  700: "#a21caf",
  800: "#86198f",
  900: "#701a75",
  950: "#4a044e",
};

const neutral = {
  50: "#f6f7f9",
  100: "#ebeef3",
  200: "#d3dbe4",
  300: "#adbccc",
  400: "#8198af",
  500: "#617b96",
  600: "#4c627d",
  700: "#3f5065",
  800: "#374555",
  900: "#2b3440",
  950: "#212730",
};

const base = {
  50: "#ffffff",
  100: "#efefef",
  200: "#dcdcdc",
  300: "#bdbdbd",
  400: "#989898",
  500: "#7c7c7c",
  600: "#656565",
  700: "#525252",
  800: "#464646",
  900: "#3d3d3d",
  950: "#292929",
};

const info = {
  50: "#f0f9ff",
  100: "#e0f2fe",
  200: "#bae6fd",
  300: "#7dd4fc",
  400: "#3abff8",
  500: "#0ea7e9",
  600: "#0285c7",
  700: "#036aa1",
  800: "#075a85",
  900: "#0c4b6e",
  950: "#082f49",
};

const success = {
  50: "#ecfdf5",
  100: "#d1fae5",
  200: "#a7f3d0",
  300: "#6ee7b6",
  400: "#36d399",
  500: "#10b980",
  600: "#059668",
  700: "#047856",
  800: "#065f46",
  900: "#064e3b",
  950: "#022c22",
};

const warning = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fde58a",
  300: "#fcd24d",
  400: "#fbbd23",
  500: "#f59c0b",
  600: "#d97506",
  700: "#b45209",
  800: "#923f0e",
  900: "#78340f",
  950: "#451903",
};

const error = {
  50: "#fef2f2",
  100: "#fee2e2",
  200: "#fecaca",
  300: "#fca5a5",
  400: "#f87272",
  500: "#ef4444",
  600: "#dc2626",
  700: "#b91c1c",
  800: "#991b1b",
  900: "#7f1d1d",
  950: "#450a0a",
};

const colors = {
  primary: primary[500],
  primary_focus: primary[800],
  primary_content: primary[50],
  secondary: secondary[500],
  secondary_focus: secondary[800],
  secondary_content: secondary[50],
  accent: accent[500],
  accent_focus: accent[800],
  accent_content: accent[50],
  neutral: neutral[900],
  neutral_focus: neutral[950],
  neutral_content: neutral[100],
  base_100: base[50],
  base_200: base[100],
  base_300: base[200],
  base_content: base[950],
  info: info[500],
  info_content: info[950],
  success: success[500],
  success_content: success[950],
  warning: warning[400],
  warning_content: warning[950],
  error: error[500],
  error_content: error[950],
};
module.exports = {
  colors,
  primary,
  secondary,
  accent,
  neutral,
  base,
  info,
  success,
  warning,
  error,
};
