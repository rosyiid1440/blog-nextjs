import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Kategori = ({posts,kategori}) => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <Layout title="dasd">
            <div className='container mt-5'>
                <div className="fs-6">
                    <Link href="/">
                        <a className="text-dark nodecoration"><b>Home </b></a>
                    </Link>
                    »
                    <Link href="/kategori">
                        <a className="text-dark nodecoration"><b> Kategori </b></a>
                    </Link>
                    »
                    <span> {kategori.nama_kategori}</span>
                </div>
            </div>

            <div className='container'>
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
                .nodecoration{
                text-decoration:none;
                }
                .maxwidth100{
                max-width:100%;
                }
            `}</style>
        </Layout>
    );
}

export async function getServerSideProps({params}) {
    const response = await fetch(`${process.env.urlApi}/kategori/${params.pid}`)
    const data = await response.json();
    return {
      props: {
        posts: data.post,
        kategori: data.kategori
      },
    }
}

export default Kategori;