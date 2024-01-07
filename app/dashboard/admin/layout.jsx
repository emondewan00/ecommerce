import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Breadcrumb /> {children}
    </div>
  );
};

export default AdminLayout;
