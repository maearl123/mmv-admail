import Link from "next/link";

export default function AdminLayout({ children, breadcrumb = ["Home"] }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6">MMV Admin</h1>
        <nav className="flex flex-col gap-2">
          <Link href="/">Dashboard</Link>
          <Link href="/books">Books</Link>
          <Link href="/users">Users</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="text-sm text-gray-500 mb-4">{breadcrumb.join(" / ")}</div>
        {children}
      </main>
    </div>
  );
}
