fetch("https://speed.cloudflare.com/meta")
  .then(r => r.json())
  .then(d => {
    if (d.clientGeo && d.clientGeo.country === "CN") {
      window.location.href = "https://my-dual-site.vercel.app";
    }
  });
