import Layout from "../../components/Layout";
import Link from 'next/link'

const Index = ({kategori}) => {
    return (
        <Layout title="Kategori">
            <div className="container mt-5">
                <div className="fs-6">
                    <Link href="/">
                        <a className="text-dark nodecoration"><b>Home </b></a>
                    </Link>
                    »
                    <span> Kategori</span>
                </div>

                <div className="row mt-5">
                    {
                        kategori.map((val,key) => {
                            return (
                                <Link href={`/kategori/${val.slug}`}>
                                    <a className="col-md-2 text-center text-dark nodecoration">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="h5"><b>{val.nama_kategori}</b></div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                
                            )
                        })
                    }
                </div>
            </div>

            <style jsx>{`
                .nodecoration{
                text-decoration:none;
                }
            `}</style>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.urlApi}/kategori`)
    const data = await response.json();
    return {
      props: {
        kategori: data
      },
    }
}

export default Index;