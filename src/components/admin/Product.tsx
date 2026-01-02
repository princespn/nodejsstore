import { useEffect, useState } from "react";
import api from "../../api/api";

interface Product {
  id: number;
  name: string;
  price: number;
  status: string;
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    price: "",
    status: "active",
  });

  /* ---------------- Fetch Products ---------------- */
  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/admin/products");
      setProducts(data.data || data);
    } catch (err) {
      setError("Failed to load products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ---------------- Add Product ---------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await api.post("/admin/product/new", {
        name: form.name,
        price: Number(form.price),
        status: form.status,
      });

      setForm({ name: "", price: "", status: "active" });
      fetchProducts();
    } catch (err) {
      setError("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Products</h1>

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* ---------------- Add Product Form ---------------- */}
      <div className="bg-whiteColor p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Add Product</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            required
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            required
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-blueColor text-whiteColor py-2 rounded hover:bg-yellowColor md:col-span-3"
          >
            {loading ? "Saving..." : "Add Product"}
          </button>
        </form>
      </div>

      {/* ---------------- Products Table ---------------- */}
      <div className="bg-whiteColor p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Product List</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">#</th>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Price</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr key={product.id} className="border-b">
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{product.name}</td>
                  <td className="py-2">₹ {product.price}</td>
                  <td className="py-2 capitalize">{product.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Product;
