<script lang="ts" setup>

import AuthForgotPasswordPage from './AuthForgotPasswordPage.vue';
</script>

<template>
    <Page>
        <ActionBar class="bg-primary">
            <Label text="Forgot Password" class="font-bold text-lg" />
        </ActionBar>
        <FlexboxLayout flexDirection="column" class="bg-slate-100  p-4" justifyContent="space-between">

            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="" class="">
                <TextField hint="Email" class="textfield mt-2" />


            </FlexboxLayout>
            <FlexboxLayout flexDirection="column">
                <button @tap="$navigateTo(AuthExtraRegistrationPage)" class="btn mt-4">
                    Send
                </button>

            </FlexboxLayout>
        </FlexboxLayout>
    </Page>
</template>