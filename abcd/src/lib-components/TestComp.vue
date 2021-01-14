<template>
    <div class="testcomp">
        <v-card
            elevation="10"
            outlined
            shaped
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">
                        {{ overline }}
                    </div>
                    <v-list-item-title class="headline mb-1">
                        {{ headline }}
                        <ping :poof="'poof: ' + headline"/>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
                    <v-list-item v-for="line in localStringList" :key="line">
                        {{ line }}
                    </v-list-item>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
                <v-btn
                    outlined
                    rounded
                    text
                >
                    Button
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script lang="ts">

import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import Ping from "@/components/Ping.vue";

@Component({
    name: "TestComp",
    components: {Ping}
})
export default class TestComp extends Vue {
    @Prop({default: "OVERLINE"}) overline !: String;
    @Prop({default: "Headline"}) headline !: String;
    @Prop({default: "Subtitle"}) subtitle !: String;
    @Prop({default: () => []}) items !: String[];

    localStringList : String[] = [];

    @Watch('items', {deep: true})
    loadLocalStringList() {
        this.localStringList.length = 0;
        for (let i = 0; i < this.items.length; i++) {
            this.localStringList.push(this.items[i])
        }
    }

    mounted() {
        this.loadLocalStringList();
    }

}
</script>

<style lang="scss" scoped>

.testcomp {
    background-color: pink;
}

</style>
