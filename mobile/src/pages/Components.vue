<script lang="ts" setup>
import { ContentView, CustomLayoutView, FlexboxLayout, StackLayout } from '@nativescript/core';
import FASolidIcons from './demo/FASolidIcons.vue';
import FABrandsIcons from './demo/FABrandsIcons.vue';
import FARegularIcons from './demo/FARegularIcons.vue';






</script>

<template>
    <Page actionBarHidden="false">
        <ActionBar>
            <Label text="Components" class="font-bold text-lg text-white" />
        </ActionBar>
        <ScrollView orientation="vertical">
            <FlexboxLayout flexDirection="column" class="p-2">
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

                <!-- Icons -->
                <label class="text-3xl text-black " text="Icons" />
                <FlexboxLayout>
                    <Label text="&#xf185;" class="fas" />
                    <label class="text-base text-shark-900" text="Font Awesome 6 icons" />
                </FlexboxLayout>
                <FlexboxLayout flexDirection="column">
                    <Button text="FA Solid Icons" class="btn mt-2" androidElevation="0" @tap="$navigateTo(FASolidIcons)" />
                    <Button text="FA Regular Icons" class="btn mt-2" androidElevation="0"
                        @tap="$navigateTo(FARegularIcons)" />
                    <Button text="FA Brands Icons" class="btn mt-2" androidElevation="0"
                        @tap="$navigateTo(FABrandsIcons)" />
                </FlexboxLayout>






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