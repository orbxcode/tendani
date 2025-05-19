//import properties component
import { PropertiesClientWrapper } from './component/properties-client-wrapper'
import { getProperties } from './actions'
import { Property } from './component/property-component'

export default async function PropertiesPage() {
  const data = (await getProperties()) as unknown as {
    docs: any[]
    totalPages: number
    page: number
  }
  const initialData = {
    ...data,
    docs: data.docs.map((doc) => ({
      ...doc,
      id: doc.id.toString(),
    })),
  } as { docs: Property[]; totalPages: number; page: number }

  return <PropertiesClientWrapper initialData={initialData} />
}
