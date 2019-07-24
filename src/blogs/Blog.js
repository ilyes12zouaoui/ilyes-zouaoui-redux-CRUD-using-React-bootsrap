import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export default ({
  id,
  title,
  description,
  imageUrl,
  onRemoveBlog,
  onRemoveBlogAsync,
  onClickShowUpdateForm,
  onClickShowUpdateFormAsync
}) => {
  return (
    <Card className="text-center">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button
          variant="primary"
          className="m-2"
          onClick={onClickShowUpdateForm}
        >
          update
        </Button>
        <Button variant="primary" className="m-2" onClick={onRemoveBlog}>
          delete
        </Button>
        <br />
        <Button
          variant="primary"
          className="m-2"
          onClick={onClickShowUpdateFormAsync}
        >
          update async
        </Button>
        <Button variant="primary" className="m-2" onClick={onRemoveBlogAsync}>
          delete async
        </Button>
      </Card.Body>
    </Card>
    // <div className="card text-center">
    //   {/* <img
    //     style={{ height: "200px", width: "100%", display: "block" }}
    //     src={imageUrl}
    //     alt="blog image"
    //   /> */}
    //   <div className="card-body">
    //     <h5 className="card-title">{title}</h5>
    //   </div>
    //   <div className="card-body mb-3">
    //     <p className="card-text">{description}</p>
    //   </div>
    //   <button className="btn btn-primary m-2" >
    //     update
    //   </button>
    //   <button className="btn btn-primary m-2" onClick={onRemoveBlog}>
    //     delete
    //   </button>

    //   <br />
    //   <button
    //     className="btn btn-primary m-2"
    //     onClick={onClickShowUpdateFormAsync}
    //   >
    //     update async
    //   </button>
    //   <button className="btn btn-primary m-2" onClick={onRemoveBlogAsync}>
    //     delete async
    //   </button>
    // </div>
  );
};
