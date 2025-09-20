import AdminLayout from "../../components/AdminLayout";

export default function Users() {
  return (
    <AdminLayout breadcrumb={["Home", "Users"]}>
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-gray-600">User management coming soon.</p>
      </div>
    </AdminLayout>
  );
}
