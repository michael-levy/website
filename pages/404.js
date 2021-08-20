import Link from "next/link";
/**
 * Page will display on 404 error
 */
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Looks like you strayed from the path</h2>
      <p>
        Return{" "}
        <Link href="home">
          <a>home</a>
        </Link>
      </p>
      <style jsx>
        {`
          .not-found {
            color: #2e2e2e;
            margin-left: auto;
            width: 100%;
            text-align: center;
            border: 0.01em solid #102524;
          }
          a {
            color: #102524;
          }
        `}
      </style>
    </div>
  );
}