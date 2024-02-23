import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import TravelCard from "../../components/TravelCard/TravelCard";
import axios from "axios";

function Home() {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios
      .get("https://vishwakaahotel.cyclic.app/api/hotels")
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <main className="main flex flex-wrap p-[4rem_3rem_2rem_3rem]">
        {hotel.map((e) => (
          <TravelCard props={e} key={e.id} />
        ))}
      </main>
    </div>
  );
}

export default Home;
