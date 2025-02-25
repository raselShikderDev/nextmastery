// import Notification from "./@notification/page";
// import Revenue from "./@revenue/page";
// import Users from "./@users/page";

export default function RootLayout({
  children,
  parallelRoutes: { Notification, Revenue, Users },
}: Readonly<{
  children: React.ReactNode;
  parallelRoutes: {
    Notification: React.ReactNode;
    Revenue: React.ReactNode;
    Users: React.ReactNode;
  };
}>) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{Users}</div>
          <div>{Revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{Notification}</div>
      </div>
    </div>
  );
}
