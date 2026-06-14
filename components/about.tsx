export function About() {
  return (
    <section id="nosotros" className="py-24 bg-[#1A3A3A]">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-4">
            Nuestra Historia
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            Más de 15 años abriendo fronteras
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Somos Genius — una firma de consultoría migratoria y viajes premium
            fundada en Tegucigalpa, Honduras, con presencia en más de 25 países.
          </p>
        </div>

        {/* Paragraphs */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="border-t border-[#C9A84C]/30 pt-6">
            <p className="text-white/75 leading-relaxed text-sm">
              Nacimos con una misión clara: hacer que el proceso de obtener una visa
              americana sea transparente, humano y exitoso. Desde nuestros inicios,
              hemos acompañado a miles de personas — estudiantes, profesionales,
              familias y emprendedores — a cumplir su sueño de moverse libremente
              por el mundo.
            </p>
          </div>
          <div className="border-t border-[#C9A84C]/30 pt-6">
            <p className="text-white/75 leading-relaxed text-sm">
              No somos un trámite. Somos tu equipo. Cada caso lo trabajamos de
              forma personalizada, combinando experiencia humana de más de 15 años
              con tecnología de inteligencia artificial que evalúa tu perfil antes
              de que inviertas un solo lempira.
            </p>
          </div>
          <div className="border-t border-[#C9A84C]/30 pt-6">
            <p className="text-white/75 leading-relaxed text-sm">
              En 2024 lanzamos Genius VC Travel, nuestra agencia de viajes premium,
              porque entendimos que la movilidad no termina cuando se aprueba la
              visa — apenas comienza.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mb-16 px-6">
          <blockquote className="font-playfair text-2xl md:text-3xl text-white italic max-w-3xl mx-auto leading-relaxed">
            "Creemos que cada persona merece la oportunidad de conocer el mundo.
            Nosotros hacemos que esa oportunidad sea real."
          </blockquote>
          <p className="text-[#C9A84C] text-sm mt-4 tracking-widest uppercase">
            — Equipo Genius
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "15+", label: "Años de experiencia" },
            { value: "25+", label: "Países atendidos" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "2 marcas", label: "1 misión" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center border border-white/10 rounded-xl p-6 hover:border-[#C9A84C]/50 transition-colors"
            >
              <p className="font-playfair text-3xl text-[#C9A84C] mb-2">
                {stat.value}
              </p>
              <p className="text-white/60 text-xs uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
