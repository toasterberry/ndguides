// Test 1: Script execution
console.log("=== DPI Calculator Debug Start ===");

// Test 2: Immediate element check (before DOM ready)
console.log("Button exists immediately:", !!document.getElementById('ndCalculateDpiBtnV2'));

// Test 3: Multiple DOM ready approaches
document.addEventListener('DOMContentLoaded', function() {
    console.log("=== DOMContentLoaded fired ===");
    testElements();
});

// Alternative DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', testElements);
} else {
    console.log("=== DOM already ready, calling testElements immediately ===");
    testElements();
}

// Test 4: Window load (later than DOM ready)
window.addEventListener('load', function() {
    console.log("=== Window load fired ===");
    testElements();
});

// Test 5: Delayed check (in case of dynamic content)
setTimeout(function() {
    console.log("=== Delayed check (1 second) ===");
    testElements();
}, 1000);

function testElements() {
    console.log("--- Testing elements ---");

    const btn = document.getElementById('ndCalculateDpiBtnV2');
    const currentDpi = document.getElementById('ndCurrentDpiV2');
    const monitorHeight = document.getElementById('ndMonitorVertRes');
    const gameSelect = document.getElementById('ndGameSeriesV2');

    console.log("Button found:", !!btn);
    console.log("Current DPI input found:", !!currentDpi);
    console.log("Monitor height input found:", !!monitorHeight);
    console.log("Game select found:", !!gameSelect);

    if (btn) {
        console.log("Button element:", btn);
        console.log("Button onclick property:", btn.onclick);
        console.log("Button has existing event listeners:", !!btn._listeners);

        // Test multiple event binding approaches

        // Approach 1: addEventListener
        console.log("Adding addEventListener...");
        btn.addEventListener('click', function(e) {
            console.log("addEventListener click fired!");
            e.preventDefault();
            alert("addEventListener worked!");
        });

        // Approach 2: onclick property
        console.log("Setting onclick property...");
        const originalOnclick = btn.onclick;
        btn.onclick = function(e) {
            console.log("onclick property fired!");
            e.preventDefault();
            alert("onclick property worked!");
            if (originalOnclick) originalOnclick.call(this, e);
        };

            // Approach 3: setAttribute
            console.log("Testing setAttribute...");
            // btn.setAttribute('onclick', 'console.log("setAttribute worked!"); alert("setAttribute worked!");');

            // Test if button is actually clickable
            console.log("Button computed style display:", window.getComputedStyle(btn).display);
            console.log("Button computed style visibility:", window.getComputedStyle(btn).visibility);
            console.log("Button computed style pointer-events:", window.getComputedStyle(btn).pointerEvents);
            console.log("Button offsetParent:", btn.offsetParent);

    } else {
        console.log("❌ Button not found!");

        // Debug: find all buttons
        const allButtons = document.querySelectorAll('button');
        console.log("All buttons on page:", allButtons.length);
        allButtons.forEach((button, index) => {
            console.log(`Button ${index}:`, button.id, button.textContent.trim());
        });

        // Debug: find elements with similar IDs
        const elementsWithNd = document.querySelectorAll('[id*="nd"]');
        console.log("Elements with 'nd' in ID:", elementsWithNd);
    }
}

// Test 6: Click detection on document level
document.addEventListener('click', function(e) {
    if (e.target.id === 'ndCalculateDpiBtnV2') {
        console.log("Document-level click detected on calculate button!");
        alert("Document-level click worked!");
    }
    console.log("Click detected on:", e.target.tagName, e.target.id, e.target.className);
});

console.log("=== Debug script setup complete ===");
