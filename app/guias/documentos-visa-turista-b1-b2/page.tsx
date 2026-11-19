import GuidePage from '@/components/guide-page'
import { guideMetadata } from '@/lib/guides'

const SLUG = 'documentos-visa-turista-b1-b2'

export const metadata = guideMetadata(SLUG)

export default function Page() {
  return <GuidePage slug={SLUG} />
}
