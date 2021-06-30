<template>
  <div>
    <img src={imageUrl} alt="imagem do personagem">
    <h3>{{ name }}</h3>
    <p>{{ type }}</p>
  </div>
</template>

<script>
import './card.css';

export default {
  name: 'card',

  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
