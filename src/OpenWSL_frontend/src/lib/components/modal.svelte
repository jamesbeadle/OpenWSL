<script lang="ts">
    export let visible = false;
    export let close = () => {};
  
    // Attach the keydown listener to the window object
    function handleGlobalKeydown(event: KeyboardEvent) {
      if (visible && (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ')) {
        close();
      }
    }
  
    // Add and remove the global event listener
    import { onMount, onDestroy } from 'svelte';
    onMount(() => window.addEventListener('keydown', handleGlobalKeydown));
    onDestroy(() => window.removeEventListener('keydown', handleGlobalKeydown));
  </script>
  
  {#if visible}
    <div class="modal-overlay" on:click={close} role="button" tabindex="0" aria-label="Close modal">
      <div class="modal-content" role="document">
        <button class="modal-close" on:click={close} aria-label="Close modal">
          &times;
        </button>
        <slot></slot>
      </div>
    </div>
  {/if}
  
  <style>
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    .modal-content {
      background-color: #000000;
      padding: 1em;
      position: relative;
      max-width: 90%;
      max-height: 90%;
      overflow-y: auto;
      border-radius: 8px;
    }
    .modal-close {
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      background: none;
      border: none;
      font-size: 1.5em;
      cursor: pointer;
    }
  </style>
  