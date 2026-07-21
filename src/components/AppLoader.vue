<template>
  <div class="app-loader">
    <div class="loader-ring"></div>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.app-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: white;
  color: #333;
}

.loader-ring {
  width: 46px;
  height: 46px;
  border: 4px solid #f1f1f1;
  border-top-color: #ff5c72;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
