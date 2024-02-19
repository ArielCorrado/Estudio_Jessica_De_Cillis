import "./home.css";
import CarouselZoom from "../../components/carouselZoom/CarouselZoom";
import HomeConcerns from "../../components/homeConcerns/HomeConcerns";

function Home() {
    return (
        <div className="home">
            <CarouselZoom/>
            <HomeConcerns/>
        </div>
    );
}

export default Home;