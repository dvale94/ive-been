import { use } from 'react';
import { ApiProvider } from '@/api/ApiProvider';

export function Map() {
  const html = use(ApiProvider.getDefaultMap());

  return(
      <iframe className='w-full h-full' srcDoc={html} />
  )
};
