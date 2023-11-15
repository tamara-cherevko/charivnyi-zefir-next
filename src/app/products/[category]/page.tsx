import Head from 'next/head'

interface IParams {
  params: {
    category: string
  }
}

export default function Products({ params }: IParams) {
  const { category } = params
  return (
    <div className="rootContainer">
      <Head>
        <title>CHARIVNYI ZEFIR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{category}</main>
    </div>
  )
}
