import { useState } from 'react';
import { Banner } from './components/Banner/Banner';
import { Form } from './components/Form/Form';
import { Team } from './components/Team/Team';
import { Footer } from './components/Footer/Footer';

function App() {

    const team = [
        {
            name: 'Programação',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9'
        },
        {
            name: 'Front-end',
            primaryColor: '#B2CFFA',
            secondaryColor: '#E8F8FF'
        },
        {
            name: 'Data Science',   
            primaryColor: '#A6D157',
            secondaryColor: '#F0F8E2'
        },
        {
            name: 'Devops',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8'
        },
        {
            name: 'UX e Design',
            primaryColor: '#DB6EBF',
            secondaryColor: '#FAE9F5'
        },
        {
            name: 'Mobile',
            primaryColor: '#FFBA05',
            secondaryColor: '#FFF5D9'
        },
        {
            name: 'Gestão',
            primaryColor: '#FF8A29',
            secondaryColor: '#FFEED7'
        }
    ];

    const [collaborators, setCollaborators] = useState([]);

    function createCollaborators(people) {
        setCollaborators([...collaborators, people]);
        //console.log(people);
    }

    return (
        <div className="app">
            <Banner />
            <Form 
                team={team.map(t => t.name)}
                onRegister={people => createCollaborators(people)} 
            />

            {team.map(t => {
                return <Team 
                        key={t.name} 
                        teamName={t.name} 
                        cardColor={t.primaryColor} 
                        bgColor={t.secondaryColor}
                        collaborators={collaborators.filter(collaborator => t.name === collaborator.teamName)}
                    /> 
            })}

            <Footer />
        </div>
    )
}

export default App;
