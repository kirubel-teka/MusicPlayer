import { createi18n } from 'vue-i18n';
import en from "@locales/en.json"

export default createi18n({
    locale: "en",
    fallbackLocale: 'en',
    messages: {
        en,
    }
})