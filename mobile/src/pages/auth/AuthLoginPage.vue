<script lang="ts" setup>

import AuthForgotPasswordPage from './AuthForgotPasswordPage.vue';
</script>

<template>
    <Page>
        <ActionBar class="bg-primary">
            <Label text="Login" class="font-bold text-lg text-white" />
        </ActionBar>
        <FlexboxLayout flexDirection="column" class="bg-slate-100  p-4" justifyContent="space-between">

            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="" class="">
                <TextField hint="Email" class="textfield mt-2" />
                <TextField hint="Password" class="textfield mt-2" />
                >
            </FlexboxLayout>
            <FlexboxLayout flexDirection="column">
                <button @tap="$navigateTo(AuthExtraRegistrationPage)" class="mt-4">
                    Next
                </button>
                <button @tap="$navigateTo(AuthForgotPasswordPage)" class=" mt-4">
                    Forgot Password
                </button>
            </FlexboxLayout>
        </FlexboxLayout>
    </Page>
</template>