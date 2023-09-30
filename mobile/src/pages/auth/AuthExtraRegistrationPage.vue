<script lang="ts" setup>

</script>

<template>
    <Page>
        <ActionBar class="bg-primary">
            <Label text="Registration" class="font-bold text-lg" />
        </ActionBar>
        <FlexboxLayout flexDirection="column" class="bg-slate-100  p-4" justifyContent="space-between">

            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="" class="">
                <TextField hint="Registration Fields 1" class="textfield mt-2" />
                <TextField hint="Registration Fields 1" class="textfield mt-2" />
                <TextField hint="Registration Fields 1" class="textfield mt-2" />
            </FlexboxLayout>
            <FlexboxLayout flexDirection="column">
                <button @tap="$navigateTo(Details)" class="btn mt-4">
                    Register
                </button>
            </FlexboxLayout>
        </FlexboxLayout>
    </Page>
</template>