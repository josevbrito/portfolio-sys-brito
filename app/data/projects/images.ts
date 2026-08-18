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

export const fallDetectionImages: LocalizedImages = {
  pt: [
    { src: "/projects/fall-detection/dashboard/dashboard-desempenho-1.png", caption: "Dashboard — desempenho: 500 mil mensagens, p99 de 270 ms e 0% de erro" },
    { src: "/projects/fall-detection/arquitetura.png", caption: "Arquitetura em camadas: borda (ESP32), comunicação (MQTT), nuvem (ThingsBoard) e alerta ao cuidador" },
    { src: "/projects/fall-detection/edge/dispositivo-embarcado.png", caption: "Dispositivo de borda: ESP32 com acelerômetro MPU6050 em protoboard" },
    { src: "/projects/fall-detection/thingsboard/thingsboard-cloud.png", caption: "Middleware ThingsBoard CE na AWS, com os dispositivos provisionados" },
    { src: "/projects/fall-detection/dashboard/dashboard-overview-1.png", caption: "Dashboard — visão geral: devices monitorados, quedas e throughput do último teste" },
    { src: "/projects/fall-detection/dashboard/dashboard-falls.jpeg", caption: "Dashboard — quedas: telemetria do device com o pico cruzando o limiar de queda" },
    { src: "/projects/fall-detection/dashboard/dashboard-system-1.png", caption: "Dashboard — sistema: CPU e memória do host do middleware" },
    { src: "/projects/fall-detection/terminal/load-test.png", caption: "Load test: 1.000 devices, 1 milhão de mensagens publicadas, 0 erros" },
    { src: "/projects/fall-detection/grafana/throughput-por-no.png", caption: "Grafana: throughput por nó gerador de carga" },
    { src: "/projects/fall-detection/grafana/latencia.png", caption: "Grafana: latência média e p99 durante o experimento" },
  ],
  en: [
    { src: "/projects/fall-detection/dashboard/dashboard-desempenho-1.png", caption: "Dashboard — performance: 500k messages, 270 ms p99 and a 0% error rate" },
    { src: "/projects/fall-detection/arquitetura.png", caption: "Layered architecture: edge (ESP32), communication (MQTT), cloud (ThingsBoard) and caregiver alerting" },
    { src: "/projects/fall-detection/edge/dispositivo-embarcado.png", caption: "Edge device: ESP32 with an MPU6050 accelerometer on a breadboard" },
    { src: "/projects/fall-detection/thingsboard/thingsboard-cloud.png", caption: "ThingsBoard CE middleware on AWS, with the provisioned devices" },
    { src: "/projects/fall-detection/dashboard/dashboard-overview-1.png", caption: "Dashboard — overview: monitored devices, falls and throughput from the latest test" },
    { src: "/projects/fall-detection/dashboard/dashboard-falls.jpeg", caption: "Dashboard — falls: device telemetry with the spike crossing the fall threshold" },
    { src: "/projects/fall-detection/dashboard/dashboard-system-1.png", caption: "Dashboard — system: CPU and memory of the middleware host" },
    { src: "/projects/fall-detection/terminal/load-test.png", caption: "Load test: 1,000 devices, 1 million messages published, 0 errors" },
    { src: "/projects/fall-detection/grafana/throughput-por-no.png", caption: "Grafana: throughput per load-generating node" },
    { src: "/projects/fall-detection/grafana/latencia.png", caption: "Grafana: average and p99 latency during the experiment" },
  ],
};

export const obesidadeEspacotemporalImages: LocalizedImages = {
  pt: [
    { src: "/projects/obesidade-espacotemporal/tendencia-estadual.png", caption: "Tendência 2014–2023: as curvas de crianças e adolescentes se cruzam por volta de 2017 — os adolescentes puxam toda a alta" },
    { src: "/projects/obesidade-espacotemporal/mapa-prevalencia-2023.png", caption: "Prevalência de excesso de peso por município em 2023" },
    { src: "/projects/obesidade-espacotemporal/mapa-lisa-2023.png", caption: "Aglomerados LISA: 25 municípios Alto-Alto e 24 Baixo-Baixo (Moran I = 0,27)" },
    { src: "/projects/obesidade-espacotemporal/mapa-lisa-2023-regionais.png", caption: "Os mesmos aglomerados sobre as regiões de saúde da SES-MA" },
  ],
  en: [
    { src: "/projects/obesidade-espacotemporal/tendencia-estadual.png", caption: "2014–2023 trend: the children and adolescent curves cross around 2017 — adolescents drive the entire increase" },
    { src: "/projects/obesidade-espacotemporal/mapa-prevalencia-2023.png", caption: "Excess weight prevalence by municipality, 2023" },
    { src: "/projects/obesidade-espacotemporal/mapa-lisa-2023.png", caption: "LISA clusters: 25 High-High and 24 Low-Low municipalities (Moran's I = 0.27)" },
    { src: "/projects/obesidade-espacotemporal/mapa-lisa-2023-regionais.png", caption: "The same clusters over the SES-MA health regions" },
  ],
};

export const obesidadeProjecaoImages: LocalizedImages = {
  pt: [
    { src: "/projects/obesidade-projecao/projecao-total.png", caption: "Projeção estadual até 2026: 20,2% (2023) → 21,4% com IC 90%, erro de backtesting de 2,5%" },
    { src: "/projects/obesidade-projecao/projecao-adolescente.png", caption: "Adolescentes: estabilizam em 21,6% — em patamar ruim, e a série de maior incerteza" },
    { src: "/projects/obesidade-projecao/projecao-crianca.png", caption: "Crianças: leve alta projetada, de 18,6% para 19,3%" },
    { src: "/projects/obesidade-projecao/projecao-chapadinha.png", caption: "Chapadinha: maior prevalência projetada do estado (23,9%) e maior crescimento (+2,2 p.p.)" },
    { src: "/projects/obesidade-projecao/projecao-imperatriz.png", caption: "Imperatriz: entre os maiores crescimentos projetados (+2,2 p.p.)" },
  ],
  en: [
    { src: "/projects/obesidade-projecao/projecao-total.png", caption: "Statewide forecast to 2026: 20.2% (2023) → 21.4% with a 90% CI, 2.5% backtesting error" },
    { src: "/projects/obesidade-projecao/projecao-adolescente.png", caption: "Adolescents: plateau at 21.6% — at a bad level, and the least certain series" },
    { src: "/projects/obesidade-projecao/projecao-crianca.png", caption: "Children: a slight projected rise, from 18.6% to 19.3%" },
    { src: "/projects/obesidade-projecao/projecao-chapadinha.png", caption: "Chapadinha: the state's highest projected prevalence (23.9%) and largest increase (+2.2 pp)" },
    { src: "/projects/obesidade-projecao/projecao-imperatriz.png", caption: "Imperatriz: among the largest projected increases (+2.2 pp)" },
  ],
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

export const compEvolucionariaImages: LocalizedImages = {
  pt: [
    { src: "/projects/computacao-evolucionaria/convergencia_clusterizacao.png", caption: "Convergência das variantes de AG com clusterização (média de 30 execuções)" },
    { src: "/projects/computacao-evolucionaria/convergencia_restrito.png", caption: "Convergência no problema restrito: só o GA Penalizado encontra soluções viáveis" },
    { src: "/projects/computacao-evolucionaria/boxplot_restrito.png", caption: "Distribuição dos resultados no problema restrito" },
    { src: "/projects/computacao-evolucionaria/convergencia_schwefel.png", caption: "Convergência na função Schwefel (multimodal), 8 algoritmos" },
    { src: "/projects/computacao-evolucionaria/boxplot_schwefel.png", caption: "Distribuição das 30 execuções na função Schwefel" },
  ],
  en: [
    { src: "/projects/computacao-evolucionaria/convergencia_clusterizacao.png", caption: "Convergence of clustering-based GA variants (mean of 30 runs)" },
    { src: "/projects/computacao-evolucionaria/convergencia_restrito.png", caption: "Convergence on the constrained problem: only the Penalized GA finds feasible solutions" },
    { src: "/projects/computacao-evolucionaria/boxplot_restrito.png", caption: "Result distribution on the constrained problem" },
    { src: "/projects/computacao-evolucionaria/convergencia_schwefel.png", caption: "Convergence on the Schwefel (multimodal) function, 8 algorithms" },
    { src: "/projects/computacao-evolucionaria/boxplot_schwefel.png", caption: "Distribution of the 30 runs on the Schwefel function" },
  ],
};
