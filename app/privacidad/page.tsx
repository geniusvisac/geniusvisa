export default function Privacidad() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">

        <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Legal</p>
        <h1 className="text-4xl font-playfair text-white mb-2">Política de Privacidad</h1>
        <p className="text-white/40 text-sm mb-12">Última actualización: junio 2026</p>

        {[
          {
            title: '1. Responsable del tratamiento',
            body: 'Genius Visa Consultants, con domicilio en Tegucigalpa, Honduras. Contacto: geniusvisac@gmail.com · +504 9741-0936.',
          },
          {
            title: '2. Datos que recopilamos',
            body: 'Nombre completo, nacionalidad, fecha de nacimiento, correo electrónico, número de teléfono/WhatsApp, información migratoria relevante para la evaluación de perfil, y datos de navegación (cookies técnicas y analíticas).',
          },
          {
            title: '3. Finalidad del tratamiento',
            body: 'Prestación del servicio de consultoría migratoria, evaluación de perfil a través de herramienta de IA (ISAVISA), comunicación comercial y seguimiento de casos, y mejora de nuestros servicios digitales.',
          },
          {
            title: '4. Base legal',
            body: 'El tratamiento se basa en el consentimiento del titular y en la ejecución del contrato de servicios.',
          },
          {
            title: '5. Conservación de datos',
            body: 'Los datos se conservan durante la relación contractual y hasta 5 años después de su finalización, conforme a la legislación hondureña vigente.',
          },
          {
            title: '6. Derechos del titular',
            body: 'Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiendo a geniusvisac@gmail.com.',
          },
          {
            title: '7. Seguridad',
            body: 'Aplicamos medidas técnicas y organizativas para proteger tu información contra acceso no autorizado, pérdida o alteración.',
          },
          {
            title: '8. Cookies',
            id: 'cookies',
            body: 'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas para mejorar la experiencia. Puedes desactivarlas desde la configuración de tu navegador.',
          },
          {
            title: '9. Cambios en esta política',
            body: 'Nos reservamos el derecho de actualizar esta política. La versión vigente estará siempre disponible en nuestro sitio web.',
          },
        ].map((item) => (
          <div key={item.title} id={(item as any).id} className="mb-10 border-t border-white/10 pt-8">
            <h2 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">
              {item.title}
            </h2>
            <p className="text-white/70 leading-relaxed text-sm">{item.body}</p>
          </div>
        ))}

        <div className="mt-16 text-center">
          
            href="/"
            className="inline-block border border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-full text-sm hover:bg-[#C9A84C] hover:text-[#1A3A3A] transition-colors"
          >
            ← Volver al inicio
          </a>
        </div>
      </div>
    </main>
  )
}
