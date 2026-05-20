import type { GalleryImage } from "../../types";

type LocalizedImages = { pt: GalleryImage[]; en: GalleryImage[] };

export const monitoraImages: LocalizedImages = {
  pt: [
    { src: "/projects/monitora/home.png", caption: "Página Inicial" },
    { src: "/projects/monitora/grupos_de_indicadores.png", caption: "Grupos de Indicadores" },
    { src: "/projects/monitora/indicadores_da_vigilancia_epidemiologica_e_controle_de_doencas.png", caption: "Indicadores da Vigilância Epidemiológica e Controle de Doenças" },
    { src: "/projects/monitora/painel_de_monitoramento_da_dengue.png", caption: "Painel de Monitoramento da Dengue" },
    { src: "/projects/monitora/painel_de_monitoramento_das_notificacoes_de_trabalho.png", caption: "Painel de Monitoramento das Notificações por Acidente de Trabalho" },
    { src: "/projects/monitora/painel_de_cobertura_vacinal_em_criancas_menores_de_um_ano.png", caption: "Painel de Cobertura Vacinal em Crianças Menores de um Ano" },
    { src: "/projects/monitora/painel_indicador_8_do_pqavs.png", caption: "Painel do Indicador 8 do PQAVS (Levantamento Entomológico)" },
  ],
  en: [
    { src: "/projects/monitora/home.png", caption: "Home Screen" },
    { src: "/projects/monitora/grupos_de_indicadores.png", caption: "Indicator Groups" },
    { src: "/projects/monitora/indicadores_da_vigilancia_epidemiologica_e_controle_de_doencas.png", caption: "Epidemiological Surveillance and Disease Control Indicators" },
    { src: "/projects/monitora/painel_de_monitoramento_da_dengue.png", caption: "Dengue Monitoring Dashboard" },
    { src: "/projects/monitora/painel_de_monitoramento_das_notificacoes_de_trabalho.png", caption: "Work Accident Notifications Monitoring Dashboard" },
    { src: "/projects/monitora/painel_de_cobertura_vacinal_em_criancas_menores_de_um_ano.png", caption: "Vaccination Coverage Dashboard for Children Under One Year" },
    { src: "/projects/monitora/painel_indicador_8_do_pqavs.png", caption: "Indicator 8 Dashboard for PQAVS (Entomological Survey)" },
  ],
};

export const masemfomeImages: LocalizedImages = {
  pt: [{ src: "/projects/masemfome/login.png", caption: "Página de Login" }],
  en: [{ src: "/projects/masemfome/login.png", caption: "Login Page" }],
};

export const renavehImages: LocalizedImages = {
  pt: [{ src: "/projects/renaveh/login.png", caption: "Página de Login" }],
  en: [{ src: "/projects/renaveh/login.png", caption: "Login Page" }],
};

export const sishansImages: LocalizedImages = {
  pt: [
    { src: "/projects/sishans/login.png", caption: "Página de Login" },
    { src: "/projects/sishans/materiais_de_apoio.png", caption: "Materiais de Apoio" },
  ],
  en: [
    { src: "/projects/sishans/login.png", caption: "Login Page" },
    { src: "/projects/sishans/materiais_de_apoio.png", caption: "Support Materials" },
  ],
};

export const foodAgentImages: LocalizedImages = {
  pt: [{ src: "/projects/food-agent/preview.png", caption: "Preview do FoodReview Insights Agent" }],
  en: [{ src: "/projects/food-agent/preview.png", caption: "Preview of the FoodReview Insights Agent" }],
};

export const plandoxImages: LocalizedImages = {
  pt: [
    { src: "/projects/plandox/logo.png", caption: "Plandox" },
    { src: "/projects/plandox/login.png", caption: "Página de Login" },
    { src: "/projects/plandox/cadastro.png", caption: "Página de Cadastro" },
    { src: "/projects/plandox/recuperar_senha.png", caption: "Recuperar Senha" },
    { src: "/projects/plandox/doe_exemplo.png", caption: "Exemplo de DOE" },
  ],
  en: [
    { src: "/projects/plandox/logo.png", caption: "Plandox" },
    { src: "/projects/plandox/login.png", caption: "Login Page" },
    { src: "/projects/plandox/cadastro.png", caption: "Registration Page" },
    { src: "/projects/plandox/recuperar_senha.png", caption: "Password Recovery" },
    { src: "/projects/plandox/doe_exemplo.png", caption: "DOE Example" },
  ],
};

export const analiseRfmImages: LocalizedImages = {
  pt: [
    { src: "/projects/analise-rfm-ml/tela_principal.png", caption: "Análise de Clusters" },
    { src: "/projects/analise-rfm-ml/guia_segmentos_rfm_1.png", caption: "Segmentos de Clientes" },
    { src: "/projects/analise-rfm-ml/guia_segmentos_rfm_2.png", caption: "Segmentos de Clientes" },
    { src: "/projects/analise-rfm-ml/elbow_curve.png", caption: "Curva do Cotovelo para Clusters" },
  ],
  en: [
    { src: "/projects/analise-rfm-ml/tela_principal.png", caption: "Cluster Analysis" },
    { src: "/projects/analise-rfm-ml/guia_segmentos_rfm_1.png", caption: "Customer Segments" },
    { src: "/projects/analise-rfm-ml/guia_segmentos_rfm_2.png", caption: "Customer Segments" },
    { src: "/projects/analise-rfm-ml/elbow_curve.png", caption: "Elbow Curve for Clusters" },
  ],
};

export const californiaImages: LocalizedImages = {
  pt: [
    { src: "/projects/california-housing/housing_prices_scatterplot.png", caption: "Preços de Imóveis - Gráfico de Dispersão" },
    { src: "/projects/california-housing/histogram_plots.png", caption: "Histogramas das Features" },
  ],
  en: [
    { src: "/projects/california-housing/housing_prices_scatterplot.png", caption: "Housing Prices - Scatter Plot" },
    { src: "/projects/california-housing/histogram_plots.png", caption: "Histograms of Features" },
  ],
};

export const hansPlusImages: LocalizedImages = {
  pt: [
    { src: "/projects/hans-plus/hans-mais.png", caption: "Hans+" },
    { src: "/projects/hans-plus/auth/login.jpeg", caption: "Tela de Login" },
    { src: "/projects/hans-plus/auth/register-1.jpeg", caption: "Primeira parte da Tela de Cadastro" },
    { src: "/projects/hans-plus/auth/register-2.jpeg", caption: "Segunda parte da Tela de Cadastro" },
    { src: "/projects/hans-plus/auth/splash.jpeg", caption: "Tela de Splash" },
    { src: "/projects/hans-plus/home/home.jpeg", caption: "Tela Inicial" },
    { src: "/projects/hans-plus/info/info-1.jpeg", caption: "Primeira parte da Tela de Informações sobre a Hanseníase" },
    { src: "/projects/hans-plus/info/info-2.jpeg", caption: "Segunda parte da Tela de Informações sobre a Hanseníase" },
    { src: "/projects/hans-plus/info/info-sinais-e-sintomas.jpeg", caption: "Tela de Informações sobre Sinais e Sintomas" },
    { src: "/projects/hans-plus/profile/perfil.jpeg", caption: "Tela de Perfil" },
    { src: "/projects/hans-plus/profile/perfil-editar-info-conta.jpeg", caption: "Tela de Edição de Informações da Conta" },
    { src: "/projects/hans-plus/profile/perfil-historico.jpeg", caption: "Tela de Histórico de Sintomas" },
    { src: "/projects/hans-plus/profile/saiba-mais.jpeg", caption: "Tela de Saiba Mais" },
    { src: "/projects/hans-plus/profile/sobre-nos-1.jpeg", caption: "Primeira parte da Tela de Sobre Nós" },
    { src: "/projects/hans-plus/profile/sobre-nos-2.jpeg", caption: "Segunda parte da Tela de Sobre Nós" },
  ],
  en: [
    { src: "/projects/hans-plus/hans-mais.png", caption: "Hans+" },
    { src: "/projects/hans-plus/auth/login.jpeg", caption: "Login Screen" },
    { src: "/projects/hans-plus/auth/register-1.jpeg", caption: "First Part of Registration Screen" },
    { src: "/projects/hans-plus/auth/register-2.jpeg", caption: "Second Part of Registration Screen" },
    { src: "/projects/hans-plus/auth/splash.jpeg", caption: "Splash Screen" },
    { src: "/projects/hans-plus/home/home.jpeg", caption: "Home Screen" },
    { src: "/projects/hans-plus/info/info-1.jpeg", caption: "First Part of Information about Leprosy Screen" },
    { src: "/projects/hans-plus/info/info-2.jpeg", caption: "Second Part of Information about Leprosy Screen" },
    { src: "/projects/hans-plus/info/info-sinais-e-sintomas.jpeg", caption: "Information about Signs and Symptoms Screen" },
    { src: "/projects/hans-plus/profile/perfil.jpeg", caption: "Profile Screen" },
    { src: "/projects/hans-plus/profile/perfil-editar-info-conta.jpeg", caption: "Edit Account Information Screen" },
    { src: "/projects/hans-plus/profile/perfil-historico.jpeg", caption: "Symptom History Screen" },
    { src: "/projects/hans-plus/profile/saiba-mais.jpeg", caption: "Learn More Screen" },
    { src: "/projects/hans-plus/profile/sobre-nos-1.jpeg", caption: "First Part of About Us Screen" },
    { src: "/projects/hans-plus/profile/sobre-nos-2.jpeg", caption: "Second Part of About Us Screen" },
  ],
};

export const relabImages: LocalizedImages = {
  pt: [{ src: "/projects/relab/login.png", caption: "Página de Login" }],
  en: [{ src: "/projects/relab/login.png", caption: "Login Page" }],
};

export const portfolioImages: LocalizedImages = {
  pt: [
    { src: "/projects/sys-brito/josevbrito.com.%23hero.png", caption: "Página inicial — Hero" },
    { src: "/projects/sys-brito/josevbrito.com.%23projects.png", caption: "Seção de Projetos" },
    { src: "/projects/sys-brito/josevbrito.com.projects.png", caption: "Lista de Projetos" },
    { src: "/projects/sys-brito/josevbrito.com.%23experience.png", caption: "Seção de Experiência" },
    { src: "/projects/sys-brito/josevbrito.com.experience.png", caption: "Detalhe da Experiência" },
    { src: "/projects/sys-brito/josevbrito.com.%23contact.png", caption: "Seção de Contato" },
    { src: "/projects/sys-brito/josevbrito.com.projects.sys-brito.png", caption: "Página do Projeto" },
  ],
  en: [
    { src: "/projects/sys-brito/josevbrito.com.%23hero.png", caption: "Home — Hero Section" },
    { src: "/projects/sys-brito/josevbrito.com.%23projects.png", caption: "Projects Section" },
    { src: "/projects/sys-brito/josevbrito.com.projects.png", caption: "Projects List" },
    { src: "/projects/sys-brito/josevbrito.com.%23experience.png", caption: "Experience Section" },
    { src: "/projects/sys-brito/josevbrito.com.experience.png", caption: "Experience Detail" },
    { src: "/projects/sys-brito/josevbrito.com.%23contact.png", caption: "Contact Section" },
    { src: "/projects/sys-brito/josevbrito.com.projects.sys-brito.png", caption: "Project Page" },
  ],
};
