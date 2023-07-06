import './Form.css';
import { useState } from 'react';
import { TextField } from '../TextField/TextField';
import { DropdownList } from '../DropdownList/DropdownList';
import { Submit } from '../Submit/Submit';

export const Form = function(props) {

    // Hook de Estado -- useState() //
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [teamName, setTeam] = useState('');

    function getUserData(e) {
        e.preventDefault();
        props.onRegister({
            name,
            role,
            image,
            teamName
        });

        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    return(
        <section className="section-form">
            <form onSubmit={getUserData} className="form">
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome"
                    value={name}
                    onChangeValue={value => setName(value)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo"
                    value={role}
                    onChangeValue={value => setRole(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da Imagem"
                    value={image}
                    onChangeValue={value => setImage(value)}
                />
                <DropdownList 
                    label="Time" 
                    option={props.team} 
                    value={teamName}
                    onChangeValue={value => setTeam(value)}
                />
                <Submit>
                    Criar Card
                </Submit>
            </form>
        </section>
    )
}
