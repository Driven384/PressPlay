// Import the necessary dependencies
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import CardComponent from '../molecules/CardComponent.vue';

describe('CardComponent', () => {
  it('renders image when image prop is provided', () => {
    const wrapper = shallowMount(CardComponent, {
      props: {
        buttonTitle: 'Test Button',
        image: '/src/assets/logo primary.svg',
        text: 'Test Text',
      },
    });

    // Assert that the image is rendered
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('should render default image when image prop is not provided', () => {
    const wrapper = shallowMount(CardComponent, {
      props: {
        buttonTitle: 'Test Button',
        text: 'Test Text',
      },
    });

    // Assert that the image is not rendered
    const defaultImageSrc = '/src/assets/gradient.svg';
    expect(wrapper.find('img').attributes('src')).toBe(defaultImageSrc);
  });

  it('renders text when text prop is provided', () => {
    const wrapper = shallowMount(CardComponent, {
      props: {
        buttonTitle: 'Test Button',
        text: 'Test Text',
      },
    });

    // Assert that the text is rendered
    expect(wrapper.find('p').text()).toBe('Test Text');
  });

  it('does not render text when text prop is not provided', () => {
    const wrapper = shallowMount(CardComponent, {
      props: {
        buttonTitle: 'Test Button',
        image: '/src/assets/logo primary.svg',
      },
    });

    // Assert that the text is not rendered
    expect(wrapper.find('p').exists()).toBe(false);
  });

  it('renders the MainButton component with the correct title prop', () => {
    const wrapper = shallowMount(CardComponent, {
      props: {
        buttonTitle: 'Test Button',
        image: '/src/assets/logo primary.svg',
        text: 'Test Text',
      },
    });

    // Assert that the MainButton component is rendered with the correct title prop
    expect(wrapper.findComponent({ name: 'MainButton' }).props('title')).toBe(
      'Test Button'
    );
  });
});