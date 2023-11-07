import Button from 'react-bootstrap/Button';
function Sobreconteudo() {
  return (
    <div>

            <h1>Cadastro do Produto SuperMart</h1>
            <form action="">
                <label className="formyyr" htmlFor="">
                    <span>ID do produto</span>
                    <input type="text"
                    name="id_produtomercado"
                    placeholder="produto" />
                </label>
                <label className="formyyr" htmlFor="">
                    <span>Descrição</span>
                    <input type="text" 
                    name="descrição"
                    placeholder="Descreva o produto"/>
                </label>
                <label className="formyyr" htmlFor="">
                    <span>Marca</span>
                    <input type="text" 
                    name="marca"
                    placeholder="Marca do produto"/>
                </label>
                <label className="formyyr" htmlFor="">
                    <span>Data de Validade</span>
                    <input type="text" 
                    name="Datavali"
                    placeholder="Data de validade do produto"/>
                </label>
                <label className="formyyr" htmlFor="">
                    <span>Estoque</span>
                    <input type="text" 
                    name="quantia"
                    placeholder="Quantia de estoque"/>
                </label>
                <div className="formyyr">
                <Button variant="primary">Login</Button>
                </div>
            </form>
    </div>
  );
}

export default Sobreconteudo;
