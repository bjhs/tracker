import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main data-theme="cupcake">
      <h1>Hello World</h1>
      <a className="btn btn-secondary p-2 m-5" href="/users">Users - This is a mistake. Check the network tab.</a>
      <br/>
      <Link className="btn btn-secondary p-2 m-5" href="/users">Users - This is the link component, just requests the content of the users page</Link>
      <ProductCard />
    </main>
  )
}
