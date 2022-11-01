interface HomeProps {
  count: number;
}

export default function Home({count}: HomeProps) {
  return (
    <>
      <h1>Hello NLW COPA</h1>
      <h2>Contagem: {count}</h2>
    </>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()
  
  return {
    props: {
      count: data.count
    }
  }
}