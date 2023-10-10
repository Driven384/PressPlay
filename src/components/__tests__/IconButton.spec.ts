import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils';
import IconButton from '../atoms/IconButton.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

describe('IconButton component', () => {
  it('should render the icon and title props', () => {
    const icon = 'house';
    const title = 'Home';
    const wrapper = mount(IconButton, {
      global: {
        stubs: ['FontAwesomeIcon']
      },
      props: {
        icon,
        title
      }
    });

    const button = wrapper.find('button');
    const fontAwesomeIcon = wrapper.findComponent({ name: 'font-awesome-icon' });

    expect(button.exists()).toBe(true);
    expect(button.attributes('title')).toBe(title);

    expect(fontAwesomeIcon.exists()).toBe(true);
    expect(fontAwesomeIcon.props('icon')).toBe(icon);
    expect(fontAwesomeIcon.props('size')).toBe('2xl');
  });
});
