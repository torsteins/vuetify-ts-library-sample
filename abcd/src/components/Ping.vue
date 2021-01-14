<template>
    <div>Ping {{poof}}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    name: "Ping",
    components: {}
})
export default class Ping extends Vue{
    @Prop({default: "poof"}) poof !: String;
}
</script>