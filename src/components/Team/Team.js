import { Card } from '../Card/Card';
import './Team.css';

export const Team = function(props) {

    /*
    
     const cssStyles = {
        backgroundColor: props.bgColor
    }

    */ 

    return(
        (props.collaborators.length > 0) ? 
            <section className="team" style={{ backgroundColor: props.bgColor }}>
                <h3 style={{ borderColor: props.cardColor }}>
                    {props.teamName}
                </h3>
                <div className="collaborators">
                    {props.collaborators.map(collaborator => {
                        return <Card 
                            key={collaborator.name}
                            name={collaborator.name} 
                            role={collaborator.role} 
                            image={collaborator.image} 
                            teamName={collaborator.teamName}
                            cardColor={props.cardColor}
                        />
                    })}
                </div>
            </section> 
        : ''
    )
}