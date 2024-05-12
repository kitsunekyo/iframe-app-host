const APP_URL = "http://localhost:4001";

export function App1() {
  return (
    <iframe
      className="w-full h-full"
      src={APP_URL}
      title="app1"
      name="app1"
      sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts allow-top-navigation"
    />
  );
}
