import { Link, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="grid grid-rows-[60px,1fr] min-h-screen">
      <header className="px-6 py-3 border-b flex items-center">
        <span className="font-medium">application host shell</span>
      </header>
      <div className="bg-gray-200 grid grid-cols-[min-content,1fr]">
        <aside className="bg-white px-6 py-8 flex justify-center">
          <nav className="flex flex-col">
            <ul className="space-y-4">
              <li>
                <Link to="/">
                  <AppButton>home</AppButton>
                </Link>
              </li>
              <li>
                <Link to="/apps/app1">
                  <AppButton>app1</AppButton>
                </Link>
              </li>
            </ul>
            <footer className="mt-auto">
              <div className="rounded-full size-12 bg-gray-300 grid place-items-center">
                <span>AS</span>
              </div>
            </footer>
          </nav>
        </aside>
        <div className="bg-gray-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function AppButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="size-12 rounded bg-gray-800 p-1 text-white text-sm font-medium">
      {children}
    </button>
  );
}
