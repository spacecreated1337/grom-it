import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import "@/libs/index.js"

const app = createApp(App)
app.component("FontAwesomeIcon", FontAwesomeIcon).mount("#app")
