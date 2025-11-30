export const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "30px",
    minHeight: "120px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #eee",
    borderRadius: "12px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
  };

  return <div style={cardStyle}>{children}</div>;
};
