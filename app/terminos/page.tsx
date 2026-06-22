import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
export const metadata: Metadata = {
  title: 'Términos y Condiciones | Genius Visa Consultants',
  description: 'Términos y condiciones de uso de Genius Visa Consultants y Genius VC Travel. Tegucigalpa, Honduras.',
  alternates: { canonical: `${SITE_URL}/terminos` },
}
export default function Terminos() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Legal</p>
        <h1 className="text-4xl text-white mb-2">Términos y Condiciones</h1>
        <p className="text-white/40 text-sm mb-12">Última actualización: junio 2026</p>
        {[
          { title: "1. Objeto", body: "Estos términos regulan el uso del sitio web y los servicios ofrecidos por Genius Visa Consultants y Genius VC Travel." },
          { title: "2. Naturaleza del servicio", body: "Genius Visa Consultants es una firma de consultoría migratoria. No somos abogados de inmigración ni representantes legales ante ninguna entidad gubernamental. Nuestros servicios son de orientación, preparación y acompañamiento." },
          { title: "3. Sin garantía de aprobación", body: "Ningún servicio contratado garantiza la aprobación de una visa. La decisión final corresponde exclusivamente a las autoridades consulares de los Estados Unidos." },
          { title: "4. Evaluación con IA", body: "La herramienta de evaluación de perfil (ISAVISA) genera resultados orientativos basados en datos estadísticos. No constituye asesoría legal ni garantiza ningún resultado." },
          { title: "5. Pagos y reembolsos", body: "Los honorarios de consultoría son pactados individualmente. Una vez iniciado el proceso, no se realizan reembolsos salvo causa imputable a Genius." },
          { title: "6. Propiedad intelectual", body: "Todo el contenido de este sitio — textos, imágenes, marca, mascota El Viajero Genius — es propiedad de Genius Visa Consultants. Prohibida su reproducción sin autorización escrita." },
          { title: "7. Ley aplicable", body: "Estos términos se rigen por las leyes de la República de Honduras." },
          { title: "8. Contacto", body: "geniusvisac@gmail.com · +504 9741-0936 · Tegucigalpa, Honduras." },
        ].map((item) => (
          <div key={item.title} className="mb-10 border-t border-white/10 pt-8">
            <h2 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">{item.title}</h2>
            <p className="text-white/70 leading-relaxed text-sm">{item.body}</p>
          </div>
        ))}
        <div className="mt-16 text-center">
          <a href="/" className="inline-block border border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-full text-sm hover:bg-[#C9A84C] hover:text-[#1A3A3A] transition-colors">Volver al inicio</a>
        </div>
      </div>
    </main>
  )
}
