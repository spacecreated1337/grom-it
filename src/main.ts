import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import "@/libs/index.js"
import { pinia } from "@/store/piniaInstance.ts"

const app = createApp(App)
app.use(pinia).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app")
