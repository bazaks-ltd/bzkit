<script lang="ts" setup>
import { ref, watch } from "nativescript-vue";
import { faBrands, faRegulars, faSolids, fab, far, fas } from "../../utils/fa";

const searchPhrase = ref("");
const iconKeys = Object.keys(faBrands);
const icons = ref(iconKeys);
const fontIcon = (key: string) => {
    return fab(key);
}

watch(searchPhrase, () => {
    if (searchPhrase.value.length === 0) {
        icons.value = iconKeys;
    } else {
        icons.value = iconKeys.filter((value) => value.includes(searchPhrase.value.toLowerCase()))
    }
})

</script>

<template>
    <Page actionBarHidden="false">
        <ActionBar>
            <Label text="FA Solid Icons" class="font-bold text-lg text-white" />
        </ActionBar>
        <ScrollView orientation="vertical">
            <FlexboxLayout flexDirection="column" class="p-4 ">
                <TextField v-model="searchPhrase" hint="Search Icons ...." />
                <WrapLayout>
                    <FlexboxLayout flexDirection="column" v-for="(key, index) in   icons" :key="index"
                        class="w-1/3  text-center">
                        <label :text="fontIcon(key)" class="fab text-shark-900 text-3xl pt-4"></label>
                        <label :text="key" class="text-xs text-shark-500 pt-2"></label>
                    </FlexboxLayout>


                </WrapLayout>
            </FlexboxLayout>

        </ScrollView>

    </Page>
</template>


<style>
@keyframes example {
    from {
        background-color: red;
    }

    to {
        background-color: green;
    }
}

.view {
    animation-name: example;
    animation-duration: 4s;
    animation-fill-mode: forwards;
}
</style>