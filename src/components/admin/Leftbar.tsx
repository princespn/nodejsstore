import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/images/images";

const Leftbar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-whiteColor border-r border-gray-200 fixed left-0 top-0">
      
      {/* Header */}
      <div className="p-6 border-b">
      <div className="shrink-0 w-40 cursor-pointer">
        <img className="w-full h-full" src={Logo} alt="Logo" />
      </div>

      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-blueColor text-whiteColor"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-blueColor text-whiteColor"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Users
        </NavLink>

        <NavLink
          to="/dashboard/products"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-blueColor text-whiteColor"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-blueColor text-whiteColor"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Settings
        </NavLink>
      </nav>

    </aside>
  );
};

export default Leftbar;
