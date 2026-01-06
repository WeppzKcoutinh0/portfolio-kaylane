<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-16">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="mb-12">
                <h1 class="text-4xl font-bold text-white mb-3">Meus Projetos</h1>
                <p class="text-slate-400 text-base max-w-3xl">
                    Explore uma seleção de projetos que demonstram minha expertise em
                    diversas linguagens de TI. Cada projeto reflete um caso real trabalhado
                    e aplicado, mostrando soluções criativas e técnicas.
                </p>
            </div>

            <!-- Planilhas Section -->
            <div class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-6">Planilhas</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div v-for="project in projects.planilhas" :key="project.id" @click="openProject(project)"
                        class="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        :style="{ boxShadow: `0 20px 50px ${project.shadowColor}` }">
                        <div class="absolute -bottom-4 left-0 right-0 h-16 blur-2xl rounded-full"
                            :style="{ background: `linear-gradient(to right, ${project.shadowColor}, ${project.shadowColor})` }">
                        </div>
                        <div class="relative h-48 overflow-hidden">
                            <img :src="project.coverImage" :alt="project.title"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div class="relative p-6">
                            <h3 class="text-lg font-bold text-white mb-2">{{ project.title }}</h3>
                            <p class="text-slate-400 text-sm">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dev-Aplicativos Internos Section -->
            <div class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-6">Dev-Aplicativos Internos</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div v-for="project in projects.aplicativos" :key="project.id" @click="openProject(project)"
                        class="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        :style="{ boxShadow: `0 20px 50px ${project.shadowColor}` }">
                        <div class="absolute -bottom-4 left-0 right-0 h-16 blur-2xl rounded-full"
                            :style="{ background: `linear-gradient(to right, ${project.shadowColor}, ${project.shadowColor})` }">
                        </div>
                        <div class="relative h-48 overflow-hidden">
                            <img :src="project.coverImage" :alt="project.title"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div class="relative p-6">
                            <h3 class="text-lg font-bold text-white mb-2">{{ project.title }}</h3>
                            <p class="text-slate-400 text-sm">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Front-end Section -->
            <div>
                <h2 class="text-2xl font-bold text-white mb-6">Front-end</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div v-for="project in projects.frontend" :key="project.id" @click="openProject(project)"
                        class="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        :style="{ boxShadow: `0 20px 50px ${project.shadowColor}` }">
                        <div class="absolute -bottom-4 left-0 right-0 h-16 blur-2xl rounded-full"
                            :style="{ background: `linear-gradient(to right, ${project.shadowColor}, ${project.shadowColor})` }">
                        </div>
                        <div class="relative h-48 overflow-hidden">
                            <img :src="project.coverImage" :alt="project.title"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div class="relative p-6">
                            <h3 class="text-lg font-bold text-white mb-2">{{ project.title }}</h3>
                            <p class="text-slate-400 text-sm">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="selectedProject"
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm modal-fade">
            <div
                class="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
                <div
                    class="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between z-10">
                    <h2 class="text-2xl font-bold text-white">{{ selectedProject.title }}</h2>
                    <button @click="selectedProject = null" class="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="p-6 space-y-6">
                    <!-- Video Section -->
                    <div class="aspect-video rounded-xl overflow-hidden bg-slate-800">
                        <video class="w-full h-full object-cover" controls :src="selectedProject.videoUrl">
                            Seu navegador não suporta vídeos.
                        </video>
                    </div>

                    <!-- Description Section -->
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4">Sobre o Projeto</h3>
                        <textarea v-model="projectDescription"
                            class="w-full min-h-[200px] bg-slate-800 text-slate-300 rounded-xl p-4 border border-slate-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-y"
                            placeholder="Digite aqui informações detalhadas sobre o projeto..." />
                        <p class="text-slate-500 text-sm mt-2">
                            Você pode editar a descrição do projeto diretamente aqui
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const selectedProject = ref(null)
const projectDescription = ref('')

const projects = {
    planilhas: [
        {
            id: 1,
            title: 'Sistema de Gestão de Inventário',
            description: 'Um sistema robusto para gerenciar e rastrear o inventário de produtos, facilitando o controle de estoque.',
            coverImage: '/image/imagem1.jpg',
            videoUrl: '/videos/videominhajornada.mp4',
            detailedDescription: 'Este projeto foi desenvolvido para otimizar o controle de estoque de uma empresa de médio porte. Utilizando fórmulas avançadas do Excel e integração com Power Query, o sistema permite rastreamento em tempo real, alertas de estoque baixo e relatórios automatizados.',
            shadowColor: 'rgba(6,182,212,0.3)'
        },
        {
            id: 2,
            title: 'Ferramenta de Análise Financeira',
            description: 'Analise dados financeiros de forma eficiente com gráficos interativos e relatórios detalhados.',
            coverImage: '/image/imagem2.jpg',
            videoUrl: '/videos/videotelahero.mp4',
            detailedDescription: 'Ferramenta completa de análise financeira que integra múltiplas fontes de dados. Possui dashboards dinâmicos, projeções automáticas e análise de tendências para tomada de decisões estratégicas.',
            shadowColor: 'rgba(16,185,129,0.3)'
        },
        {
            id: 3,
            title: 'Automação de Relatórios de Vendas',
            description: 'Automatize a criação de relatórios de vendas com dados atualizados em tempo real.',
            coverImage: '/image/imagem3.jpg',
            videoUrl: '/videos/videominhajornada.mp4',
            detailedDescription: 'Sistema automatizado que gera relatórios de vendas mensais, semanais e diários. Integra dados de diferentes plataformas e gera gráficos personalizados automaticamente.',
            shadowColor: 'rgba(148,163,184,0.3)'
        }
    ],
    aplicativos: [
        {
            id: 4,
            title: 'Aplicativo de Gestão de Tarefas',
            description: 'Um aplicativo para gerenciar tarefas diárias de equipe de forma colaborativa e eficiente.',
            coverImage: '/image/imagem4.jpg',
            videoUrl: '/videos/videominhajornada.mp4',
            detailedDescription: 'Aplicativo desenvolvido com interface intuitiva para gerenciamento de tarefas em equipe. Possui recursos de atribuição, priorização, notificações e acompanhamento de progresso.',
            shadowColor: 'rgba(251,146,60,0.3)'
        },
        {
            id: 5,
            title: 'Sistema de Rastreamento de Pedidos',
            description: 'Rastreie pedidos em tempo real desde a produção até a entrega ao cliente final.',
            coverImage: '/image/imagem5.jpg',
            videoUrl: '/videos/videotelahero.mp4',
            detailedDescription: 'Sistema completo de rastreamento que integra todas as etapas do processo logístico. Permite acompanhamento em tempo real e notificações automáticas para clientes.',
            shadowColor: 'rgba(6,182,212,0.3)'
        },
        {
            id: 6,
            title: 'Plataforma de Gerenciamento Interno',
            description: 'Uma plataforma completa para gerenciar processos internos da empresa de forma integrada.',
            coverImage: '/image/imagem6.jpg',
            videoUrl: '/videos/videominhajornada.mp4',
            detailedDescription: 'Plataforma centralizada que integra RH, financeiro e operações. Automatiza workflows e facilita a comunicação entre departamentos.',
            shadowColor: 'rgba(16,185,129,0.3)'
        }
    ],
    frontend: [
        {
            id: 7,
            title: 'Landing Page para Startup',
            description: 'Uma landing page moderna e responsiva desenvolvida para capturar leads e conversões.',
            coverImage: '/image/imagem7.jpg',
            videoUrl: '/videos/videominhajornada.mp4',
            detailedDescription: 'Landing page desenvolvida com foco em conversão. Design responsivo, animações suaves e otimização para SEO. Taxa de conversão aumentada em 45%.',
            shadowColor: 'rgba(6,182,212,0.3)'
        },
        {
            id: 8,
            title: 'Portfólio Pessoal',
            description: 'Um portfólio elegante e minimalista para mostrar trabalhos e projetos de forma profissional.',
            coverImage: '/image/imagem8.jpg',
            videoUrl: '/videos/videotelahero.mp4',
            detailedDescription: 'Portfólio pessoal com design minimalista e elegante. Totalmente responsivo com animações sutis e navegação intuitiva.',
            shadowColor: 'rgba(148,163,184,0.3)'
        },
        {
            id: 9,
            title: 'E-commerce de Produtos Artesanais',
            description: 'Uma loja virtual completa com carrinho de compras, checkout e painel administrativo integrado.',
            coverImage: '/image/imagem9.jpg',
            videoUrl: '/videos/videominhajornada.mp4',
            detailedDescription: 'E-commerce completo desenvolvido para artesãos locais. Inclui sistema de pagamento, gestão de produtos, controle de estoque e painel administrativo completo.',
            shadowColor: 'rgba(5,150,105,0.3)'
        }
    ]
}

const openProject = (project) => {
    selectedProject.value = project
    projectDescription.value = project.detailedDescription
}

watch(selectedProject, (newVal) => {
    if (!newVal) {
        projectDescription.value = ''
    }
})
</script>

<style scoped>
.modal-fade {
    animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
