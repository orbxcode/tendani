// app/properties/page.tsx
import { getProperties } from './actions';
import { PropertiesClientWrapper } from './component/properties-client-wrapper';
import { Property } from './component/property-component';

interface InitialData {
  docs: Property[];
  totalPages: number;
  page: number;
}

export default async function PropertiesPage() {
  const initialData: InitialData = await getProperties({
    page: 1,
    where: {},
    sort: '-createdAt',
  });

  return <PropertiesClientWrapper initialData={initialData} />;
}