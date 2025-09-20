import AdminLayout from "../components/AdminLayout";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const { data, error } = await supabase.from("books").select("*");
      if (error) console.error(error);
      else setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <AdminLayout breadcrumb={["Home", "Books"]}>
      <h2 className="text-2xl font-semibold mb-4">Books</h2>
      <div className="bg-white rounded-xl shadow p-4">
        {books.length === 0 ? (
          <p className="text-gray-500">No books yet.</p>
        ) : (
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-2">Title</th>
                <th className="p-2">Author</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="border-t">
                  <td className="p-2">{book.title}</td>
                  <td className="p-2">{book.author}</td>
                  <td className="p-2">{book.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
}
