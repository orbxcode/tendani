import { notFound } from 'next/navigation'
import AboutComponent from './component/AboutComponent'
import { getAboutTendani } from './actions'

export default async function AboutPage() {
  const aboutTendaniData = await getAboutTendani()
  const data = aboutTendaniData.docs[0]

  if (!data) {
    notFound()
  }

  return (
    <AboutComponent
      aboutTendani={data.aboutTendani?.toString() || ''}
      image={{
        url: typeof data.image === 'object' && data.image !== null ? data.image.url || '' : '',
        alt:
          typeof data.image === 'object' && data.image !== null
            ? data.image.alt || 'Tendani Properties'
            : 'Tendani Properties',
        width:
          typeof data.image === 'object' && data.image !== null ? data.image.width || 500 : 500,
        height:
          typeof data.image === 'object' && data.image !== null ? data.image.height || 500 : 500,
      }}
      yearsOfExperience={Number(data.yearsOfExperience) || 0}
      happyClients={Number(data.happyClients) || 0}
      awards={Number(data.awards) || 0}
      mission={data.mission?.toString() || ''}
      vision={data.vision?.toString() || ''}
      testimonials={[]}
    />
  )
}
