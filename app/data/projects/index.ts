import { Code2, Smartphone, Database, Brain, Layout, BarChart, Cpu, Map, TrendingUp, Dna, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project, LinkItem, StatItem, GalleryImage } from "../../types";
import {
  monitoraImages, masemfomeImages, renavehImages, sishansImages,
  foodAgentImages, plandoxImages, analiseRfmImages, californiaImages,
  hansPlusImages, relabImages, portfolioImages, fallDetectionImages,
  obesidadeEspacotemporalImages, obesidadeProjecaoImages,
  compEvolucionariaImages, automacaoIndustrialImages,
} from "./images";

// Internal types

type Lang = "pt" | "en";

/** Link with an optional English label override (when label differs across langs). */
type LocalizedLink = Omit<LinkItem, "label"> & {
  label?: string;
  labelEn?: string;
};

/** Stat with optional English overrides for label and/or value. */
type LocalizedStat = {
  label: string;
  labelEn?: string;
  value: string;
  valueEn?: string;
};

/**
 * Every category, and its EN label. Categories double as the filter labels in
 * messages/*.json, so both sides must stay in sync - a category with no match
 * in `filters` is unreachable in the UI.
 */
const CATEGORY_EN: Record<string, string> = {
  "Full Stack": "Full Stack",
  "Data Science / AI": "Data Science / AI",
  "Mobile": "Mobile",
  "IoT / Sistemas Distribuídos": "IoT / Distributed Systems",
  "Otimização / Pesquisa Operacional": "Optimization / Operations Research",
  "Automação / Sistemas Embarcados": "Automation / Embedded Systems",
};

interface ProjectDef {
  slug: string;
  tags: string[];
  categories: string[];
  icon: LucideIcon;
  images: { pt: GalleryImage[]; en: GalleryImage[] };
  links?: LocalizedLink[];
  stats?: LocalizedStat[];
  i18n: {
    pt: { title: string; shortDesc: string; fullDesc: string; status: Project["status"] };
    en: { title: string; shortDesc: string; fullDesc: string; status: Project["status"] };
  };
}

// Project definitions

const PROJECTS: ProjectDef[] = [
  {
    slug: "monitora-saude",
    tags: ["Power BI", "Laravel", "PostgreSQL"],
    categories: ["Full Stack"],
    icon: BarChart,
    images: monitoraImages,
    stats: [
      { label: "Dashboards", value: "+50" },
      { label: "Fonte de Dados", labelEn: "Data Source", value: "Híbrida", valueEn: "Hybrid" },
    ],
    links: [
      { type: "live", url: "https://monitora.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "Monitora Saúde",
        shortDesc: "Portal de transparência em saúde do Maranhão com cerca de 50 painéis públicos em Power BI.",
        fullDesc: "Portal de Transparência de Saúde do Maranhão, desenvolvido para gestores e população. A coordenação é responsável pela plataforma e pelo fluxo de cadastro de indicadores - os gestores das áreas técnicas registram as informações descritivas e o link do painel Power BI correspondente, que passa a ser exibido automaticamente. Conta também com canal aberto de sugestões, acessível sem autenticação.",
        status: "Concluído",
      },
      en: {
        title: "Health Monitor",
        shortDesc: "Maranhão health transparency portal with around 50 public Power BI dashboards.",
        fullDesc: "Maranhão Health Transparency Portal, built for managers and the general public. The team is responsible for the platform and the indicator registration flow - technical area managers register descriptive information and the corresponding Power BI dashboard link, which is automatically displayed. Also features an open suggestion channel accessible without authentication.",
        status: "Completed",
      },
    },
  },
  {
    slug: "maranhao-livre-da-fome",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    icon: Layout,
    images: masemfomeImages,
    stats: [
      { label: "Beneficiários Cadastrados", labelEn: "Registered Beneficiaries", value: "26.4k" },
      { label: "Beneficiários Esperados", labelEn: "Expected Beneficiaries", value: "400k" },
      { label: "Cidades", labelEn: "Cities", value: "217" },
    ],
    links: [
      { type: "live", url: "https://maranhaolivredafome.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "Programa Maranhão Livre da Fome",
        shortDesc: "Sistema de cadastro de famílias vulneráveis com perspectiva de 400 mil beneficiários em 217 cidades.",
        fullDesc: "Plataforma oficial do Programa Maranhão Livre da Fome, voltada ao cadastro e acompanhamento de famílias em situação de vulnerabilidade nutricional. Registra consultas, classifica famílias via triagem de risco (TRIA) e gera dados para políticas públicas de saúde e alimentação. Em produção desde novembro de 2025, com registros sendo inseridos gradualmente - a expectativa é alcançar 400 mil beneficiários em cerca de 90 mil famílias. Conta com 479 profissionais de saúde e cerca de 400 usuários entre coordenadores, digitadores e equipe da área técnica.",
        status: "Concluído",
      },
      en: {
        title: "Maranhão Hunger-Free Program",
        shortDesc: "Family registration platform with a target of 400k beneficiaries across 217 cities.",
        fullDesc: "Official platform of the Maranhão Hunger-Free Program, focused on registering and monitoring families in nutritional vulnerability. Records consultations, classifies families through risk screening (TRIA), and generates data for public health and food policies. In production since November 2025, with records being added gradually - the target is 400k beneficiaries across around 90k families. It has 479 health professionals and around 400 users including coordinators, data entry personnel, and technical area staff.",
        status: "Completed",
      },
    },
  },
  {
    slug: "plandox",
    tags: ["React Native", "FastAPI", "Microservices", "Python"],
    categories: ["Mobile", "Data Science / AI"],
    icon: Code2,
    images: plandoxImages,
    links: [
      { type: "lock", url: "#", label: "Código Privado", labelEn: "Private Code" },
    ],
    i18n: {
      pt: {
        title: "Plandox",
        shortDesc: "Modernização de legado para microsserviços com IA para controle de qualidade.",
        fullDesc: "Migração de arquitetura monolítica para microsserviços. Utiliza modelos de ML para predição de qualidade de biodiesel via Design of Experiments (DoE).",
        status: "Concluído",
      },
      en: {
        title: "Plandox",
        shortDesc: "Modernization from legacy to microservices with AI for quality control.",
        fullDesc: "Migration from monolithic architecture to microservices. Uses ML models for biodiesel quality prediction via Design of Experiments (DoE).",
        status: "Completed",
      },
    },
  },
  {
    slug: "food-review-agent",
    tags: ["Python", "LangChain", "RAG", "LLM", "FastAPI"],
    categories: ["Data Science / AI", "Full Stack"],
    icon: Brain,
    images: foodAgentImages,
    links: [
      { type: "github", url: "https://github.com/josevbrito/food-review-agent" },
    ],
    i18n: {
      pt: {
        title: "FoodReview Insights Agent",
        shortDesc: "Agente Autônomo de IA que analisa reviews de delivery usando RAG e LangChain.",
        fullDesc: "Sistema inteligente que permite a donos de restaurantes 'conversarem' com suas avaliações. Utiliza arquitetura RAG (Retrieval-Augmented Generation) com LangChain e OpenAI para extrair insights estratégicos, calcular métricas de satisfação e identificar padrões de sentimento em tempo real. Backend em Python (FastAPI) e interface moderna em Next.js.",
        status: "Concluído",
      },
      en: {
        title: "FoodReview Insights Agent",
        shortDesc: "Autonomous AI Agent analyzing delivery reviews using RAG and LangChain.",
        fullDesc: "Intelligent system allowing restaurant owners to 'chat' with their reviews. Uses RAG (Retrieval-Augmented Generation) architecture with LangChain and OpenAI to extract strategic insights, calculate satisfaction metrics, and identify sentiment patterns in real-time. Python (FastAPI) Backend and modern Next.js Frontend.",
        status: "Completed",
      },
    },
  },
  {
    slug: "fall-detection-iot",
    tags: ["Python", "MQTT", "AWS", "ThingsBoard", "Docker", "ESP32", "Next.js"],
    categories: ["IoT / Sistemas Distribuídos"],
    icon: Cpu,
    images: fallDetectionImages,
    stats: [
      { label: "Dispositivos Simulados", labelEn: "Simulated Devices", value: "1.000", valueEn: "1,000" },
      { label: "Throughput", value: "5k msg/s" },
      { label: "Latência p99", labelEn: "p99 Latency", value: "147 ms" },
    ],
    links: [
      { type: "github", url: "https://github.com/josevbrito/fall-detection-iot-complete" },
    ],
    i18n: {
      pt: {
        title: "Monitoramento de Quedas com IoT",
        shortDesc: "Sistema distribuído para detecção de quedas em idosos, sustentando 1.000 dispositivos a 5k msg/s sem erros.",
        fullDesc: "Sistema distribuído em três camadas para detecção automática de quedas em idosos. Na borda, um ESP32 com acelerômetro MPU6050 detecta o impacto e publica telemetria via MQTT; o middleware (ThingsBoard CE + PostgreSQL em Docker) persiste as séries temporais e dispara o alarme; um dashboard em Next.js exibe quedas e desempenho em tempo real. Para validar a escala sem hardware físico, desenvolvi um gerador de carga em Python (asyncio/aiomqtt) que simula milhares de sensores, com modo distribuído em containers. Com o middleware na AWS e a carga publicando de outras máquinas, o sistema sustentou 1.000 dispositivos a 5.069 msg/s com latência p99 de 147 ms e nenhum erro. Projeto acadêmico em equipe (Sistemas Distribuídos - Engenharia da Computação, UFMA).",
        status: "Concluído",
      },
      en: {
        title: "IoT Fall Detection Monitoring",
        shortDesc: "Distributed system for elderly fall detection, sustaining 1,000 devices at 5k msg/s with zero errors.",
        fullDesc: "Three-layer distributed system for automatic fall detection in elderly people. At the edge, an ESP32 with an MPU6050 accelerometer detects the impact and publishes telemetry over MQTT; the middleware (ThingsBoard CE + PostgreSQL on Docker) stores the time series and triggers the alarm; a Next.js dashboard displays falls and performance in real time. To validate scale without physical hardware, I built a Python load generator (asyncio/aiomqtt) that simulates thousands of sensors, with a distributed mode across containers. With the middleware on AWS and load published from separate machines, the system sustained 1,000 devices at 5,069 msg/s with a p99 latency of 147 ms and zero errors. Academic team project (Distributed Systems - Computer Engineering, UFMA).",
        status: "Completed",
      },
    },
  },
  {
    slug: "ga-clusterizacao-diversidade",
    tags: ["R", "Algoritmos Genéticos", "PSO", "DBSCAN", "ANOVA", "Metaheurísticas"],
    categories: ["Otimização / Pesquisa Operacional", "Data Science / AI"],
    icon: Dna,
    images: compEvolucionariaImages,
    stats: [
      { label: "Redução vs AG padrão", labelEn: "Reduction vs standard GA", value: "-43%" },
      { label: "Execuções", labelEn: "Runs", value: "1.680", valueEn: "1,680" },
      { label: "Algoritmos comparados", labelEn: "Algorithms compared", value: "8" },
    ],
    links: [
      { type: "github", url: "https://github.com/josevbrito/Genetic-Algorithm-with-Clustering-for-Diversity-Preservation" },
      { type: "github", url: "https://github.com/josevbrito/HybridConstrainedEvo", label: "Algoritmo híbrido + restrições", labelEn: "Hybrid algorithm + constraints" },
    ],
    i18n: {
      pt: {
        title: "Diversidade Populacional em Algoritmos Genéticos via Clusterização",
        shortDesc: "Clusterização para evitar convergência prematura em AGs, com hibridização BAT-PSO e tratamento de restrições.",
        fullDesc: "Pesquisa de mestrado (Computação Evolucionária Aplicada, PPGCC/UFMA) sobre como manter diversidade populacional em Algoritmos Genéticos. A ideia é aplicar clusterização periodicamente sobre a população, tomar o melhor indivíduo de cada cluster e usá-los para substituir os piores - forçando representantes de regiões distintas do espaço de busca a sobreviverem. Três variantes foram comparadas contra o AG padrão (K-Means, hierárquico com ligação de Ward e DBSCAN), em 30 execuções independentes por combinação. Na função multimodal Schwefel a clusterização derruba o fitness médio de 237,2 para 134,8 (-43%), e o teste de Tukey confirma que as três variantes superam o AG padrão com significância - mas são estatisticamente indistinguíveis entre si, ou seja, o ganho vem da clusterização em si, não de um método específico. O trabalho evolui depois para um híbrido BAT-PSO com alternância probabilística de operadores e para tratamento de restrições por penalidade dinâmica, onde o resultado é categórico: num problema quadrático com restrições de igualdade, os 7 algoritmos sem tratamento explícito não encontram uma única solução viável, enquanto o GA Penalizado converge para 49,3.",
        status: "Concluído",
      },
      en: {
        title: "Population Diversity in Genetic Algorithms via Clustering",
        shortDesc: "Clustering to prevent premature convergence in GAs, with BAT-PSO hybridization and constraint handling.",
        fullDesc: "Master's research (Applied Evolutionary Computation, PPGCC/UFMA) on maintaining population diversity in Genetic Algorithms. The idea is to periodically cluster the population, take the fittest individual from each cluster, and use them to replace the worst ones - forcing representatives of distinct search-space regions to survive. Three variants were compared against a standard GA (K-Means, hierarchical with Ward linkage, and DBSCAN), across 30 independent runs per combination. On the multimodal Schwefel function, clustering cuts mean fitness from 237.2 to 134.8 (-43%), and Tukey's test confirms all three variants significantly outperform the standard GA - yet are statistically indistinguishable from each other, meaning the gain comes from clustering itself rather than any specific method. The work then evolves into a BAT-PSO hybrid with probabilistic operator alternation and into constraint handling via dynamic penalty, where the result is categorical: on a quadratic problem with equality constraints, the 7 algorithms without explicit handling find no feasible solution at all, while the Penalized GA converges to 49.3.",
        status: "Completed",
      },
    },
  },
  {
    slug: "controle-nivel-clp",
    tags: ["TIA Portal", "Ladder", "CLP Siemens S7-1200", "Factory I/O", "PLCSIM"],
    categories: ["Automação / Sistemas Embarcados"],
    icon: Factory,
    images: automacaoIndustrialImages,
    stats: [
      { label: "Faixa de controle", labelEn: "Control band", value: "20% – 80%" },
      { label: "Sinais mapeados", labelEn: "Mapped signals", value: "13" },
      { label: "Controlador", labelEn: "Controller", value: "S7-1200" },
    ],
    i18n: {
      pt: {
        title: "Controle Automático de Nível de Reservatório com CLP",
        shortDesc: "Malha de controle de nível em CLP Siemens, integrada a uma planta industrial 3D simulada.",
        fullDesc: "Sistema de controle automático de nível de líquido em um reservatório industrial, implementado em Controlador Lógico Programável Siemens S7-1200 e validado contra uma planta virtual tridimensional. A arquitetura integra três ambientes: o TIA Portal para a engenharia e programação em linguagem Ladder, o S7-PLCSIM para emulação do controlador, e o Factory I/O como planta 3D que fornece a física do processo - tanque, sensor de nível analógico, sensor de vazão e válvulas proporcionais de carga e descarga. O tratamento dos sinais analógicos é feito com os blocos NORM_X e SCALE_X, convertendo a faixa bruta de 0 a 10 V do cartão de entrada em unidades de engenharia de 0 a 100%, o que permite que a lógica de controle raciocine em percentual de enchimento e não em tensão. O controle é On-Off com histerese: abaixo de 20% a válvula de carga abre integralmente, acima de 80% ela fecha, e a banda morta entre os dois limites é o que impede o chaveamento intermitente dos atuadores - o mesmo princípio que, em planta real, preserva a vida útil mecânica das válvulas. Uma válvula de descarga com acionamento manual simula o consumo do processo, permitindo verificar que o sistema retoma o ciclo de abastecimento automaticamente ao cruzar o limite inferior. A integração exigiu configuração de hardware não trivial: deslocamento dos endereços de I/O para evitar colisão com o simulador, liberação de acesso PUT/GET no controlador e importação da biblioteca de sincronismo no bloco OB1.",
        status: "Concluído",
      },
      en: {
        title: "Automatic Tank Level Control with PLC",
        shortDesc: "Level control loop on a Siemens PLC, integrated with a simulated 3D industrial plant.",
        fullDesc: "Automatic liquid level control system for an industrial tank, implemented on a Siemens S7-1200 Programmable Logic Controller and validated against a three-dimensional virtual plant. The architecture integrates three environments: TIA Portal for engineering and Ladder programming, S7-PLCSIM for controller emulation, and Factory I/O as the 3D plant providing process physics - tank, analog level sensor, flow sensor, and proportional inlet and outlet valves. Analog signal handling uses NORM_X and SCALE_X blocks, converting the raw 0-10 V range from the input card into 0-100% engineering units, letting the control logic reason in fill percentage rather than voltage. Control is On-Off with hysteresis: below 20% the inlet valve opens fully, above 80% it closes, and the dead band between the two limits is what prevents actuator chattering - the same principle that preserves mechanical valve life in a real plant. A manually actuated outlet valve simulates process consumption, making it possible to verify that the system automatically resumes the filling cycle once the lower limit is crossed. Integration required non-trivial hardware configuration: offsetting I/O addresses to avoid collision with the simulator, enabling PUT/GET access on the controller, and importing the synchronization library into the OB1 block.",
        status: "Completed",
      },
    },
  },
  {
    slug: "obesidade-infantil-ma-espacotemporal",
    tags: ["Python", "GeoPandas", "Spatial Statistics", "Pandas", "SISVAN"],
    categories: ["Data Science / AI"],
    icon: Map,
    images: obesidadeEspacotemporalImages,
    stats: [
      { label: "Acompanhamentos", labelEn: "Records", value: "9,6M", valueEn: "9.6M" },
      { label: "Municípios", labelEn: "Municipalities", value: "217" },
      { label: "Aglomerados Alto-Alto", labelEn: "High-High Clusters", value: "25" },
    ],
    links: [
      { type: "github", url: "https://github.com/josevbrito/childhood-obesity-maranhao-spatiotemporal" },
    ],
    i18n: {
      pt: {
        title: "Análise Espaço-Temporal do Excesso de Peso Infantojuvenil no MA",
        shortDesc: "Estudo ecológico sobre 9,6 milhões de registros do SISVAN: onde e em quem o excesso de peso se concentra.",
        fullDesc: "Estudo ecológico de série temporal sobre todos os 9.609.650 acompanhamentos de crianças e adolescentes que o SISVAN registrou nos 217 municípios do Maranhão entre 2014 e 2023. A conclusão é que a média estadual (20,2%) esconde o que importa: os adolescentes puxaram toda a alta (+0,64 p.p./ano) e inverteram de posição, eram o grupo menos afetado em 2014 (18,0%) e passaram a ser o mais afetado em 2023 (22,6%), enquanto as crianças ficaram estáveis. A carga também não se espalha por igual: o Moran I de 0,27 confirma dependência espacial e o LISA identifica 25 municípios Alto-Alto em territórios contíguos, no entorno de Bacabal e Pedreiras e em Chapadinha. O achado técnico mais relevante foi de ingestão: os rótulos dos microdados do SISVAN estão deslocados em uma faixa em relação aos relatórios oficiais, e a leitura intuitiva colocaria os adolescentes em 7,0% em vez de 22,6% - o pipeline aplica a regra por faixa etária e valida contra os relatórios oficiais, abortando se divergir. Submetido ao II EANAPS 2026 (SES-MA / UFMA).",
        status: "Concluído",
      },
      en: {
        title: "Spatiotemporal Analysis of Childhood Excess Weight in Maranhão",
        shortDesc: "Ecological study over 9.6 million SISVAN records: where and in whom excess weight concentrates.",
        fullDesc: "Time-series ecological study covering all 9,609,650 child and adolescent records that SISVAN collected across Maranhão's 217 municipalities between 2014 and 2023. The finding is that the statewide average (20.2%) hides what matters: adolescents drove the entire increase (+0.64 pp/year) and flipped position, the least affected group in 2014 (18.0%), the most affected by 2023 (22.6%), while children stayed flat. The burden is not evenly spread either: a Moran's I of 0.27 confirms spatial dependence, and LISA identifies 25 High-High municipalities in contiguous territories around Bacabal, Pedreiras and Chapadinha. The most consequential technical finding was in ingestion: SISVAN's microdata labels are shifted by one band relative to the official reports, and the intuitive reading would place adolescents at 7.0% instead of 22.6% - the pipeline applies the age-dependent rule and validates against the official reports, aborting on divergence. Submitted to II EANAPS 2026 (SES-MA / UFMA).",
        status: "Completed",
      },
    },
  },
  {
    slug: "obesidade-infantil-ma-projecao",
    tags: ["Python", "ARIMA", "Prophet", "Time Series", "SISVAN"],
    categories: ["Data Science / AI"],
    icon: TrendingUp,
    images: obesidadeProjecaoImages,
    stats: [
      { label: "Séries Projetadas", labelEn: "Forecast Series", value: "30" },
      { label: "Erro (MAPE)", labelEn: "Error (MAPE)", value: "2,5%", valueEn: "2.5%" },
      { label: "Regiões em Alta", labelEn: "Rising Regions", value: "11 de 18", valueEn: "11 of 18" },
    ],
    links: [
      { type: "github", url: "https://github.com/josevbrito/childhood-obesity-maranhao-forecasting" },
    ],
    i18n: {
      pt: {
        title: "Predição do Excesso de Peso Infantojuvenil no MA",
        shortDesc: "Projeções ARIMA e Prophet até 2026 para 30 séries, do estado a cada região de saúde.",
        fullDesc: "Metade prospectiva do estudo: usa a mesma década de registros do SISVAN para projetar a prevalência de excesso de peso até 2026 em 30 séries - o estado, as 3 macrorregiões e cada uma das 18 regiões de saúde. O estado sai de 20,2% (2023) para 21,4% (IC 90%: 20,4-22,6), mas o número que importa para o gestor é outro: 11 das 18 regiões de saúde estão em alta e 6 em queda, então a média estadual esconde as duas direções ao mesmo tempo. Chapadinha concentra o risco, com a maior prevalência projetada (23,9%) e o maior crescimento (+2,2 p.p.). Nenhum modelo foi escolhido no olho: cada série disputou uma competição de quatro vias (ARIMA x Prophet, cada um com 2020 mantido ou marcado como outlier) decidida só pelo erro fora da amostra, treinando até 2021 e testando contra 2022-2023. A bifurcação do 2020 fez diferença - tratar a pandemia como outlier derrubou o erro estadual de 4,65% para 2,52%. Submetido ao II EANAPS 2026 (SES-MA / UFMA).",
        status: "Concluído",
      },
      en: {
        title: "Childhood Excess Weight Prediction in Maranhão",
        shortDesc: "ARIMA and Prophet forecasts to 2026 across 30 series, from the state down to each health region.",
        fullDesc: "The prospective half of the study: it uses the same decade of SISVAN records to forecast excess weight prevalence through 2026 across 30 series - the state, its 3 macro-regions and each of the 18 health regions. The state moves from 20.2% (2023) to 21.4% (90% CI: 20.4-22.6), but the number that matters to a health manager is a different one: 11 of the 18 health regions are rising and 6 are falling, so the statewide average hides both directions at once. Chapadinha concentrates the risk, with the highest projected prevalence (23.9%) and the largest increase (+2.2 pp). No model was picked by eye: every series ran a four-way competition (ARIMA x Prophet, each with 2020 kept or flagged as an outlier) decided purely on out-of-sample error, training through 2021 and testing against 2022-2023. The 2020 fork mattered - treating the pandemic as an outlier cut the statewide error from 4.65% to 2.52%. Submitted to II EANAPS 2026 (SES-MA / UFMA).",
        status: "Completed",
      },
    },
  },
  {
    slug: "renaveh-ma",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    icon: Database,
    images: renavehImages,
    stats: [
      { label: "Casos Notificados", labelEn: "Cases Notified", value: "+72k" },
      { label: "Hospitais", labelEn: "Hospitals", value: "98" },
      { label: "Usuários", labelEn: "Users", value: "270" },
    ],
    links: [
      { type: "live", url: "https://renaveh.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "Sistema de Notificação Hospitalar (RENAVEH)",
        shortDesc: "Sistema com 2FA e RBAC para vigilância epidemiológica hospitalar. +72k casos notificados em 98 unidades.",
        fullDesc: "O RENAVEH-MA (Rede Nacional de Vigilância Epidemiológica Hospitalar - Maranhão) permite às instituições de saúde registrar e acompanhar notificações de doenças e agravos. Vai além das notificações compulsórias, visando a detecção e resposta imediata a Emergências de Saúde Pública (ESP). Em produção desde fevereiro de 2024, o sistema conta com autenticação em dois fatores (2FA), controle granular de acesso por perfis (RBAC) e aproximadamente 270 usuários cadastrados.",
        status: "Concluído",
      },
      en: {
        title: "Hospital Notification System (RENAVEH)",
        shortDesc: "System with 2FA and RBAC for hospital epidemiological surveillance. +72k cases notified in 98 units.",
        fullDesc: "The RENAVEH-MA (National Hospital Epidemiological Surveillance Network - Maranhão) allows health institutions to register and monitor notifications of diseases and injuries. It goes beyond compulsory notifications, aiming for immediate detection and response to Public Health Emergencies (PHE). In production since February 2024, the system features two-factor authentication (2FA), granular role-based access control (RBAC), and approximately 270 registered users.",
        status: "Completed",
      },
    },
  },
  {
    slug: "sishans",
    tags: ["Laravel", "PostgreSQL", "JavaScript"],
    categories: ["Full Stack"],
    icon: Database,
    images: sishansImages,
    stats: [
      { label: "Pacientes", labelEn: "Patients", value: "5.6k" },
      { label: "Questionários", labelEn: "Questionnaires", value: "5.5k" },
      { label: "Municípios", labelEn: "Municipalities", value: "50" },
    ],
    links: [
      { type: "live", url: "https://sishans.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "SISHANS - Sistema de Hanseníase",
        shortDesc: "Sistema de registro e acompanhamento de casos de hanseníase com 5.6k pacientes em 50 municípios.",
        fullDesc: "O SISHANS (Sistema de Hanseníase) permite às equipes de saúde registrar questionários diagnósticos e acompanhar casos suspeitos, facilitando a notificação precoce e a coleta de dados para ações de prevenção. Em produção desde janeiro de 2026, já aplicou 5.5k questionários em 50 municípios do Maranhão. Segue os padrões institucionais com 2FA e controle granular de acesso por perfis (RBAC).",
        status: "Concluído",
      },
      en: {
        title: "SISHANS - Leprosy Information System",
        shortDesc: "System for recording and monitoring leprosy cases with 5.6k patients across 50 municipalities.",
        fullDesc: "SISHANS (Leprosy Information System) enables health teams to register diagnostic questionnaires and monitor suspected cases, supporting early notification and data collection for prevention. Live since January 2026, it has processed 5.5k questionnaires across 50 municipalities in Maranhão. Follows institutional security standards with 2FA and granular role-based access control (RBAC).",
        status: "Completed",
      },
    },
  },
  {
    slug: "analise-rfm-ml",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Flask"],
    categories: ["Data Science / AI"],
    icon: Brain,
    images: analiseRfmImages,
    stats: [
      { label: "Precisão", labelEn: "Precision", value: "Alta", valueEn: "High" },
      { label: "Clusters", value: "5" },
      { label: "Pipeline", value: "Automático", valueEn: "Automated" },
    ],
    links: [
      { type: "github", url: "https://github.com/josevbrito/online-retail-rfm-analysis" },
    ],
    i18n: {
      pt: {
        title: "Segmentação de Clientes RFM com IA",
        shortDesc: "Pipeline completo de Machine Learning para classificar clientes em 5 clusters estratégicos.",
        fullDesc: "Sistema desenvolvido em Python utilizando análise RFM (Recency, Frequency, Monetary) com Machine Learning. Classifica clientes em grupos como 'Super Campeões', 'Em Risco' e 'VIPs' para estratégias de marketing direcionadas. Inclui interface web em Flask.",
        status: "Concluído",
      },
      en: {
        title: "AI-Powered RFM Customer Segmentation",
        shortDesc: "Complete Machine Learning pipeline to classify customers into 5 strategic clusters.",
        fullDesc: "System developed in Python using RFM analysis (Recency, Frequency, Monetary) with Machine Learning. Classifies customers into groups such as 'Champions', 'At Risk', and 'VIPs' for targeted marketing strategies. Includes a Flask web interface.",
        status: "Completed",
      },
    },
  },
  {
    slug: "hans-plus",
    tags: ["Flutter", "Firebase", "NoSQL", "Mobile"],
    categories: ["Mobile"],
    icon: Smartphone,
    images: hansPlusImages,
    links: [
      { type: "apk", url: "/downloads/hans-plus.apk", label: "APK Android" },
    ],
    i18n: {
      pt: {
        title: "Hans+",
        shortDesc: "App mobile para auxílio no tratamento da hanseníase.",
        fullDesc: "Aplicação focada no paciente, permitindo cadastro de sintomas e controle de medicação diária. Desenvolvido com foco em UX e simplicidade de uso.",
        status: "Concluído",
      },
      en: {
        title: "Hans+",
        shortDesc: "Mobile app to assist in leprosy treatment.",
        fullDesc: "Patient-focused application allowing symptom registration and daily medication control. Developed with a focus on UX and simplicity of use.",
        status: "Completed",
      },
    },
  },
  {
    slug: "relab",
    tags: ["Laravel", "PostgreSQL", "React"],
    categories: ["Full Stack"],
    icon: Database,
    images: relabImages,
    links: [
      { type: "live", url: "https://relab-ioclacen.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "RELAB - Rede Laboratorial",
        shortDesc: "Plataforma de cadastro de laboratórios na rede do LACEN-MA com integração automática à API do CNES.",
        fullDesc: "O RELAB permite o cadastro de laboratórios na Rede do Laboratório Central de Saúde Pública do Maranhão (LACEN-MA). A plataforma integra-se à API do CNES (Cadastro Nacional de Estabelecimentos de Saúde) para preenchimento automático dos dados durante o cadastro. O fluxo contempla: o gestor cadastra o laboratório e o responsável técnico; o responsável técnico informa os exames realizados e o quantitativo de funcionários por hora de funcionamento.",
        status: "Concluído",
      },
      en: {
        title: "RELAB - Laboratory Network",
        shortDesc: "Platform for registering laboratories in the LACEN-MA network with automatic CNES API integration.",
        fullDesc: "RELAB enables the registration of laboratories in the LACEN-MA (Maranhão Central Public Health Laboratory) network. The platform integrates with the CNES API (National Health Establishment Registry) to automatically fill in unit data during registration. The workflow covers: the manager registers the laboratory and technical manager; the technical manager then registers the exams performed and staff count per shift.",
        status: "Completed",
      },
    },
  },
  {
    slug: "portfolio-sys-brito",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "next-intl"],
    categories: ["Full Stack"],
    icon: Layout,
    images: portfolioImages,
    links: [
      { type: "live", url: "https://josevbrito.com" },
      { type: "github", url: "https://github.com/josevbrito/portfolio-sys-brito" },
    ],
    i18n: {
      pt: {
        title: "Portfólio Pessoal",
        shortDesc: "Portfólio moderno com tema dark, animações e suporte a múltiplos idiomas (PT/EN).",
        fullDesc: "Portfolio pessoal desenvolvido com Next.js 15 e TypeScript, apresentando projetos, experiências profissionais e habilidades técnicas. Conta com tema dark inspirado em terminais, animações fluidas, internacionalização (PT/EN) via next-intl e design responsivo com Tailwind CSS.",
        status: "Concluído",
      },
      en: {
        title: "Personal Portfolio",
        shortDesc: "Modern portfolio with dark theme, animations and multi-language support (PT/EN).",
        fullDesc: "Personal portfolio built with Next.js 15 and TypeScript, showcasing projects, professional experience and technical skills. Features a dark terminal-inspired theme, fluid animations, internationalization (PT/EN) via next-intl and responsive design with Tailwind CSS.",
        status: "Completed",
      },
    },
  },
  {
    slug: "california-housing",
    tags: ["Python", "ML Pipeline", "Pandas"],
    categories: ["Data Science / AI"],
    icon: Code2,
    images: californiaImages,
    links: [
      { type: "github", url: "https://github.com/josevbrito/california-housing-ml-pipeline" },
    ],
    i18n: {
      pt: {
        title: "Predição Imobiliária (Califórnia)",
        shortDesc: "Pipeline de ML para predição de preços imobiliários com otimização de hiperparâmetros.",
        fullDesc: "Desenvolvimento de sistema completo de predição. Inclui comparação de algoritmos, pré-processamento, validação de modelos e métricas de performance.",
        status: "Concluído",
      },
      en: {
        title: "Real Estate Prediction (California)",
        shortDesc: "ML pipeline for real estate price prediction with hyperparameter optimization.",
        fullDesc: "Development of a complete prediction system. Includes algorithm comparison, pre-processing, model validation, and performance metrics.",
        status: "Completed",
      },
    },
  },
];

// Mapper

function mapProject(def: ProjectDef, lang: Lang): Project {
  const t = def.i18n[lang];
  return {
    slug: def.slug,
    title: t.title,
    shortDesc: t.shortDesc,
    fullDesc: t.fullDesc,
    status: t.status,
    tags: def.tags,
    categories: lang === "en" ? def.categories.map((c) => CATEGORY_EN[c] ?? c) : def.categories,
    icon: def.icon,
    images: def.images[lang],
    stats: def.stats?.map((s) => ({
      label: lang === "en" ? (s.labelEn ?? s.label) : s.label,
      value: lang === "en" ? (s.valueEn ?? s.value) : s.value,
    })),
    links: def.links?.map((l) => ({
      type: l.type,
      url: l.url,
      label: lang === "en" ? (l.labelEn ?? l.label) : l.label,
    })),
  };
}

export function getProjects(lang: Lang): Project[] {
  return PROJECTS.map((def) => mapProject(def, lang));
}
