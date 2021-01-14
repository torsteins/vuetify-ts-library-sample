<template>
    <div class="testcomptwo">
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
                    color="primary"
                >
                    Button
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script lang="ts">

import {Vue, Component, Prop, Watch} from "vue-property-decorator";

@Component({
    name: "TestCompTwo",
    components: {}
})
export default class TestCompTwo extends Vue {
    @Prop({default: "OVERLINE"}) overline !: string;
    @Prop({default: "Headline"}) headline !: string;
    @Prop({default: "Subtitle"}) subtitle !: string;
    @Prop({default: () => []}) items !: string[];

    localStringList: string[] = [];

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

.testcomptwo {
    background-color: violet;
}

</style>
