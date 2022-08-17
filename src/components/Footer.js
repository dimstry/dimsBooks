import "../App.css";
import logo from "../img/logo.jpeg"

function Footer() {
    const date = new Date().getFullYear();
    return (
        <section>
            <div className='card-footer bg-primary text-white'>
                <div className="row d-flex align-center my_row">
                    <div className="col-sm-12 col-md-5 my_col">
                        <img src={logo}  width={60} className="rounded-circle" />
                        <p className="mt-auto">GTM.Codes</p>
                    </div>
                    <div className="col-sm-12 col-md-5 my_col">
                        <p className="text-white text-bold">© {date} Copyright: Kresna & Dimas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;