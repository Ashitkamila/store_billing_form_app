import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Navbar fixed='bottom' variant='light' bg='info'>
        <Container>
          copyright &copy; Ashit Kumar Kamila
          <a href='erakkamila@gmail.com'>Email</a>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer
