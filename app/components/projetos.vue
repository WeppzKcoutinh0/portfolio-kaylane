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
                    <div v-for="project in projects.planilhas" :key="project.id" @click="openProject(project, false)"
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

            <!-- Dev-Aplicativos Internos Section - COM SUPORTE A VERTICAL -->
            <div class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-6">Dev-Aplicativos Internos</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div v-for="project in projects.aplicativos" :key="project.id" @click="openProject(project, true)"
                        class="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        :style="{ boxShadow: `0 20px 50px ${project.shadowColor}` }">
                        <div class="absolute -bottom-4 left-0 right-0 h-16 blur-2xl rounded-full"
                            :style="{ background: `linear-gradient(to right, ${project.shadowColor}, ${project.shadowColor})` }">
                        </div>
                        <!-- Card com altura maior para imagens verticais -->
                        <div class="relative h-64 overflow-hidden bg-slate-900">
                            <img :src="project.coverImage" :alt="project.title"
                                class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
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
                    <div v-for="project in projects.frontend" :key="project.id" @click="openProject(project, false)"
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
                    <!-- Video Section - Condicional para vertical ou horizontal -->
                    <div :class="isVerticalMode ? 'flex justify-center' : ''">
                        <div :class="[
                            'rounded-xl overflow-hidden bg-slate-800',
                            isVerticalMode ? 'w-auto max-w-sm aspect-[9/16]' : 'aspect-video w-full'
                        ]">
                            <video 
                                class="w-full h-full"
                                :class="isVerticalMode ? 'object-contain' : 'object-cover'"
                                controls 
                                :src="selectedProject.videoUrl">
                                Seu navegador não suporta vídeos.
                            </video>
                        </div>
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
const isVerticalMode = ref(false)

const projects = {
    planilhas: [
        {
            id: 1,
            title: 'Gestão de Cobranças Inteligente',
            description: 'Sistema para gerenciamento de clientes e faturas, com controle de vencimentos e envio automatizado de mensagens de cobrança via WhatsApp.',
            coverImage: '/Image/imagemplanilha.png',
            videoUrl: '/videos/videoplanilha.mp4',
            detailedDescription: 'Este projeto foi desenvolvido para otimizar o controle de estoque de uma empresa de médio porte. Utilizando fórmulas avançadas do Excel e integração com Power Query, o sistema permite rastreamento em tempo real, alertas de estoque baixo e relatórios automatizados.',
            shadowColor: 'rgba(6,182,212,0.3)'
        },
    ],
    aplicativos: [
        {
            id: 4,
            title: 'Gestor de Coleções',
            description: 'Este projeto foi desenvolvido para organizar e gerenciar a coleção de um colecionador, permitindo o controle detalhado dos itens possuídos e facilitando a filtragem e a consulta, garantindo mais organização e praticidade.',
            coverImage: '/Image/imagemappinterno.jpeg',
            videoUrl: '/videos/videoappinterno.mp4',
            detailedDescription: 'Este projeto foi desenvolvido para organizar e gerenciar a coleção de um colecionador, permitindo o controle detalhado dos itens possuídos e facilitando a filtragem e a consulta, garantindo mais organização e praticidade.',
            shadowColor: 'rgba(251,146,60,0.3)'
        },
    ],
    frontend: [
        {
            id: 7,
            title: 'Sistema de Autenticação',
            description: 'Este projeto foi desenvolvido para implementar as telas de autenticação de um sistema geral, garantindo segurança e padronização no acesso.',
            coverImage: '/Image/imagemtelasautenticacao.png',
            videoUrl: '/videos/videotelasautenticacao.mp4',
            detailedDescription: 'Este projeto foi desenvolvido para implementar as telas de autenticação de um sistema geral, garantindo segurança e padronização no acesso.',
            shadowColor: 'rgba(6,182,212,0.3)'
        },
        {
            id: 8,
            title: 'Sistema de Aulas',
            description: 'Este projeto foi desenvolvido para implementar as telas de homepage do cliente em um sistema geral. A homepage corresponde a um sistema de conteúdos e aulas, no qual o usuário pode acessar seus materiais, visualizar os conteúdos disponíveis e iniciar trilhas de aprendizagem.',
            coverImage: '/Image/imagemtelahomepagecliente.png',
            videoUrl: '/videos/videotelahomepagecliente.mp4',
            detailedDescription: 'Este projeto foi desenvolvido para implementar as telas de homepage do cliente em um sistema geral. A homepage corresponde a um sistema de conteúdos e aulas, no qual o usuário pode acessar seus materiais, visualizar os conteúdos disponíveis e iniciar trilhas de aprendizagem.',
            shadowColor: 'rgba(148,163,184,0.3)'
        },
        {
            id: 9,
            title: 'Trilha de Conteúdos',
            description: 'Este projeto foi desenvolvido para implementar as telas de visualização de conteúdo do cliente em um sistema geral. Essas telas fazem parte de uma plataforma de conteúdos e aulas, permitindo que o usuário acesse sua trilha de aprendizagem após entrar na homepage e dê início ao consumo dos conteúdos.',
            coverImage: '/Image/imagemtelavisualizacaoconteudocliente.png',
            videoUrl: '/videos/videotelavisualizacaodeconteudocliente.mp4',
            detailedDescription: 'E-commerce completo desenvolvido para artesãos locais. Inclui sistema de pagamento, gestão de produtos, controle de estoque e painel administrativo completo.',
            shadowColor: 'rgba(5,150,105,0.3)'
        },
        {
            id: 10,
            title: 'Administração de Aulas',
            description: 'Este projeto foi desenvolvido para implementar as telas de cadastro de conteúdo do administrador em um sistema geral. Essas telas fazem parte de uma plataforma de conteúdos e aulas, permitindo o cadastro e a gestão dos conteúdos que compõem as trilhas de aprendizagem disponibilizadas aos clientes.',
            coverImage: '/Image/imagemtelacadastrodeconteudoadm.png',
            videoUrl: '/videos/videotelacadastrodeconteudosadm.mp4',
            detailedDescription: 'Este projeto foi desenvolvido para implementar as telas de cadastro de conteúdo do administrador em um sistema geral. Essas telas fazem parte de uma plataforma de conteúdos e aulas, permitindo o cadastro e a gestão dos conteúdos que compõem as trilhas de aprendizagem disponibilizadas aos clientes.',
            shadowColor: 'rgba(5,150,105,0.3)'
        },
        {
            id: 11,
            title: 'Portfólio Profissional',
            description: 'Este projeto foi desenvolvido para apresentar meu trabalho e consolidar um perfil profissional alinhado à minha identidade.',
            coverImage: '/Image/imagemportfoliokaylanecoutinho.png',
            videoUrl: '/videos/videoportifoliokaylanecoutinho.mp4',
            detailedDescription: 'Este projeto foi desenvolvido para apresentar meu trabalho e consolidar um perfil profissional alinhado à minha identidade.',
            shadowColor: 'rgba(5,150,105,0.3)'
        }
    ]
}

const openProject = (project, isVertical) => {
    selectedProject.value = project
    projectDescription.value = project.detailedDescription
    isVerticalMode.value = isVertical
}

watch(selectedProject, (newVal) => {
    if (!newVal) {
        projectDescription.value = ''
        isVerticalMode.value = false
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