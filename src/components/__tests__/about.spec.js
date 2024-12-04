import AboutView from "@/views/AboutView.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";


describe('AboutView.vue', () => {
    test('renders inner text', () => {
        const wrapper = shallowMount(AboutView,{
            global: {
                mocks: {
                    $t: (key) => key
                }
            }
        });

        expect(wrapper.text()).toContain('about');
    })
})