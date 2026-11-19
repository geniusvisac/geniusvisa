import GuidePage from '@/components/guide-page'
import { guideMetadata } from '@/lib/guides'

const SLUG = 'visa-f1-estudiante-paso-a-paso'

export const metadata = guideMetadata(SLUG)

export default function Page() {
  return <GuidePage slug={SLUG} />
}
