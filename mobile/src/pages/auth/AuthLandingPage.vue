<script lang="ts" setup>
import {
    $navigateTo, ActionBar,
} from 'nativescript-vue';
import AuthLoginPage from "./AuthLoginPage.vue";

</script>

<template>
    <Page actionBarHidden="false">
        <ActionBar class="bg-primary">
            <Label text="Welcome" class="font-bold text-lg" />
        </ActionBar>
        <FlexboxLayout flexDirection="column" class="bg-slate-100  p-4" justifyContent="space-between">
            <FlexboxLayout flexDirection="column" alignItems="center">
                <image src="~/assets/logo.png" height="70" stretch="aspectFit" />
                <label text="Title" class="mt-4" />
                <label text="Description" class="mt-4" />
            </FlexboxLayout>
            <FlexboxLayout flexDirection="column">
                <button @tap="$navigateTo(AuthLoginPage)" class="btn">
                    Login
                </button>
                <!-- <button @tap="$navigateTo(Details)" class="btn mt-4">
                        Create Account
                    </button> -->
            </FlexboxLayout>
        </FlexboxLayout>
    </Page>
</template>