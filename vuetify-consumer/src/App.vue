<template>
  <v-app>
    <v-main>
      <TestComp :items="items"/>
      <TestCompTwo :items="items"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { TestComp } from 'abcd';
import TestCompTwo from '@/components/TestCompTwo.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TestComp,
    TestCompTwo,
  },

  data: () => ({
    items: ["a", "b", "c"]
  }),
});
</script>
