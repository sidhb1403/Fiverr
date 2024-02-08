/* eslint-disable react/prop-types */
import React from "react";
import "./gigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";


const GigCard = ({ item }) => {

  const { isLoading, error, data} = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest
        .get(
          `/users/${item.userId}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  console.log(data);

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
        {isLoading ? (
            "Loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
          <div className="user">
            <img src={data?.img || "/img/noavatar.jpg"} alt="" />
            <span>{data?.username}</span>
          </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span> {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

// GigCard.propTypes = {
//   item: PropTypes.shape({
//     img: PropTypes.string,
//     cover:PropTypes.string,
//     userId:PropTypes.string,
//     pp: PropTypes.string,
//     username: PropTypes.string,
//     desc: PropTypes.string,
//     star: PropTypes.number,
//     price: PropTypes.number,
//   }),


export default GigCard;