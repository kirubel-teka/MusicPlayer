import { shallowMount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';
import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json'; 
import fr from '@/locales/fr.json'; 
import { describe, test, expect } from "vitest";

// Create an i18n instance with translations
const i18n = createI18n({
  locale: 'en', // Change this to 'fr' for French tests
  messages: {
    en,
    fr,
  },
});

describe('AboutView.vue', () => {
  test('renders translated text correctly in English', () => {
    const wrapper = shallowMount(AboutView, {
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.text()).toContain('users! If you have any questions,'); 
  });


  
//   test('renders translated text correctly in French', async () => {
//     await i18n.global.locale.change('fr');
    
//     const wrapper = mount(AboutView, {
//       global: {
//         plugins: [i18n],
//       },
//     });

//     expect(wrapper.text()).toContain(''); 
//   });
});
