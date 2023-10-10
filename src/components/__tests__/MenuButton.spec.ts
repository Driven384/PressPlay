import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MenuButton from '../atoms/MenuButton.vue';
import AboutView from '../../views/AboutView.vue';
import HomeView from '../../views/HomeView.vue';
import { createRouter, createMemoryHistory } from 'vue-router';

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,          
        },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
      },
    ],
  });

describe('Menu Button Component', () => {
    it('emits "item-click" event when the button is clicked', async () => {
        const wrapper = mount(MenuButton, {
          props: {
            title: 'About',
            to: '/about'
          },
          global: {
            plugins: [router]
          },
        });

        await wrapper.trigger('click');
    
        expect(wrapper.emitted('item-click')).toBeTruthy();
      });
});
