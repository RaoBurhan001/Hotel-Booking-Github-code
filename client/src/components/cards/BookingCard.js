import { useState } from "react";
import { currencyFormatter } from "../../actions/stripe";
import { diffDays } from "../../actions/hotel";
import { useHistory, Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import OrderModal from "../modals/OrderModal";

const BookingCard = ({ title,image,content , location,price,paid,id ,bed,from ,to}) => {
  const [showModal, setShowModal] = useState(false);
console.log("INFO",title, id,paid, from ,to)
  const history = useHistory();
  return (
    <>
    
      <div className="card mb-3">

        <div className="row no-gutters">
          <div className="col-md-4">
            {paid===true && image && image.contentType ? (
              <img
                src={`${process.env.REACT_APP_API}/hotel/image/${id}`}
                alt="default hotel image"
                className="card-image img img-fluid"
              />
            ) : (
             <p>Sorry No Booking found</p>
            )}
           </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {title}{" "}
                <span className="float-right text-primary">
                  {currencyFormatter({
                    amount: price * 100,
                    currency: "usd",
                  })}
                </span>{" "}
              </h3>
              <p className="alert alert-info">{location}</p>
              <p className="card-text">{`${content.substring(
                1,
                200
              )}...`}</p>
              <p className="card-text">
                <span className="float-right text-primary">
                  for {diffDays(from, to)}{" "}
                  {diffDays(from, to) <= 1 ? " day" : " days"}
                </span>
              </p>
              <p className="card-text">{bed} bed</p>
              <p className="card-text">
                Available from {new Date(from).toLocaleDateString()}
              </p>

              {/* {showModal && (
                <OrderModal
                  session={session}
                  orderedBy={orderedBy}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              )} */}

              {/* <div className="d-flex justify-content-between h4">
                <button
                  onClick={() => setShowModal(!showModal)}
                  className="btn btn-primary"
                >
                  Show Payment info
                </button>
              </div> */}
            </div>
          </div> 
        
        </div>
      </div>
      
    </>
  );
};

export default BookingCard;
