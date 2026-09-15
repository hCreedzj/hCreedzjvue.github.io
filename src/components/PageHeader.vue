<template>
  <header class="page-header">
    <div class="page-header__container">
      <div class="page-header__logo-wrap">
        <SvgLogo class="page-header__logo" />
        <h4 class="page-header__logo-text">
          People<span class="page-header__logo-text-red">Live</span>
        </h4>
        <div class="page-header__logo-circle"></div>
      </div>

      <nav class="page-header__nav">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="page-header__nav-item"
        >
          {{ link.title }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import SvgLogo from "@/components/svg/SvgLogo.vue";

export default {
  components: {
    SvgLogo,
  },
  emits: [],
  props: {},
  data() {
    return {
      links: [
        {
          title: "Главная",
          path: "/",
        },
        {
          title: "Правила",
          path: "/rules",
        },
        {
          title: "Контакты",
          path: "/contacts",
          query: {
            addres: "г. Томск, ул. Красноармейская, 146",
            email: "idat@tusur.ru",
            phone: "(3822) 90-72-56"
          }
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less">
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: @brown;
  z-index: 100;
  &__container {
    .container();
    display: flex;
    align-items: center;
    height: 60px;
  }
  &__logo-wrap {
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 36px;
    color: @light_green;
  }
  &__logo-text {
    margin-left: 10px;
    color: @white;
    font-size: 26px;
    font-family: @fontRoboto;
  }
  &__logo-text-red {
    color: @dark_orange;
  }

  &__logo-circle {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: @dark_orange;
    animation: flicker 2s ease infinite;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: auto;
  }
  &__nav-item {
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    color: @white;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s ease-out;
    &:hover {
      @media (hover: hover) {
        color: @light_orange;
      }
    }
    &:active,
    &--active,
    &.router-link-exact-active {
      color: @light_orange;
    }
  }
}
</style>
