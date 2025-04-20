"use client"
import { Scale, Users, Trophy, MessageSquare, Phone, Mail, MapPin, ChevronDown, ArrowRight, Briefcase, GraduationCap, FileText, Handshake, Clock, Shield, Star, ChevronLeft, ChevronRight, MessageCircle, Check, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

// Definir las constantes antes de usarlas
const featuredServices = [
  {
    icon: <Shield size={28} />,
    title: "Accidentes Laborales",
    description: "Representación especializada en casos de accidentes de trabajo, enfermedades profesionales y reclamos de ART. Obtenga la compensación que merece con nuestro apoyo experto.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Despidos y Desvinculaciones",
    description: "Asesoramiento integral y representación en casos de despidos injustificados. Protegemos sus derechos y buscamos la mejor indemnización posible según la legislación vigente.",
  }
]

const otherServices = [
  {
    icon: <FileText size={24} />,
    title: "Contratos Laborales",
    description: "Redacción, revisión y negociación de contratos laborales."
  },
  {
    icon: <Users size={24} />,
    title: "Conflictos Sindicales",
    description: "Mediación en conflictos entre empresas y sindicatos."
  },
  {
    icon: <Scale size={24} />,
    title: "Litigios Laborales",
    description: "Representación en juicios y audiencias de conciliación."
  },
  {
    icon: <Clock size={24} />,
    title: "Asesoría Preventiva",
    description: "Consultoría legal preventiva para empresas."
  }
]

function App() {
  // Datos de contacto como variables
  const contactPhone = "+54 (11) 3002-3117";
  const contactPhoneNumeric = "5491130023117";
  const contactEmail = "aieloargenio@gmail.com";
  const contactAddress = "Av. Lope de Vega 1133 6to Piso Dto B, Villa Luro, CABA";
  
  // Estado para menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Estado para el carrusel de servicios móvil
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = otherServices.length;
  
  // Estado adicional para el carrusel de testimonios
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const totalTestimonials = testimonials.length;
  
  // Referencias para los contenedores de carrusel
  const sliderRef = useRef(null);
  const testimonialSliderRef = useRef(null);
  
  // Manejar navegación del carrusel de servicios
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  // Manejar navegación del carrusel de testimonios
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === totalTestimonials - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? totalTestimonials - 1 : prev - 1));
  };
  
  // Efecto para desplazar el carrusel de servicios cuando cambia el slide activo
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.scrollTo({
        left: activeSlide * slider.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [activeSlide]);

  // Efecto para desplazar el carrusel de testimonios
  useEffect(() => {
    if (testimonialSliderRef.current) {
      const slider = testimonialSliderRef.current;
      slider.scrollTo({
        left: activeTestimonial * slider.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [activeTestimonial]);
  
  // Cerrar menú móvil al hacer clic en un enlace
  const handleNavLinkClick = (e) => {
    setMobileMenuOpen(false);
  };
  
  // Bloquear desplazamiento cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-black text-white font-['Timeless',serif]">
      {/* Decorative Elements - minimizados en mobile */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none overflow-hidden opacity-40 md:opacity-100">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 md:w-64 md:h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] md:blur-[150px]"></div>
      </div>

      {/* Hero Section */}
      <header className="relative min-h-[100svh] bg-[url('/hero-bg-mobile.jpg')] md:bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]"></div>
        
        {/* Navbar - Mobile First */}
        <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-[#D4AF37]/10">
          <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-5 flex justify-between items-center">
            <div className="relative">
              <div className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C76B]">
                AIELLO, ARGENIO & ASOC.
              </div>
              <div className="absolute -bottom-1 left-0 w-1/2 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            
            {/* Menú Desktop */}
            <div className="hidden md:flex space-x-8 lg:space-x-10">
              {['Inicio', 'Sobre Nosotros', 'Servicios', 'Testimonios', 'Contacto'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative group font-light tracking-wide"
                >
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Botón de menú móvil */}
            <button 
              className="md:hidden flex items-center justify-center w-10 h-10 text-[#D4AF37]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        
        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center md:hidden">
            <div className="flex flex-col items-center space-y-8 px-6">
              {['Inicio', 'Sobre Nosotros', 'Servicios', 'Testimonios', 'Contacto'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-2xl text-white/90 hover:text-[#D4AF37] transition-colors duration-300"
                  onClick={handleNavLinkClick}
                >
                  {item}
                </a>
              ))}
              <a 
                href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20gratuita%20sobre%20mi%20caso%20laboral.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20c25e] text-white px-6 py-3 rounded-md transition-all duration-300"
                onClick={handleNavLinkClick}
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
            <button 
              className="absolute top-5 right-5 text-[#D4AF37]"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
          </div>
        )}
        
        {/* Hero Content - Mobile First */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-6">
          <div className="relative max-w-4xl">
            {/* Bordes decorativos, reducidos en móvil */}
            <div className="absolute -top-5 -left-5 w-10 h-10 md:w-20 md:h-20 border-l-2 border-t-2 border-[#D4AF37]/30"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C76B] leading-tight">
              EXPERTOS EN<br/>DERECHO LABORAL
            </h1>
            <div className="absolute -bottom-5 -right-5 w-10 h-10 md:w-20 md:h-20 border-r-2 border-b-2 border-[#D4AF37]/30"></div>
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 text-white/80 font-light">
            Protegemos los derechos de trabajadores de <span className="text-[#D4AF37] font-medium">Buenos Aires</span> con más de 20 años de experiencia y excelencia jurídica
          </p>
          
          {/* Botones CTA - Mobile First */}
          <div className="flex flex-col w-full max-w-xs sm:max-w-md sm:flex-row gap-4 sm:gap-6">
            <button className="group relative overflow-hidden rounded-md bg-[#D4AF37] text-black px-6 py-3 md:px-8 md:py-4 font-semibold shadow-lg shadow-[#D4AF37]/20 w-full">
              <a href="#contacto" className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors duration-300">
                CONSULTAR GRATIS
                <ArrowRight className="ml-2 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
            
            <button className="group relative overflow-hidden rounded-md border-2 border-[#D4AF37] px-6 py-3 md:px-8 md:py-4 font-semibold w-full">
              <a href="#servicios" className="relative z-10 flex items-center justify-center text-[#D4AF37] group-hover:text-black transition-colors duration-300">
                NUESTROS SERVICIOS
                <ArrowRight className="ml-2 w-0 group-hover:w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </div>
          
          {/* Indicador de scroll - Solo visible en pantallas más grandes */}
          <div className="absolute bottom-10 hidden md:flex flex-col items-center">
            <p className="text-white/60 text-sm mb-3 tracking-widest">CONOZCA MÁS</p>
            <ChevronDown className="text-[#D4AF37] animate-bounce" size={24} />
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
              <MessageCircle size={28} className="text-white" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section - Mobile First */}
      <section id="sobre-nosotros" className="py-16 md:py-20 lg:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 lg:mb-24 text-center">
            <h2 className="inline-block relative">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C76B]">
                SOBRE NOSOTROS
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mt-8 md:mt-12 text-white/80 leading-relaxed">
              Somos un estudio jurídico especializado en derecho laboral con más de 20 años de trayectoria, brindando asesoramiento legal de excelencia tanto a empresas como a trabajadores. Nuestro compromiso es ofrecer soluciones eficientes y personalizadas para cada caso.
            </p>
          </div>
          
          {/* Tarjetas - Mobile First (2 columnas en móvil, 4 en desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {aboutCards.map((card, index) => (
              <div key={index} 
                className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-[#D4AF37]/30 p-6 md:p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/5"
              >
                <div className="p-3 mb-4 md:mb-5 inline-flex rounded-full bg-black/50 text-[#D4AF37]">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 md:mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">{card.title}</h3>
                <p className="text-sm md:text-base text-white/70 font-light">{card.description}</p>
              </div>
            ))}
          </div>
          
          {/* Estadísticas - Apiladas en móvil, en fila en desktop */}
          <div className="mt-12 md:mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 justify-center max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} 
                className="group relative overflow-hidden rounded-md bg-gradient-to-br from-zinc-900/80 to-black p-6 md:p-8 text-center border border-zinc-800 hover:border-[#D4AF37]/20 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:w-full group-hover:h-full transition-all duration-700"></div>
                <div className="relative z-10">
                  {stat.icon}
                  <h3 className="text-3xl md:text-4xl font-bold my-2 md:my-3 group-hover:text-[#D4AF37] transition-colors duration-300">{stat.value}</h3>
                  <p className="text-white/70 font-light">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA - Mobile First */}
          <div className="mt-12 text-center">
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#E5C76B] text-black px-6 py-3 md:px-8 md:py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/20 group w-full sm:w-auto"
            >
              Consulta ahora
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile First */}
      <section id="servicios" className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-10 md:mb-16 lg:mb-24 text-center">
            <div className="inline-block relative mb-4">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C76B]">
                NUESTROS SERVICIOS
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </div>
            
            {/* Banner consultas gratuitas - Mobile First */}
            <div className="max-w-3xl mx-auto mt-8 md:mt-10 mb-6 md:mb-8 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg p-3 md:p-4 flex flex-col sm:flex-row items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                <Check size={20} className="text-[#D4AF37]" />
              </div>
              <p className="text-center sm:text-left text-base md:text-lg mb-2 sm:mb-0">
                Todas nuestras <span className="font-semibold text-[#D4AF37]">consultas iniciales son gratuitas</span>
              </p>
              <a 
                href="#contacto" 
                className="ml-0 sm:ml-4 bg-[#D4AF37] hover:bg-[#c9a431] text-black px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Contactar
              </a>
            </div>
            
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Especialistas en <span className="text-[#D4AF37] font-semibold">accidentes laborales</span> y <span className="text-[#D4AF37] font-semibold">despidos injustificados</span>, brindando asesoramiento legal personalizado.
            </p>
          </div>
          
          {/* Servicios destacados - Mobile First */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {featuredServices.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-zinc-900 to-black border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10 transform hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0">
                  <div className="bg-[#D4AF37] text-black text-xs font-bold py-1 px-3 rounded-bl-lg">
                    ESPECIALISTAS
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="p-2 md:p-3 inline-flex rounded-full bg-[#D4AF37]/10 text-[#D4AF37] mr-3 md:mr-4 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm md:text-base text-white/70 font-light leading-relaxed grow mb-5 md:mb-6">
                    {service.description}
                  </p>
                  
                  <a 
                    href="#contacto" 
                    className="self-center w-full bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black py-3 px-4 md:px-6 rounded-md flex items-center justify-center text-sm font-medium transition-all duration-300 border border-[#D4AF37]/30 hover:border-[#D4AF37]"
                  >
                    <span>Consultar ahora</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carrusel de servicios en móvil */}
          <div className="mb-10 md:mb-0">
            <div className="flex items-center justify-center mb-6">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-12 mr-3"></div>
              <h3 className="text-lg md:text-xl font-semibold text-white/90 text-center">Otros servicios legales</h3>
              <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-12 ml-3"></div>
            </div>
            
            {/* Componente de carrusel para móvil */}
            <ServicesMobileCarousel 
              services={otherServices}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
              sliderRef={sliderRef}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
            />
            
            {/* Grid de servicios para desktop */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {otherServices.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-zinc-900/50 border border-zinc-800 hover:border-[#D4AF37]/30 p-5 md:p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50"
                >
                  <div className="p-2 md:p-3 mb-3 md:mb-4 inline-flex rounded-full bg-black/50 text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">{service.title}</h4>
                  <p className="text-sm text-white/70 font-light">{service.description}</p>
                  <a href="#contacto" className="text-[#D4AF37]/80 text-xs md:text-sm mt-3 md:mt-4 inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Consultar gratis <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA - Mobile First */}
          <div className="mt-10 md:mt-16 text-center">
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#E5C76B] text-black px-8 py-3 md:px-10 md:py-4 rounded-md font-semibold text-base md:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/20 group w-full sm:w-auto"
            >
              Consulta ahora
              <ArrowRight size={20} className="ml-2 md:ml-3 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mobile First */}
      <section id="testimonios" className="py-16 md:py-20 lg:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 lg:mb-24 text-center">
            <h2 className="inline-block relative">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C76B]">
                TESTIMONIOS
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </h2>
          </div>
          
          {/* Componente de carrusel de testimonios para móvil */}
          <TestimonialsMobileCarousel 
            testimonials={testimonials}
            activeTestimonial={activeTestimonial}
            setActiveTestimonial={setActiveTestimonial}
            testimonialSliderRef={testimonialSliderRef}
            prevTestimonial={prevTestimonial}
            nextTestimonial={nextTestimonial}
          />
          
          {/* Grid de testimonios para desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative p-0.5 bg-gradient-to-br from-black via-zinc-800/10 to-black rounded-lg">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg"></div>
                <div className="relative bg-zinc-900/50 backdrop-blur-sm z-10 p-6 md:p-8 rounded-lg h-full flex flex-col">
                  <div className="absolute -top-4 left-8 text-[#D4AF37] text-7xl opacity-20 font-serif">"</div>
                  <div className="flex mb-4 md:mb-6 space-x-1">
                    {[1, 2, 3, 4, 5].map(n => (
                      <Star key={n} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="mb-5 md:mb-6 text-sm md:text-base text-white/80 italic leading-relaxed relative z-10">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <div className="flex items-center space-x-3 pt-4 border-t border-zinc-800/30">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#9F7C27] flex items-center justify-center uppercase text-black font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-[#D4AF37] font-bold">{testimonial.name}</h4>
                        <p className="text-white/50 text-xs md:text-sm">{testimonial.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA - Mobile First */}
          <div className="mt-10 text-center">
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#E5C76B] text-black px-6 py-3 md:px-8 md:py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/20 group w-full sm:w-auto"
            >
              Consulta ahora
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile First */}
      <section id="contacto" className="relative py-16 md:py-20 lg:py-32 px-4 md:px-6 bg-zinc-950">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-10 md:mb-16 lg:mb-24 text-center">
            <h2 className="inline-block relative">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C76B]">
                CONTACTO
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </h2>
            
            <div className="max-w-3xl mx-auto mt-8 md:mt-10 mb-6 md:mb-8 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg p-3 md:p-4 flex items-center justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-3">
                <Check size={16} className="text-[#D4AF37]" />
              </div>
              <p className="text-sm md:text-lg">
                <span className="font-semibold text-[#D4AF37]">Primera consulta totalmente gratuita</span>
              </p>
            </div>
          </div>
          
          {/* Información de contacto y formulario - Apilados en móvil, en fila en desktop */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-8 lg:gap-16">
            {/* Información de contacto - Mobile First */}
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <div className="relative">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-8 pl-6 border-l border-[#D4AF37]/40">Información de Contacto</h3>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <div className="group flex items-start space-x-4 p-3 md:p-4 rounded-md hover:bg-zinc-900/50 transition-colors duration-300">
                  <div className="p-2 md:p-3 bg-black rounded-md border border-zinc-800 group-hover:border-[#D4AF37]/30 transition-colors duration-300">
                    <Phone size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-white/50 mb-1">Teléfono</p>
                    <a href={`tel:${contactPhoneNumeric}`} className="text-sm md:text-base text-white/90 hover:text-[#D4AF37] transition-colors duration-300">{contactPhone}</a>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4 p-3 md:p-4 rounded-md hover:bg-zinc-900/50 transition-colors duration-300">
                  <div className="p-2 md:p-3 bg-black rounded-md border border-zinc-800 group-hover:border-[#D4AF37]/30 transition-colors duration-300">
                    <Mail size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-white/50 mb-1">Email</p>
                    <a href={`mailto:${contactEmail}`} className="text-sm md:text-base text-white/90 hover:text-[#D4AF37] transition-colors duration-300">{contactEmail}</a>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4 p-3 md:p-4 rounded-md hover:bg-zinc-900/50 transition-colors duration-300">
                  <div className="p-2 md:p-3 bg-black rounded-md border border-zinc-800 group-hover:border-[#D4AF37]/30 transition-colors duration-300">
                    <MapPin size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-white/50 mb-1">Dirección</p>
                    <p className="text-sm md:text-base text-white/90">{contactAddress}</p>
                  </div>
                </div>
              </div>
              
              {/* Botón WhatsApp - Mobile First */}
              <a 
                href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20gratuita%20sobre%20mi%20caso%20laboral.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20c25e] text-white p-3 md:p-4 rounded-md transition-all duration-300 transform hover:scale-105 w-full shadow-lg"
              >
                <div className="relative">
                  <MessageCircle size={20} className="fill-white text-[#25D366] mr-2" />
                  <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                </div>
                <span className="font-medium">Consultar por WhatsApp</span>
              </a>
              <p className="text-white/70 text-center text-xs md:text-sm">Consultas gratuitas para residentes de Buenos Aires</p>
              
              {/* Horario de atención - Mobile First */}
              <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-zinc-800/50">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-[#D4AF37]">Horario de Atención</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/50 text-xs md:text-sm">Lunes a Viernes</p>
                    <p className="text-sm md:text-base text-white/90">9:00 - 18:00</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs md:text-sm">Sábados</p>
                    <p className="text-sm md:text-base text-white/90">10:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formulario de contacto - Mobile First */}
            <form className="relative p-6 md:p-8 bg-black/30 backdrop-blur-sm rounded-md border border-zinc-800/50 order-1 md:order-2">
              <div className="absolute -top-5 -right-5 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
              <div className="space-y-4 md:space-y-6 relative z-10">
                <div>
                  <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">Nombre completo</label>
                  <input
                    type="text"
                    className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors text-sm md:text-base"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">Correo electrónico</label>
                  <input
                    type="email"
                    className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors text-sm md:text-base"
                    placeholder={contactEmail}
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors text-sm md:text-base"
                    placeholder={contactPhone}
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">Asunto</label>
                  <select className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors text-sm md:text-base">
                    <option>Consulta General</option>
                    <option>Despido Laboral</option>
                    <option>Accidente de Trabajo</option>
                    <option>Conflicto Sindical</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">Mensaje</label>
                  <textarea
                    rows={3}
                    className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors resize-none text-sm md:text-base"
                    placeholder="Describa brevemente su caso"
                  ></textarea>
                </div>
                <button className="group relative overflow-hidden w-full rounded-md">
                  <div className="relative bg-[#D4AF37] text-black p-3 md:p-4 font-semibold z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <span className="tracking-wider text-sm md:text-base">ENVIAR CONSULTA</span>
                    <ArrowRight className="ml-2 w-0 group-hover:w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Mobile First */}
      <footer className="bg-black py-8 md:py-10 px-4 md:px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          {/* Logo y Navegación - Apilados en móvil, en fila en desktop */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
            <div className="text-lg md:text-xl font-bold tracking-wider text-[#D4AF37] mb-6 md:mb-0">AIELLO, ARGENIO & ASOCIADOS</div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:flex md:space-x-6 lg:space-x-8">
              {['Inicio', 'Sobre Nosotros', 'Servicios', 'Testimonios', 'Contacto'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Copyright - Mobile First */}
          <div className="border-t border-zinc-900 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-white/40 text-xs md:text-sm mb-3 md:mb-0">&copy; 2025 Aiello, Argenio & Asociados. Todos los derechos reservados.</div>
            <div className="text-white/40 text-xs md:text-sm">Desarrollado por un experto en UI/UX</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Componente de carrusel de servicios para móvil
function ServicesMobileCarousel({ services, activeSlide, setActiveSlide, sliderRef, prevSlide, nextSlide }) {
  return (
    <div className="md:hidden">
      <div className="relative">
        <button 
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
          aria-label="Servicio anterior"
        >
          <ChevronLeft size={16} />
        </button>
        
        <div 
          ref={sliderRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="min-w-full snap-center px-4"
            >
              <div className="bg-zinc-900/70 border border-zinc-800 hover:border-[#D4AF37]/30 p-5 rounded-md h-full flex flex-col transition-all duration-300">
                <div className="p-2 inline-flex rounded-full bg-black/50 text-[#D4AF37] mb-3 self-start">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-[#D4AF37]">{service.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{service.description}</p>
                <a href="#contacto" className="text-[#D4AF37] text-sm mt-auto self-end flex items-center">
                  Consultar <ArrowRight size={12} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
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
              activeSlide === index ? 'bg-[#D4AF37] w-6' : 'bg-white/30 w-2'
            }`}
            aria-label={`Ir a servicio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Componente de carrusel de testimonios para móvil
function TestimonialsMobileCarousel({ testimonials, activeTestimonial, setActiveTestimonial, testimonialSliderRef, prevTestimonial, nextTestimonial }) {
  return (
    <div className="lg:hidden relative">
      <div className="relative">
        {/* Navegación del carrusel */}
        <button 
          onClick={prevTestimonial}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
          aria-label="Testimonio anterior"
        >
          <ChevronLeft size={16} />
        </button>
        
        <div 
          ref={testimonialSliderRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="min-w-full snap-center px-4"
            >
              <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-lg h-full flex flex-col transition-all duration-300">
                <div className="absolute -top-3 left-6 text-[#D4AF37] text-5xl md:text-7xl opacity-20 font-serif">"</div>
                <div className="flex mb-4 md:mb-6 space-x-1">
                  {[1, 2, 3, 4, 5].map(n => (
                    <Star key={n} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="mb-5 text-sm text-white/80 italic leading-relaxed relative z-10">"{testimonial.text}"</p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-3 pt-4 border-t border-zinc-800/30">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#9F7C27] flex items-center justify-center uppercase text-black font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-[#D4AF37] font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-white/50 text-xs">{testimonial.type}</p>
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
      
      {/* Indicadores de diapositivas */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeTestimonial === index ? 'bg-[#D4AF37] w-6' : 'bg-white/30 w-2'
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
    description: "Más de 20 años representando a clientes en casos laborales complejos."
  },
  {
    icon: <Users size={20} className="md:w-6 md:h-6" />,
    title: "Equipo especializado",
    description: "Abogados con formación específica en todas las áreas del derecho laboral."
  },
  {
    icon: <Handshake size={20} className="md:w-6 md:h-6" />,
    title: "Compromiso",
    description: "Atención personalizada y seguimiento constante de cada caso."
  },
  {
    icon: <Shield size={20} className="md:w-6 md:h-6" />,
    title: "Confianza",
    description: "Procesos transparentes y comunicación clara durante todo el proceso."
  }
]

const stats = [
  { icon: <Trophy className="text-[#D4AF37] mx-auto" size={24} />, value: "20+", label: "Años de Experiencia" },
  { icon: <Scale className="text-[#D4AF37] mx-auto" size={24} />, value: "1700+", label: "Casos Exitosos" }
]

const testimonials = [
  {
    text: "Excelente estudio jurídico. Resolvieron mi caso de despido injustificado con profesionalismo y dedicación, logrando una indemnización justa.",
    name: "Carlos Rodríguez",
    type: "Empleado"
  },
  {
    text: "Como empresa, valoramos enormemente su asesoramiento preventivo. Nos han ayudado a evitar conflictos laborales y a mantener un ambiente de trabajo saludable.",
    name: "María González",
    type: "Gerente de RRHH"
  },
  {
    text: "Después de mi accidente laboral, me sentí completamente respaldado por su equipo. Lograron que recibiera la compensación adecuada de la ART.",
    name: "Pedro Martínez",
    type: "Trabajador industrial"
  }
]

export default App