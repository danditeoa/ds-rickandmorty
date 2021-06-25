<template>
  <div :class="classes" :style="style">
    <img src="../assets/logo.svg" alt="logo do rick and morty">
  </div>
</template>

<script>
import './logo.css';

export default {
  name: 'Logo',

  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        'storybook-logo': true,
        'storybook-logo--primary': this.primary,
        'storybook-logo--secondary': !this.primary,
        [`storybook-logo--${this.size}`]: true,
      };
    },
  },
};
</script>
