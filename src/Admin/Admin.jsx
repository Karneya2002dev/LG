import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Edit3, Trash2, Eye, X, Upload, Package, DollarSign, Star, Layers } from "lucide-react";
// 1. Import Toast
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AdminProducts() {
    const [products, setProducts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [viewProduct, setViewProduct] = useState(null);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const navigate = useNavigate();

    const [form, setForm] = useState({
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

    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/products");
            setProducts(res.data);
        } catch (err) {
            toast.error("Failed to fetch products");
        }
    };

    useEffect(() => { fetchProducts(); }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation feedback
        if (!form.name || !form.price) {
            return toast.error("Please fill in required fields");
        }

        const loadingToast = toast.loading(editingId ? "Updating product..." : "Adding product...");

        try {
            const formData = new FormData();
            Object.keys(form).forEach(key => {
                if (key === 'file' && form.file) formData.append("file", form.file);
                else if (key !== 'file') formData.append(key, form[key]);
            });

            if (editingId) {
                await axios.put(`http://localhost:5000/api/products/${editingId}`, formData);
                toast.success("Product updated successfully!", { id: loadingToast });
            } else {
                await axios.post("http://localhost:5000/api/products", formData);
                toast.success("New product added!", { id: loadingToast });
            }

            closePanel();
            fetchProducts();
        } catch (error) {
            toast.error("Something went wrong", { id: loadingToast });
        }
    };

    const handleDelete = async (id) => {
        // Custom styled confirmation toast instead of window.confirm
        toast((t) => (
            <span className="flex items-center gap-4">
                Delete this product?
                <button
                    onClick={async () => {
                        toast.dismiss(t.id);
                        try {
                            await axios.delete(`http://localhost:5000/api/products/${id}`);
                            toast.success("Deleted successfully");
                            fetchProducts();
                        } catch (err) {
                            toast.error("Delete failed");
                        }
                    }}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                >
                    Confirm
                </button>
            </span>
        ), { duration: 4000 });
    };


    const openPanel = (product = null) => {
        if (product) {
            setEditingId(product.id);
            setForm({ ...product, file: null });
        } else {
            resetForm();
        }
        setIsPanelOpen(true);
    };

    const closePanel = () => {
        setIsPanelOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setForm({
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
        setEditingId(null);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex">
            {/* 2. Place the Toaster component anywhere in your tree */}
            <Toaster position="top-right" reverseOrder={false} />

            {/* 🚀 MAIN CONTENT */}
            <main className="flex-1 p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Product Panel</h1>
                            <p className="text-slate-500">Manage your product catalog and stock.</p>
                        </div>
                        <button
                            onClick={() => openPanel()}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-200"
                        >
                            <Plus size={20} /> Add New Product
                        </button>
                    </div>

                    {/* 📊 TABLE */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Product</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Brand</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Description</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Category</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Price</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Rating</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100">
                                {products.map((p) => (
                                    <tr key={p.id} className="hover:bg-slate-50/50 transition-colors group">

                                        {/* PRODUCT */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden border">
                                                    <img src={p.image} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-800">{p.name}</p>
                                                    <p className="text-xs text-slate-400">ID: {p.product_id}</p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* BRAND */}
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {p.brand || "-"}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {p.description || "Premium quality product designed for maximum performance and durability."}
                                        </td>

                                        {/* CATEGORY */}
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 capitalize">
                                                {p.tab}
                                            </span>
                                        </td>

                                        {/* PRICE */}
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-slate-700">₹{p.price}</p>
                                            {p.old_price && (
                                                <p className="text-xs text-slate-400 line-through">
                                                    ₹{p.old_price}
                                                </p>
                                            )}
                                        </td>

                                        {/* RATING */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className={
                                                            i < Math.round(p.rating)
                                                                ? "text-amber-500 fill-amber-500"
                                                                : "text-black-300"
                                                        }
                                                    />
                                                ))}
                                            </div>
                                        </td>

                                        {/* ACTIONS */}
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => setViewProduct(p)} className="p-2 hover:bg-white rounded-lg border text-slate-600">
                                                    <Eye size={18} />
                                                </button>

                                                <button onClick={() => navigate(`/admin/edit/${p.id}`)} className="p-2 hover:bg-white rounded-lg border text-blue-600">
                                                    <Edit3 size={18} />
                                                </button>

                                                <button onClick={() => handleDelete(p.id)} className="p-2 hover:bg-white rounded-lg border text-red-500">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>


            {/* OVERLAYS */}
            {isPanelOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
                    onClick={closePanel}
                >
                    <div
                        className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* HEADER */}
                        <div className="flex justify-between items-center p-6  bg-slate-50">
                            <h2 className="text-xl font-bold">
                                {editingId ? "✏️ Edit Product" : " Add Product"}
                            </h2>
                            <button onClick={closePanel}>
                                <X size={22} />
                            </button>
                        </div>

                        {/* FORM */}
                        <form
                            onSubmit={handleSubmit}
                            className="p-6 space-y-5 max-h-[80vh] overflow-y-auto no-scroll"
                        >

                            {/* NAME */}
                            <div>
                                <label className="text-sm font-medium">Product Name *</label>
                                <input
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="input"
                                    placeholder="Enter product name"
                                />
                            </div>

                            {/* BRAND */}
                            <div>
                                <label className="text-sm font-medium">Brand</label>
                                <input
                                    value={form.brand}
                                    onChange={(e) => setForm({ ...form, brand: e.target.value })}
                                    className="input"
                                    placeholder="e.g. LG, Samsung"
                                />
                            </div>

                            {/* DESCRIPTION */}
                            <div>
                                <label className="text-sm font-medium">Description</label>
                                <textarea
                                    value={form.description}
                                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                                    className="input"
                                    rows={3}
                                    placeholder="Enter product description"
                                />
                            </div>

                            {/* PRICE */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Price *</label>
                                    <input
                                        value={form.price}
                                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                                        className="input"
                                        placeholder="₹ 1000"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Old Price</label>
                                    <input
                                        value={form.old_price}
                                        onChange={(e) => setForm({ ...form, old_price: e.target.value })}
                                        className="input"
                                        placeholder="₹ 1200"
                                    />
                                </div>
                            </div>

                            {/* CATEGORY + RATING */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Category</label>
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

                                <div>
                                    <label className="text-sm font-medium">Rating</label>
                                    <input
                                        value={form.rating}
                                        onChange={(e) => setForm({ ...form, rating: e.target.value })}
                                        className="input"
                                        placeholder="1 - 5"
                                    />
                                </div>
                            </div>

                            {/* IMAGE */}
                            <div>
                                <label className="text-sm font-medium">Product Image</label>

                                <div className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer">
                                    <input
                                        type="file"
                                        onChange={(e) =>
                                            setForm({ ...form, file: e.target.files[0] })
                                        }
                                    />
                                </div>

                                {form.file && (
                                    <p className="text-xs text-gray-500 mt-1">
                                        Selected: {form.file.name}
                                    </p>
                                )}
                            </div>

                            {/* BUTTONS */}
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={closePanel}
                                    className="w-full bg-gray-200 py-3 rounded-xl"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-3 rounded-xl"
                                >
                                    {editingId ? "Update Product" : "Save Product"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}

            {/* VIEW MODAL (Simplified for space) */}
            {viewProduct && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-60 p-4"
                    onClick={() => setViewProduct(null)}
                >
                    <div
                        className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* IMAGE */}
                        <div className="relative h-64 bg-slate-100 flex items-center justify-center">
                            <button
                                onClick={() => setViewProduct(null)}
                                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow"
                            >
                                <X size={20} />
                            </button>

                            <img
                                src={viewProduct.image}
                                alt=""
                                className="max-h-full object-contain p-6"
                            />
                        </div>

                        {/* DETAILS */}
                        <div className="p-8 space-y-4">

                            <h3 className="text-2xl font-bold text-slate-800">
                                {viewProduct.name}
                            </h3>

                            <p className="text-sm text-slate-400">
                                Product ID: {viewProduct.product_id}
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm">

                                <p><strong>Brand:</strong> {viewProduct.brand || "-"}</p>

                                <p>
                                    <strong>Category:</strong>{" "}
                                    <span className="capitalize">{viewProduct.tab}</span>
                                </p>

                                <p>
                                    <strong>Price:</strong> ₹{viewProduct.price}
                                </p>

                                <p>
                                    <strong>Old Price:</strong>{" "}
                                    {viewProduct.old_price ? `₹${viewProduct.old_price}` : "-"}
                                </p>
                                <p className="flex items-center gap-2">
                                    <strong>Rating:</strong>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => {
                                            const full = star <= Math.floor(viewProduct.rating);
                                            const half =
                                                star === Math.ceil(viewProduct.rating) &&
                                                viewProduct.rating % 1 !== 0;

                                            return (
                                                <div key={star} className="relative w-5 h-5">
                                                    {/* Empty Star */}
                                                    <Star size={20} className="text-gray-300 absolute" />

                                                    {/* Full Star */}
                                                    {full && (
                                                        <Star
                                                            size={20}
                                                            className="text-amber-500 fill-amber-500 absolute"
                                                        />
                                                    )}

                                                    {/* Half Star */}
                                                    {half && (
                                                        <div className="absolute overflow-hidden w-1/2">
                                                            <Star
                                                                size={20}
                                                                className="text-amber-500 fill-amber-500"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </p>
                            </div>

                            {/* DESCRIPTION */}
                            <div>
                                <p className="font-semibold text-slate-700 mb-1">Description</p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {viewProduct.description || "Premium quality product designed for maximum performance and durability."}
                                </p>
                            </div>

                            {/* BUTTON */}
                            <button
                                onClick={() => setViewProduct(null)}
                                className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold mt-4"
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}