import { Reveal } from './reveal'

const steps = [
  {
    number: '01',
    title: 'Diagnostico con IA',
    subtitle: '2 minutos',
    description: 'Evalua tu perfil gratis y descubre tu porcentaje real de aprobacion. Sin compromiso, sin costo, sin esperas.',
    showCta: true,
  },
  {
    number: '02',
    title: 'Estrategia Humana',
    subtitle: 'Asesoria personalizada',
    description: 'Un consultor experto con 15+ anos de experiencia refina tu caso, prepara tus documentos y elimina los errores que causan el 80% de los rechazos.',
    showCta: false,
  },
  {
    number: '03',
    title: 'Tu Visa Aprobada',
    subtitle: 'Ve a tu entrevista como un ganador',
    description: 'Llega a la embajada con total seguridad. Nosotros te preparamos para cada pregunta, cada documento y cada detalle.',
    showCta: false,
  },
]

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'

export function Steps() {
  return (
    <section id="pasos" className="bg-[#F8F6F1] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl
