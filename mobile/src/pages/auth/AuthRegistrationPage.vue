<script lang="ts" setup>

</script>

<template>
    <Frame>
        <Page>
            <FlexboxLayout flexDirection="column" class="bg-slate-100  p-4" justifyContent="space-between">
                <FlexboxLayout flexDirection="column" alignItems="center">
                    <image src="~/assets/logo.png" height="70" stretch="aspectFit" />
                    <label text="Title" class="mt-4" />
                    <label text="Description" class="mt-4" />
                </FlexboxLayout>
                <FlexboxLayout flexDirection="column">
                    <button @tap="$navigateTo(Details)" class="btn">
                        Login
                    </button>
                    <button @tap="$navigateTo(Details)" class="btn mt-4">
                        Create Account
                    </button>
                </FlexboxLayout>
            </FlexboxLayout>
        </Page>
    </Frame>
</template>