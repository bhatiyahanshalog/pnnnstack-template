const axios = require("axios").default;

export async function getStaticProps() {
  var res = await axios.post('http://172.17.0.3:3001/res', {})
  return {
    props: {
      res: res.data
    },
  }
}

function Home(res:any) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world from Client!</h1>
      <h1 className="text-3xl font-bold underline">Hello world {res.res}</h1>
    </>
  );
}

export default Home;
