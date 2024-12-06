import AppSongItem from "../AppSongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import {test, describe, expect } from "vitest";

describe('AppSongItem.vue', () => {
    test('render song.display_name', () => {

        const song = {
            display_name: 'test',
        }

        const wrapper = shallowMount(AppSongItem, {
            propsData: {
                song,
            },
            global: {
                components: {
                    "router-link": RouterLinkStub,
                }
            }
        });

        const compositionAuthor = wrapper.find('.text-gray-500');

        expect(compositionAuthor.text()).toBe(song.display_name);
    })
});