import AsyncStorage from "@react-native-async-storage/async-storage";

let theme = "light"; // "light" or "dark" - UTIL PARA EL TEMA DEL MAPA

let colorPrimary = "#2F4858";
let colorSecondary = "#77BA99";
let formBackground = "#FFFFFF";
let colorWarning = "#FF0000";

const colorPrimaryLight = "#2F4858";
const colorSecondaryLight = "#77BA99";
const formBackgroundLight = "#FFFFFF";
const colorWarningLight = "#FF0000";

const colorPrimaryDark = "#2F4858";
const colorSecondaryDark = "000000";
const formBackgroundDark = "#000000";
const colorWarningDark = "#FF0000";

const changeTheme = (newTheme) => {
  console.log("cambio tema a " + newTheme)
  if (newTheme === "dark") {
    theme = "dark";
    AsyncStorage.setItem("theme", "dark");
    colorPrimary = "#2F4858"; // (azul) El azulito de casi todos los botones
    colorSecondary = "000000"; // (verde) Color de fondo de la app
    formBackground = "#000000"; // (blanco) El color de fondo de los formularios, inputs de búsqueda y la barra de menú (ej.: login, creación/edición usuario, etc.)
    colorWarning = "#FF0000"; // (rojo) El color de los mensajes de error y botones de cancelación
  } else {
    theme = "light";
    AsyncStorage.setItem("theme", "light");
    // Colores de la app tema claro
    colorPrimary = "#2F4858"; // (azul) El azulito de casi todos los botones
    colorSecondary = "#77BA99"; // (verde) Color de fondo de la app
    formBackground = "#FFFFFF"; // (blanco) El color de fondo de los formularios, inputs de búsqueda y la barra de menú (ej.: login, creación/edición usuario, etc.)
    colorWarning = "#FF0000"; // (rojo) El color de los mensajes de error y botones de cancelación
  }
};


const fontSizeGeneralSmall = 12; //normal size = 15, grande = 17, pequeño = 12
const fontSizeLargeSmall = fontSizeGeneralSmall * 2; // size = 30
const fontSizeTitleSmall = fontSizeGeneralSmall * 1.3; // size = 20
const fontSizeNormalSmall = fontSizeGeneralSmall; // size = 15
const fontSizeSmallSmall = fontSizeGeneralSmall * 0.85; // size = 12.75
const fontSizeInfoSmall = fontSizeGeneralSmall * 0.7; // size = 10.5

const fontSizeGeneralNormal = 15; //normal size = 15, grande = 17, pequeño = 12
const fontSizeLargeNormal = fontSizeGeneralNormal * 2; // size = 30
const fontSizeTitleNormal = fontSizeGeneralNormal * 1.3; // size = 20
const fontSizeNormalNormal = fontSizeGeneralNormal; // size = 15
const fontSizeSmallNormal = fontSizeGeneralNormal * 0.85; // size = 12.75
const fontSizeInfoNormal = fontSizeGeneralNormal * 0.7; // size = 10.5

const fontSizeGeneralLarge = 17; //normal size = 15, grande = 17, pequeño = 12
const fontSizeLargeLarge = fontSizeGeneralLarge * 2; // size = 30
const fontSizeTitleLarge = fontSizeGeneralLarge * 1.3; // size = 20
const fontSizeNormalLarge = fontSizeGeneralLarge; // size = 15
const fontSizeSmallLarge = fontSizeGeneralLarge * 0.85; // size = 12.75
const fontSizeInfoLarge = fontSizeGeneralLarge * 0.7; // size = 10.5

// Colores de la app tema claro

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
  changeTheme,
};

function getContrastColor(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const finalColor = yiq >= 128 ? "#000000" : "#ffffff";
  return finalColor;
}
