import React from "react";
import styled from "styled-components";
// import { Card, CardText, CardTitle, CardBody } from "reactstrap";

const Card = styled.div`
  background-color: rgb(119, 198, 237);
  width: 380px;
  height: 175px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
`;

const Title = styled.div`
  font-size: 25px;
  border-bottom: 1px solid lightgrey;
  font-weight: 500;
`;

const CardImage = styled.img`
    width: 100px;
    height: 100px;
    padding: 5px;
`;

const GithubFollowersCard = ({user, image}) => {
  return (
    <Card>
      <CardImage src={image} alt="image of follower"/>
      <Title>Name: {user}</Title>
    </Card>
  )
}

export default GithubFollowersCard;
