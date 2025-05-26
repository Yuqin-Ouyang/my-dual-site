fetch("https://ipapi.co/json")
  .then(r => r.json())
  .then(data => {
    if (data && data.country_code === "CN") {
      window.location.href = "https://cdn.jsdelivr.net/gh/Yuqin-Ouyang/my-dual-site@main/";
    }
  });
