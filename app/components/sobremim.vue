<template>
    <div class="font-sans">
        <section
            class="relative flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-black text-white overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 via-transparent to-purple-500"></div>
                <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 h-40 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
                    style="animation: float 6s ease-in-out infinite;"></div>
                <div class="absolute top-20 sm:top-40 right-10 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
                    style="animation: float 8s ease-in-out infinite; animation-delay: 1s;"></div>
                <div class="absolute bottom-10 sm:bottom-20 left-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"
                    style="animation: float 10s ease-in-out infinite; animation-delay: 2s;"></div>
            </div>

            <div class="relative z-10 flex items-center gap-8 sm:gap-12 lg:gap-20 max-w-full w-full flex-col lg:flex-row">
                <div class="flex-1 group relative w-full lg:w-auto">
                    <div
                        class="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-75 transition duration-1000 pulse">
                    </div>

                    <div
                        class="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
                        <div
                            class="absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        </div>

                        <video src="/videos/videominhajornada.mp4" autoplay loop muted
                            class="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2">
                        </video>

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/0 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                        </div>

                        </div>
                </div>

                <div class="flex-1 space-y-4 sm:space-y-6 px-2 sm:px-4 lg:px-0">
                    <div class="flex items-center gap-3">
                        <div class="relative flex items-center">
                            <div
                                class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded blur opacity-75 group-hover:opacity-100 transition duration-1000 pulse">
                            </div>
                            <div
                                class="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-black rounded text-cyan-400 text-xs font-bold tracking-widest">
                                MINHA TRAJETÓRIA
                            </div>
                        </div>
                        <div class="h-px flex-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                    </div>

                    <div>
                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-3 sm:mb-4">
                            <span
                                class="bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent"
                                style="background-size: 200% 100%; animation: shine 3s infinite;">
                                Minha Jornada
                            </span>
                            <br />
                            <span
                                class="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                                na Tecnologia
                            </span>
                        </h1>
                    </div>

                    <div class="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 space-y-3 sm:space-y-4">
                        <p>
                            Aos 17 anos, ainda no ensino médio, iniciei um curso de tecnologia para explorar meu interesse pela área. Durante um ano e meio de formação, aprofundei-me no desenvolvimento de soluções voltadas para a organização e o dinamismo da experiência do cliente. Desde então, sigo atuando na resolução de problemas tecnológicos para empresas e profissionais autônomos (PJ).
                        </p>
                        <p>
                            Após o curso, realizei 4 meses de estágio no <span class="text-cyan-400 font-semibold">Instituto Cicluz Ltda</span>, onde fui posteriormente contratada via CLT e atuei por mais de um ano. Minhas responsabilidades incluíram o desenvolvimento de planilhas integradas com Python, criação de aplicativos internos, Web Design (Front-end), Web designer no Figma/Uizard, além do desenvolvimento de landing pages utilizando Vue, Nuxt, TypeScript e CSS.
                        </p>
                        <p>
                            Atualmente, curso graduação na área com o objetivo de evoluir profissionalmente. Meu foco é a implementação de soluções que tragam <span class="text-blue-400 font-semibold">agilidade, segurança de dados e organização</span> ao ambiente corporativo.
                        </p>
                    </div>

                    <div class="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4">
                        <div class="group/stat relative">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover/stat:opacity-100 transition duration-500">
                            </div>
                            <div
                                class="relative bg-black p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-800 group-hover/stat:border-cyan-500 transition">
                                <p class="text-xl sm:text-2xl lg:text-3xl font-black text-cyan-400">+2</p>
                                <p class="text-[10px] sm:text-xs lg:text-sm text-gray-400 mt-1 lg:mt-2">Anos de Código</p>
                            </div>
                        </div>
                        <div class="group/stat relative">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover/stat:opacity-100 transition duration-500">
                            </div>
                            <div
                                class="relative bg-black p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-800 group-hover/stat:border-blue-500 transition">
                                <p class="text-xl sm:text-2xl lg:text-3xl font-black text-blue-400">+20</p>
                                <p class="text-[10px] sm:text-xs lg:text-sm text-gray-400 mt-1 lg:mt-2">Projetos</p>
                            </div>
                        </div>
                        <div class="group/stat relative">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover/stat:opacity-100 transition duration-500">
                            </div>
                            <div
                                class="relative bg-black p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-800 group-hover/stat:border-purple-500 transition">
                                <p class="text-xl sm:text-2xl lg:text-3xl font-black text-purple-400">100%</p>
                                <p class="text-[10px] sm:text-xs lg:text-sm text-gray-400 mt-1 lg:mt-2">Dedicação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            class="relative flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white overflow-hidden">
            <div class="absolute inset-0 opacity-20">
                <div
                    class="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30">
                </div>
                <div
                    class="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30">
                </div>
            </div>

            <div class="relative z-10 flex items-center gap-8 sm:gap-12 lg:gap-20 max-w-7xl w-full flex-col lg:flex-row">
                <!-- Foto - Aparece apenas no DESKTOP (lg+) -->
                <div class="hidden lg:block flex-shrink-0 group relative order-1 w-auto" style="perspective: 1000px;">
                    <div
                        class="absolute -inset-3 bg-gradient-to-l from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-3xl opacity-0 group-hover:opacity-50 transition duration-1000">
                    </div>

                    <div class="relative w-[500px] h-[500px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-gray-700 shadow-2xl"
                        style="transform-style: preserve-3d;">
                        <img src="/Image/imagemsobremim.jpg" alt="Sobre mim"
                            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3">

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60">
                        </div>
                    </div>
                </div>

                <div class="flex-1 order-2 space-y-6 sm:space-y-8">
                    <div class="flex items-center gap-3">
                        <div class="w-1 h-8 sm:h-10 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 rounded-full"
                            style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
                        <span
                            class="text-xs sm:text-sm font-bold tracking-widest text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text uppercase">CONHEÇA
                            MEU UNIVERSO</span>
                        
                        <!-- Foto pequena - Aparece apenas no MOBILE -->
                        <div class="lg:hidden ml-auto">
                            <div class="relative w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-2 border-purple-500/50 shadow-lg">
                                <img src="/Image/imagemsobremim.jpg" alt="Sobre mim"
                                    class="w-full h-full object-cover">
                            </div>
                        </div>
                    </div>

                    <h2 class="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                        <span class="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                            Sobre Mim
                        </span>
                    </h2>

                    <div class="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300">
                        <div class="border-l-2 border-cyan-500 pl-3 sm:pl-4 py-1">
                            <p class="font-bold text-white text-lg sm:text-xl">Kaylane, 20 anos — Tecnologia Dev</p>
                        </div>
                        
                        <div class="space-y-3 sm:space-y-4">
                            <p>
                                <span class="text-cyan-400 font-bold">Intersecção Design-Código:</span> Criação de interfaces intuitivas integradas a sistemas robustos.
                            </p>
                            <p>
                                <span class="text-purple-400 font-bold">Core Tech:</span> Especialista em Vue.js e Nuxt.js para aplicações de alta performance.
                            </p>
                            <p>
                                <span class="text-pink-400 font-bold">Eficiência Operacional:</span> Automação de processos corporativos complexos utilizando Python.
                            </p>
                            <p>
                                <span class="text-blue-400 font-bold">Foco Estratégico:</span> Graduanda em Gestão de TI, com ênfase em agilidade e modernização de processos internos.
                            </p>
                        </div>
                    </div>

                    <div class="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                        <p class="text-xs sm:text-sm font-bold tracking-widest text-gray-400 uppercase">Especialidades</p>
                        <div class="grid grid-cols-2 gap-2 sm:gap-3">
                            <div class="group/skill relative">
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover/skill:opacity-100 transition duration-300">
                                </div>
                                <div
                                    class="relative bg-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-700 group-hover/skill:border-cyan-400 transition text-center cursor-pointer">
                                    <p class="font-semibold text-cyan-300 text-sm sm:text-base">Dev. Frontend</p>
                                </div>
                            </div>
                            <div class="group/skill relative">
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover/skill:opacity-100 transition duration-300">
                                </div>
                                <div
                                    class="relative bg-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-700 group-hover/skill:border-purple-400 transition text-center cursor-pointer">
                                    <p class="font-semibold text-purple-300 text-sm sm:text-base">Dev. Planilhas</p>
                                </div>
                            </div>
                            <div class="group/skill relative">
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg blur opacity-0 group-hover/skill:opacity-100 transition duration-300">
                                </div>
                                <div
                                    class="relative bg-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-700 group-hover/skill:border-pink-400 transition text-center cursor-pointer">
                                    <p class="font-semibold text-pink-300 text-sm sm:text-base">Web Design</p>
                                </div>
                            </div>
                            <div class="group/skill relative">
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover/skill:opacity-100 transition duration-300">
                                </div>
                                <div
                                    class="relative bg-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-700 group-hover/skill:border-blue-400 transition text-center cursor-pointer">
                                    <p class="font-semibold text-blue-300 text-sm sm:text-base">Dev. Apps Internos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>