<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { TestComp } from '@/entry';

@Component({
  name: "ServeDev",
  components: { TestComp }
})
export default class ServeDev extends Vue {
  items : String[] = ["a", "b", "c"];
}
</script>

<template>
  <div id="app">
    <v-app>
      <test-comp :headline="'hei'" :items="items"/>
    </v-app>
  </div>
</template>
