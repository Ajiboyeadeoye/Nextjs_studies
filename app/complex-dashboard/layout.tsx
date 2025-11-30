export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
    const isLogggedIn = true;
  return isLogggedIn ? (
    <div style={{ padding: "20px" }}>
      
      {/* Title / content from page.tsx */}
      <div style={{ marginBottom: "30px" }}>{children}</div>

      {/* Main grid */}
      <div
        style={{
        //   display: "grid",
        //   gridTemplateColumns: "1fr 1fr",
        //   gap: "20px",
        //   maxWidth: "900px"
            display: "flex",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{users}</div>
        <div>{revenue}</div>
        </div>
        
        <div style= {{ display: "flex", flex: 1}}>{notifications}</div>
        
        <div>{login}</div>
    </div>
    </div>
  ) : (
    login
  );
}   
