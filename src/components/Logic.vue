<script setup>
const location = 'Sylhet';
const weather = "t" //s pc r t
</script>
<template>
    <section>
        <h1>Logic</h1>
        <div>
            <h1>{{ location }}</h1>
            <template v-if="'pc' == weather">
                <h2>Weather: Partly Cloud</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912718/weather-icon-md.png" alt="cloudy">
            </template>
            <template v-if="'s' == weather">
                <h2>Weather: Sunny</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png" alt="suuny">
            </template>
            <template v-if="'r' == weather">
                <h2>Weather: Rainy</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913380/weather-icon-md.png" alt="rainy">
            </template>
            <template v-if="'t' == weather">
                <h2>Weather: Thunderstrom</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912589/weather-icon-md.png" alt="thunder">
            </template>
        </div>
    </section>
</template>
<style></style>