import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/main.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity:
        "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://code.jquery.com/jquery-migrate-3.4.0.js",
      integrity: "sha256-0Nkb10Hnhm4EJZ0QDpvInc3bRp77wQIbIQmWYH3Y7Vw=",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      rel: "stylesheet",
    },
    {
      href: "https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css",
      rel: "stylesheet",
    },
  ];
}
