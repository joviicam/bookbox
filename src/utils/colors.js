let theme = "light"; // "light" or "dark" - UTIL PARA EL TEMA DEL MAPA

// Colores de la app tema claro
let colorPrimary = "#2F4858"; // (azul) El azulito de casi todos los botones
let colorSecondary = "#77BA99"; // (verde) Color de fondo de la app
let formBackground = "#000000"; // El color de fondo de los formularios (ej.: login, creación/edición usuario, etc.)
let colorWarning = "#FF0000"; // (rojo) El color de los mensajes de error y botones de cancelación

let fontSizeGeneral = 15; //normal size = 15, grande = 17, pequeño = 12

let fontSizeLarge = fontSizeGeneral * 2; // size = 30
let fontSizeTitle = fontSizeGeneral * 1.3; // size = 20
let fontSizeNormal = fontSizeGeneral; // size = 15
let fontSizeSmall = fontSizeGeneral * 0.85; // size = 12.75
let fontSizeInfo = fontSizeGeneral * 0.7; // size = 10.5

export default {
  COLOR_PRIMARY: colorPrimary,
  COLOR_SECONDARY: colorSecondary,
  BLUE: "#2F4858",
  COLOR_FORM_BACKGROUND: formBackground,
  COLOR_WARNING: colorWarning,
  FONT_SIZE_LARGE: fontSizeLarge,
  FONT_SIZE_TITLE: fontSizeTitle,
  FONT_SIZE_NORMAL: fontSizeNormal,
  FONT_SIZE_SMALL: fontSizeSmall,
  FONT_SIZE_INFO: fontSizeInfo,
  THEME: theme,
  getContrastColor,
};

function getContrastColor(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const finalColor = yiq >= 128 ? "#000000" : "#ffffff";
  return finalColor;
}
