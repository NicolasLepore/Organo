import './Footer.css';

export const Footer = function() {
    return(
        <footer className="footer">
            <ul className="social">
                <li>
                    <a href="https://facebook.com" target="_blank">
                        <img src="/images/facebook.svg" alt="Acesse nosso Facebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank">
                        <img src="/images/twitter.svg" alt="Acesse nosso Twitter"/>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank">
                        <img src="/images/instagram.svg" alt="Acesse nosso Instagram"/>
                    </a>
                </li>
            </ul>

            <img className="logo" src="/images/Logo.svg" alt="organo" />

            <h5>Desenvolvido por Alura</h5>
        </footer>
    )
}