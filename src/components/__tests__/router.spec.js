import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import AppSongItemVue from "@/components/AppSongItem.vue";
import {describe, test, expect } from "vitest";


describe('Router', () => {
    test('renders router link', () => {
        const song = {
            docID: 'abc'
        }

        const wrapper = shallowMount(AppSongItemVue, {
            propsData: { song },
            global: {
                components: {
                    'router-link': RouterLinkStub,
                }
            }
        })

        expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
             name: 'Song', params: { id: song.docID }, 
            })
    })
})

