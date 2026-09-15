<template>
  <div>
    <PageHeader />
    <RouterView />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";


export default {
  components: {
    PageHeader,
  },

  data() {
    return {};
  },
  
  methods: {},
};
</script>

<style lang="less"></style>
