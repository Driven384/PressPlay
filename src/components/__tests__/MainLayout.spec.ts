import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils';
import MainLayout from '../layouts/MainLayout.vue';
import AboutView from '../../views/AboutView.vue';
import HomeView from '../../views/HomeView.vue';
import { setActivePinia, createPinia } from 'pinia';
import { useHeaderStore } from '@/stores/store';
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

describe('Main layout Component', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    it('renders MainHeader when showHeader is true', async () => {
      const wrapper = mount(MainLayout, {
        props: {
          showHeader: true,
        },
        global: {
            plugins: [router]
        },
      });

      const headerStore = useHeaderStore();
      headerStore.setTitle('MainHeader title');

      expect(headerStore.title).toBe('MainHeader title');
      expect(wrapper.findComponent({ name: 'MainHeader' }).exists()).toBe(true);
    });
  
    it('does not render MainHeader when showHeader is false', async () => {
      const wrapper = mount(MainLayout, {
        props: {
          showHeader: false,
        },
        global: {
            plugins: [router]
        },
      });
  
      expect(wrapper.findComponent({ name: 'MainHeader' }).exists()).toBe(false);
    });

    it('renders icon button when showReturn is true', async () => {
        const wrapper = mount(MainLayout, {
          props: {
            showReturn: true,
          },
          global: {
              plugins: [router]
          },
        });
  
        const headerStore = useHeaderStore();
        headerStore.setTitle('MainHeader title');
  
        expect(headerStore.title).toBe('MainHeader title');
        expect(wrapper.findComponent({ name: 'IconButton' }).exists()).toBe(true);
      });
    
      it('does not render icon button when showReturn is false', async () => {
        const wrapper = mount(MainLayout, {
          props: {
            showReturn: false,
          },
          global: {
              plugins: [router]
          },
        });
    
        expect(wrapper.findComponent({ name: 'IconButton' }).exists()).toBe(false);
      });
  });