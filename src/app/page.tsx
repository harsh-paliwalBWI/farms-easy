import Image from 'next/image'
import LogosSection from '@/components/logosSection/LogosSection'
import OurMission from '@/components/ourMission/OurMission'
import HealthierWay from '@/components/healthierWay/HealthierWay'
import Category from '@/components/category/Category'
import PlayStoreLink from '@/components/playstoreLink/PlayStoreLink'

export default async function Home() {
  return (
   <div className='w-full '>
    <HealthierWay/>
    {/* <Category/> */}
    <LogosSection/>
    <PlayStoreLink/>
    <OurMission/>

   </div>
  )
}
