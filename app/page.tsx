import CardList from '@/components/CardList'
import CategoryList from '@/components/CategoryList'
import Container from '@/components/Container'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu/Menu'


export default function Home() {
  return (
    <Container>
      <Featured/>
      <CategoryList/>
      <div className='flex items-start max-sm:flex-col'>
        <div className='sm:flex-1'>
          <CardList/>
        </div>
        <div className='sm:max-w-[200px] '>
          <Menu/>
        </div>
      </div>
    </Container>
  )
}
