import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cardooos(){
    return(
        <div>

<CardGroup>
      <Card bg="dark" text="light">
        <Card.Img variant="top" className='image' src="https://img.freepik.com/psd-gratuitas/logotipo-mega-oferta-3d-label-para-campanhas-de-supermercado-mega-oferta-no-brasil_314999-2058.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais" />
        <Card.Body>
          <Card.Title>OFERTAS</Card.Title>
          <Card.Text>
           Oferecemos diversas ofertas semanalmente para nossos clientes!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="dark" text="light">
        <Card.Img variant="top" className='image' src="https://images.pexels.com/photos/236910/pexels-photo-236910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>VAREJO</Card.Title>
          <Card.Text>
            Nosso mercado oferece uma variedade imensa do varejo de produtos alimentícios!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="dark" text="light">
        <Card.Img variant="top" className='image' src="https://images.pexels.com/photos/4391478/pexels-photo-4391478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>DELIVERY</Card.Title>
          <Card.Text>
            Possuímos um sistema para entrgar a mercadoria diretamente na sua casa!
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <div className='bomba'></div>
        </div>
    )
}

export default Cardooos