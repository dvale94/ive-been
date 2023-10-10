import { Map } from '@/components/Map';
import { NavBar } from '@/components/NavBar';

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen">
      <NavBar />
      <Map />
    </main>
  )
}
