import { FooterStyle } from '../css/FooterStyle'

const Footer = () => {

    return(
        <FooterStyle>

            <section className='Footer'>
                    <h5> 
                    © FIA 2013-2024 Todo o conteúdo sujeito à aprovação da FIA
                    </h5>
                        <a href="https://www.facebook.com/fiaformulae/"><i className="fi fi-brands-facebook"></i></a>
                        <a href="https://www.tiktok.com/@fiaformulae?lang=en"><i className="fi fi-brands-tik-tok"></i></a>
                        <a href="https://www.instagram.com/fiaformulae/"><i className="fi fi-brands-instagram"></i></a>
                        <a href="https://t.snapchat.com/8PhuAY3n"><i className="fi fi-brands-snapchat"></i></a>
                </section>
        </FooterStyle>
        )
}
export default Footer