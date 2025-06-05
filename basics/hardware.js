document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('ndCalculateDpiBtnV2');
    
    if (!calculateBtn) {
        console.error('Calculate button not found!');
        return;
    }
    
    calculateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const currentDpiEl = document.getElementById('ndCurrentDpiV2');
        const monitorVertResEl = document.getElementById('ndMonitorVertRes');
        const gameSeriesEl = document.getElementById('ndGameSeriesV2');
        const resultDiv = document.getElementById('ndDpiResultV2');
        const calculatedDpiValueEl = document.getElementById('ndCalculatedDpiValueV2');
        const errorDiv = document.getElementById('ndDpiErrorV2');
        
        // Clear previous results
        resultDiv.style.display = 'none';
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';
        
        // Get and validate inputs
        const currentDpi = parseFloat(currentDpiEl.value);
        const monitorHeight = parseFloat(monitorVertResEl.value);
        const gameRenderHeight = parseFloat(gameSeriesEl.value);
        
        if (isNaN(currentDpi) || currentDpi <= 0) {
            errorDiv.textContent = 'Please enter a valid current DPI.';
            errorDiv.style.display = 'block';
            return;
        }
        
        if (isNaN(monitorHeight) || monitorHeight <= 0) {
            errorDiv.textContent = 'Please enter a valid monitor height.';
            errorDiv.style.display = 'block';
            return;
        }
        
        // Calculate and display result
        const scalingFactor = monitorHeight / gameRenderHeight;
        const newDpi = currentDpi / scalingFactor;
        
        calculatedDpiValueEl.textContent = Math.round(newDpi);
        resultDiv.style.display = 'block';
    });
});