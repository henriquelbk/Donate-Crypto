"use client"; // This is a client component

import React from "react";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import { doLogin } from "@/services/Web3Service";

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");

  function btnDoLogin() {
    doLogin()
      .then((wallet) => setWallet(wallet))
      .catch((err) => setError(err.message));
  }

  return (
    <>
      <Head>
        <title>Donate Crypto</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale-1"/>
      </Head>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center py-5 g-5">
          {!wallet ? (
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhcHB5JTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D"
                className="d-block mx-lg-auto img-fluid"
                width="700"
                height="500"
              />
            </div>
          ) : (
            <div className="col-10 col-sm-8 col-lg-6">
              <p className="mb-3">Welcome {wallet}</p>
              <p className="mb-3">What do you want to do?</p>
              <div className="col-12">
                <p>
                  <Link href="/donate" className="btn btn-primary col-6 p-3">
                    I want to donate
                  </Link>
                </p>
                <p>
                  <Link href="/create" className="btn btn-secondary col-6 p-3">
                    I want to create a Campaing
                  </Link>
                </p>
              </div>
            </div>
          )}

          <div className="col-lg-6"></div>
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Donate Crypto
          </h1>
          <p className="lead">Your custom donate dex platform</p>
          <p className="lead mb-3">
            Sign in with your wallet, create your campaign or <br /> donate to
            existing campaings!
          </p>
          {!wallet ? (
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
                onClick={btnDoLogin}
              >
                <img src="/metamask.png" width="64" className="me-3" />
                Connect with Metamask
              </button>
              {error}
            </div>
          ) : (
            <></>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
