import { useRouter } from 'next/router'
import Layout from "../components/Layout"
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from "react"

export default function Post() {
  const router = useRouter()
  const { pid } = router.query

  const [posts, setPosts] = useState([])
  const [kategori, setKategori] = useState([])

  const get = async () => {
    const response = await fetch(`${process.env.urlApi}/${pid}`)
    const data = await response.json();
    setPosts(data)
    setKategori(data.kategori)
  }

  useEffect(() => {
    get();
  }, [])

  return (
    <Layout title={`${pid}`}>
      <div className='container pt-4 pb-5'>
        <div className="row">
          <div className="col-md fs-6">
            <Link href="/">
              <a className="text-dark nodecoration"><b>Home </b></a>
            </Link>
            »
            <span> {pid}</span>
          </div>

          <div className="row mt-4">
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="mb-2">
                    {
                      kategori.map((kategori) => {
                        return (
                          <Link href={`/kategori/${kategori.slug}`}>
                            <a className="text-dark nodecoration"><b>{kategori.nama_kategori} </b></a>
                          </Link>
                        )
                      })
                    }
                  </div>

                  <h3>{posts.judul}</h3>

                  <p className='createdAt'>{posts.name} | 19 Oktober 2022</p>
                  <hr/>
                  <img className="img-responsive maxwidth100" src="https://www.malasngoding.com/wp-content/uploads/2020/08/Membuat-Data-Dummy-Dengan-Faker-PHP.png" alt=""/>

                  <div className="mt-4">
                    {posts.isi}
                  </div>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nodecoration{
          text-decoration:none;
        }
        .maxwidth100{
          max-width:100%;
        }
        .createdAt{
          font-size:10pt;
          color:grey;
        }
      `}</style>
    </Layout>
  )
}

