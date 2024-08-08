import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Donate Crypto</title>
        <meta charSet="utf-8" />
      </Head>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center py-5 g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhcHB5JTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D"
              className="d-block mx-lg-auto img-fluid"
              width="700"
              height="500"
            />
          </div>

          <h1>Donate Crypto</h1>
        </div>
      </div>
    </>
  );
}
