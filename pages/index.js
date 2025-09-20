import AdminLayout from "../components/AdminLayout";

export default function Home() {
  return (
    <AdminLayout breadcrumb={["Home", "Dashboard"]}>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-gray-600">Welcome to your new admin dashboard.</p>
      </div>
    </AdminLayout>
  );
}
