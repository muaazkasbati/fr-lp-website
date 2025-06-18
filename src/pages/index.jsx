import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Head from 'next/head';

export default function Home() {
  const slides = [
    'https://bluepeaksfinance.com/wp-content/uploads/2024/05/litecoin.png',
    'https://bluepeaksfinance.com/wp-content/uploads/2024/05/cronos.png',
    'https://bluepeaksfinance.com/wp-content/uploads/2024/05/chainlink.png',
    'https://bluepeaksfinance.com/wp-content/uploads/2024/05/ethereum.png',
    'https://bluepeaksfinance.com/wp-content/uploads/2024/05/tron.png',
    'https://bluepeaksfinance.com/wp-content/uploads/2024/05/uniswap.png',
    'https://bluepeaksfinance.com/wp-content/uploads/2024/05/unus-sed-leo.png',
  ];
  const features = [
    {
      icon: 'https://bluepeaksfinance.com/wp-content/uploads/2024/05/users.svg',
      title: 'Interface Convivial',
      description: 'La plateforme est conçue pour être simple et facile à utiliser. Élaborer des stratégies en douceur sans la complexité habituelle.',
    },
    {
      icon: 'https://bluepeaksfinance.com/wp-content/uploads/2024/05/robot.svg',
      title: 'Système Automatisé',
      description: "Avec, c'est réglé et oublié. Moins de stress grâce à l'option du système entièrement automatisé.",
    },
    {
      icon: 'https://bluepeaksfinance.com/wp-content/uploads/2024/05/lock.svg',
      title: 'Espace de Confiance',
      description: "Notre plateforme est conçue pour une sécurité maximale, offrant un sentiment de fiabilité à tous les utilisateurs.",
    },
    {
      icon: 'https://bluepeaksfinance.com/wp-content/uploads/2024/05/brain.svg',
      title: 'Stratégies Conçues par des Experts',
      description: 'vous propose des stratégies méticuleusement élaborées, afin que vous puissiez travailler comme un professionnel',
    },
    {
      icon: 'https://bluepeaksfinance.com/wp-content/uploads/2024/05/play-circle.svg',
      title: 'Mode Démo Sans Risque',
      description: "Vous êtes curieux de découvrir notre robot, mais vous n'êtes pas prêt à vous engager ? Notre mode démo vous permet d'explorer et d'apprendre sans risque.",
    },
    {
      icon: 'https://bluepeaksfinance.com/wp-content/uploads/2024/05/shield-checkered.svg',
      title: 'Sécurité de haut niveau',
      description: "L'application a été rigoureusement testée et vérifiée par les leaders du secteur. Votre compte est sécurisré par notre algorithme d'IA de premier plan.",
    },
  ];
  const testimonials = [
    {
      quote: "BitGPT a simplifié mon flux de travail et m'a permis d'obtenir des résultats réguliers.",
      name: "Jordan K.",
    },
    {
      quote: "Au départ, j'avais des doutes sur BitGPT. Cependant, après quelques semaines d'utilisation, j'ai constaté une réelle différence dans mes résultats.",
      name: "Bailey T.",
    },
    {
      quote: "J'ai expérimenté de nombreux outils, mais BitGPT sort du lot. Ses algorithmes sophistiqués et ses analyses rapides m'ont fait gagner beaucoup de temps",
      name: "Riley J.",
    },
    {
      quote: "Au départ, j'étais sceptique à propos de BitGPT. Pourtant, après avoir commencé par un petit dépôt et l'avoir utilisé pendant plusieurs mois, je suis impressionné par sa précision et sa facilité d'utilisation.",
      name: "Elliot H.",
    },
    {
      quote: "[partner-name] a été un guide inestimable. Il m'a aidé à comprendre les signaux et les automatismes convenables pour moi.",
      name: "Skyler Q.",
    },
    {
      quote: "J'utilisé BitGPT pendant plus d'un an, je peux témoigner de son taux de réussite élevé. Il est indispensable à toute personne qui prend ce problème au sérieux",
      name: "Micah L.",
    },
    {
      quote: "BitGPT m'a fait gagner beaucoup de temps et d'efforts lors de mes analyses. L'interface conviviale et les fonctions automatisées m'ont beaucoup facilité ma vie.",
      name: "Peyton M.",
    },
  ];
  const faqs = [
  {
    question: "Qu'est-ce que BitGPT exactement ?",
    answer: "BitGPT associe l’informatique quantique à l’intelligence artificielle. Il est conçu pour une analyse en temps réel et permettant des décisions plus intelligentes et plus rapides."
  },
  {
    question: "Puis-je faire confiance à BitGPT ?",
    answer: "BitGPT a fait l’objet de tests approfondis et a démontré une réussite constante dans diverses conditions. Comme pour tout outil, il existe des risques et les utilisateurs doivent donc faire preuve de prudence."
  },
  {
    question: "Quel est le coût de l'utilisation de BitGPT?",
    answer: "L’application BitGPT est totalement gratuite pour l’ouverture d’un compte, mais pour utiliser l’essentiel de nos fonctions d’automatisation, nos algorithmes nécessitent un petit budget."
  },
  {
    question: "Comment fonctionne BitGPT ?",
    answer: "En s’appuyant sur des algorithmes sophistiqués, BitGPT analyse les tendances, les nouvelles et les sentiments des médias sociaux. Sur la base de ces informations, il fournit des recommandations et travaille automatiquement sur votre compte."
  },
  {
    question: "Comment commencer à utiliser BitGPT ?",
    answer: "Pour commencer, rien de plus simple : il suffit de créer un compte et nous vous aiderons à faire le reste."
  }
];

  return (
    <>
      <Head>
        <title>FR – LP – Official Website</title>
      </Head>
      <div className="bg-white p-4 w-full">
        <div className="flex justify-end md:hidden px-6 py-2 text-[#ffa700]">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg>
        </div>
      </div>
      {/* Hero Section */}
      <div className="pt-14 pb-14 relative overflow-hidden bg-contain" style={{
        background: 'url(/images/bg.png), linear-gradient(to top right, #1a202c, #2d3748)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        // backgroundSize: "contain"
      }}>
        <div className="container mx-auto block max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-between p-6 md:py-12 gap-[2.5rem]">
            <div className="md:col-span-7 col-span-6 text-center md:text-left mb-8 md:mb-0 text-white">
              <h1 className="text-[2.5em]/12 md:text-[4rem]/15 font-semibold mb-4">
                BitGPT L'Avenir de <br /> L'Automatisation Par <br className="sm:block hidden" /> L'IA
              </h1>
              <p className="text-lg mb-6 text-[#cbd5e1] md:max-w-2xl">
                est là pour changer votre monde. Notre technologie d’IA avancée libère votre véritable potentiel et travaille avec vous pour prendre des décisions plus intelligentes et plus stratégiques.
              </p>
              <div className="flex justify-center md:justify-start items-center mb-6 gap-4">
                <div className="flex text-yellow-400 text-[20px]">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-sm">Noté 4,8 étoiles par plus de <span className="text-green-400">9 150 utilisateurs</span></span>
              </div>
              <div className="rounded-xl py-4 px-6 md:py-6 md:px-8 border border-white/10 bg-gray-900 inline-block">
                <p className="mb-4 text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-emerald-400 font-semibold text-center uppercase tracking-wide inline-block mx-auto">TEL QUE VU SUR</p>
                <div className="flex justify-center md:justify-start gap-8  md:flex-nowrap flex-wrap">
                  <img src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/CBS_logo.svg" alt="TEL" className="h-12" />
                  <img src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/Fox_News_Channel_logo.svg" alt="CBS" className="h-12" />
                  <img src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/NBC_logo.svg" alt="FOX" className="h-12" />
                  <img src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/usa-today-logo-vector-2021.svg" alt="NBC" className="h-12" />
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-6">
              <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md xl:mr-0 rounded-lg relative z-1">
                <div className="px-6 py-8 sm:px-10">
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center mb-4">Inscrivez-Vous Maintenant</h2>
                  <form className="space-y-6">
                    <input
                      type="text"
                      placeholder="Prénom"
                      className="w-full px-3 py-3 border rounded border-[#9ca3af] text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Nom de famille"
                      className="w-full px-3 py-3 border rounded border-[#9ca3af] text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Adresse électronique"
                      className="w-full px-3 py-3 border rounded border-[#9ca3af] text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="w-full px-3 py-3 border rounded border-[#9ca3af] text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#3b82f6] text-white p-4 text-sm rounded-lg hover:bg-blue-800"
                    >
                      Créer un Compte Gratuit
                    </button>
                  </form>
                </div>
                <div className="border-t-2 border-gray-200 bg-gray-50 px-6 py-6 sm:px-6 rounded-b-lg prose prose-sm text-gray-500">
                  <p className="text-[12px]">
                    En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      <section className="py-6 md:py-7 bg-white shadow relative z-20">
        <Splide
          options={{
            type: 'loop',
            perPage: 5,
            perMove: 1,
            autoplay: true,
            interval: 2000,
            arrows: false,
            pagination: false,
            drag: true,
            width: '100%',
          }}
          aria-label="Basic Structure Example"
        >
          {slides.map((src, index) => (
            <SplideSlide key={index}>
              <div className="splide__slide__container px-6 md:px-10 flex items-center justify-center">
                <img
                  width="100px"
                  className="h-8 w-auto md:h-10 md:w-auto grayscale opacity-50"
                  src={src}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </section>
      {/* Section 2 */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto md:px-4 px-6 text-center max-w-6xl">
          <p className="mb-5 text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-emerald-500 font-semibold text-center uppercase tracking-wide inline-block mx-auto">CE QUI NOUS DISTINGUE</p>
          <h2 className="mb-10 md:mb-20 text-3xl md:text-4xl lg:text-5xl mx-auto font-bold text-center max-w-3xl text-gray-900">Stratégies Avancées Avec</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-10 rounded-lg shadow space-y-7 text-start">
                <img src={feature.icon} alt={feature.title} className="md:h-14 h-10" />
                <h3 className="text-gray-900 text-xl md:text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-[18px]">{feature.description}</p>
              </div>
            ))}
          </div>
          <div class="button-link flex justify-center pt-6 md:mt-8">
            <a class="flex justify-center gap-2.5 md:gap-3 items-center rounded-md border border-transparent bg-emerald-600 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-medium text-white shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2" target="_SELF" href="#">
              Commencer <img width="20px" src="https://bluepeaksfinance.com/wp-content/plugins/landing-page-template//assetes/images/arrow-right-fill.svg" />
            </a>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="overflow-hidden py-20 md:py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-6xl md:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <h5 class="mb-5 text-sm md:text-base text-center text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-emerald-500 font-semibold uppercase tracking-wide block mx-auto">TOUJOURS À VOTRE SERVICE</h5>
              <h2 class="mb-10 md:mb-20 text-3xl md:text-4xl lg:text-5xl mx-auto font-semibold max-w-3xl text-gray-900 text-center">Assistance d'un expert 24 heures sur 24</h2>
              <div class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 md:max-w-none text-left max-md:mx-auto">
                <ul className="text-left space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <img src="https://bluepeaksfinance.com/wp-content/plugins/landing-page-template/assetes/images/lock-key-fill.svg" alt="" className="h-6 md:mr-2 mr-4" />
                    <span><b className="text-[#0f172a]">Disponible avec Tous les Plans et Services</b> Nous nous engageons à fournir à tous nos abonnés, quel que soit le plan choisi, un accès ininterrompu à notre équipe d’assistance, disponible 24 heures sur 24, tous les jours de l’année.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://bluepeaksfinance.com/wp-content/plugins/landing-page-template/assetes/images/lock-key-fill.svg" alt="" className="h-6 md:mr-2 mr-4" />
                    <span><b className="text-[#0f172a]">Des Niveaux de Satisfaction Exceptionnels</b> Avec un taux de satisfaction clientèle de 97 %, nous sommes fiers de pour vous, nous nous efforçons d’atteindre l’excellence et de nous rapprocher le plus possible d’un taux de satisfaction de 100 %.</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://bluepeaksfinance.com/wp-content/plugins/landing-page-template/assetes/images/translate-fill.svg" alt="" className="h-6 md:mr-2 mr-4" />
                    <span><b className="text-[#0f172a]">Support multilingue</b> s’adapte à vos préférences. Choisissez un support en Anglais, Espagnol, Français, Néerlandais et Italien. N’hésitez pas à changer de langue à tout moment pour vous adapter à votre besoin.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="px-6 lg:px-0">
              <div class="relative isolate bg-gradient-to-tr from-blue-600 to-emerald-600 pt-16 mx-auto sm:max-w-2xl rounded-3xl pl-8 sm:pl-10 lg:mx-0 lg:max-w-none mt-14">
                <div class="absolute w-full h-full top-0 left-0 rounded-3xl overflow-hidden">
                  <div class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-emerald-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true"></div>
                </div>
                <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <img width="500px" class="-mt-36 w-full max-w-none rounded-br-3xl relative z-20" src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/12345-288x300-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="relative pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 z-10" >
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <p className="mb-5 text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-emerald-400 font-semibold text-center uppercase tracking-wide inline-block mx-auto">FACILE À DÉMARRER</p>
          <h2 className="mb-10 md:mb-20 text-2xl md:text-4xl lg:text-5xl mx-auto font-semibold text-center max-w-full text-white">Fiable. Simple. Rapide.</h2>
          <div className="flex flex-wrap justify-center -m-3 lg:-m-5 text-left relative z-10">
            <div className="item w-full md:w-1/3 p-3 lg:p-5 max-w-sm">
              <div className="h-full p-8 lg:p-10 rounded-xl bg-white shadow text-center">
                <div class="text-center mb-6">
                  <img src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/number-circle-one-fill-1.svg" alt="" className="mx-auto block h-12" />
                </div>
                <h3 className="mb-5 font-semibold text-gray-900 text-xl md:text-2xl">Inscrivez-vous</h3>
                <p className="text-gray-600">Pour commencer, vous devez enregistrer votre compte auprès de BitGPT. Une fois que vous l'aurez fait, vous aurez immédiatement accès au logiciel gratuitement.</p>
              </div>
            </div>
            <div className="item w-full md:w-1/3 p-3 lg:p-5 max-w-sm">
              <div className="h-full p-8 lg:p-10 rounded-xl bg-white shadow text-center">
                <div class="text-center mb-6">
                  <img src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/number-circle-two-fill-1.svg" alt="" className="mx-auto block h-12" />
                </div>
                <h3 className="mb-5 font-semibold text-gray-900 text-xl md:text-2xl">Alimenter votre compte</h3>
                <p className="text-gray-600">Vous aurez besoin de fonds pour permettre à BitGPT de fonctionner correctement. Vous pouvez commencer modestement et augmenter les fonds au fur et à mesure de votre croissance.</p>
              </div>
            </div>
            <div className="item w-full md:w-1/3 p-3 lg:p-5 max-w-sm">
              <div className="h-full p-8 lg:p-10 rounded-xl bg-white shadow text-center">
                <div class="text-center mb-6">
                  <img src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/number-circle-three-fill-1.svg" alt="" className="mx-auto block h-12" />
                </div>
                <h3 className="mb-5 font-semibold text-gray-900 text-xl md:text-2xl">Utiliser BitGPT</h3>
                <p className="text-gray-600">Commencez à profiter des avantages de notre algorithme primé. Le processus est totalement indépendant, bien que vous puissiez passer en mode manuel à tout moment si vous le souhaitez.</p>
              </div>
            </div>
          </div>
          <div className="botton-text inline-flex justify-center items-center flex-col sm:flex-row relative z-10 gap-2 sm:gap-3 rounded-xl sm:rounded-full bg-gray-800/80 mt-5 md:mt-10 px-8 py-3 text-gray-100 text-base md:text-lg">
            <img width="20px;" src="https://bluepeaksfinance.com/wp-content/plugins/landing-page-template//assetes/images/lock-key-fill.svg"></img>
            Un cryptage de haut niveau protège vos données à tout moment.
          </div>
          <div class="button-link flex justify-center pt-6 md:pt-12 relative z-10">
            <a class="flex justify-center gap-2.5 md:gap-3 items-center rounded-md border border-transparent bg-emerald-600 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-medium text-white shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2" target="_SELF" href="#"> Commencer
              <img width="20px" src="https://bluepeaksfinance.com/wp-content/plugins/landing-page-template//assetes/images/arrow-right-fill.svg" />
            </a>
          </div>
        </div>
        <img src="/images/bg.png" alt="" className="absolute bottom-0 left-0 max-w-[850px]" />
      </div>
      {/* Section 5 */}
      <div className="relative py-12 md:pt-20 overflow-hidden bg-white shadow z-20">
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-3">
            <div className="item mx-auto flex max-w-xs flex-col gap-y-4">
              <h3 className="order-first text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-emerald-500 sm:text-5xl">2,3 millions d'euros</h3>
              <p className="font-weight-400 text-base leading-7 text-gray-600">Volume de transactions sur 24 heures</p>
            </div>
            <div className="item mx-auto flex max-w-xs flex-col gap-y-4">
              <h3 className="order-first text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-emerald-500 sm:text-5xl">530 millions de dollars</h3>
              <p className="font-weight-400 text-base leading-7 text-gray-600">Valeur totale</p>
            </div>
            <div className="item mx-auto flex max-w-xs flex-col gap-y-4">
              <h3 className="order-first text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-emerald-500 sm:text-5xl">60,000</h3>
              <p className="font-weight-400 text-base leading-7 text-gray-600">Nouveaux utilisateurs annuels</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 6 */}
      <div className="pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden bg-gray-50 z-10">
        <div className="container max-w-7xl mx-auto px-6 text-center relative">
          <p className="mb-5 text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-emerald-500 font-semibold text-center uppercase tracking-wide inline-block mx-auto">EXPÉRIENCES DES CLIENTS</p>
          <h2 className="mb-10 md:mb-20 text-3xl md:text-4xl lg:text-5xl mx-auto font-bold text-center max-w-3xl text-gray-900">Ce que les gens disent de BitGPT</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-white p-6 rounded-lg space-y-4 text-start border border-gray-200 ${index == 1 ? "md:col-span-2 col-span-1 font-semibold" : "col-span-1"}`}>
                <p className="text-gray-900 md:text-lg">{testimonial.quote}</p>
                <div className="flex align-items gap-2">
                  <img src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/icon_grid.png" alt="icon_grid" className="h-6"></img>
                  <p className="text-gray-400 text-lg font-normal">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section7 */}
      <div className="bg-white">
        <div className="container mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-24 md:pb-32 text-center">
          <p className="mb-5 text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-emerald-500 font-semibold text-center uppercase tracking-wide inline-block mx-auto">QUESTIONS FRÉQUEMMENT POSÉES - FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mx-auto font-bold text-center max-w-3xl text-gray-900">Les Réponses à vos Questions</h2>
          <p className="mt-6 md:mt-8 max-w-3xl prose md:prose-lg text-gray-600 mx-auto font-weight-400">Vous ne trouvez pas ce que vous cherchez ? Notre équipe d’assistance est prête à vous aider. Il vous suffit de nous contacter et nous vous répondrons rapidement.</p>
          <div className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10 text-start mt-20">
            {faqs.map((faq, index) => (
              <div key={index} className="">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</h3>
                <p className="mt-2 prose text-gray-600 font-weight-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 8 */}
      <div className="bg-white">
        <div className="container mx-auto max-w-7xl pb-24 px-6 sm:pb-32">
          <div className="relative isolate overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-3xl font-bold text-white text-3xl md:text-4xl lg:text-5xl">Transformez Votre Approche</h2>
            <p className="mx-auto mt-6 max-w-xl md:text-lg text-md leading-8 text-gray-300 font-weight-400">
              Découvrez la nouvelle génération d’outils d’automatisation avec BitGPT. Ce mélange révolutionnaire d’intelligence artificielle et d’analyse complète des données offre des capacités extraordinaires. BitGPT permet aux utilisateurs de faire face à des conditions en constante évolution avec une précision et une sophistication inégalées.
            </p>
            <div class="button-link mt-10 flex items-center justify-center gap-x-6">
              <a class="flex justify-center gap-2.5 md:gap-3 items-center rounded-md border border-transparent bg-emerald-600 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-medium text-white shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2" target="_SELF" href="#">
                Commencer  <img width="20px" src="https://bluepeaksfinance.com/wp-content/plugins/landing-page-template//assetes/images/arrow-right-fill.svg" />
              </a>
            </div>
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7"></circle>
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stop-color="#93C5FD"></stop>
                  <stop offset="1" stop-color="#10B981"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      {/* Section 9 */}
      {/* <div className="">
        <div className="container mx-auto max-w-7xl px-6 pb-24 md:pb-32">
          <div className="bg-[#F1F5F9] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vue d'ensemble</h2>
            <p className="text-gray-600 mb-6">
              est alimenté par une IA sophistiquée. Profitez d'une gestion de compte sans effort, et bénéficiez d'une compatibilité sur plusieurs appareils avec un accès mondial. Exploitez votre potentiel maintenant.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-teal-600 mr-2">🔒</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Accessibilité de la Plateforme</h3>
                  <p className="text-gray-600">Accessible facilement via n'importe quel navigateur web</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-teal-600 mr-2">🌐</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Disponibilité</h3>
                  <p className="text-gray-600">Disponible au Canada, Australie, les pays européens (comme la France, l'Allemagne, l'Italie, les Pays-Bas, le Royaume-Uni, etc.), les Amériques (à l'exception des États-Unis) et en Asie.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-teal-600 mr-2">💰</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Coût d'Utilisation</h3>
                  <p className="text-gray-600">Pas de frais d'ouverture de compte ; budget minimum de 250 $.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto max-w-7xl px-6 pb-24 md:pb-24">
        <div className="overflow-hidden rounded-lg" style={{ backgroundColor: 'rgb(241 245 249)' }}>
          <div className="p-8 md:p-10 lg:p-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">VBitGPT Vue d'ensemble</h3>
            <p className="mt-3 md:mt-4 text-[#374151] text-xs md:text-sm">
              BitGPT est alimenté par une IA sophistiquée. Profitez d’une gestion de compte sans effort, et bénéficiez d’une compatibilité sur plusieurs appareils avec un accès mondial. Exploitez votre potentiel dès maintenant.
            </p>
          </div>
          <div className="border-t border-gray-300/60">
            <div>
              <div className="divide-y divide-gray-300/60">
                <div className="px-8 py-6 md:px-10 lg:px-12 lg:py-8 md:grid md:grid-cols-3 md:gap-12">
                  <div className="text-base md:text-lg font-medium text-gray-900 flex items-center gap-2.5">
                    <img width="24px" src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/lock-1.svg" alt="lock" />
                    Accessibilité de la Plateforme
                  </div>
                  <div className="mt-1 text-base md:text-lg leading-6 text-gray-700 md:col-span-2 md:mt-0">
                    <p>Accessible facilement via n’importe quel navigateur web</p>
                  </div>
                </div>
                <div className="px-8 py-6 md:px-10 lg:px-12 lg:py-8 md:grid md:grid-cols-3 md:gap-12">
                  <div className="text-base md:text-lg font-medium text-gray-900 flex items-center gap-2.5">
                    <img width="24px" src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/brain.svg" alt="brain" />
                    Disponibilité
                  </div>
                  <div className="mt-1 text-base md:text-lg leading-6 text-gray-700 md:col-span-2 md:mt-0">
                    <p>Valable au Canada, Australie, Les pays européens (comme la France, l’Allemagne, l’Italie, les Pays-Bas, le Royaume-Uni, etc.), les Amériques (à l’exception des États-Unis) et en Asie.</p>
                  </div>
                </div>
                <div className="px-8 py-6 md:px-10 lg:px-12 lg:py-8 md:grid md:grid-cols-3 md:gap-12">
                  <div className="text-base md:text-lg font-medium text-gray-900 flex items-center gap-2.5">
                    <img width="24px" src="https://bluepeaksfinance.com/wp-content/uploads/2024/05/play-circle.svg" alt="play-circle" />
                    Coût d'Utilisation
                  </div>
                  <div className="mt-1 text-base md:text-lg leading-6 text-gray-700 md:col-span-2 md:mt-0">
                    <p>Pas de frais d’ouverture de compte ; budget minimum de 250 $.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#F1F5F9] text-gray-500">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div class="text-center p-4 flex flex-wrap md:justify-between justify-center text-[15px] text-[#cccccc] md:gap-0 gap-2">
            <p class="text-base mb-0">
              Copyright © 2021 Official Website. All Rights Reserved.
            </p>
            <ul class="md:flex text-sm space-x-6 space-y-2">
              <li class="">
                <a href="#" class="">Privacy Policy</a>
              </li>
              <li class="">
                <a href="#" class="">Terms &amp; Conditions</a>
              </li>
              <li class="">
                <a href="#" class="">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
