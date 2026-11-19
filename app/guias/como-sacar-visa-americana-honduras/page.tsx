import GuidePage from '@/components/guide-page'
import { guideMetadata } from '@/lib/guides'

const SLUG = 'como-sacar-visa-americana-honduras'

export const metadata = guideMetadata(SLUG)

export default function Page() {
  return <GuidePage slug={SLUG} />
}
