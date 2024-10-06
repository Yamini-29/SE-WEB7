import SideNav from "../components/SideNavBar";


export default function Home() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-grow p-10 bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
        <p>Here is some content for your homepage.</p>
      </div>
    </div>
  );
}
