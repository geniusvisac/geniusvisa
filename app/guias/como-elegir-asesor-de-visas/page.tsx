import GuidePage from '@/components/guide-page'
import { guideMetadata } from '@/lib/guides'

const SLUG = 'como-elegir-asesor-de-visas'

export const metadata = guideMetadata(SLUG)

export default function Page() {
  return <GuidePage slug={SLUG} />
}
