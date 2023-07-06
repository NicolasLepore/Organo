import './Card.css';

export const Card = function({ name, role, image, cardColor }) {
    return(
        <div className="card" style={{ boxShadow: `inset 0 80px ${cardColor}` }}>
            <div className="card-header">
                <img src={image} alt={`Imagem do ${name}`} />
            </div>
            <div className="card-footer">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}