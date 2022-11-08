import React, { Component } from 'react';
import axios from 'axios';


export default class CreateProducts extends Component {
    state = {
        productos: [],
        name: '',
        price: '',
        descripcion: ''
    }

    async componentDidMount() {
        this.getProductos();
    }


    getProductos = async () => {
        const rest = await axios.get('http://localhost:3000/producto');
        this.setState({ productos: rest.data });
        console.log(rest);
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    onChangePrecio = (e) => {
        this.setState({ _price: e.target.value });
    }

    onChangeDescripcion = (e) => {
        this.setState({ _descripcion: e.target.value });
    }

    onClean = () => {
        this.setState(
            {
                name: '', _price: '', _descripcion: ''
            }

        );
    }


    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/producto', {
            name: this.state.name,
            price: this.state._price,
            descripcion: this.state._descripcion

        }
        );


        this.getProductos();
        this.onClean();

    }

    deleteUser=async (id)=>{
        await axios.delete('http://localhost:3000/producto'+id);
        this.getProductos();
    }



    render() {
        return (

            <div className='row'>
                <div className='col-md-4'>
                    <div className='card card-body'>
                        <h3>Crear nuevo producto</h3>
                        <form onSumit={this.onSumit}>
                            <div className='form-group'>
                                <h6> Nombre: </h6>
                                <input type="text" className="form.control" value={this.state.name} onChange={this.onChangeName} />
                                <h6> Precio: </h6>
                                <input type="text" className="form.control" value={this.state._price} onChange={this.onChangePrecio} />
                                <h6> Descripcion: </h6>
                                <input type="text" className="form.control" value={this.state._descripcion} onChange={this.onChangeDescripcion} />
                            </div>
                            <div className="container p-4">
                                <button type="submit" className="btn btn-primary">GUARDAR</button>
                            </div>
                        </form>
                    </div>                 
                </div>
                

                
                <div className='col-md-8'>
                    <ul className='list-group'>
                                                {

                            this.state.productos.map(producto => (
                                <li className="list-group-item list-group-item-action"
                                    key={producto.id}
                                    onDoubleClick={this.deleteUser(producto.id)}
                                >
                                    {producto.name}
                                </li>))
                        }
                    </ul>     
                </div>
                


            </div>)
    }

}

