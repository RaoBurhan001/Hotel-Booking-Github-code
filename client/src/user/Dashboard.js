import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import { userHotelBookings } from "../actions/hotel";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import BookingCard from "../components/cards/BookingCard";

const Dashboard = () => {
  const {
    auth: { token , payment },
  } = useSelector((state) => ({ ...state }));
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    loadUserBookings();
  }, []);

  const loadUserBookings = async () => {
    // e.preventDefault()
    const res = await userHotelBookings(token);
    
    console.log("token",token)
    console.log(res.data);
    setBooking(res.data);
  };
console.log("BOOKING",booking)
// const{   }= {...booking};
console.log(booking.map(b=>(b._id,b.title, b.content)));
  return (
    <>
      {/* <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div> */}

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Bookings</h2>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary">
              Browse Hotels
            </Link>
          </div>
          {/* {booking.map((b)=>(
           id= {b._id}
          ))} */}
        </div>
      </div>

      <div className="row">
      {booking.map(b=>(b._id ,
         b.title))}
       
        {booking.map(b => (
          <BookingCard
            key={b._id}
            id={b._id}
            image={b.image}
            content={b.content}
            location={b.location}
            price={b.price}
            title={b.title}
            paid={b.paid}
            from={b.from}
            to={b.to}
            bed={b.bed}
            // session={b.session}
            postedBy={b.postedBy}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
