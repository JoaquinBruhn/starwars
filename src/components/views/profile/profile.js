import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../../tools/loader/loader";
import { reqCharByName } from "../../../rquests/recData";

import "./profile.css";
import ProfileCard from "../../cards/profileCard/profileCard";

const Profile = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);

  async function getCharData(type, name) {
    setLoading(true);
    const search = await reqCharByName(type, name);
    setItem(search);
    setLoading(false);
  }

  useEffect(() => {
    getCharData(params.type, params.name);
  }, []);
  return (
    <div className="profile-container">
      {loading ? (
        <Loader />
      ) : (
        <Container fluid>
          <ProfileCard item={item} type={params.type} />
        </Container>
      )}
    </div>
  );
};

export default Profile;
