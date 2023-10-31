import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import instance from "@/api/axios"

const app = createApp(App)
app.config.globalProperties.$axios = { ...instance }

app.mount("#app")
