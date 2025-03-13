import Header from '../components/Header';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

function HomePage(){
    return(
        <div className="container">
            <Header />
            <Questions />
            <Footer />
        </div>
    );
}

export default HomePage;