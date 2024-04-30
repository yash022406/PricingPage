const tableData = [
  { feature: "Core", free: "", essential: "", growth: "", custom: "tr" },
  {
    feature: "Minutes per month",
    free: "75 mins",
    essential: "200 - 500 mins",
    growth: "200 - 1000 mins",
    custom: "400 - 1000 mins",
  },
  {
    feature: "Render Quality",
    free: "720p",
    essential: "1080p",
    growth: "1080p",
    custom: "4K",
  },
  {
    feature: "Import with Youtube or Computer Upload",
    free: "t",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Import with Integrations (Drive, Dropbox, Box)",
    free: "f",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "AI Subtitles (Captions)",
    free: "f",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Multi-lingual feature",
    free: "t",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  { feature: "Chapters", free: "t", essential: "t", growth: "t", custom: "t" },
  {
    feature: "Credit Saver",
    free: "t",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Intelliclips",
    free: "f",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Virality Score",
    free: "f",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Bulk export",
    free: "f",
    essential: "f",
    growth: "Up to 5",
    custom: "Unlimited",
  },
  {
    feature: "Multiple Aspect Ratio",
    free: "f",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Default Templates",
    free: "t",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Create Custom Clip",
    free: "t",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  { feature: "Cutmagic", free: "t", essential: "t", growth: "t", custom: "t" },
  {
    feature: "Auto-Emoji",
    free: "t",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Fancy Captions",
    free: "t",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Progress bar",
    free: "t",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Stock Media (Pexels, etc)",
    free: "f",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Background Audio",
    free: "t",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Custom Backgrounds",
    free: "f",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Save Draft",
    free: "f",
    essential: "3 per project",
    growth: "10 per project",
    custom: "25 per project",
  },
  {
    feature: "Edit Downloaded Video",
    free: "f",
    essential: "t",
    growth: "t",
    custom: "t",
  },
  {
    feature: "Data Retention",
    free: "90 days",
    essential: "180 days",
    growth: "180 days",
    custom: "Custom ?",
  },
  { feature: "Brand Kit", free: "", essential: "", growth: "", custom: "trd" },
  { feature: "Social", free: "", essential: "", growth: "", custom: "trd" },
  { feature: "Metadata", free: "", essential: "", growth: "", custom: "trd" },
];

const tableBody = document.querySelector("tbody");
const table = document.getElementById("table");
let flag = 1;
let flagb = 1;

tableData.map((row) => {
  const tr = document.createElement("tr");

  // Add the feature cell
  const featureCell = document.createElement("td");
  featureCell.textContent = row.feature;
  if (row.feature === "Core" || row.feature === "Brand Kit" || row.feature === "Social"|| row.feature === "Metadata") {
    featureCell.classList.add("core-feature");
  }
  tr.appendChild(featureCell);

  // Add the remaining cells with checkboxes or text content
  for (const key in row) {

    if (key !== "feature") {
      const cell = document.createElement("td");
      cell.style.position = "relative"; // Add position relative to the cell

      if (key === "growth") {
        // Check if the current cell is in the "growth" column
        cell.classList.add("growth"); // Add the 'growth' class to the cell
      }

      if (row[key] === "f") {
        // Create an SVG cross icon element
        const cross = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        cross.setAttribute("viewBox", "0 0 24 24");
        cross.setAttribute("width", "16");
        cross.setAttribute("height", "16");
        cross.innerHTML =
          '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor" />';
        cell.appendChild(cross);
      } else if (row[key] === "t") {
        // Create an SVG check icon element
        const check = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        check.setAttribute("viewBox", "0 0 24 24");
        check.setAttribute("width", "16");
        check.setAttribute("height", "16");
        check.innerHTML =
          '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />';
        cell.appendChild(check);
      } else if (row.feature === "Credit Saver") {
        // Create a span element for the text
        const textSpan = document.createElement("span");
        textSpan.textContent = row[key];
        cell.appendChild(textSpan);

        // Create an SVG info icon element
        const infoIcon = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        infoIcon.setAttribute("viewBox", "0 0 24 24");
        infoIcon.setAttribute("width", "16");
        infoIcon.setAttribute("height", "16");
        infoIcon.innerHTML =
          '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor" />';
        cell.appendChild(infoIcon);
      } else if (row[key] === "tr" && flag === 1) {
        const chevron = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        chevron.classList.add("chevron");
        chevron.classList.add("chevron-down");
        chevron.setAttribute("viewBox", "0 0 24 24");
        chevron.setAttribute("width", "32");
        chevron.setAttribute("height", "32");
        chevron.innerHTML = '<path d="M6 9l6 6 6-6"/>';
        chevron.addEventListener("click", () => {
          flag = flag * -1;
          const rows = document.querySelectorAll("tbody tr");
          rows.forEach((row, index) => {
            if (index !== 0 && index !== tableData.length - 1 && index !== tableData.length - 2 && index !== tableData.length - 3) {
              row.classList.toggle("hidden");
            }
          });
          chevron.classList.toggle("chevron-up"); // Toggle class for facing up
          chevron.classList.toggle("chevron-down"); // Toggle class for facing down
        });
        cell.appendChild(chevron);
      } else if (row[key] === "trd") {
        const chevron = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        chevron.classList.add("chevron");
        chevron.classList.add("chevron-down");
        chevron.setAttribute("viewBox", "0 0 24 24");
        chevron.setAttribute("width", "32");
        chevron.setAttribute("height", "32");
        chevron.innerHTML = '<path d="M6 9l6 6 6-6"/>';
        chevron.addEventListener("click", () => {
          flagb = flagb * -1;
          const rows = document.querySelectorAll("tbody tr");
          rows.forEach((row, index) => {
            if (index !== 0 && index !== tableData.length-1 && index.length -2 && tableData.length-3) {
              row.classList.toggle("hidden");
            }
          });
          chevron.classList.toggle("chevron-up"); // Toggle class for facing up
          chevron.classList.toggle("chevron-down"); // Toggle class for facing down
        });
        cell.appendChild(chevron);
      }
       else {
        cell.textContent = row[key];
      }
      

      tr.appendChild(cell);
    }
    
  }

  tableBody.appendChild(tr);
});

// view tables toggle 

const viewAll = document.getElementById("viewAllF");
const tableS = document.getElementById("table");
viewAll.addEventListener("click", () => {
  tableS.classList.toggle("hidden");
});
