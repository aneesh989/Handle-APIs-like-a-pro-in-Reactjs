import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search,setSearch]=useState("")

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('/api/products?search=' + search,{
          signal: controller.signal
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          log('Request cancel', error.message)
          return
        }
        setError(true);
        setLoading(false);
      }
    })();
    return()=>{
      controller.abort()
    }
  }, [search]);
  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <h2>Error fetching products</h2>}
      {loading && <h2>Loading...</h2>}
      <h2>products {products.length}</h2>
    </>
  );
}

export default App;
