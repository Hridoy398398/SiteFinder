const DATA_URL = "https://raw.githubusercontent.com/Hridoy398398/SiteFinder/refs/heads/root/data.json"; // GitHub repo তে রাখা JSON ফাইল

document.getElementById("searchBtn").addEventListener("click", () => {
    let siteId = document.getElementById("searchBox").value.trim();
    fetch(DATA_URL)
        .then(res => res.json())
        .then(data => {
            let site = data.find(item => item.site_id === siteId);
            let resultDiv = document.getElementById("result");
            if (site) {
                resultDiv.innerHTML = `
                    <h3>Site Information</h3>
                    <p><b>Site ID:</b> ${site.site_id}</p>
                    <p><b>Key Info:</b> ${site.key_info}</p>
                    <p><b>Location:</b> ${site.location}</p>
                    <p><b>Latitude:</b> ${site.latitude}</p>
                    <p><b>Longitude:</b> ${site.longitude}</p>
                    <p><b>Share ID:</b> ${site.share_id}</p>
                    <p><b>Type:</b> ${site.type}</p>
                    <p><b>Priority:</b> ${site.priority}</p>
                    <p><b>Thana:</b> ${site.thana}</p>
                    <p><b>MSD Office:</b> ${site.msd_office}</p>
                `;
            } else {
                resultDiv.innerHTML = `<p style="color:red;">No site found with ID ${siteId}</p>`;
            }
        })
        .catch(err => {
            document.getElementById("result").innerHTML = 
                `<p style="color:red;">Error loading data.json</p>`;
            console.error(err);
        });
});
