
export default function Navbar() {

  return (
    <div style={{ marginBottom: "100px" }}>
      <nav
        style={{
          boxShadow: "0px 0px 8px 0px rgba(0,0,0,1)",
        }}
        className="navbar fixed-top navbar-light bg-dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i
              className="bi bi-egg-fill"
              style={{
                color: "#FFB72B",
                fontSize: "2rem",
                float: "left",
                marginRight: "20px",
              }}
            ></i>
            <h1
              style={{
                display: "inline",
                fontWeight: "900",
                fontSize: "2.2rem",
                color: "white",
              }}
            >
              {" "}
              Fooder{" "}
            </h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

