<script setup>

const bgOrange = "bg-orange-400"
const bgIndigo = "bg-indigo-400"
const bgGreen = "bg-green-400"
const bgRed = "bg-red-600"
const bgDarkGreen = "bg-green-600"

const weekend = true

const colors = {
    bgColor: 'bg-teal-100',
    border: 'border-teal-500',
    textColor: 'text-teal-900'
}

const messageType = 'warning'

if ('error' == messageType) {
    colors.bgColor = 'bg-red-100',
        colors.textColor = 'text-red-900',
        colors.borderColor = 'border-red-500'
}

if ('warning' == messageType) {
    colors.bgColor = 'bg-orange-100',
        colors.textColor = 'text-orange-900',
        colors.borderColor = 'border-orange-500'
}
</script>

<template>
    <section class="container mx-auto">
        <h1 class="text-center text-2xl py-10">
            Class & Style Binding
        </h1>
        <section class="flex space-x-10">
            <div class="w-1/ h-16" :class="bgOrange">1</div>
            <div class="w-1/ h-16" :class="bgIndigo">2</div>
            <div class="w-1/ h-16" :class="bgGreen">3</div>
        </section>
        <section class="mt-10">
            <div class="h-16 items-center flex justify-center text-white" :class="[weekend == true ? bgDarkGreen : bgRed]">
                It's a weekday!
            </div>
        </section>

        <section class="mt-10">
            <div class="border-t-4 rounded-b px-4 py-3 shadow-md"
                :class="[colors.bgColor, colors.textColor, colors.borderColor]">
                <p class="font-bold">Our privacy policy has changed</p>
                <p class="text-sm">Make sure you know how these changes affect you.</p>
            </div>
        </section>
    </section>
</template>

<styles>
</styles>