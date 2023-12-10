import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";

const instance = axios.create({
  baseURL: "http://192.168.100.56:8080/api-book",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = AsyncStorage.getItem("token");
    if (!config.url.includes("login")) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    console.log("trone en el request")
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.statusCode >= 200 && response.data.statusCode < 300) {
      return Promise.resolve(response);
    }
    //return Promise.reject(response);
  },
  (error) => {
    console.log(error)
    if (error.response && error.response.data.statusCode === 403) {
      Toast.show({
        type: 'error',
        text1: 'El usuario no cuenta con los permisos',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
      });
    } else if (error.response && error.response.data.statusCode === 400) {
      Toast.show({
        type: 'error',
        text1: 'Credenciales inválidas',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
      });
    } else if (error.response && error.response.data.statusCode === 401) {
      Toast.show({
        type: 'error',
        text1: 'El usuario no esta autenticado',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
      });
    } else if (error.response && error.response.data.statusCode === 500) {
      Toast.show({
        type: 'error',
        text1: 'Error interno en el servidor',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
      });
    } else if (error.response && error.response.data.statusCode === 404) {
      Toast.show({
        type: 'error',
        text1: 'Recurso no encontrado',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
      });
    } else {
      console.log("");
      Toast.show({
        type: 'error',
        text1: `Error desconocido (status: ${error.response.data.statusCode})`,
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
      });
    }
    return Promise.reject(error);
  }
);

export const doGet = (url) => {
  return instance.get(url);
};

export const doPost = (url, data) => {
  return instance.post(url, data);
};

export const doPut = (url, data) => {
  return instance.put(url, data);
};

export const doDelete = (url) => {
  return instance.delete(url);
};
