---
label: Hardware
order: -40
icon: gear
---

# Hardware

Almost every piece of hardware related to operating Nancy Drew games can impact your play to some degree. If you're new or are speedrunning more for fun, don't worry about this page too much. Learning the game will impact your time more than anything.

## Mouse

Having a bad mouse can hinder you in ways you may not even realize. Going from a 15 year old office mouse to even a budget but decent modern "gaming" mouse is a night and day difference. You'll likely see improvements in click speed and aiming consistency.

Glorious is a good high end brand with features good for click speed. Logitech make great high performance budget mice. The sensors in most modern mice are excellent, so the physical shape of the mouse will matter most for aiming, and your favorite shape could lie in any reputable brand. Wireless is also an amazing quality of life feature, and doesn't add perceivable latency.

Settings are also important. Navigate to your mouse settings in Windows, then click "Additional Mouse Options". Go to the "Pointer Options" tab. You should have "Enhance pointer precision" unticked. This will allow for consistency when moving your mouse, and is essential for building muscle memory. Your pointer speed should be set exactly in the middle, otherwise your cursor will occasionally skip pixels. 

![](/images/hardware/mouseproperties.avif)

You can instead adjust your mouse speed by changing your mouse's DPI. You should go for a relatively low sensitivity that still allows you plenty of physical room to move your mouse. These changes may feel jarring at first, but after quickly adjusting to them, they will feel much better.

If you play the older games in full screen, you may notice your cursor moves way faster. A good solution is having a 2nd DPI option set in your mouse to compensate. Most gaming mice have software where you can set what DPI settings a button can switch between. If you want it to feel exactly the same as your desktop, use the calculator below to get a 2nd DPI value to use. ((((Positive 40 test))))

<style>
    .dpi-calculator-container {
        background-color: var(--color-background-offset);
        border: 1px solid var(--color-border);
        color: var(--color-text);
        padding: 20px;
        border-radius: 8px;
        margin-top: 25px;
        margin-bottom: 25px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .dpi-calculator-container h3 {
        margin-top: 0;
        margin-bottom: 15px;
        color: var(--color-heading);
        font-size: 1.4em;
    }
    
    .dpi-calculator-container p.description {
        margin-bottom: 20px;
        font-size: 0.95em;
        color: var(--color-text-light);
    }

    .dpi-calculator-input-group {
        margin-bottom: 18px;
    }

    .dpi-calculator-input-group label {
        display: block;
        margin-bottom: 6px;
        font-weight: 600;
        color: var(--color-text);
        font-size: 0.95em;
    }

    .dpi-calculator-container input[type="number"],
    .dpi-calculator-container select {
        width: 100%;
        padding: 12px;
        /* Use Retype's variables first, with visible fallbacks if they're transparent/missing */
        border: 2px solid var(--color-input-border, var(--color-border, rgba(0,0,0,0.2)));
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 1em;
        background-color: var(--color-input-background, var(--color-background));
        color: var(--color-input-text, var(--color-text));
        min-height: 44px;
        line-height: 1.4;
        transition: border-color 0.2s ease-in-out;
    }

    /* More specific selectors to avoid conflicts with Retype's navigation */
    .dpi-calculator-container .dpi-calculator-input-group input[type="number"] {
        border-color: var(--color-input-border, var(--color-border, rgba(0,0,0,0.2)));
    }
    
    .dpi-calculator-container .dpi-calculator-input-group select {
        border-color: var(--color-input-border, var(--color-border, rgba(0,0,0,0.2)));
    }
    
    .dpi-calculator-container select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: var(--select-arrow-light);
        background-repeat: no-repeat;
        background-position: right 12px center;
        background-size: 12px;
        padding-right: 36px;
    }

    /* Define arrow images as CSS variables that Retype can override */
    :root {
        --select-arrow-light: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    }

    .dpi-calculator-container input[type="number"]:focus,
    .dpi-calculator-container select:focus {
        border-color: var(--color-primary, #007bff);
        outline: none;
        box-shadow: 0 0 0 0.15rem var(--color-primary-shadow, rgba(0,123,255,.25));
    }

    .dpi-calculator-input-group small {
        display: block;
        margin-top: 6px;
        color: var(--color-text-lighter);
        font-size: 0.85em;
    }

    .dpi-calculator-container button {
        background-color: var(--color-primary, #007bff);
        color: var(--color-primary-text, white);
        padding: 10px 18px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        font-weight: 500;
        transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        display: inline-block;
        text-align: center;
    }

    .dpi-calculator-container button:hover {
        background-color: var(--color-primary-hover, #0056b3);
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .dpi-calculator-result {
        margin-top: 20px;
        padding: 15px;
        background-color: var(--color-success-background);
        border: 1px solid var(--color-success-border);
        border-left: 5px solid var(--color-success);
        color: var(--color-success-text);
        border-radius: 5px;
    }

    .dpi-calculator-result h4 {
        margin-top: 0;
        margin-bottom: 8px;
        font-size: 1.1em;
        color: var(--color-success-heading);
    }

    .dpi-calculator-result strong {
        font-size: 1.8em;
        color: var(--color-success);
    }
    
    .dpi-calculator-result small {
        display: block;
        margin-top: 8px;
        font-size: 0.9em;
    }

    .dpi-calculator-error {
        margin-top: 15px;
        padding: 12px;
        background-color: var(--color-danger-background);
        border: 1px solid var(--color-danger-border);
        border-left: 5px solid var(--color-danger);
        color: var(--color-danger-text);
        border-radius: 5px;
        font-size: 0.95em;
    }
</style>

<div class="dpi-calculator-container">

<div class="dpi-calculator-input-group">
    <label for="ndCurrentDpiV2">Your Current DPI:</label>
    <input type="number" id="ndCurrentDpiV2" name="ndCurrentDpiV2" placeholder="e.g., 800" min="50" step="50">
</div>

<div class="dpi-calculator-input-group">
    <label for="ndMonitorVertRes">Your Desktop Resolution Height (in pixels):</label>
    <input type="number" id="ndMonitorVertRes" name="ndMonitorVertRes" placeholder="e.g., 1080 for 1920x1080">
    <small>Common values: 720 (720p), 1080 (1080p), 1440 (1440p/2K), 2160 (UHD/4K)</small>
</div>

<div class="dpi-calculator-input-group">
    <label for="ndGameSeriesV2">ND Game/s (17-24 assume fullscreen 1 option):</label>
    <select id="ndGameSeriesV2" name="ndGameSeriesV2">
        <option value="480">Games 1-15</option>
        <option value="600">Games 16-24</option>
    </select>
</div>

<button id="ndCalculateDpiBtnV2">Calculate Equivalent In-Game DPI</button>

<div id="ndDpiResultV2" class="dpi-calculator-result" style="display:none;">
    <h4>Equivalent In-Game DPI:</h4>
    <p><strong id="ndCalculatedDpiValueV2"></strong></p>
</div>
<div id="ndDpiErrorV2" class="dpi-calculator-error" style="display:none;"></div>
</div>

<script>
function calculateDPI() {
    const currentDpiEl = document.getElementById('ndCurrentDpiV2');
    const monitorVertResEl = document.getElementById('ndMonitorVertRes');
    const gameSeriesEl = document.getElementById('ndGameSeriesV2');
    const resultDiv = document.getElementById('ndDpiResultV2');
    const calculatedDpiValueEl = document.getElementById('ndCalculatedDpiValueV2');
    const errorDiv = document.getElementById('ndDpiErrorV2');
    
    // Clear previous results
    if (resultDiv) resultDiv.style.display = 'none';
    if (errorDiv) {
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';
    }
    
    // Get and parse input values
    const currentDpi = parseFloat(currentDpiEl ? currentDpiEl.value : '');
    const monitorHeight = parseFloat(monitorVertResEl ? monitorVertResEl.value : '');
    const gameRenderHeight = parseFloat(gameSeriesEl ? gameSeriesEl.value : '');
    
    function showError(message) {
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }
    
    // Input validation
    if (isNaN(currentDpi) || currentDpi <= 0 || currentDpi > 500000) {
        showError('Please enter a valid current DPI (between 50-500000).');
        return;
    }
    
    if (isNaN(monitorHeight) || monitorHeight < gameRenderHeight || monitorHeight > 10000) {
        showError(`Please enter a valid monitor height (at least ${gameRenderHeight} pixels for the selected games).`);
        return;
    }
    
    if (isNaN(gameRenderHeight) || gameRenderHeight <= 0) {
        showError('Please select a valid game series.');
        return;
    }
    
    // Calculate new DPI
    const scalingFactor = monitorHeight / gameRenderHeight;
    const newDpi = currentDpi / scalingFactor;
    
    // Validate result
    if (isNaN(newDpi) || newDpi <= 0 || !isFinite(newDpi)) {
        showError('Could not calculate DPI. Please check your inputs.');
        return;
    }
    
    // Display result
    if (calculatedDpiValueEl && resultDiv) {
        calculatedDpiValueEl.textContent = Math.round(newDpi);
        resultDiv.style.display = 'block';
    }
}

function setupCalculator() {
    const calculateBtn = document.getElementById('ndCalculateDpiBtnV2');
    
    if (!calculateBtn) return;
    
    calculateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        calculateDPI();
    });
    
    // Clear results when inputs change
    const inputs = [
        document.getElementById('ndCurrentDpiV2'),
        document.getElementById('ndMonitorVertRes'),
        document.getElementById('ndGameSeriesV2')
    ];
    
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('input', function() {
                const resultDiv = document.getElementById('ndDpiResultV2');
                const errorDiv = document.getElementById('ndDpiErrorV2');
                if (resultDiv) resultDiv.style.display = 'none';
                if (errorDiv) errorDiv.style.display = 'none';
            });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCalculator);
} else {
    setupCalculator();
}

window.addEventListener('load', setupCalculator);
</script>

## Monitor

Your monitor primarily affects your reaction time. Most modern displays have a small delay between receiving content and actually displaying it. It's not uncommon to find a display with 50-100ms+ of latency. 100ms might not seem like much, but with just 10 instances of you performing any action based on reaction time, you've lost a full second solely due to your display. TVs are most prone to heavy latency, and should generally be avoided. Most computer monitors are better than TVs, but can vary.

Refresh rate is a separate matter, but it still affects the overall latency of your monitor. 60Hz is the most common refresh rate in general, and in the best of circumstances is still very usable. Higher refresh rates can reduce input latency because you have less time lost between changes on screen due to it changing more often. Not only do higher refresh rates reduce latency, they also just feel better to play. Everything looks and feels smoother, and that alone improves the overall experience.

While the monitor is important, you may run into diminishing returns pretty fast. A 120Hz or 144Hz "gaming" monitor is a great balance between price and performance. If money is no object, very high refresh rate OLED monitors provide the lowest input latency possible with modern displays. Though more niche, higher end retro CRT monitors can provide high refresh rates, 0 latency, and make the older ND games look amazing compared to modern displays. They're mainly worth considering if you already have one, or are already interested in them.

## Storage

The type of storage your games are installed and running on can affect load times drastically over the span of a run. Hard Disk Drives (HDD), especially ones common in older laptops, can add *several* seconds to your run, maybe even minutes. Even some of the cheapest Solid-State Drives (SSD) can save time. Diminishing returns are quickly met when comparing moderate speed SSDs against high speed ones, with savings quickly dropping to the milliseconds and getting lost in error. 

If you only have access to a HDD, navigating throughout the game before starting a run can reduce some issues.

## Computer

As long as you're using anything relatively modern, the rest of your computer's hardware shouldn't matter too much for games before Midnight in Salem. Even a budget "gaming" PC from 6+ years ago should be more than capable of playing this series while recording/streaming with good performance. Many laptops are very usable as well. You might find small increases in time with higher end hardware, but it's likely negligible in many cases.

With the most recent games in the 3D engine, your CPU and GPU can affect performance substantially. Thankfully, nobody runs these.
