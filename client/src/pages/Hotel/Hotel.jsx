import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Hotel() {
  const [hotel, setHotel] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:2000/api/hotels");
        const hotelsData = response.data;
        const selectedHotel = hotelsData.find((res) => res._id === id);

        setHotel(selectedHotel); // Set selectedHotel or an empty object if not found
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
    console.log(hotel);
  }, [id]);

  return (
    <div>
      {hotel ? (
        <img src={hotel.image} alt="" />
      ) : (
        <h1 className="h-full bg-red-900">Loading...</h1>
      )}
    </div>
  );
}

export default Hotel;
