import AdminLayout from "../../components/AdminLayout";

export default function Books() {
  return (
    <AdminLayout breadcrumb={["Home", "Books"]}>
      <h2 className="text-2xl font-semibold mb-4">Books</h2>
      <div className="bg-white rounded-xl shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Title</th>
              <th className="p-2">Author</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Sample Book</td>
              <td className="p-2">Jane Doe</td>
              <td className="p-2">Draft</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
