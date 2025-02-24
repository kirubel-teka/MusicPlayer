import AppSongItem from "../AppSongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import {test, describe, expect } from "vitest";

describe('AppSongItem.vue', () => {
    test('render song.display_name', () => {

        const song = {
            docID: 'abc',
        }

        const wrapper = shallowMount(AppSongItem, {
            propsData: {
                song,
            },
            global: {
                components: {
                    "router-link": RouterLinkStub,
                },
               
            }
        });

        // expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);
        expect(wrapper.classes()).toContain(`song-id-${song.docID}`)
    })
});