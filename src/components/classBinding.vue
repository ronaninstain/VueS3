<script setup>

const bgOrange = 'background-color: rgba(251, 146, 60, 1)'
const bgIndigo = 'background-color: rgba(129, 140, 248, 1)'
const bgGreen = 'background-color: rgba(52, 211, 153, 1); color:white;font-size:24px'
const bgRed = 'background-color: rgba(220, 38, 39, 1)'
const bgDarkGreen = 'background-color: rgba(5, 150, 105, 1)'

const weekday = false

const colors = {
    borderColor: 'rgba(20, 184, 166, 1)',
    color: 'rgba(19,78,74,1)',
    backgroundColor: 'rgba(204,251,241,1)'
}

const messageType = 'error'

if ('error' == messageType) {
    colors.borderColor = 'rgba(239, 68, 68, 1)',
        colors.backgroundColor = 'rgba(254, 226, 226, 1)',
        colors.color = 'rgba(127, 29, 29, 1)'
}

</script>
<template>
    <section class="container mx-auto">
        <h1 class="text-center text-2xl py-10">
            Class & Style Binding
        </h1>
        <section class="flex space-x-10">
            <div class="w-1/3 h-16" :style="[bgOrange]"></div>
            <div class="w-1/3 h-16" :style="[bgIndigo]"></div>
            <div class="w-1/ h-16" :style="[bgGreen]">Hello Styles</div>
        </section>
        <section class="mt-10">
            <div class="h-16 flex items-center justify-center text-white" :style="weekday == true ? bgRed : bgDarkGreen">
                It's a weekday!
            </div>
        </section>

        <section class="mt-10">
            <div class="border-t-4 px-4 py-3 shawdow-md  rounded-b" :style="colors">
                <p class="font-bold">Our privacy policy has changed</p>
                <p class="text-sm">Make sure you know how these changes affect you.</p>
            </div>
        </section>
    </section>
</template>
<styles>
</styles>