import GuidePage from '@/components/guide-page'
import { guideMetadata } from '@/lib/guides'

const SLUG = 'visa-h1b-quien-puede-aplicar'

export const metadata = guideMetadata(SLUG)

export default function Page() {
  return <GuidePage slug={SLUG} />
}
