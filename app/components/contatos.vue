<template>
    <div
        class="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex flex-col overflow-hidden relative">
        <!-- Animated Background Elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse">
            </div>
            <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
                style="animation-delay: 1s;"></div>
            <div class="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"
                style="animation-delay: 2s;"></div>
        </div>

        <div class="flex-1 flex flex-col px-8 py-12 relative z-10">
            <!-- Header with Animation -->
            <div class="text-center mb-24">
                <h1
                    class="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4 leading-tight">
                    Contato e Pedidos
                </h1>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                    Transforme suas ideias em realidade digital. Estou pronto para colaborar em projetos inovadores que
                    façam a diferença.
                </p>
            </div>

            <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto w-full">
                <!-- Left Section - Contact Info -->
                <div class="space-y-10">
                    <!-- Informações de Contato -->
                    <div class="group">
                        <div class="flex items-center gap-3 mb-10">
                            <div class="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
                            <h2 class="text-3xl font-bold text-white">Informações de Contato</h2>
                        </div>

                        <div class="space-y-5">
                            <!-- Email -->
                            <a href="mailto:kaylanee.ti@gmail.com"
                                class="flex items-start gap-5 p-5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 backdrop-blur-md hover:border-cyan-400/60 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 cursor-pointer group/item">
                                <div
                                    class="text-cyan-400 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-white text-lg">Email</h3>
                                    <p class="text-gray-300 text-base group-hover/item:text-cyan-300 transition-colors">
                                        kaylanee.ti@gmail.com</p>
                                </div>
                            </a>

                            <!-- WhatsApp -->
                            <a href="https://wa.me/5532988260460" target="_blank" rel="noopener noreferrer"
                                class="flex items-start gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 backdrop-blur-md hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-pointer group/item">
                                <div
                                    class="text-blue-400 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-white text-lg">WhatsApp</h3>
                                    <p class="text-gray-300 text-base group-hover/item:text-blue-300 transition-colors">
                                        +55 (32) 98826-0460</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Redes Sociais -->
                    <div>
                        <div class="flex items-center gap-3 mb-10">
                            <div class="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                            <h2 class="text-3xl font-bold text-white">Siga-me Online</h2>
                        </div>

                        <div class="space-y-4 flex flex-col">
                            <!-- Instagram -->
                            <a href="https://www.instagram.com/k.ccoutinho?igsh=am90bDNjaHcwMGlz" target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center gap-4 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-400/40 backdrop-blur-md hover:border-purple-400/70 hover:bg-gradient-to-r hover:from-purple-500/25 hover:to-pink-500/25 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group cursor-pointer">
                                <div
                                    class="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                        <path
                                            d="M5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                                    </svg>
                                </div>
                                <span class="text-lg font-semibold">Instagram</span>
                                <svg class="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>

                            <!-- LinkedIn -->
                            <a href="https://www.linkedin.com/in/kaylane-coutinho-21649137b/" target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center gap-4 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-400/40 backdrop-blur-md hover:border-blue-400/70 hover:bg-gradient-to-r hover:from-blue-500/25 hover:to-cyan-500/25 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer">
                                <div
                                    class="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                    </svg>
                                </div>
                                <span class="text-lg font-semibold">LinkedIn</span>
                                <svg class="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Right Section - Profile Card -->
                <div class="flex justify-center items-center">
                    <div class="group relative">
                        <!-- Glow Background -->
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                        </div>

                        <!-- Card -->
                        <div
                            class="relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-2xl rounded-2xl p-12 w-full max-w-md border border-cyan-400/30 shadow-2xl text-center overflow-hidden group-hover:border-cyan-400/60 transition-all duration-300">
                            <!-- Animated Border Glow -->
                            <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style="background: linear-gradient(45deg, transparent, rgba(34, 211, 238, 0.1), transparent); animation: borderFlow 3s infinite;">
                            </div>

                            <!-- Profile Image with Enhanced Style -->
                            <div class="mb-10 flex justify-center relative z-10">
                                <div class="relative">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse">
                                    </div>
                                    <div
                                        class="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-500 shadow-2xl relative">
                                        <img src="/Image/imagemsobremim.jpg" alt="Kaylane Coutinho"
                                            class="w-full h-full object-cover">
                                    </div>
                                </div>
                            </div>

                            <!-- Name with Gradient -->
                            <h2
                                class="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 mb-3 relative z-10">
                                Kaylane Coutinho
                            </h2>

                            <!-- Title with Icon -->
                            <div class="flex items-center justify-center gap-2 mb-6 relative z-10">
                                <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                                <p
                                    class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
                                    Desenvolvedora de Projetos de TI
                                </p>
                                <div class="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                            </div>

                            <!-- Description -->
                            <p class="text-base text-gray-200 leading-relaxed mb-8 relative z-10 font-light">
                                Transformando ideias em realidade digital com soluções inovadoras e eficientes que
                                impactam realmente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer with Enhanced Style -->
            <div class="text-center mt-24 text-gray-400 text-sm relative z-10">
                <div class="flex items-center justify-center gap-2 mb-2">
                    <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
                    <p>© 2025 K.C Tech. Todos os direitos reservados.</p>
                    <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContatoPedidos',
    data() {
        return {}
    }
}
</script>

<style scoped>
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>