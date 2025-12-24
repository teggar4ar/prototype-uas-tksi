// =============================================
// AI-Based Plant Disease Detection
// Main JavaScript File
// =============================================

// Global Variables
let uploadedImage = null;
let selectedDisease = null;

// =============================================
// Navigation Functions
// =============================================

/**
 * Navigate to a specific page
 * @param {string} page - Target page filename (e.g., 'homepage.html')
 */
function navigateTo(page) {
  // Check if navigating from root or from pages folder
  const isRootPage = !window.location.pathname.includes('/pages/');
  
  if (isRootPage) {
    window.location.href = `pages/${page}`;
  } else {
    window.location.href = page;
  }
}

/**
 * Navigate back to homepage
 */
function goToHomepage() {
  const isRootPage = !window.location.pathname.includes('/pages/');
  
  if (isRootPage) {
    window.location.href = 'pages/homepage.html';
  } else {
    window.location.href = 'homepage.html';
  }
}

/**
 * Navigate back to root index
 */
function goToIndex() {
  const isRootPage = !window.location.pathname.includes('/pages/');
  
  if (isRootPage) {
    window.location.href = 'index.html';
  } else {
    window.location.href = '../index.html';
  }
}

// =============================================
// Image Upload & Preview Functions
// =============================================

/**
 * Handle image file selection
 * @param {Event} event - File input change event
 */
function handleImageUpload(event) {
  const file = event.target.files[0];
  
  if (!file) {
    return;
  }
  
  // Validate file type
  if (!file.type.startsWith('image/')) {
    alert('Mohon pilih file gambar yang valid (JPG, PNG, dll)');
    return;
  }
  
  // Validate file size (max 5MB)
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    alert('Ukuran file terlalu besar. Maksimal 5MB');
    return;
  }
  
  // Create FileReader to preview image
  const reader = new FileReader();
  
  reader.onload = function(e) {
    uploadedImage = e.target.result;
    
    // Store in sessionStorage for access across pages
    sessionStorage.setItem('uploadedImage', uploadedImage);
    
    // Display preview
    displayImagePreview(uploadedImage);
    
    // Enable analyze button
    enableAnalyzeButton();
  };
  
  reader.readAsDataURL(file);
}

/**
 * Display image preview
 * @param {string} imageDataUrl - Base64 image data URL
 */
function displayImagePreview(imageDataUrl) {
  const previewContainer = document.getElementById('imagePreview');
  const uploadArea = document.getElementById('uploadArea');
  
  if (previewContainer) {
    previewContainer.innerHTML = `
      <img src="${imageDataUrl}" alt="Preview" style="width: 100%; border-radius: 12px; margin-top: 16px;">
    `;
  }
  
  if (uploadArea) {
    uploadArea.style.display = 'none';
  }
}

/**
 * Enable analyze button after image upload
 */
function enableAnalyzeButton() {
  const analyzeBtn = document.getElementById('analyzeBtn');
  
  if (analyzeBtn) {
    analyzeBtn.disabled = false;
    analyzeBtn.style.opacity = '1';
    analyzeBtn.style.cursor = 'pointer';
  }
}

/**
 * Trigger file input click
 */
function triggerFileInput() {
  const fileInput = document.getElementById('fileInput');
  if (fileInput) {
    fileInput.click();
  }
}

// =============================================
// Analysis & Processing Functions
// =============================================

/**
 * Start analysis process
 * Redirects to loading page and simulates AI processing
 */
function startAnalysis() {
  if (!sessionStorage.getItem('uploadedImage')) {
    alert('Mohon upload gambar terlebih dahulu');
    return;
  }
  
  // Redirect to loading page
  navigateTo('loading.html');
}

/**
 * Simulate AI processing
 * Select random disease from dummy data
 */
function simulateProcessing() {
  // Random selection will happen in diseases.js
  // This function triggers after loading animation
  
  setTimeout(() => {
    navigateTo('result.html');
  }, 3000); // 3 seconds loading time
}

/**
 * Get uploaded image from storage
 * @returns {string|null} - Base64 image data URL
 */
function getUploadedImage() {
  return sessionStorage.getItem('uploadedImage');
}

/**
 * Get selected disease from storage
 * @returns {Object|null} - Disease data object
 */
function getSelectedDisease() {
  const diseaseData = sessionStorage.getItem('selectedDisease');
  return diseaseData ? JSON.parse(diseaseData) : null;
}

/**
 * Clear session data
 */
function clearSessionData() {
  sessionStorage.removeItem('uploadedImage');
  sessionStorage.removeItem('selectedDisease');
}

// =============================================
// Utility Functions
// =============================================

/**
 * Show element with fade-in animation
 * @param {string} elementId - Element ID to show
 */
function showElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.remove('hidden');
    element.classList.add('fade-in');
  }
}

/**
 * Hide element
 * @param {string} elementId - Element ID to hide
 */
function hideElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add('hidden');
    element.classList.remove('fade-in');
  }
}

/**
 * Format confidence percentage
 * @param {number} confidence - Confidence value (0-100)
 * @returns {string} - Formatted string
 */
function formatConfidence(confidence) {
  return `${confidence.toFixed(1)}%`;
}

/**
 * Get confidence color based on value
 * @param {number} confidence - Confidence value (0-100)
 * @returns {string} - CSS color variable
 */
function getConfidenceColor(confidence) {
  if (confidence >= 85) return 'var(--success-color)';
  if (confidence >= 70) return 'var(--warning-color)';
  return 'var(--error-color)';
}

// =============================================
// Page Initialization
// =============================================

/**
 * Initialize page based on current location
 */
function initializePage() {
  const pathname = window.location.pathname;
  
  // Loading page auto-redirect
  if (pathname.includes('loading.html')) {
    simulateProcessing();
  }
  
  // Result page - load data
  if (pathname.includes('result.html')) {
    loadResultData();
  }
  
  // Recommendation page - load data
  if (pathname.includes('recommendation.html')) {
    loadRecommendationData();
  }
  
  // Upload page - restore image if exists
  if (pathname.includes('upload.html')) {
    const savedImage = getUploadedImage();
    if (savedImage) {
      displayImagePreview(savedImage);
      enableAnalyzeButton();
    }
  }
}

/**
 * Load result data on result page
 */
function loadResultData() {
  const uploadedImage = getUploadedImage();
  const disease = getSelectedDisease();
  
  if (!uploadedImage || !disease) {
    // If no data, redirect back to upload
    alert('Data tidak ditemukan. Silakan upload gambar terlebih dahulu.');
    navigateTo('upload.html');
    return;
  }
  
  // Display image
  const imagePreview = document.getElementById('resultImage');
  if (imagePreview) {
    imagePreview.src = uploadedImage;
  }
  
  // Display disease name
  const diseaseName = document.getElementById('diseaseName');
  if (diseaseName) {
    diseaseName.textContent = disease.name;
  }
  
  // Display confidence
  const confidenceValue = document.getElementById('confidenceValue');
  if (confidenceValue) {
    confidenceValue.textContent = formatConfidence(disease.confidence);
    confidenceValue.style.color = getConfidenceColor(disease.confidence);
  }
  
  // Display description
  const diseaseDescription = document.getElementById('diseaseDescription');
  if (diseaseDescription) {
    diseaseDescription.textContent = disease.description;
  }
}

/**
 * Load recommendation data on recommendation page
 */
function loadRecommendationData() {
  const disease = getSelectedDisease();
  
  if (!disease) {
    alert('Data tidak ditemukan. Silakan ulangi proses deteksi.');
    goToHomepage();
    return;
  }
  
  // Display disease name
  const diseaseName = document.getElementById('recDiseaseName');
  if (diseaseName) {
    diseaseName.textContent = disease.name;
  }
  
  // Display recommendations
  const recommendationsList = document.getElementById('recommendationsList');
  if (recommendationsList && disease.recommendations) {
    recommendationsList.innerHTML = '';
    disease.recommendations.forEach((rec, index) => {
      const li = document.createElement('li');
      li.textContent = rec;
      li.style.marginBottom = '12px';
      recommendationsList.appendChild(li);
    });
  }
}

// =============================================
// Event Listeners
// =============================================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initializePage();
  createResetButton();
});

// Handle back button navigation
window.addEventListener('popstate', function() {
  initializePage();
});

// Console log for debugging
console.log('Plant Disease Detection App - Initialized');

// =============================================
// Reset Cache Functionality
// =============================================

/**
 * Reset all cache and return to landing page
 */
function resetCache() {
  // Confirm before resetting
  if (confirm('Reset aplikasi dan kembali ke halaman awal? Semua data akan dihapus.')) {
    // Clear session storage
    sessionStorage.clear();
    
    // Clear local variables
    uploadedImage = null;
    selectedDisease = null;
    
    console.log('Cache cleared successfully');
    
    // Navigate to index page
    const isRootPage = !window.location.pathname.includes('/pages/');
    
    if (isRootPage) {
      window.location.href = 'index.html';
    } else {
      window.location.href = '../index.html';
    }
  }
}

/**
 * Create reset cache button
 */
function createResetButton() {
  // Check if button already exists
  if (document.getElementById('resetBtn')) return;
  
  const btn = document.createElement('button');
  btn.id = 'resetBtn';
  btn.className = 'reset-btn';
  btn.type = 'button';
  btn.title = 'Reset & Kembali ke Awal';
  btn.innerHTML = '<i class="fas fa-redo"></i>';
  
  // Add click handler
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    resetCache();
  });
  
  document.body.appendChild(btn);
}
