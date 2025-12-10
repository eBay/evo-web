const fs = require("fs");
const https = require("https");

const metadataFile = "./src/data/component-metadata.json";
const metadata = JSON.parse(fs.readFileSync(metadataFile, "utf8"));

// Function to check URL status
function checkUrl(url) {
  return new Promise((resolve) => {
    https
      .get(url, { timeout: 5000 }, (res) => {
        resolve({ url, status: res.statusCode });
      })
      .on("error", (err) => {
        resolve({ url, status: "ERROR", error: err.message });
      })
      .on("timeout", () => {
        resolve({ url, status: "TIMEOUT" });
      });
  });
}

async function checkAllUrls() {
  const urlsToCheck = [];
  const componentUrls = new Map();

  // Collect all URLs
  Object.entries(metadata).forEach(([componentName, componentData]) => {
    if (componentData["ds-component"]) {
      const dsComponent = componentData["ds-component"];

      if (Array.isArray(dsComponent)) {
        dsComponent.forEach((ds, index) => {
          if (ds.url) {
            urlsToCheck.push(ds.url);
            if (!componentUrls.has(ds.url)) {
              componentUrls.set(ds.url, []);
            }
            componentUrls.get(ds.url).push(`${componentName}[${index}]`);
          }
        });
      } else if (dsComponent.url) {
        urlsToCheck.push(dsComponent.url);
        if (!componentUrls.has(dsComponent.url)) {
          componentUrls.set(dsComponent.url, []);
        }
        componentUrls.get(dsComponent.url).push(componentName);
      }
    }
  });

  const uniqueUrls = [...new Set(urlsToCheck)];
  console.log(`Checking ${uniqueUrls.length} unique URLs...\n`);

  const results = [];
  for (const url of uniqueUrls) {
    const result = await checkUrl(url);
    results.push(result);

    const components = componentUrls.get(url).join(", ");
    if (result.status === 404) {
      console.log(`❌ 404: ${url}`);
      console.log(`   Components: ${components}\n`);
    } else if (result.status === "ERROR" || result.status === "TIMEOUT") {
      console.log(`⚠️  ${result.status}: ${url}`);
      console.log(`   Components: ${components}\n`);
    } else if (result.status >= 200 && result.status < 300) {
      console.log(`✅ ${result.status}: ${url}`);
    } else {
      console.log(`⚠️  ${result.status}: ${url}`);
      console.log(`   Components: ${components}\n`);
    }

    // Small delay to avoid overwhelming the server
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  // Summary
  const notFoundUrls = results.filter((r) => r.status === 404);
  console.log("\n" + "=".repeat(80));
  console.log(`\nSummary:`);
  console.log(`Total URLs checked: ${uniqueUrls.length}`);
  console.log(`404 Not Found: ${notFoundUrls.length}`);

  if (notFoundUrls.length > 0) {
    console.log(`\n404 URLs:`);
    notFoundUrls.forEach((r) => {
      const components = componentUrls.get(r.url).join(", ");
      console.log(`  - ${r.url}`);
      console.log(`    (${components})`);
    });
  }
}

checkAllUrls().catch(console.error);
