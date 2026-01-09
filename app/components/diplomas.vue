<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 py-10 sm:py-16">
        <div class="max-w-6xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-10 sm:mb-16">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Meus Diplomas</h1>
                <p class="text-slate-400 text-base sm:text-lg">Uma jornada de aprendizado e dedicação.</p>
            </div>

            <!-- Diploma Card -->
            <div class="relative">
                <!-- Glow effect - sombra luminosa embaixo com gradiente amarelo e azul -->
                <div
                    class="absolute -bottom-4 sm:-bottom-8 left-0 right-0 h-16 sm:h-24 blur-3xl rounded-full bg-gradient-to-r from-amber-500/25 via-amber-400/20 to-cyan-500/25">
                </div>

                <!-- Card -->
                <div
                    class="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl transition-all duration-500 hover:-translate-y-2 shadow-[0_25px_70px_rgba(251,191,36,0.2)] hover:shadow-[0_25px_70px_rgba(251,191,36,0.3)]">

                    <!-- Diploma Image -->
                    <div class="relative">
                        <div class="bg-gradient-to-br from-amber-100 to-stone-200 rounded-lg p-4 sm:p-6 md:p-8 shadow-xl">
                            <img src="/Image/diploma.jpg" alt="Diploma de Análise e Desenvolvimento de Sistemas"
                                class="w-full h-auto rounded-lg shadow-lg object-cover" />
                        </div>
                    </div>

                    <!-- Diploma Info -->
                    <div class="space-y-4 sm:space-y-6">
                        <div>
                            <span
                                class="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4">
                                Nível Tecnico
                            </span>
                            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                                Análise e Desenvolvimento de Sistemas / Tecnologia da Inovação TI
                            </h2>
                            <p class="text-slate-300 leading-relaxed text-sm sm:text-base">
                                Diploma que certifica a conclusão do curso de tecnologia, focando em
                                projetar, desenvolver, analisar, implementar e atualizar sistemas de
                                informação para o mercado de trabalho.
                            </p>
                        </div>

                        <div class="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <div class="flex items-start gap-2 sm:gap-3">
                                <div class="text-cyan-400 text-lg sm:text-xl mt-1">🎓</div>
                                <div>
                                    <div class="text-slate-400 text-xs sm:text-sm">Início:</div>
                                    <div class="text-white font-semibold text-sm sm:text-base">Fevereiro 2022</div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2 sm:gap-3">
                                <div class="text-yellow-400 text-lg sm:text-xl mt-1">🏆</div>
                                <div>
                                    <div class="text-slate-400 text-xs sm:text-sm">Término:</div>
                                    <div class="text-white font-semibold text-sm sm:text-base">Dezembro 2024</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Nuxt 3 setup - nenhuma configuração adicional necessária para este componente
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>