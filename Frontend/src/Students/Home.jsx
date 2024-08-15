import Footer from "../Common/Footer";
import Header from "../Common/Header";
import './Home.css';
import chancellor from "../Img/chancellor.jpg";
import vc from "../Img/vc.jpg";
import Facility from "../Common/Facility";
const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-base">
                <div className="home-image">
                </div>
                <div className="info-home">
                    <div className="welcome">
                        <h1>WELCOME TO THE UNIVERSITY</h1>
                        <div className="wel-details">
                            <p><strong>“Our Guiding Light and Inspiration”</strong></p>
                            <p><strong>– Sufi Saint Khwaja Moinuddin Chishti of Ajmer”</strong></p>
                            <p>The University was named after Sufi Saint Khwaja Moinuddin Chishti of Ajmer who is known all over the world for his benevolence and magnanimity.

                                Khwaja Moinuddin was born in 1141 CE in Chishti in Herat, Afghanistan. Also known as ‘Gharib Nawaaz’ and ‘Benefactor of the poor’, he is the most famous saint of the Chishti order of Sufism in the Indian Subcontinent.</p>
                                <button className="btn-click">Read More</button>
                        </div>
                        <Facility/>
                    </div>
                    <div className="chancellors">
                        <div className="chancellor">
                            <img src={chancellor} alt="" />
                            <h2>Smt. Anandiben Patel</h2>
                            <span>Hon'ble Governor of Uttar Pradesh and Chancellor, KMCLU</span><br></br>
                            <button className="btn-click">Profile</button>
                            <button className="btn-click">Message</button>
                        </div>
                        <div className="voice-chancellor">
                            <img src={vc} alt="" />
                            <h2>Prof. N.B. Singh</h2>
                            <span>Vice Chancellor</span><br></br>
                            <button className="btn-click">Profile</button>
                            <button className="btn-click">Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;