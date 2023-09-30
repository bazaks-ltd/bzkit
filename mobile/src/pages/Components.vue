<script lang="ts" setup>




</script>

<template>
    <Page actionBarHidden="false">
        <ActionBar class="bg-primary">
            <Label text="Components" class="font-bold text-lg" />
        </ActionBar>
        <ScrollView orientation="vertical">
            <FlexboxLayout flexDirection="column">
                <Placeholder />
                <label text="first" width="70" backgroundColor="#43b883" />
                <ActivityIndicator busy="true" />
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

