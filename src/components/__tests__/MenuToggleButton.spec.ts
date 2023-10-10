import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyButton from '../atoms/MenuToggleButton.vue';

describe('MyButton.vue', () => {
    it('renders with isOpen prop set to false', () => {
      const wrapper = mount(MyButton, {
        props: {
          isOpen: false,
        },
      });
  
      expect(wrapper.html()).toMatchSnapshot();
    });
  
    it('renders with isOpen prop set to true', () => {
      const wrapper = mount(MyButton, {
        props: {
          isOpen: true,
        },
      });
  
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
  