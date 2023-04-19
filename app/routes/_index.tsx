import { Links, V2_MetaFunction } from "@remix-run/react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "@remix-run/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { json } from "@remix-run/node";
import Header from "~/components/Header";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

const SERVICES_QUERY = gql`
  query GetServices {
    services {
      data {
        attributes {
          Name
          Description
        }
      }
    }
  }
`;

export default function Index() {
  const { data } = useQuery(SERVICES_QUERY);
  console.log(data?.services?.data);
  const data1 = data?.services?.data[0];
  console.log(data1?.attributes.Name);
  return (
    <div>
      {/* <Link to="/home">Home Page </Link>
      <Link to="/about">About Page </Link> */}
      <Header />
    </div>
  );
}
