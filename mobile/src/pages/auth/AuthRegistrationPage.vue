<script lang="ts" setup>
import AuthExtraRegistrationPage from "./AuthExtraRegistrationPage.vue";

</script>

<template>
    <Page>
        <ActionBar class="bg-primary">
            <Label text="Registration" class="font-bold text-lg" />
        </ActionBar>
        <FlexboxLayout flexDirection="column" class="bg-slate-100  p-4" justifyContent="space-between">

            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="" class="">
                <TextField hint="First Name" class="textfield mt-2" />
                <TextField hint="Last Name" class="textfield mt-2" />
                <TextField hint="Email" class="textfield mt-2" />
                <TextField hint="Password" class="textfield mt-2" />
                <TextField hint="Confirm Password" class="textfield mt-2" />
                <TextView @tap="$navigateTo(Details)" :editable="false"
                    class="bg-transparent p-0 m-0 text-base text-center leading-3 ">
                    By continuing you agree to our terms and conditions ?
                </TextView>
            </FlexboxLayout>
            <FlexboxLayout flexDirection="column">
                <button @tap="$navigateTo(AuthExtraRegistrationPage)" class="btn mt-4">
                    Next
                </button>
            </FlexboxLayout>
        </FlexboxLayout>
    </Page>
</template>