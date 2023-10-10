import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MainButton from '../atoms/MainButton.vue';

describe('MainButton Component', () => {
  it('should render the title prop', () => {
    const wrapper = mount(MainButton, {
      props: {
        title: 'Submit',
      },
    });

    const buttonElement = wrapper.find('button');

    expect(buttonElement.text()).toBe('Submit');
  });

  it('should apply the appropriate CSS classes when the `group` prop is provided', () => {
    const wrapper = mount(MainButton, {
      props: {
        title: 'Submit',
        group: 'my-group',
      },
    });

    const buttonElement = wrapper.find('button');

    expect(buttonElement.classes()).toContain('group-hover/my-group:bg-stone-950');
    expect(buttonElement.classes()).toContain('group-hover/my-group:text-white');
  });
});
