import Card from './Card.vue';
import Image from '../assets/rick.jpeg'

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    imageUrl: { control: 'image url' },
    name: { control: 'string name' },
    type: { control: 'string description' },
  },
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { Card },
  template: '<Card v-bind="$props" />',
});

export const CardImage = Template.bind({});
CardImage.args = {
  imageUrl: Image,
  name: 'Rick Sanchez',
  type: 'Human',
};
console.log(CardImage.args);
