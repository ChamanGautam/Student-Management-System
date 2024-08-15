import Footer from "../Common/Footer";
import Header from "../Common/Header";
import './About.css';
import aboutdata from "../Common/About.json";
const About = () => {
    return (
        <>
            <div className="about-body">
                <Header />
                <div className="about-body">
                    {aboutdata.map((item) => (
                        <div className="about-main" key={item.id}>
                            <div className="about-logo">
                                <img src={item.img} alt="student logo"></img>
                            </div>
                            <div className="about-content">
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;

