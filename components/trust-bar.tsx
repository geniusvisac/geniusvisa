const countries = [
  { name: 'Colombia', code: 'co' },
  { name: 'México', code: 'mx' },
  { name: 'Ecuador', code: 'ec' },
  { name: 'Honduras', code: 'hn' },
  { name: 'Perú', code: 'pe' },
  { name: 'Rep. Dominicana', code: 'do' },
  { name: 'Argentina', code: 'ar' },
  { name: 'Chile', code: 'cl' },
  { name: 'Guatemala', code: 'gt' },
  { name: 'Bolivia', code: 'bo' },
  { name: 'España', code: 'es' },
  { name: 'Canadá', code: 'ca' },
  { name: 'Brasil', code: 'br' },
  { name: 'Portugal', code: 'pt' },
  { name: 'Italia', code: 'it' },
  { name: 'Reino Unido', code: 'gb' },
  { name: 'Venezuela', code: 've' },
  { name: 'Costa Rica', code: 'cr' },
]

export function TrustBar() {
  return (
    <section
      aria-label="Países que atendemos"
      className="overflow-hidden border-y border-white/10 bg-teal-darkest py-6"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((group) => (
          <ul
            key={group}
            className="flex shrink-0 items-center gap-12 px-6"
            aria-hidden={group === 1}
          >
            {countries.map((country) => (
              <li
                key={`${group}-${country.code}`}
                className="flex items-center gap-3 whitespace-nowrap text-sm tracking-wide text-offwhite/70"
              >
                <img
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
                  alt={`Bandera de ${country.name}`}
                  width={28}
                  height={21}
                  loading="lazy"
                  className="h-5 w-7 shrink-0 rounded-sm object-cover ring-1 ring-white/15"
                />
                {country.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
