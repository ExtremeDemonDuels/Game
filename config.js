// Configuración pública de Extreme Demon Duels.
// Pega aquí los valores de tu app web de Firebase:
// Firebase → ⚙ Configuración del proyecto → General → Tus apps → firebaseConfig.
// Estos valores son públicos por diseño; NO pongas aquí la cuenta de servicio (esa va como secreto en Cloudflare).
window.EDD_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // Vacío = el mismo dominio (el Worker sirve el juego). Solo cámbialo si el servidor vive en otro dominio.
  workerUrl: "",
  // En localhost sin Firebase el login de prueba se activa solo (con `npm run dev:worker`).
  devAuth: false
};
