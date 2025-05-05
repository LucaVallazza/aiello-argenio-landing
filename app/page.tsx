"use client";
import {
  Scale,
  Users,
  Trophy,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  Briefcase,
  GraduationCap,
  FileText,
  Handshake,
  Clock,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Check,
  Menu,
  X,
  UserPlus,
  ShieldPlus,
  Home,
  Circle,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Función para obtener el icono correspondiente a cada elemento del menú
const getMenuIcon = (item: string) => {
  switch (item.toLowerCase()) {
    case "inicio":
      return <Home size={18} className="text-primary-500" />;
    case "nosotros":
      return <Users size={18} className="text-primary-500" />;
    case "servicios":
      return <Briefcase size={18} className="text-primary-500" />;
    case "testimonios":
      return <MessageSquare size={18} className="text-primary-500" />;
    case "contacto":
      return <Phone size={18} className="text-primary-500" />;
    default:
      return <Circle size={18} className="text-primary-500" />;
  }
};

// Definir las constantes antes de usarlas
const featuredServices = [
  {
    icon: <Shield size={28} />,
    title: "Accidentes Laborales",
    description:
      "Representación especializada en casos de accidentes de trabajo, enfermedades profesionales y reclamos de ART. Obtenga la compensación que merece con nuestro apoyo experto.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Despidos y Desvinculaciones",
    description:
      "Asesoramiento integral y representación en casos de despidos injustificados. Protegemos sus derechos y buscamos la mejor indemnización posible según la legislación vigente.",
  },
];

const otherServices = [
  {
    icon: <FileText size={24} />,
    title: "Contratos Laborales",
    description: "Redacción, revisión y negociación de contratos laborales.",
  },
  {
    icon: <Users size={24} />,
    title: "Conflictos Sindicales",
    description: "Mediación en conflictos entre empresas y sindicatos.",
  },
  {
    icon: <Scale size={24} />,
    title: "Litigios Laborales",
    description: "Representación en juicios y audiencias de conciliación.",
  },
  {
    icon: <Clock size={24} />,
    title: "Asesoría Preventiva",
    description: "Consultoría legal preventiva para empresas.",
  },
];

function App() {
  // Datos de contacto como variables
  const contactPhone = "+54 (11) 2294-4141";
  const contactPhoneNumeric = "5491122944141";
  const contactPhoneMedic = "+54 (11) 5376-2964";
  const contactPhoneMedicNumeric = "5491153762964";
  const contactEmail = "aielloargenio@gmail.com";
  const contactEmailMedic = "osvaldo.ar.genio@hotmail.com";
  const contactAddress =
    "Av. Lope de Vega 1133 6to Piso Dto B y PB, Villa Luro, CABA";

  // Estado para menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado para el carrusel de servicios móvil
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = otherServices.length;

  // Estados para el formulario de contacto
  const [formExpanded, setFormExpanded] = useState(false);

  // Estado adicional para el carrusel de testimonios
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const totalTestimonials = testimonials.length;

  // Referencias para los contenedores de carrusel
  const sliderRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const testimonialSliderRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  // Manejar navegación del carrusel de servicios
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Manejar navegación del carrusel de testimonios
  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === totalTestimonials - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? totalTestimonials - 1 : prev - 1
    );
  };

  // Efecto para desplazar el carrusel de servicios cuando cambia el slide activo
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.scrollTo({
        left: activeSlide * slider.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [activeSlide]);

  // Efecto para desplazar el carrusel de testimonios
  useEffect(() => {
    if (testimonialSliderRef.current) {
      const slider = testimonialSliderRef.current;
      slider.scrollTo({
        left: activeTestimonial * slider.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [activeTestimonial]);

  // Cerrar menú móvil al hacer clic en un enlace
  const handleNavLinkClick = (e: any) => {
    setMobileMenuOpen(false);
  };

  // Bloquear desplazamiento cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white text-gray-500 font-['Timeless',serif]">
      {/* Hero Section - Rediseñado */}
      <header id="inicio" className="relative min-h-[100svh] overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/bg-hero-light.png"
            alt="Fondo"
            className="hidden sm:block object-cover w-full h-full opacity-95"
          />
          <img
            src="/bg-hero-ligth-mobile.png"
            alt="Fondo"
            className="block sm:hidden object-cover w-full h-full opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-100/60 via-primary-100/70 to-primary-100/100"></div>
        </div>

        {/* Patrón decorativo superpuesto */}
        {/* <div className="absolute inset-0 bg-[url('/hero-pattern-light.svg')] opacity-10 bg-repeat"></div> */}

        {/* Navbar - Rediseñado */}
        <nav className="fixed w-full z-50 bg-white backdrop-blur-md border-b border-primary-100/30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 pt-2 md:px-6 md:py-3 flex justify-between items-center ">
            <div className="flex ">
              <img
                src="/images/icon-png.png"
                alt="Logo"
                className="w-14 h-14 mr-3 object-contain"
                style={{ minWidth: 32, minHeight: 32 }}
              />
              <div className="relative flex items-center">
                {/* Icono PNG agregado */}

                <div className="flex flex-col m-0 p-0">
                  <div className="text-xl md:text-[0.9rem] lg:text-xl font-bold  text-primary-800">
                    <span className="">AIELLO, ARGENIO & ASOC</span>
                  </div>
                  <span className="text-xs text-primary-600 -mt-1">
                    Abogados y médico legista
                  </span>
                </div>
                <div className="absolute bottom-1 md:bottom-2 lg:bottom-1  left-0 w-1/2 h-[2px] bg-gradient-to-r from-primary-400 to-transparent"></div>
              </div>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex space-x-8 lg:space-x-10">
              {[
                "Inicio",
                "Nosotros",
                "Servicios",
                "Testimonios",
                "Contacto",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="relative group font-medium tracking-wide"
                  onClick={handleNavLinkClick}
                >
                  <span className="text-primary-700 group-hover:text-primary-900 transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Botón de menú móvil */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-primary-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Menú móvil desplegable */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden animate-fadeIn"
            aria-modal="true"
            role="dialog"
          >
            {/* Overlay con efecto de desenfoque */}
            <div
              className="absolute inset-0 bg-primary-900/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Panel de navegación */}
            <div className="absolute right-0 top-[60px] bottom-0 w-4/5 max-w-sm bg-white shadow-xl transform animate-slideInRight overflow-y-auto">
              <div className="p-5 flex flex-col h-full">
                {/* Cabecera del menú */}

                {/* Links de navegación */}
                <nav className="flex-1">
                  <ul className="space-y-1">
                    {[
                      "Inicio",
                      "Nosotros",
                      "Servicios",
                      "Testimonios",
                      "Contacto",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href={`#${item.toLowerCase().replace(" ", "-")}`}
                          className="flex items-center py-3 px-4 rounded-md text-primary-700 font-medium transition-colors hover:bg-primary-50 active:bg-primary-100"
                          onClick={handleNavLinkClick}
                        >
                          {getMenuIcon(item)}
                          <span className="ml-3">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Sección de contacto rápido */}
                <div className="mt-auto pt-6 border-t border-primary-100">
                  <div className="mb-4">
                    <p className="text-xs font-medium text-primary-500 mb-2">
                      CONTACTO RÁPIDO
                    </p>
                    <a
                      href={`tel:${contactPhoneNumeric}`}
                      className="flex items-center py-2 text-primary-800 hover:text-primary-600"
                    >
                      <Phone size={16} className="mr-2 text-primary-600" />
                      <span>
                        {contactPhone}{" "}
                        <span className="text-xs text-primary-500">
                          (Estudio Jurídico)
                        </span>
                      </span>
                    </a>
                    <a
                      href={`tel:${contactPhoneMedicNumeric}`}
                      className="flex items-center py-2 text-primary-800 hover:text-primary-600"
                    >
                      <Phone size={16} className="mr-2 text-primary-600" />
                      <span>
                        {contactPhoneMedic}{" "}
                        <span className="text-xs text-primary-500">
                          (Dr. Argenio - Médico Legista)
                        </span>
                      </span>
                    </a>
                  </div>

                  {/* Botón de consulta */}
                  <a
                    href="#contacto"
                    className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white transition-colors py-3 px-4 rounded-md w-full flex items-center justify-center font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Consulta gratuita
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Content - Rediseñado con posicionamiento mejorado */}
        <div className="relative z-10 min-h-[100svh] flex flex-col justify-center items-center text-center px-4 md:px-6">
          <div className="relative max-w-4xl">
            {/* Bordes decorativos, reducidos en móvil */}
            <div className="absolute -top-5 -left-5 w-10 h-10 md:w-20 md:h-20 border-l-2 border-t-2 border-primary-300"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 text-primary-900 leading-tight">
              EXPERTOS EN
              <br />
              DERECHO LABORAL
              <br /> Y MEDICINA DEL TRABAJO
            </h1>
            <div className="absolute -bottom-5 -right-5 w-10 h-10 md:w-20 md:h-20 border-r-2 border-b-2 border-primary-300"></div>
          </div>

          {/* Estadísticas destacadas */}
          <div className="flex flex-row justify-center space-x-8 md:space-x-16 mb-6 md:mb-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1 mb-1">
                <Trophy size={16} className="text-primary-600" />
                <span className="text-lg md:text-2xl font-bold text-primary-800">
                  20+
                </span>
              </div>
              <p className="text-xs md:text-sm text-primary-700">
                Años de Experiencia
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1 mb-1">
                <Scale size={16} className="text-primary-600" />
                <span className="text-lg md:text-2xl font-bold text-primary-800">
                  2600+
                </span>
              </div>
              <p className="text-xs md:text-sm text-primary-700">
                Casos Exitosos
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 text-primary-800 font-medium">
            Protegemos los derechos de trabajadores de{" "}
            <span className="text-primary-600 font-bold">Buenos Aires</span> con
            más de 20 años de experiencia y excelencia jurídica
          </p>

          {/* Botones CTA - Rediseñados */}
          <div className="flex flex-col w-full max-w-xs sm:max-w-md sm:flex-row gap-4 sm:gap-6">
            <button className="group relative overflow-hidden rounded-md bg-primary-500 text-white px-6 py-3 md:px-8 md:py-4 font-semibold shadow-lg shadow-primary-300/20 w-full hover:bg-primary-600 transition-colors duration-300">
              <a
                href="#contacto"
                className="relative z-10 flex items-center justify-center"
              >
                CONSULTAR GRATIS
                <ArrowRight className="ml-2 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </button>

            <button className="group relative overflow-hidden rounded-md border-2 border-primary-400 text-primary-700 hover:text-white hover:bg-primary-400 px-6 py-3 md:px-8 md:py-4 font-semibold w-full transition-all duration-300">
              <a
                href="#servicios"
                className="relative z-10 flex items-center justify-center"
              >
                NUESTROS SERVICIOS
                <ArrowRight className="ml-2 w-0 group-hover:w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            </button>
          </div>

          {/* Indicador de scroll - Solo visible en pantallas más grandes */}
          <div className="absolute bottom-10 hidden md:flex flex-col items-center">
            <p className="text-primary-600 text-sm mb-3 tracking-widest">
              CONOZCA MÁS
            </p>
            <ChevronDown
              className="text-primary-500 animate-bounce"
              size={24}
            />
          </div>

          {/* Botón flotante de WhatsApp - Solo mobile */}
          <div className="fixed bottom-6 right-6 z-30 md:hidden">
            <a
              href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20gratuita%20sobre%20mi%20caso%20laboral.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-black/30 animate-pulse hover:animate-none"
              aria-label="Contactar por WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white mr-2">
                <path
                  fill="currentColor"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* About Section - Rediseñada con padding vertical reducido */}
      <section
        id="nosotros"
        className="py-10 md:py-14 lg:py-20 px-4 md:px-6 bg-gradient-to-b from-primary-50/30 to-primary-50/30 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10 lg:mb-14 text-center">
            <h2 className="inline-block relative">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800">
                SOBRE NOSOTROS
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </h2>

            <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mt-6 md:mt-8 text-primary-800 leading-relaxed">
              Somos un estudio jurídico médico legal especializado en accidentes
              de trabajo y derecho laboral, con más de 20 años brindando
              asesoramiento integral a los trabajadores. Nuestro compromiso es
              ofrecer soluciones eficientes y personalizadas para cada caso.
            </p>
          </div>

          {/* Abogados y Médico - Tarjetas separadas - Reducido espacio vertical */}
          <div className="max-w-5xl mx-auto mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Abogados Laborales */}
            <div className="bg-white rounded-lg shadow-md border border-primary-200 p-6 md:p-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="p-4 inline-flex rounded-full bg-primary-100 text-primary-700 mb-4 flex-shrink-0">
                  <Scale size={28} className="md:w-8 md:h-8" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-800 mb-2">
                    Abogados Laborales
                  </h3>
                  <div className="mb-4 space-y-3">
                    <div>
                      <p className="text-primary-600 font-bold ">
                        Dra. Julia Aiello
                      </p>
                      <p className="text-primary-700 text-sm">
                        Especialista en derecho laboral
                      </p>
                    </div>
                    <div>
                      <p className="text-primary-600 font-bold">
                        Dr. Roberto Garcia
                      </p>
                      <p className="text-primary-700 text-sm">
                        Especialista en derecho laboral
                      </p>
                    </div>
                  </div>
                  <p className="text-primary-700 text-sm md:text-base">
                    Con más de 20 años de experiencia representando tanto a
                    trabajadores como a empleadores, nuestro equipo legal está
                    altamente capacitado para gestionar conflictos laborales,
                    reclamos por despido, acuerdos y todo tipo de negociaciones
                    en materia laboral.
                  </p>
                </div>
              </div>
            </div>

            {/* Médico Legista */}
            <div className="bg-white rounded-lg shadow-md border border-primary-200 p-6 md:p-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="p-4 inline-flex rounded-full bg-primary-100 text-primary-700 mb-4 flex-shrink-0">
                  <ShieldPlus size={28} className="md:w-8 md:h-8" />
                </div>
                <div className="text-center md:text-left h-full">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary-800 mb-2">
                        Médico Legista
                      </h3>
                      <p className="text-primary-600 font-bold mb-3">
                        Dr. Osvaldo Argenio
                      </p>
                    </div>

                    <p className="text-primary-700 text-sm md:text-base mt-auto">
                      Especialista en medicina legal con amplia experiencia en
                      evaluación de accidentes laborales y de tránsito,
                      enfermedades profesionales, y representación en juntas
                      médicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjetas de valores - Espacio reducido */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {aboutCards.map((card, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg border border-primary-100 hover:border-primary-300 p-5 md:p-6 transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="p-3 mb-3 md:mb-4 inline-flex rounded-full bg-primary-100/50 text-primary-600">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary-800 group-hover:text-primary-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-primary-700">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Rediseñada con aspecto más serio y profesional */}
      <section
        id="servicios"
        className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-repeat opacity-3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-10 md:mb-16 lg:mb-24 text-center">
            <div className="inline-block relative mb-4">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800">
                NUESTROS SERVICIOS
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>

            {/* Banner consultas gratuitas - Rediseñado más sobrio */}
            <div className="max-w-3xl mx-auto mt-8 md:mt-10 mb-6 md:mb-8 bg-primary-50/70 rounded-lg p-3 md:p-4 flex flex-col sm:flex-row items-center justify-center shadow-sm border border-primary-200">
              <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                <Check size={20} className="text-primary-800" />
              </div>
              <p className="text-center sm:text-left text-base md:text-lg mb-2 sm:mb-0">
                Todas nuestras{" "}
                <span className="font-semibold text-primary-800">
                  consultas iniciales son gratuitas
                </span>
              </p>
              <a
                href="#contacto"
                className="ml-0 sm:ml-4 bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Contactar
              </a>
            </div>
          </div>

          {/* Servicios destacados - Rediseñado con aspecto más sobrio y profesional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white border border-primary-200 hover:border-primary-400 transition-all duration-500 shadow-md hover:shadow-lg"
              >
                <div className="absolute top-0 right-0">
                  <div className="bg-primary-800 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                    ESPECIALISTAS
                  </div>
                </div>

                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-start mb-4 md:mb-6">
                    <div className="p-3 inline-flex rounded-full bg-primary-100 text-primary-800 mr-3 md:mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-800 group-hover:text-primary-700 transition-colors duration-300 mt-1">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-primary-700 leading-relaxed grow mb-5 md:mb-6">
                    {service.description}
                  </p>

                  <a
                    href="#contacto"
                    className="self-center w-full bg-primary-700 hover:bg-primary-800 text-white py-3 px-4 md:px-6 rounded-md flex items-center justify-center text-sm font-medium transition-all duration-300 shadow-sm"
                  >
                    <span>Consultar ahora</span>
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Servicios adicionales - Versión para móvil */}
          <ServicesMobileCarousel
            services={otherServices}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            sliderRef={sliderRef}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />

          {/* Servicios adicionales - Versión para desktop */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {otherServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg border border-primary-200 hover:border-primary-400 p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 inline-flex rounded-full bg-primary-100 text-primary-700 mb-3">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-primary-800">
                  {service.title}
                </h4>
                <p className="text-sm text-primary-700 mb-4">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="text-primary-700 hover:text-primary-900 text-sm mt-auto flex items-center font-medium"
                >
                  Consultar <ArrowRight size={12} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Rediseñada con paleta de azules */}
      <section
        id="testimonios"
        className="py-16 md:py-20 lg:py-32 px-4 md:px-6 bg-gradient-to-b from-primary-50/30 to-primary-50/30 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 lg:mb-24 text-center">
            <h2 className="inline-block relative">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800">
                TESTIMONIOS
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </h2>

            <p className="text-base md:text-lg max-w-3xl mx-auto mt-8 md:mt-10 text-primary-700">
              Conoce la experiencia de nuestros clientes con nuestra firma legal
              especializada en derecho laboral
            </p>
          </div>

          {/* Carrusel para móvil - Rediseñado */}
          <div className="lg:hidden mb-8">
            <div className="relative">
              <button
                onClick={prevTestimonial}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full text-primary-600 hover:bg-primary-100 transition-colors shadow-sm"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft size={16} />
              </button>

              <div
                ref={testimonialSliderRef}
                className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide w-full"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full snap-center px-4">
                    <div className="bg-white p-6 rounded-lg h-full flex flex-col border border-primary-100 shadow-md">
                      <div className="flex mb-4 space-x-1">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <Star
                            key={n}
                            size={16}
                            className="fill-primary-400 text-primary-400"
                          />
                        ))}
                      </div>
                      <p className="mb-5 text-primary-800 italic leading-relaxed relative z-10">
                        "{testimonial.text}"
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center space-x-3 pt-4 border-t border-primary-100">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center uppercase text-white font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="text-primary-700 font-bold">
                              {testimonial.name}
                            </h4>
                            <p className="text-primary-500 text-xs">
                              {testimonial.type}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full text-primary-600 hover:bg-primary-100 transition-colors shadow-sm"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? "bg-primary-500 w-6"
                      : "bg-primary-200 w-2"
                  }`}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid de testimonios para desktop - Rediseñado */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="absolute -top-4 left-8 text-primary-200 text-7xl opacity-20 font-serif">
                    "
                  </div>
                  <div className="flex mb-4 md:mb-6 space-x-1 z-10 relative">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        size={16}
                        className="fill-primary-400 text-primary-400"
                      />
                    ))}
                  </div>
                  <p className="mb-5 md:mb-6 text-sm md:text-base text-primary-700 italic leading-relaxed relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center space-x-3 pt-4 border-t border-primary-100/50">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center uppercase text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-primary-700 font-bold">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary-500 text-xs md:text-sm">
                          {testimonial.type}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA - Rediseñado */}
          <div className="mt-10 text-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 md:px-8 md:py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-300/20 group w-full sm:w-auto"
            >
              Consulta ahora
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Rediseñada */}
      <section
        id="contacto"
        className="relative py-16 md:py-20 lg:py-32 px-4 md:px-6 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-10 md:mb-16 lg:mb-24 text-center">
            <h2 className="inline-block relative">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800">
                CONTACTO
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </h2>

            <div className="max-w-3xl mx-auto mt-8 md:mt-10 mb-6 md:mb-8 bg-primary-100/50 rounded-lg p-3 md:p-4 flex items-center justify-center shadow-sm">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-200 flex items-center justify-center mr-3">
                <Check size={16} className="text-primary-700" />
              </div>
              <p className="text-sm md:text-lg">
                <span className="font-semibold text-primary-700">
                  La consulta es totalmente gratuita
                </span>
              </p>
            </div>
          </div>

          {/* Opciones de contacto - Rediseñadas */}
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8">
              {/* WhatsApp - Opción recomendada */}
              <div className="relative bg-white rounded-md border border-primary-200 p-6 md:p-8 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                {/* Etiqueta de recomendado */}
                <div className="absolute -right-10 top-8 bg-primary-500 text-white px-12 py-1 transform rotate-45 text-xs font-bold">
                  RECOMENDADO
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center mr-4">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-[#25D366]"
                      >
                        <path
                          fill="currentColor"
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-primary-800">
                        Contactar por WhatsApp
                      </h3>
                      <p className="text-primary-600 text-sm md:text-base">
                        Respuesta inmediata, los 7 días de la semana
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-700 mb-6 text-sm md:text-base">
                    Envíanos un mensaje por WhatsApp y recibirás atención
                    personalizada de nuestros abogados especialistas. Es la
                    forma más rápida de recibir asesoramiento.
                  </p>

                  <a
                    href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20gratuita%20sobre%20mi%20caso%20laboral.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-md w-full inline-flex items-center justify-center"
                  >
                    <div className="relative bg-[#25D366] text-white p-4 md:p-5 font-semibold z-10 w-full flex items-center justify-center hover:bg-[#1ea952] transition-colors duration-300">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-3 flex-shrink-0"
                      >
                        <path
                          fill="currentColor"
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                        />
                      </svg>
                      <span className="text-base md:text-lg tracking-wider">
                        CONSULTAR POR WHATSAPP
                      </span>
                      <ArrowRight className="ml-3 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario de contacto - Adaptado a paleta azul */}
            <div id="form-contacto" className="scroll-mt-10">
              <div className="mb-6 md:mb-8 text-center">
                <div className="mt-8">
                  <div className="text-primary-600 text-sm">
                    O agendanos, llamanos o mandanos mensaje
                    <div className="mt-2 text-primary-700 font-bold text-lg">
                      {contactPhone}{" "}
                      <span className="text-sm font-normal">
                        (Estudio Jurídico)
                      </span>
                    </div>
                    <div className="mt-2 text-primary-700 font-bold text-lg">
                      {contactPhoneMedic}{" "}
                      <span className="text-sm font-normal">
                        (Dr. Argenio - Médico Legista)
                      </span>
                    </div>
                    {/* Email del Médico Legista */}
                    <div className="mt-2 text-primary-700 font-bold text-base">
                      <a
                        href={`mailto:${contactEmail}`}
                        className="hover:text-primary-900"
                      >
                        {contactEmail}
                      </a>{" "}
                      <span className="text-sm font-normal">
                        (Estudio Jurídico)
                      </span>
                    </div>
                    <div className="mt-1 text-primary-700 font-bold text-base">
                      <a
                        href="mailto:osvaldo.ar.genio@hotmail.com"
                        className="hover:text-primary-900"
                      >
                        osvaldo.ar.genio@hotmail.com
                      </a>{" "}
                      <span className="text-sm font-normal">
                        (Dr. Argenio - Médico Legista)
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-primary-700 max-w-2xl mx-auto">
                  O sino podes completar el formulario y un abogado especialista
                  se comunicará contigo en menos de 24 horas.
                </p>
              </div>

              <form className="relative p-6 md:p-8 bg-white rounded-md border border-primary-200 shadow-md">
                <div className="space-y-4 md:space-y-6 relative z-10">
                  <div>
                    <label className="text-primary-600 text-xs md:text-sm mb-1 md:mb-2 block">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      className="w-full bg-primary-50/50 border border-primary-200 p-3 md:p-4 rounded-md focus:outline-none focus:border-primary-400 transition-colors text-sm md:text-base text-primary-800"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-primary-600 text-xs md:text-sm mb-1 md:mb-2 block">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-primary-50/50 border border-primary-200 p-3 md:p-4 rounded-md focus:outline-none focus:border-primary-400 transition-colors text-sm md:text-base text-primary-800"
                        placeholder="Tu número de contacto"
                      />
                    </div>
                    <div>
                      <label className="text-primary-600 text-xs md:text-sm mb-1 md:mb-2 block">
                        Empresa donde ocurrió el accidente
                      </label>
                      <input
                        type="text"
                        className="w-full bg-primary-50/50 border border-primary-200 p-3 md:p-4 rounded-md focus:outline-none focus:border-primary-400 transition-colors text-sm md:text-base text-primary-800"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-primary-600 text-xs md:text-sm mb-1 md:mb-2 block">
                      ¿Cuándo ocurrió el accidente?
                    </label>
                    <input
                      type="date"
                      className="w-full bg-primary-50/50 border border-primary-200 p-3 md:p-4 rounded-md focus:outline-none focus:border-primary-400 transition-colors text-sm md:text-base text-primary-800"
                    />
                  </div>

                  <div>
                    <label className="text-primary-600 text-xs md:text-sm mb-1 md:mb-2 block">
                      Breve descripción del accidente
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-primary-50/50 border border-primary-200 p-3 md:p-4 rounded-md focus:outline-none focus:border-primary-400 transition-colors resize-none text-sm md:text-base text-primary-800"
                      placeholder="Cuéntanos brevemente qué pasó"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      className="mt-1 bg-primary-50/50 border border-primary-300 rounded-sm"
                    />
                    <label className="text-xs text-primary-600">
                      Acepto recibir información y ser contactado por Aiello,
                      Argenio & Asociados para asesoramiento legal
                    </label>
                  </div>

                  <button className="group relative overflow-hidden w-full rounded-md">
                    <div className="relative bg-primary-700 text-white p-3 md:p-4 font-semibold z-10 hover:bg-primary-800 transition-colors duration-300 flex items-center justify-center">
                      <span className="tracking-wider text-sm md:text-base">
                        SOLICITAR ASESORAMIENTO GRATUITO
                      </span>
                      <ArrowRight className="ml-2 w-0 group-hover:w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </button>
                </div>
              </form>
            </div>

            {/* Información de contacto adicional */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group flex items-start space-x-4 p-4 rounded-md bg-white hover:bg-primary-50 transition-colors duration-300 border border-primary-100 shadow-sm">
                <div className="p-3 bg-primary-50 rounded-md border border-primary-200 group-hover:bg-white transition-colors duration-300">
                  <Phone size={18} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-xs text-primary-500 mb-1">
                    Teléfono Estudio
                  </p>
                  <a
                    href={`tel:${contactPhoneNumeric}`}
                    className="text-sm text-primary-700 hover:text-primary-900 transition-colors duration-300"
                  >
                    {contactPhone}
                  </a>
                  <p className="text-xs text-primary-500 mt-2 mb-1">
                    Teléfono Médico Legista
                  </p>
                  <a
                    href={`tel:${contactPhoneMedicNumeric}`}
                    className="text-sm text-primary-700 hover:text-primary-900 transition-colors duration-300"
                  >
                    {contactPhoneMedic}
                  </a>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-md bg-white hover:bg-primary-50 transition-colors duration-300 border border-primary-100 shadow-sm">
                <div className="p-3 bg-primary-50 rounded-md border border-primary-200 group-hover:bg-white transition-colors duration-300 flex-shrink-0">
                  {" "}
                  {/* Added flex-shrink-0 */}
                  <Mail size={18} className="text-primary-600" />
                </div>
                {/* Contenedor de texto para emails */}
                <div className="flex flex-col">
                  {" "}
                  {/* Added flex flex-col */}
                  <div>
                    {" "}
                    {/* Contenedor para el primer email */}
                    <p className="text-xs text-primary-500 mb-1">
                      Email Estudio
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-sm text-primary-700 hover:text-primary-900 transition-colors duration-300 break-all"
                    >
                      {contactEmail}
                    </a>{" "}
                    {/* Added break-all */}
                  </div>
                  {/* Email del Médico Legista en la tarjeta */}
                  <div className="mt-2">
                    {" "}
                    {/* Contenedor para el segundo email con margen superior */}
                    <p className="text-xs text-primary-500 mb-1">
                      Email Médico Legista
                    </p>
                    <a
                      href="mailto:osvaldo.ar.genio@hotmail.com"
                      className="text-sm text-primary-700 hover:text-primary-900 transition-colors duration-300"
                    >
                      osvaldo.ar.genio@hotmail
                      <wbr />
                      .com
                    </a>{" "}
                    {/* Added break-all */}
                  </div>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-md bg-white hover:bg-primary-50 transition-colors duration-300 border border-primary-100 shadow-sm">
                <div className="p-3 bg-primary-50 rounded-md border border-primary-200 group-hover:bg-white transition-colors duration-300">
                  <MapPin size={18} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-xs text-primary-500 mb-1">Horario</p>
                  <p className="text-sm text-primary-700 mb-1">
                    Lunes, Miércoles y Jueves de 16:00 a 19:00
                  </p>
                  {/* Ubicación del estudio */}
                  <p className="text-xs text-primary-500 mb-1">Ubicacion</p>
                  <p className="text-sm text-primary-700 mt-1">
                    Av. Lope de Vega 1133 Piso 6 "B", CABA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Rediseñado con paleta de azules */}
      <footer className="bg-primary-800 py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Logo y Navegación - Apilados en móvil, en fila en desktop */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
            <div className="text-lg md:text-xl font-bold tracking-wider text-white mb-6 md:mb-0">
              AIELLO, ARGENIO & ASOCIADOS
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:flex md:space-x-6 lg:space-x-8">
              {[
                "Inicio",
                "Nosotros",
                "Servicios",
                "Testimonios",
                "Contacto",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-primary-100 hover:text-white transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center md:text-left">
            <div>
              <h4 className="text-primary-200 font-semibold mb-3">Contacto</h4>
              <p className="text-primary-100 text-sm mb-1">
                <Phone size={14} className="inline mr-2" />
                {contactPhone}
              </p>
              <p className="text-primary-100 text-sm">
                <Mail size={14} className="inline mr-2" />
                {contactEmail}
              </p>
            </div>

            <div>
              <h4 className="text-primary-200 font-semibold mb-3">Dirección</h4>
              <p className="text-primary-100 text-sm">
                <MapPin size={14} className="inline mr-2" />
                {contactAddress}
              </p>
            </div>

            <div>
              <h4 className="text-primary-200 font-semibold mb-3">
                Horario de atención
              </h4>
              <p className="text-primary-100 text-sm">
                <Clock size={14} className="inline mr-2" />
                Lunes, Miércoles y Jueves de 16:00 a 19:00
              </p>
            </div>
          </div>

          {/* Copyright - Mobile First */}
          <div className="border-t border-primary-700/50 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <a
              href="https://luco-soft.com"
              className="text-primary-200 text-xs md:text-sm mb-3 md:mb-0"
            >
              &copy; {new Date().getFullYear()} Lu&Co Soft. Sitio desarrollado
              para Aiello, Argenio & Asociados.
            </a>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-200 hover:text-primary-50 transition-colors duration-300"
                aria-label="Términos y condiciones"
              >
                <FileText size={16} />
              </a>
              <a
                href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20gratuita.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-primary-50 transition-colors duration-300"
                aria-label="Contactar por WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4">
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente de carrusel de servicios para móvil actualizado con paleta más seria
function ServicesMobileCarousel({
  services,
  activeSlide,
  setActiveSlide,
  sliderRef,
  prevSlide,
  nextSlide,
}: {
  services: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  activeSlide: number;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
  sliderRef: React.RefObject<HTMLDivElement>;
  prevSlide: () => void;
  nextSlide: () => void;
}) {
  return (
    <div className="md:hidden">
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full text-primary-700 hover:bg-primary-100 transition-colors shadow-sm"
          aria-label="Servicio anterior"
        >
          <ChevronLeft size={16} />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div key={index} className="min-w-full snap-center px-4">
              <div className="bg-white border border-primary-200 hover:border-primary-400 p-5 rounded-md h-full flex flex-col transition-all duration-300 shadow-sm">
                <div className="p-3 inline-flex rounded-full bg-primary-100 text-primary-700 mb-3 self-start">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-primary-800">
                  {service.title}
                </h4>
                <p className="text-primary-700 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="text-primary-700 hover:text-primary-800 text-sm mt-auto self-end flex items-center font-medium"
                >
                  Consultar <ArrowRight size={12} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full text-primary-700 hover:bg-primary-100 transition-colors shadow-sm"
          aria-label="Siguiente servicio"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-primary-600 w-6"
                : "bg-primary-200 w-2"
            }`}
            aria-label={`Ir a servicio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Componente de carrusel de testimonios para móvil
function TestimonialsMobileCarousel({
  testimonials,
  activeTestimonial,
  setActiveTestimonial,
  testimonialSliderRef,
  prevTestimonial,
  nextTestimonial,
}: {
  testimonials: Array<{ text: string; name: string; type: string }>;
  activeTestimonial: number;
  setActiveTestimonial: React.Dispatch<React.SetStateAction<number>>;
  testimonialSliderRef: React.RefObject<HTMLDivElement>;
  prevTestimonial: () => void;
  nextTestimonial: () => void;
}) {
  return (
    <div className="lg:hidden mb-8">
      <div className="relative">
        <button
          onClick={prevTestimonial}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
          aria-label="Testimonio anterior"
        >
          <ChevronLeft size={16} />
        </button>

        <div
          ref={testimonialSliderRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full snap-center px-4">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg h-full flex flex-col border border-zinc-800">
                <div className="flex mb-4 space-x-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      size={16}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
                <p className="mb-5 text-white/80 italic leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-3 pt-4 border-t border-zinc-800/30">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#9F7C27] flex items-center justify-center uppercase text-black font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-[#D4AF37] font-bold">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/50 text-xs">
                        {testimonial.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
          aria-label="Siguiente testimonio"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeTestimonial === index
                ? "bg-[#D4AF37] w-6"
                : "bg-white/30 w-2"
            }`}
            aria-label={`Ir a testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const aboutCards = [
  {
    icon: <GraduationCap size={20} className="md:w-6 md:h-6" />,
    title: "Experiencia",
    description:
      "Más de 20 años representando a clientes en casos laborales complejos.",
  },
  {
    icon: <Users size={20} className="md:w-6 md:h-6" />,
    title: "Equipo especializado",
    description:
      "Abogados con formación específica en todas las áreas del derecho laboral.",
  },
  {
    icon: <Handshake size={20} className="md:w-6 md:h-6" />,
    title: "Compromiso",
    description: "Atención personalizada y seguimiento constante de cada caso.",
  },
  {
    icon: <Shield size={20} className="md:w-6 md:h-6" />,
    title: "Confianza",
    description:
      "Procesos transparentes y comunicación clara durante todo el proceso.",
  },
];

const stats = [
  {
    icon: <Trophy className="text-[#D4AF37] mx-auto" size={24} />,
    value: "20+",
    label: "Años de Experiencia",
  },
  {
    icon: <Scale className="text-[#D4AF37] mx-auto" size={24} />,
    value: "2600+",
    label: "Casos Exitosos",
  },
];

// Datos de testimonios
const testimonials = [
  {
    name: "Juan Pérez",
    type: "Trabajador de la Construcción",
    text: "Tuve un accidente en la obra y la ART no se hacía cargo como correspondía. Gracias al asesoramiento recibido, pude reclamar y conseguir la indemnización justa por mi incapacidad. Muy recomendables.",
  },
  {
    name: "Carlos Rodríguez",
    type: "Operario Industrial",
    text: "Después de un accidente en la planta, quedé con secuelas y la ART me dio el alta rápido. Me puse en contacto y me ayudaron a pelear por el reconocimiento de mi incapacidad real. Lograron que me paguen lo que me correspondía.",
  },
  {
    name: "Laura Fernández",
    type: "Empleada Administrativa",
    text: "Tenía problemas con el pago de mis horas extras. Gracias al estudio, pude regularizar mi situación y cobrar lo que me debían. Excelente atención y resultados.",
  },
];

export default App;
