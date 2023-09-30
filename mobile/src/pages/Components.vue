<script lang="ts" setup>
import { ContentView, CustomLayoutView, StackLayout } from '@nativescript/core';





</script>

<template>
    <Page actionBarHidden="false">
        <ActionBar class="bg-bzred-500">
            <Label text="Components" class="font-bold text-lg text-white" />
        </ActionBar>
        <ScrollView orientation="vertical">
            <FlexboxLayout flexDirection="column">
                <!-- Typography -->
                <ContentView height="16"></ContentView>
                <label class="text-3xl text-black" text="Typography" />

                <label class="text-3xl text-shark-500" text="3xl" />
                <label class="text-2xl text-shark-500" text="2xl" />
                <label class="text-xl text-shark-500" text="xl" />
                <label class="text-lg text-shark-500" text="lg" />
                <label class="text-base text-shark-500" text="base" />
                <label class="text-sm text-shark-500" text="sm" />
                <label class="text-xs text-shark-500" text="xs" />

                <!-- Content View  -->
                <ContentView height="16"></ContentView>
                <label class="text-3xl text-black " text="Spinner" />

                <ActivityIndicator busy="true" width="24" height="24" class="" />




                <ContentView height="16" class="example"></ContentView>
                <Button id="myButton" text="{N}" class="animate-bounce" />
                <label class="text-3xl text-black" text="Loader" />

                <Progress />
                <button text="Button" />
                <DatePicker />
                <TimePicker />

                <image src="~/assets/logo.png" height="70" stretch="aspectFit" />
                <label text="Label" />
                <ListPicker :items="[`one`, `two`]" selectedIndex="0" />
                <SearchBar hint="Search hint" />
                <SegmentedBar>
                    <SegmentedBarItem title="First" />
                    <SegmentedBarItem title="Second" />
                    <SegmentedBarItem title="Third" />
                </SegmentedBar>
                <Slider value="80" />
                <Switch checked="true" />
                <TextField hint="Enter text..." />
                <TextView text="Multi\nLine\nText" />





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