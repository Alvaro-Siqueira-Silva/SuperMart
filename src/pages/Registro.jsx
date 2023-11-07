import Header from "../header"
import Navbarr from "../Navbar"
import Footery from "../Footery"
import Button from 'react-bootstrap/Button';
function Registro(){
    return(
        <div>
            <Header/>
            <Navbarr/>
           <div >
            <h1>Login SuperMart</h1>
            <form action="">
                <label className="formyyr" htmlFor="">
                    <span>Email</span>
                    <input type="text"
                    name="Email"
                    placeholder="Seu Email" />
                </label>
                <label className="formyyr" htmlFor="">
                    <span>Senha:</span>
                    <input type="text" 
                    name="Senha"
                    placeholder="Digite sua senha"/>
                </label><div className="formyyr">
                <Button variant="primary">Login</Button>
                </div>
            </form>
           </div>
            <Footery/>
        </div>
    )
}

export default Registro