import React from "react";
import { Container } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center text-custom-primary mt-3">Blogs</h2>
        <div className="blog-question">
          <h3 className="mb-2">Difference between javascript and nodejs</h3>
          <p>Javascript is a scripting language that is widely used in this world. Javascript is used to make website interactive. It runs in the browser javascript engine. We can make our website interactive by javascript. Javascript beautifies the website with interactions. And it is a lightweight client-side scripting language for front end development. Node.js is a runtime environment that can run outside of the browser. It is a server-side scripting language that can run outside browser. It can work with database and it can get, post, put, delete, patch and more operations. Node.js can interact with many client or many users but javascript can't.</p>
        </div>
        <div className="blog-question">
          <h3 className="mb-2">Differences between sql and nosql databases.</h3>
          <p>There are two type of database, one is SQL database and another is nosql database. SQL Database examples are MySQL, PostgreSQL etc. And nosql database examples are MongoDB, MariaDB etc. SQL Database stores data in a table. There are row columns in the table. SQL Database have fixed schema. On the other hand, nosql database uses document as data. Usually they stores data as a json format so it is dynamic. nosql database don't use columns or rows they uses jason as a document. SQL databases are vertically scrollable but nosql database are horizontally scrollable.</p>
        </div>
        <div className="blog-question">
          <h3 className="mb-2">What is the purpose of jwt and how does it work</h3>
          <p>JWT stands for jsonwebtoken. It is mostly used in any application. It transfers data securely between two application. It also helps to securely share data between client and server side. If we don't use it, attackers can easily stole our data. They can access anyone data if we don't use it. We use jwt for authorization and sharing or exchanging information. JWT is divided into 3 parts. One is header one is payload and another one is signature. Header is the jwt header. Payload is the data we send or verify. And Signature is the application secret code. We have to make a application secret to make our jwt secret.</p>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
