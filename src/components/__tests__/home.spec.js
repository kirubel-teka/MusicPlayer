import { shallowMount } from '@vue/test-utils'
import Home from '@/views/HomeView.vue'
import songItem from "@/components/AppSongItem.vue"
import {test, describe, expect } from "vitest"; 

describe('Home.vue', () => {
    test('renders list of songs', () => {
        const songs = [
            {},{},{}
        ]
        const component = shallowMount(Home, {
            data() {
                return {
                    songs,
                }
            },
            global: {
                mocks: {
                    $t: (message) => message,
                }
            }
        });
        const items = component.findAllComponents(songItem);
        expect(items).toHaveLength(songs.length);


        items.forEach((wrapper, i) =>{
            expect(wrapper.props().song).toStrictEqual(songs[i]);
        });
    });
})
