import React from 'react';

const Footer = () =>  {
    return(
        // <!-- footer area start -->
        <footer>
            <div className="footer-area bg-theme ptb--50">
                <div className="container">
                    <div className="footer-inner">
                        <ul className="fsocial">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        <p className="copy-right">Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script> Todos os direitos Reservados
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
