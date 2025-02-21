import React from "react";
import { Spinner, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function LoadingComponent({ input }) {
  return (
    <div className="AlignCentre">
      <Card className="text-center" style={{ width: "18rem", padding: "20px" }}>
        <Card.Body>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "150px" }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
          <p className="mt-3">
            <strong>Loading {input}...</strong>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoadingComponent;
