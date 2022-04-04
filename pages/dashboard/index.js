import Layout from "../../components/Layout";

function Index({data}) {
    return (
        <Layout title="Dashboard">
            <div className="container mt-4">
                <h1>Dashboard</h1>
                <p>Welcome { data.name }</p>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({req}) {
    const { _token } = req.cookies;
    const response = await fetch(`${process.env.urlApi}/me`, { 
        method: 'get', 
        headers: {
            'Authorization': 'Bearer '+ _token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return {
      props: {
        data: data,
      },
    }
}

export default Index;