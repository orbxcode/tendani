//import properties component
import { PropertiesClientWrapper } from './component/properties-client-wrapper'
import { getProperties } from './actions'

export default async function PropertiesPage() {
  const initialData = await getProperties()
  return <PropertiesClientWrapper initialData={initialData} />
}
