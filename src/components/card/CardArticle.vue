<template>
  <div class="card-article">
    <h4 class="card-article__title">
      <RouterLink
        :to="{ name: 'blogArticle', params: { id } }"
        class="card-article__link"
      >
        {{ title }}
      </RouterLink>
    </h4>
    <p class="card-article__description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      default: "",
      requred: true,
    },
    title: {
      type: String,
      default: "",
      requred: true,
    },
    description: {
      type: String,
      default: "",
      requred: true,
    },
  },
};
</script>

<style lang="less">
.card-article {
  box-sizing: border-box;
  position: relative;
  padding: 20px 30px 20px 15px;
  box-shadow: 0 0 5px 1px @brown;
  background-color: @white;
  &__title {
    margin: 0 0 10px;
    color: @light_orange;
    font-size: 20px;
    cursor: pointer;
  }
  .card-article__link {
    text-decoration: none;
    color: inherit;
  }
  &__description {
    margin: 0 0 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
