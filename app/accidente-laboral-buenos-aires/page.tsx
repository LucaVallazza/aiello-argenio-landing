"use client"
import { ArrowRight, Check, Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const AccidenteLaboral = () => {
  // Datos de contacto como variables
  const contactPhone = "+54 (11) 2294-4141";
  const contactPhoneNumeric = "5491122944141";
  const contactEmail = "aielloargenio@gmail.com";

  return (
    <div className="min-h-screen bg-white text-primary-800 font-['Timeless',serif]">
      {/* Mensaje principal destacado arriba de todo - Adaptado a paleta azul */}
      <div className="bg-primary-100 text-primary-800 py-3 md:py-4 px-4 md:px-6 sticky top-0 z-50 border-b border-primary-200">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-primary-200 rounded-full flex items-center justify-center mr-3">
              <Phone size={14} className="text-primary-700" />
            </div>
            <p className="font-medium text-sm md:text-base">
              ¿Necesitas ayuda con tu accidente laboral?{" "}
              <span className="hidden md:inline">
                Consulta de forma gratuita con abogados especialistas
              </span>
            </p>
          </div>
          <a
            href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20tuve%20un%20accidente%20laboral%20y%20necesito%20asesoramiento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-700 text-white text-xs md:text-sm px-3 py-1 rounded-full flex items-center hover:bg-primary-800 transition-colors duration-300"
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
      {/* Header con navegación simple - Adaptado a paleta azul */}
      <header className="relative bg-white border-b border-primary-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-5 flex justify-between items-center">
          <Link href="/" className="relative">
            <div className="flex flex-col">
              <div className="text-xl md:text-lg lg:text-2xl font-bold tracking-wider text-primary-800">
                <span className="">AIELLO, ARGENIO & ASOC</span>
              </div>
              <span className="text-xs text-primary-600 -mt-1">
                Abogados y médico legista
              </span>
            </div>
            <div className="absolute -bottom-1 left-0 w-1/2 h-[1px] bg-gradient-to-r from-primary-400 to-transparent"></div>
          </Link>

          <Link
            href="/"
            className="text-primary-600 hover:text-primary-800 transition-colors duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Hero del blog - Adaptado a paleta azul */}
      <div className="relative py-10 md:py-16 bg-[url('/accidente-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Sufriste un accidente laboral o padeces una enfermedad profesional?
            Conocé tus derechos
          </h1>
          <p className="text-lg md:text-xl text-primary-100 font-light">
            Guía práctica para trabajadores industriales en Argentina
          </p>
        </div>
      </div>

      {/* Contenido principal - Adaptado a paleta azul */}
      <main className="py-8 md:py-12 px-4 md:px-6 bg-primary-50/30">
        <div className="max-w-4xl mx-auto">
          {/* Banner destacado - Adaptado a paleta azul */}
          <div className="mb-8 p-4 md:p-6 bg-primary-100 border border-primary-200 rounded-lg flex items-center shadow-sm">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-200 flex items-center justify-center mr-4">
              <Check size={20} className="text-primary-700" />
            </div>
            <p className="text-sm md:text-base text-primary-800">
              <span className="font-semibold text-primary-700">
                IMPORTANTE:
              </span>{" "}
              No firmes ningún documento sin asesoramiento legal. La consulta
              con nosotros es{" "}
              <span className="font-semibold text-primary-700">
                totalmente gratuita
              </span>
            </p>
          </div>

          {/* Introducción - Adaptado a paleta azul */}
          <div className="prose prose-headings:text-primary-700 prose-a:text-primary-600 max-w-none mb-10 text-primary-800">
            <p className="text-lg md:text-xl font-light mb-6">
              Los accidentes laborales son situaciones inesperadas que pueden
              ocurrir en cualquier momento. Como trabajador en Argentina, tienes
              derechos que te protegen en caso de sufrir un accidente en tu
              lugar de trabajo.
            </p>
            <p className="text-primary-700 mb-6">
              En este artículo, te explicamos{" "}
              <span className="text-primary-600 font-semibold">
                paso a paso qué hacer si sufres un accidente laboral
              </span>
              , de manera simple y directa.
            </p>
          </div>

          {/* Pasos principales - Adaptado a paleta azul */}
          <div className="space-y-10 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-700">
                1. Primeros pasos inmediatos
              </h2>
              <div className="bg-white border border-primary-200 rounded-lg p-5 md:p-6 shadow-sm">
                <ul className="space-y-4 text-primary-700">
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      <span className="font-medium text-primary-800">
                        Avisa a tu supervisor inmediatamente
                      </span>
                      . Por ley, debes informar el accidente lo antes posible.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      <span className="font-medium text-primary-800">
                        Busca atención médica
                      </span>
                      . Tu salud es lo primero. Acude al servicio médico de la
                      empresa o a una guardia.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      <span className="font-medium text-primary-800">
                        Pide que documenten tus lesiones
                      </span>
                      . Es importante tener un registro médico oficial desde el
                      primer momento.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      <span className="font-medium text-primary-800">
                        Guarda toda la documentación
                      </span>{" "}
                      que te entreguen, sin excepción.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-700">
                2. Denuncia el accidente
              </h2>
              <div className="bg-white border border-primary-200 rounded-lg p-5 md:p-6 shadow-sm">
                <ul className="space-y-4 text-primary-700">
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      Tu empleador debe{" "}
                      <span className="font-medium text-primary-800">
                        denunciar el accidente a la ART
                      </span>{" "}
                      (Aseguradora de Riesgos del Trabajo) dentro de las 48
                      horas.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      Si tu empleador no lo hace,{" "}
                      <span className="font-medium text-primary-800">
                        puedes hacer la denuncia tú mismo
                      </span>{" "}
                      llamando directamente a la ART.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      Anota el{" "}
                      <span className="font-medium text-primary-800">
                        número de siniestro
                      </span>{" "}
                      que te asignen. Lo necesitarás para todos los trámites.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-700">
                3. Durante tu recuperación
              </h2>
              <div className="bg-white border border-primary-200 rounded-lg p-5 md:p-6 shadow-sm">
                <ul className="space-y-4 text-primary-700">
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      La ART{" "}
                      <span className="font-medium text-primary-800">
                        debe cubrir todos tus gastos médicos
                      </span>{" "}
                      relacionados con el accidente.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      También debe{" "}
                      <span className="font-medium text-primary-800">
                        pagarte un salario mientras no puedas trabajar
                      </span>{" "}
                      (Incapacidad Laboral Temporaria).
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      <span className="font-medium text-primary-800">
                        Cumple con los tratamientos
                      </span>
                      . Faltar a las citas médicas puede afectar tus beneficios.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      <span className="font-medium text-primary-800">
                        Guarda copia de todos los certificados médicos
                      </span>{" "}
                      que te entreguen.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-700">
                4. Problemas comunes y alertas
              </h2>
              <div className="bg-white border border-primary-200 rounded-lg p-5 md:p-6 shadow-sm">
                <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-md">
                  <p className="text-red-800 font-medium">
                    ¡ATENCIÓN! Situaciones que requieren asesoramiento legal
                    inmediato:
                  </p>
                </div>
                <ul className="space-y-4 text-primary-700">
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      Si la ART{" "}
                      <span className="font-medium text-primary-800">
                        rechaza tu reclamo
                      </span>{" "}
                      o dice que no fue un accidente laboral.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      Si te{" "}
                      <span className="font-medium text-primary-800">
                        presionan para volver al trabajo
                      </span>{" "}
                      antes de estar recuperado.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      Si te{" "}
                      <span className="font-medium text-primary-800">
                        ofrecen firmar un acuerdo
                      </span>{" "}
                      o renuncia.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      Si te{" "}
                      <span className="font-medium text-primary-800">
                        dan el alta médica
                      </span>{" "}
                      pero sigues con problemas de salud.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      Si la empresa{" "}
                      <span className="font-medium text-primary-800">
                        te despide después de un accidente
                      </span>
                      .
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Más información - Adaptado a paleta azul */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-700">
              Tus derechos como trabajador accidentado
            </h2>

            <div className="bg-white border border-primary-200 rounded-lg p-5 md:p-6 space-y-5 shadow-sm">
              <p className="text-primary-800">
                La Ley de Riesgos del Trabajo (N° 24.557) establece que tienes
                derecho a:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-primary-50 p-4 rounded-md border border-primary-100">
                  <h3 className="font-semibold text-primary-700 mb-2">
                    Atención médica completa
                  </h3>
                  <p className="text-sm text-primary-600">
                    Todos los gastos médicos, medicamentos y rehabilitación
                    deben ser cubiertos por la ART.
                  </p>
                </div>

                <div className="bg-primary-50 p-4 rounded-md border border-primary-100">
                  <h3 className="font-semibold text-primary-700 mb-2">
                    Salario durante la recuperación
                  </h3>
                  <p className="text-sm text-primary-600">
                    Recibirás un pago mensual mientras estés de licencia por el
                    accidente.
                  </p>
                </div>

                <div className="bg-primary-50 p-4 rounded-md border border-primary-100">
                  <h3 className="font-semibold text-primary-700 mb-2">
                    Indemnización por lesiones
                  </h3>
                  <p className="text-sm text-primary-600">
                    Si quedas con alguna incapacidad permanente, tienes derecho
                    a una compensación.
                  </p>
                </div>

                <div className="bg-primary-50 p-4 rounded-md border border-primary-100">
                  <h3 className="font-semibold text-primary-700 mb-2">
                    Recalificación laboral
                  </h3>
                  <p className="text-sm text-primary-600">
                    Si no puedes volver a tu trabajo anterior, la ART debe
                    ayudarte a capacitarte para otro puesto.
                  </p>
                </div>
              </div>

              <p className="text-primary-600 text-sm italic">
                La ley está de tu lado, pero muchas veces las ART y empresas
                intentan minimizar sus responsabilidades. Por eso es importante
                contar con asesoramiento legal especializado.
              </p>
            </div>
          </div>

          {/* Formulario de contacto - Adaptado a paleta azul */}
          <div id="form-contacto" className="scroll-mt-10">
            <div className="mb-6 md:mb-8 text-center">
              <h2 className="inline-block relative">
                <span className="text-2xl sm:text-3xl font-bold text-primary-700">
                  CONSULTA GRATUITA
                </span>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
              </h2>

              <div className="mt-8">
                <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
                  Recibí asesoramiento especializado sobre tu accidente laboral
                  sin ningún compromiso. Nuestros abogados están a tu
                  disposición para ayudarte a obtener la compensación que
                  mereces.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <a
                    href={`https://wa.me/${contactPhoneNumeric}?text=Hola%2C%20tuve%20un%20accidente%20laboral%20y%20necesito%20asesoramiento%20gratuito.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ea952] text-white px-8 py-4 rounded-md transition-all duration-300 shadow-lg flex items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 flex-shrink-0 mr-2"
                    >
                      <path
                        fill="currentColor"
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                      />
                    </svg>
                    <span className="font-medium">CONTACTAR POR WHATSAPP</span>
                  </a>
                </div>

                <div className="text-primary-600 text-sm">
                  O agendanos, llamanos o mandanos mensaje
                  <div className="mt-2 text-primary-700 font-bold text-lg">
                    {contactPhone}
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

          {/* Información de contacto directo - Adaptado a paleta azul */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-md border border-primary-200 bg-white hover:border-primary-300 transition-colors duration-300 shadow-sm">
              <Phone size={20} className="text-primary-600 mx-auto mb-2" />
              <h3 className="text-sm font-medium text-primary-600 mb-1">
                Teléfono
              </h3>
              <a
                href={`tel:${contactPhoneNumeric}`}
                className="text-primary-800 hover:text-primary-900 transition-colors duration-300"
              >
                {contactPhone}
              </a>
            </div>

            <div className="p-4 rounded-md border border-primary-200 bg-white hover:border-primary-300 transition-colors duration-300 shadow-sm">
              <Mail size={20} className="text-primary-600 mx-auto mb-2" />
              <h3 className="text-sm font-medium text-primary-600 mb-1">
                Email
              </h3>
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary-800 hover:text-primary-900 transition-colors duration-300"
              >
                {contactEmail}
              </a>
            </div>

            <div className="p-4 rounded-md border border-primary-200 bg-white hover:border-primary-300 transition-colors duration-300 shadow-sm">
              <MapPin size={20} className="text-primary-600 mx-auto mb-2" />
              <h3 className="text-sm font-medium text-primary-600 mb-1">
                Horario de atención
              </h3>
              <p className="text-primary-700">
                Lunes, Miércoles y Jueves de 16:00 a 19:00
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer simple - Adaptado a paleta azul */}
      <footer className="bg-primary-800 py-6 md:py-8 px-4 md:px-6 border-t border-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary-100 font-bold mb-4">
            AIELLO, ARGENIO & ASOC.
          </div>
          <div className="text-primary-300 text-xs">
            &copy; {new Date().getFullYear()} Lu&Co Soft. Sitio desarrollado
            para Aiello, Argenio & Asociados.
          </div>
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
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
            <path
              fill="currentColor"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AccidenteLaboral