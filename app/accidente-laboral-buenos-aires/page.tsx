"use client"
import { ArrowRight, Check, Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const AccidenteLaboral = () => {
  // Datos de contacto como variables
  const contactPhone = "+54 (11) 3002-3117";
  const contactPhoneNumeric = "5491130023117";
  const contactEmail = "aielloargenio@gmail.com";

  return (
    <div className="min-h-screen bg-black text-white font-['Timeless',serif]">
      {/* Mensaje principal destacado arriba de todo - NUEVO */}
      <div className="bg-[#D4AF37] text-black py-3 md:py-4 px-4 md:px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-black/10 rounded-full flex items-center justify-center mr-3">
              <Phone size={14} className="text-black" />
            </div>
            <p className="font-medium text-sm md:text-base">¿Necesitas ayuda con tu accidente laboral? <span className="hidden md:inline">Consulta de forma gratuita con abogados especialistas</span></p>
          </div>
          <a 
            href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20tuve%20un%20accidente%20laboral%20y%20necesito%20asesoramiento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white text-xs md:text-sm px-3 py-1 rounded-full flex items-center hover:bg-zinc-800 transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 flex-shrink-0">
              <path 
                fill="currentColor" 
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            Consultar ahora
          </a>
        </div>
      </div>
      {/* Header con navegación simple */}
      <header className="relative bg-black/90 border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-5 flex justify-between items-center">
          <Link href="/" className="relative">
            <div className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C76B]">
              AIELLO, ARGENIO & ASOC.
            </div>
            <div className="absolute -bottom-1 left-0 w-1/2 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
          </Link>
          
          <Link 
            href="/"
            className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Hero del blog */}
      <div className="relative py-10 md:py-16 bg-[url('/accidente-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C76B]">
            ¿Sufriste un accidente laboral? Conoce tus derechos
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light">
            Guía práctica para trabajadores industriales en Argentina
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <main className="py-8 md:py-12 px-4 md:px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          {/* Banner destacado */}
          <div className="mb-8 p-4 md:p-6 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-4">
              <Check size={20} className="text-[#D4AF37]" />
            </div>
            <p className="text-sm md:text-base">
              <span className="font-semibold text-[#D4AF37]">IMPORTANTE:</span> No firmes ningún documento sin asesoramiento legal. La consulta con nosotros es <span className="font-semibold text-[#D4AF37]">totalmente gratuita</span>
            </p>
          </div>

          {/* Introducción */}
          <div className="prose prose-invert prose-headings:text-[#D4AF37] prose-a:text-[#D4AF37] max-w-none mb-10">
            <p className="text-lg md:text-xl font-light mb-6">
              Los accidentes laborales son situaciones inesperadas que pueden ocurrir en cualquier momento. Como trabajador en Argentina, tienes derechos que te protegen en caso de sufrir un accidente en tu lugar de trabajo.
            </p>
            <p className="text-white/80 mb-6">
              En este artículo, te explicamos <span className="text-[#D4AF37]">paso a paso qué hacer si sufres un accidente laboral</span>, de manera simple y directa.
            </p>
          </div>

          {/* Pasos principales */}
          <div className="space-y-10 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#D4AF37]">1. Primeros pasos inmediatos</h2>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 md:p-6">
                <ul className="space-y-4 text-white/80">
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span><span className="font-medium text-white">Avisa a tu supervisor inmediatamente</span>. Por ley, debes informar el accidente lo antes posible.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span><span className="font-medium text-white">Busca atención médica</span>. Tu salud es lo primero. Acude al servicio médico de la empresa o a una guardia.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span><span className="font-medium text-white">Pide que documenten tus lesiones</span>. Es importante tener un registro médico oficial desde el primer momento.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span><span className="font-medium text-white">Guarda toda la documentación</span> que te entreguen, sin excepción.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#D4AF37]">2. Denuncia el accidente</h2>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 md:p-6">
                <ul className="space-y-4 text-white/80">
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>Tu empleador debe <span className="font-medium text-white">denunciar el accidente a la ART</span> (Aseguradora de Riesgos del Trabajo) dentro de las 48 horas.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>Si tu empleador no lo hace, <span className="font-medium text-white">puedes hacer la denuncia tú mismo</span> llamando directamente a la ART.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>Anota el <span className="font-medium text-white">número de siniestro</span> que te asignen. Lo necesitarás para todos los trámites.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#D4AF37]">3. Durante tu recuperación</h2>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 md:p-6">
                <ul className="space-y-4 text-white/80">
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>La ART <span className="font-medium text-white">debe cubrir todos tus gastos médicos</span> relacionados con el accidente.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>También debe <span className="font-medium text-white">pagarte un salario mientras no puedas trabajar</span> (Incapacidad Laboral Temporaria).</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span><span className="font-medium text-white">Cumple con los tratamientos</span>. Faltar a las citas médicas puede afectar tus beneficios.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span><span className="font-medium text-white">Guarda copia de todos los certificados médicos</span> que te entreguen.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#D4AF37]">4. Problemas comunes y alertas</h2>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 md:p-6">
                <div className="mb-4 p-3 bg-red-900/20 border border-red-800/30 rounded-md">
                  <p className="text-white font-medium">¡ATENCIÓN! Situaciones que requieren asesoramiento legal inmediato:</p>
                </div>
                <ul className="space-y-4 text-white/80">
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>Si la ART <span className="font-medium text-white">rechaza tu reclamo</span> o dice que no fue un accidente laboral.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>Si te <span className="font-medium text-white">presionan para volver al trabajo</span> antes de estar recuperado.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>Si te <span className="font-medium text-white">ofrecen firmar un acuerdo</span> o renuncia.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>Si te <span className="font-medium text-white">dan el alta médica</span> pero sigues con problemas de salud.</span>
                  </li>
                  <li className="flex">
                    <span className="text-[#D4AF37] font-bold mr-2">•</span>
                    <span>Si la empresa <span className="font-medium text-white">te despide después de un accidente</span>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* Más información */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#D4AF37]">Tus derechos como trabajador accidentado</h2>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 md:p-6 space-y-5">
              <p className="text-white/80">La Ley de Riesgos del Trabajo (N° 24.557) establece que tienes derecho a:</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-md">
                  <h3 className="font-semibold text-[#D4AF37] mb-2">Atención médica completa</h3>
                  <p className="text-sm text-white/70">Todos los gastos médicos, medicamentos y rehabilitación deben ser cubiertos por la ART.</p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-md">
                  <h3 className="font-semibold text-[#D4AF37] mb-2">Salario durante la recuperación</h3>
                  <p className="text-sm text-white/70">Recibirás un pago mensual mientras estés de licencia por el accidente.</p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-md">
                  <h3 className="font-semibold text-[#D4AF37] mb-2">Indemnización por lesiones</h3>
                  <p className="text-sm text-white/70">Si quedas con alguna incapacidad permanente, tienes derecho a una compensación.</p>
                </div>
                
                <div className="bg-black/30 p-4 rounded-md">
                  <h3 className="font-semibold text-[#D4AF37] mb-2">Recalificación laboral</h3>
                  <p className="text-sm text-white/70">Si no puedes volver a tu trabajo anterior, la ART debe ayudarte a capacitarte para otro puesto.</p>
                </div>
              </div>
              
              <p className="text-white/70 text-sm italic">
                La ley está de tu lado, pero muchas veces las ART y empresas intentan minimizar sus responsabilidades. Por eso es importante contar con asesoramiento legal especializado.
              </p>
            </div>
          </div>

          {/* Formulario de contacto - Mobile First */}
          <div id="form-contacto" className="scroll-mt-10">
            <div className="mb-6 md:mb-8 text-center">
              <h2 className="inline-block relative">
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C76B]">
                  CONSULTA GRATUITA
                </span>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              </h2>
              
              <div className='mt-8'>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Recibí asesoramiento especializado sobre tu accidente laboral sin ningún compromiso.
              Nuestros abogados están a tu disposición para ayudarte a obtener la compensación que mereces.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a 
                href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20tuve%20un%20accidente%20laboral%20y%20necesito%20asesoramiento%20gratuito.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#17a14a] hover:bg-[#20c25e] text-white px-8 py-4 rounded-md transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 mr-2">
                  <path 
                    fill="currentColor" 
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                <span className="font-medium">CONTACTAR POR WHATSAPP</span>
              </a>
            </div>
            
            <div className="text-white/60 text-sm">
              O agendanos, llamanos o mandanos mensaje
              <div className="mt-2 text-[#D4AF37] font-bold text-lg">
                {contactPhone}
              </div>
            </div>
              </div>

              <p className="mt-6 text-white/80 max-w-2xl mx-auto">
                O sino podes completar el formulario y un abogado especialista se comunicará contigo en menos de 24 horas.
              </p>
            </div>
            
            <form className="relative p-6 md:p-8 bg-black/30 backdrop-blur-sm rounded-md border border-zinc-800/50">
              <div className="absolute -top-5 -right-5 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
              <div className="space-y-4 md:space-y-6 relative z-10">
                <div>
                  <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">Nombre completo</label>
                  <input
                    type="text"
                    className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors text-sm md:text-base"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors text-sm md:text-base"
                      placeholder="Tu número de contacto"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">Empresa donde ocurrió el accidente</label>
                    <input
                      type="text"
                      className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors text-sm md:text-base"
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">¿Cuándo ocurrió el accidente?</label>
                  <input
                    type="date"
                    className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label className="text-white/60 text-xs md:text-sm mb-1 md:mb-2 block">Breve descripción del accidente</label>
                  <textarea
                    rows={3}
                    className="w-full bg-black/60 border border-zinc-800 p-3 md:p-4 rounded-md focus:outline-none focus:border-[#D4AF37] transition-colors resize-none text-sm md:text-base"
                    placeholder="Cuéntanos brevemente qué pasó"
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1 bg-black/60 border border-zinc-800" />
                  <label className="text-xs text-white/70">
                    Acepto recibir información y ser contactado por Aiello, Argenio & Asociados para asesoramiento legal
                  </label>
                </div>
                
                <button className="group relative overflow-hidden w-full rounded-md">
                  <div className="relative bg-[#D4AF37] text-black p-3 md:p-4 font-semibold z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <span className="tracking-wider text-sm md:text-base">SOLICITAR ASESORAMIENTO GRATUITO</span>
                    <ArrowRight className="ml-2 w-0 group-hover:w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
              {/* Opciones de contacto - NUEVO */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">

              </div>
            </form>
          </div>
          
          {/* Información de contacto directo */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-md border border-zinc-800/50 hover:border-[#D4AF37]/20 transition-colors duration-300">
              <Phone size={20} className="text-[#D4AF37] mx-auto mb-2" />
              <h3 className="text-sm font-medium text-white/70 mb-1">Teléfono</h3>
              <a href={`tel:${contactPhoneNumeric}`} className="text-white hover:text-[#D4AF37] transition-colors duration-300">{contactPhone}</a>
            </div>
            
            <div className="p-4 rounded-md border border-zinc-800/50 hover:border-[#D4AF37]/20 transition-colors duration-300">
              <Mail size={20} className="text-[#D4AF37] mx-auto mb-2" />
              <h3 className="text-sm font-medium text-white/70 mb-1">Email</h3>
              <a href={`mailto:${contactEmail}`} className="text-white hover:text-[#D4AF37] transition-colors duration-300">{contactEmail}</a>
            </div>
            
            <div className="p-4 rounded-md border border-zinc-800/50 hover:border-[#D4AF37]/20 transition-colors duration-300">
              <MapPin size={20} className="text-[#D4AF37] mx-auto mb-2" />
              <h3 className="text-sm font-medium text-white/70 mb-1">Horario de atención</h3>
              <p className="text-white">Lunes, Miércoles y Jueves de 16:00 a 19:00</p>
            </div>
          </div>
        </div>
      </main>


      {/* Footer simple */}
      <footer className="bg-black py-6 md:py-8 px-4 md:px-6 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-bold mb-4">AIELLO, ARGENIO & ASOC.</div>
          <div className="text-white/40 text-xs">&copy; 2025 Lu&Co Soft. Sitio desarrollado para Aiello, Argenio & Asociados.</div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-30">
        <a 
          href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20tuve%20un%20accidente%20laboral%20y%20necesito%20asesoramiento.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-black/30 animate-pulse hover:animate-none"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path 
              fill="currentColor" 
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default AccidenteLaboral