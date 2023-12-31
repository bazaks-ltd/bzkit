<script lang="ts" setup>
import { ContentView, CustomLayoutView, FlexboxLayout, StackLayout, WrapLayout } from '@nativescript/core';
import FASolidIcons from './demo/FASolidIcons.vue';
import FABrandsIcons from './demo/FABrandsIcons.vue';
import FARegularIcons from './demo/FARegularIcons.vue';
import { colors, shark } from '../../colors.cjs'
import { useLoader } from '~/composables/useLoader';


const { isLoading } = useLoader();
const setBlockingLoader = () => {
    isLoading.value = true;

    setTimeout(() => {
        isLoading.value = false
    }, 5000);
}


</script>

<template>
    <Page actionBarHidden="false">
        <ActionBar>
            <Label text="Components" class="font-bold text-lg text-white" />
        </ActionBar>
        <ScrollView orientation="vertical">
            <FlexboxLayout flexDirection="column" class="p-2 bg-base-100">
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
                <!-- Shark  -->
                <ContentView height="16"></ContentView>
                <label class="text-3xl text-base-content " text="Shades of Shark" />
                <label class="text-base text-shark-500 leading-none" textWrap="true"
                    text="Shark is a generic name for grey and will be used for texts" />
                <WrapLayout>
                    <FlexboxLayout flexDirection="column" v-for="(k, v) in shark" :key="v" class="w-1/3  p-2 items-center">
                        <ContentView :backgroundColor="k" class="w-16 h-16"></ContentView>
                        <label class="text-xs font-bold text-base-content " :text="v" />
                        <label class="text-xs text-shark-500" :text="k" />

                    </FlexboxLayout>
                </WrapLayout>
                <ContentView height="16"></ContentView>

                <!-- Colors  -->
                <ContentView height="16"></ContentView>
                <label class="text-3xl text-black " text="Colors" />
                <WrapLayout>
                    <FlexboxLayout flexDirection="column" v-for="(k, v) in colors" :key="v" class="w-1/3  p-2 items-center">
                        <ContentView :backgroundColor="k" class="w-16 h-16"></ContentView>
                        <label class="text-xs font-bold text-base-content " :text="v" />
                        <label class="text-xs text-shark-500" :text="k" />

                    </FlexboxLayout>
                </WrapLayout>
                <ContentView height="16"></ContentView>
                <!-- Content View  -->
                <ContentView height="16"></ContentView>
                <label class="text-3xl text-black " text="ActivityIndicator" />

                <ActivityIndicator busy="true" width="24" height="24" :color="colors.primary" />

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

                <!-- Loader -->
                <ContentView height="16" class="example"></ContentView>
                <Button id="myButton" text="{N}" class="animate-bounce" />
                <label class="text-3xl text-black" text="Loader" />

                <Progress />
                <button text="Button" @tap="setBlockingLoader" />


                <!-- Buttons -->
                <label class="text-3xl text-black " text="Buttons" />
                <label class="text-xl text-shark-600 " text="Buttons with brands" />
                <ContentView height="16"></ContentView>

                <FlexboxLayout flexWrap="wrap">
                    <Button text="Button" class="btn m-2" androidElevation="0" />
                    <Button text="Neutral" class="btn btn-neutral m-2" androidElevation="0" />
                    <Button text="Primary" class="btn btn-primary m-2" androidElevation="0" />
                    <Button text="Secondary" class="btn btn-secondary m-2" androidElevation="0" />
                    <Button text="Accent" class="btn btn-accent m-2" androidElevation="0" />
                    <Button text="Ghost" class="btn btn-ghost m-2" androidElevation="0" />
                    <Button text="Link" textDecoration="underline" class="btn btn-link m-2" androidElevation="0"></Button>
                </FlexboxLayout>

                <label class="text-xl text-shark-600 " text="Buttons with state colors" />
                <FlexboxLayout flexWrap="wrap">
                    <Button text="Info" class="btn btn-info m-2" androidElevation="0" />
                    <Button text="Success" class="btn btn-success m-2" androidElevation="0" />
                    <Button text="Warning" class="btn btn-warning m-2" androidElevation="0" />
                    <Button text="Error" class="btn btn-error m-2" androidElevation="0" />
                </FlexboxLayout>

                <label class="text-xl text-shark-600 " text="Outline buttons " />
                <FlexboxLayout flexWrap="wrap">
                    <Button text="Default" class="btn btn-outline m-2" androidElevation="0" />
                    <Button text="Primary" class="btn btn-outline btn-primary m-2" androidElevation="0" />
                    <Button text="Secondary" class="btn btn-outline btn-secondary m-2" androidElevation="0" />
                    <Button text="Accent" class="btn btn-outline btn-accent m-2" androidElevation="0" />
                </FlexboxLayout>

                <label class="text-xl text-shark-600 " text="Outline buttons with state colors" />
                <FlexboxLayout flexWrap="wrap">
                    <Button text="Info" class="btn btn-outline btn-info m-2" androidElevation="0" />
                    <Button text="Success" class="btn btn-outline btn-success m-2" androidElevation="0" />
                    <Button text="Warning" class="btn btn-outline btn-warning m-2" androidElevation="0" />
                    <Button text="Error" class="btn btn-outline btn-error m-2" androidElevation="0" />
                </FlexboxLayout>
                <label class="text-xl text-shark-600 " text="Button Size" />
                <FlexboxLayout flexDirection="row" alignItems="center" flexWrap="wrap">
                    <label class="text-base text-warning" text="Not supporting small and Tiny for time being" />
                    <Button text="Large" class="btn btn-lg m-2" androidElevation="0" />
                    <Button text="Normal" class="btn m-2" androidElevation="0" />
                    <!-- <Button text="Small" class="btn btn-sm m-2" androidElevation="0" />
                    <Button text="Tiny" class="btn btn-xs m-2" androidElevation="0" /> -->
                </FlexboxLayout>
                <label class="text-xl text-shark-600 " text="Icon Button" />
                <FlexboxLayout alignItems="center">
                    <Button class="btn btn-primary">
                        <FormattedString>
                            <Span text="&#xf099;" class="fab"></Span>
                            <Span text=" Icon left"></Span>
                        </FormattedString>
                    </Button>
                    <Button class="btn btn-primary ml-2">
                        <FormattedString>
                            <Span text="Icon Right "></Span>
                            <Span text="&#xf099;" class="fab"></Span>
                        </FormattedString>
                    </Button>
                    <Button class="btn btn-primary ml-2">
                        <FormattedString>
                            <Span text="&#xf099;" class="fab"></Span>
                        </FormattedString>
                    </Button>
                    <Button class="btn btn-primary ml-2 rounded-full">
                        <FormattedString>
                            <Span text="&#xf099;" class="fab"></Span>
                        </FormattedString>
                    </Button>
                </FlexboxLayout>


                <!-- Input -->
                <ContentView height="16"></ContentView>
                <label class="text-3xl text-black " text="Text Inputs" />
                <label class="text-xl text-shark-600 " text="Input state" />

                <FlexboxLayout flexDirection="column">
                    <TextField hint="Type here" class="input" />
                    <TextField hint="Bordered input" class="input input-bordered mt-2" />
                    <TextField hint="Ghost input" class="input input-ghost mt-2" />
                    <TextField hint="Primary" class="input input-primary mt-2" />
                    <TextField hint="Secondary" class="input input-secondary mt-2" />
                    <TextField hint="Accent" class="input input-accent mt-2" />
                    <TextField hint="Info" class="input input-info mt-2" />
                    <TextField hint="Success" class="input input-success mt-2" />
                    <TextField hint="Warning" class="input input-warning mt-2" />
                    <TextField hint="Error" class="input input-error mt-2" />
                    <TextField hint="Disabled" class="input input-error mt-2" dis />
                    <label class="text-xl text-shark-600 " text="Input sizes" />
                    <label class="text-base text-warning" text="Not supporting small and Tiny for time being" />
                    <!-- <TextField hint="XS input" class="input input-bordered input-xs mt-2" /> -->
                    <!-- <TextField hint="SM input" class="input input-bordered input-sm mt-2" /> -->
                    <TextField hint="Normal input" class="input input-bordered mt-2" />
                    <TextField hint="LG input" class="input input-bordered input-lg mt-2" />
                </FlexboxLayout>

                <!-- Text Area -->
                <ContentView height="16"></ContentView>
                <label class="text-3xl text-black " text="Text View" />
                <label class="text-xl text-shark-600 " text="Input Area" />

                <FlexboxLayout flexDirection="column">
                    <TextView hint="Type here" class="textView h-32" />
                    <TextView hint="Bordered textView" class="textView textView-bordered h-32 mt-2" />
                    <TextView hint="Ghost textView" class="textView textView-ghost h-32 mt-2" />
                    <TextView hint="Primary" class="textView textView-primary h-32 mt-2" />
                    <TextView hint="Secondary" class="textView textView-secondary h-32 mt-2" />
                    <TextView hint="Accent" class="textView textView-accent h-32 mt-2" />
                    <TextView hint="Info" class="textView textView-info h-32 mt-2" />
                    <TextView hint="Success" class="textView textView-success h-32 mt-2" />
                    <TextView hint="Warning" class="textView textView-warning h-32 mt-2" />
                    <TextView hint="Error" class="textView textView-error h-32 mt-2" />
                    <TextView hint="Disabled" class="textView textView-error h-32 mt-2" dis />
                    <label class="text-xl text-shark-600 " text="textView sizes" />
                    <TextView hint="XS textView" class="textView textView-bordered textView-xs mt-2" />
                    <TextView hint="SM textView" class="textView textView-bordered textView-sm mt-2" />
                    <TextField hint="Normal textView" class="textView textView-bordered h-32 mt-2" />
                    <TextField hint="LG textView" class="textView textView-bordered textView-lg h-32 mt-2" />
                </FlexboxLayout>

                <DatePicker />
                <TimePicker />

                <!-- Text Area -->
                <ContentView height="16"></ContentView>
                <label class="text-3xl text-black " text="Toggle / Switch" />
                <label class="text-xl text-shark-600 " text="toggle" />
                <FlexboxLayout flexDirection="row" justifyContent="space-between">
                    <label class="text-base text-shark-600 " text="Normal" />
                    <Switch class="switch" />
                </FlexboxLayout>
                <FlexboxLayout flexDirection="row" justifyContent="space-between">
                    <label class="text-base text-shark-600 " text="Primary" />
                    <Switch class="switch switch-primary" />
                </FlexboxLayout>
                <FlexboxLayout flexDirection="row" justifyContent="space-between">
                    <label class="text-base text-shark-600 " text="Secondary" />
                    <Switch class="switch switch-secondary" />
                </FlexboxLayout>
                <FlexboxLayout flexDirection="row" justifyContent="space-between">
                    <label class="text-base text-shark-600 " text="Accent" />
                    <Switch class="switch switch-accent" />
                </FlexboxLayout>
                <FlexboxLayout flexDirection="row" justifyContent="space-between">
                    <label class="text-base text-shark-600 " text="Success" />
                    <Switch class="switch switch-success" />
                </FlexboxLayout>
                <FlexboxLayout flexDirection="row" justifyContent="space-between">
                    <label class="text-base text-shark-600 " text="Warning" />
                    <Switch class="switch switch-warning" />
                </FlexboxLayout>
                <FlexboxLayout flexDirection="row" justifyContent="space-between">
                    <label class="text-base text-shark-600 " text="Info" />
                    <Switch class="switch switch-info" />
                </FlexboxLayout>
                <FlexboxLayout flexDirection="row" justifyContent="space-between">
                    <label class="text-base text-shark-600 " text="Error" />
                    <Switch class="switch switch-error" />
                </FlexboxLayout>




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