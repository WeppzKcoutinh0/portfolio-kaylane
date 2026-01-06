<template>
    <div class="relative w-full h-screen overflow-hidden">

        <!-- Video Background -->
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
            <source src="/videos/video2.mp4" type="video/mp4" />
        </video>

        <!-- Overlay Azul Escuro -->
        <div class="absolute top-0 left-0 w-full h-full bg-blue-950/60"></div>

        <!-- Conteúdo Central -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full px-4">
            <h1 class="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center tracking-tight">
                Dev em Projetos TI
            </h1>
            <p class="text-blue-300 text-xl md:text-2xl font-light text-center">
                by kaylane coutinho
            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // Garantir que o vídeo inicie automaticamente
    const video = document.querySelector('video')
    if (video) {
        video.play().catch(err => {
            console.log('Autoplay prevented:', err)
        })
    }
})
</script>