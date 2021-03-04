import Head from 'next/head'
import { Container } from '../styles/Header'

export function Header() {
  return (
    <Container>
      <Head>
        <title>Candelária - Home</title>
      </Head>
      <div>
        <div>INTITUTO CANDELÁRIA DE PORTO VELHO ICPV / RO</div>
        <div>
          <span>PROJETOS</span>
          <span>QUEM SOMOS</span>
          <span>DOE AGORA</span>
        </div>
      </div>
    </Container>
  )
}
