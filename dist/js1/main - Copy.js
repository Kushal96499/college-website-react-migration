/**
 * Main Initialization
 * Sets up event listeners and renders the programs section
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Render all programs
  ProgramRenderer.renderAllPrograms();
  
  // Initialize Bootstrap tabs
  initializeBootstrapTabs();
  
  // Setup event listeners
  setupEventListeners();
});

/**
 * Initialize Bootstrap Tab functionality
 */
function initializeBootstrapTabs() {
  if (typeof bootstrap !== 'undefined') {
    document.querySelectorAll('[data-bs-toggle="pill"]').forEach(element => {
      new bootstrap.Tab(element);
    });
  }
}

/**
 * Setup custom event listeners
 */
function setupEventListeners() {
  
  // Level buttons (UG/PG toggle)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('level-btn')) {
      const level = e.target.dataset.level;
      const parent = e.target.closest('.programsChild');
      
      // Update active button
      parent.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      
      // Show/hide program items based on level
      parent.querySelectorAll('.program-item').forEach(item => {
        if (item.dataset.level === level) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    }
  });
  
  // Overview toggle (Read More)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('overview-toggle')) {
      const targetId = e.target.dataset.target;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.classList.toggle('show');
        e.target.textContent = targetElement.classList.contains('show') ? 'Read Less' : 'Read More';
      }
    }
  });
}