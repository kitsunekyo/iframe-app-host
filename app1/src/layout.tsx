import { Link, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="grid grid-cols-[200px,1fr] gap-4 h-full">
      <aside className="bg-gray-700 rounded">
        <nav className="p-6">
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">app1/page1</Link>
            </li>
            <li>
              <Link to="/page2">app1/page2</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
