const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#333",
          color: "#ddd",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        Copyrights &copy; {new Date().getFullYear()} by Car Shop. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
