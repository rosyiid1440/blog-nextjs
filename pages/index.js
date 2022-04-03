import Layout from "../components/Layout"
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from "react"

const Home = ({posts}) => {
  return (
    <Layout title="Homepage">
      <div className="jumbotron-fluid bg-dark jumbo">
        <div className="container text-white jumbodiv">
            <div className="row">
                <div className="col-sm-6">
                    <h1 className="display-4"><b>Kopaskode</b></h1>
                    <p className="lead">lorem ipsum.....!!!</p>
                    <button className="btn btn-primary">Suprise Me !</button>
                </div>
            </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md">
              <p className="fs-6">Home</p>
              <hr className="float-left hr"></hr>
          </div>
        </div>
        <div className="row">
          {
            posts.map((post,key) => {
              return (
                <div className="col-md-3 mt-4 d-flex" key={key}>
                  <div className="card">
                    <Link href={`/${post.slug}`}>
                      <a><img className="maxwidth100" src="https://www.petanikode.com/images/cover/php8_hude8033e9c98d5c28f45b022c52cf07e5_43016_360x0_resize_box_3.png"/></a>
                    </Link>
                    <div className="card-body flex-fill">
                      {
                        post.kategori.map((kategori,keykategori) => {
                          return (
                            <Link href={`/kategori/${kategori.slug}`} key={keykategori}>
                              <a className="nodecoration"><b className="text-dark">{kategori.nama_kategori} </b></a>
                            </Link>
                          )
                        })
                      }
                      <Link href={`/${post.slug}`}>
                        <a className="nodecoration"><h5 className="text-dark mt-3">{post.judul}</h5></a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <style jsx>{`
        .jumbo {
          min-height:350px;
        }
        .jumbodiv {
          padding-top:50px;
        }
        .hr{
          margin-top:-10px;
          width:50px;
          color:black;
        }
        .nodecoration{
          text-decoration:none;
        }
        .maxwidth100{
          max-width:100%;
        }
      `}</style>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.urlApi}/post`)
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  }
}

export default Home;
