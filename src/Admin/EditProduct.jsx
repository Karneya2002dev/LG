import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    const [form, setForm] = useState({
        product_id: "",
        name: "",
        description: "",
        brand: "",
        price: "",
        old_price: "",
        image: "",
        rating: "",
        tab: "deals",
        file: null
    });

    const [preview, setPreview] = useState("");

    // 📥 Fetch product (restore old data)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/${id}`);

                setForm({
                    product_id: res.data.product_id || "",
                    name: res.data.name || "",
                    description: res.data.description || "",
                    brand: res.data.brand || "",
                    price: res.data.price || "",
                    old_price: res.data.old_price || "",
                    image: res.data.image || "",
                    rating: res.data.rating || "",
                    tab: res.data.tab || "deals",
                    file: null
                });

                setPreview(res.data.image); // show old image
            } catch (err) {
                toast.error("Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    // 🖼️ Handle file preview
    const handleFileChange = (file) => {
        setForm({ ...form, file });

        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    // 🚀 Update product
    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!form.name || !form.price) {
            return toast.error("Please fill required fields");
        }

        setUpdating(true);
        const loadingToast = toast.loading("Updating product...");

        try {
            const formData = new FormData();

            Object.keys(form).forEach((key) => {
                if (key === "file" && form.file) {
                    formData.append("file", form.file);
                } else if (key !== "file") {
                    formData.append(key, form[key]);
                }
            });


            await axios.put(
                `http://localhost:5000/api/products/${id}`,
                formData
            );

            toast.success("✅ Product updated successfully!", {
                id: loadingToast
            });

            setTimeout(() => {
                navigate("/admin");
            }, 1000);

        } catch (err) {
            toast.error("❌ Update failed", { id: loadingToast });
        } finally {
            setUpdating(false);
        }
    };

    // ⏳ Loading UI
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl">
                Loading product...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <Toaster position="top-right" />

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">

                <h2 className="text-2xl font-bold mb-6">
                    ✏️ Edit Product
                </h2>

                <form onSubmit={handleUpdate} className="space-y-6">

                    {/* 🔹 PRODUCT INFO */}
                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <label className="label">Product ID</label>
                            <input
                                value={form.product_id}
                                readOnly
                                className="input bg-gray-100 cursor-not-allowed"
                            />
                            <p className="text-xs text-gray-400">Auto-generated (cannot edit)</p>
                        </div>

                        <div>
                            <label className="label">Product Name</label>
                            <input
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="input"
                                placeholder="e.g. LG Washing Machine"
                            />
                        </div>

                        <div>
                            <label className="label">Brand</label>
                            <input
                                value={form.brand}
                                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                                className="input"
                                placeholder="e.g. LG, Samsung"
                            />
                            <p className="text-xs text-gray-400">Manufacturer or brand name</p>
                        </div>

                        <div>
                            <label className="label">Category (Tab)</label>
                            <select
                                value={form.tab}
                                onChange={(e) => setForm({ ...form, tab: e.target.value })}
                                className="input"
                            >
                                <option value="deals">Deals</option>
                                <option value="popular">Popular</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>

                    </div>

                    {/* 🔹 DESCRIPTION */}
                    <div>
                        <label className="label">Product Description</label>
                        <textarea
                            value={form.description}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                            className="input w-full"
                            rows={3}
                            placeholder="Enter product details, features, specifications..."
                        />
                    </div>

                    {/* 🔹 PRICING */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="label">Price</label>
                            <input
                                value={form.price}
                                onChange={(e) => setForm({ ...form, price: e.target.value })}
                                className="input"
                                placeholder="₹ 1000"
                            />
                        </div>

                        <div>
                            <label className="label">Old Price</label>
                            <input
                                value={form.old_price}
                                onChange={(e) => setForm({ ...form, old_price: e.target.value })}
                                className="input"
                                placeholder="₹ 1200 (optional)"
                            />
                            <p className="text-xs text-gray-400">Used for discount display</p>
                        </div>
                    </div>

                    {/* 🔹 IMAGE */}
                    <div>
                        <label className="label">Image Uploaded</label>
                        {/* <input
      value={form.image}
      onChange={(e)=>setForm({...form, image:e.target.value})}
      className="input w-full"
      placeholder="Paste image URL or upload below"
    /> */}

                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e.target.files[0])}
                            className="mt-2"
                        />

                        {preview && (
                            <img
                                src={preview}
                                alt="preview"
                                className="w-40 h-40 object-cover mt-3 rounded-lg border"
                            />
                        )}
                    </div>

                    {/* 🔹 RATING */}
                    <div>
                        <label className="label">Rating</label>
                        <input
                            value={form.rating}
                            onChange={(e) => setForm({ ...form, rating: e.target.value })}
                            className="input"
                            placeholder="1 - 5"
                        />
                        <p className="text-xs text-gray-400">Customer rating (out of 5)</p>
                    </div>

                    {/* 🔹 BUTTONS */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => navigate("/admin")}
                            className="w-full bg-gray-300 py-3 rounded-lg"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={updating}
                            className="w-full bg-black text-white py-3 rounded-lg"
                        >
                            {updating ? "Updating..." : "Update Product"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}