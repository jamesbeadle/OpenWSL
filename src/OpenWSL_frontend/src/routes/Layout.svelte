<div class="flex flex-col h-screen justify-between default-text">
  <main class="page-wrapper">
    <h1>OpenWSL</h1>
    <p class="mt-4">OpenWSL is coming soon.</p>
  </main>
</div>
<!--
<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { browser } from "$app/environment";
  import { authStore, type AuthStoreData } from "$lib/stores/auth.store";
  import Header from "$lib/shared/Header.svelte";
  import Footer from "$lib/shared/Footer.svelte";
  import "../app.css";

  import { initAuthWorker } from "$lib/services/worker.auth.services";
  import { storeManager } from "$lib/managers/store-manager";
    import LocalSpinner from "$lib/components/local-spinner.svelte";

  const init = async () => await Promise.all([syncAuthStore()]);

  const syncAuthStore = async () => {
    if (!browser) {
      return;
    }

    try {
      await authStore.sync();
    } catch (err: unknown) {
    }
  };

  let worker: { syncAuthIdle: (auth: AuthStoreData) => void } | undefined;

  onMount(async () => (worker = await initAuthWorker()));

  onMount(async () => {
    try {
      await storeManager.syncStores();
    } catch (error) {
      console.error("Error mounting application data:", error);
    } finally {
    }
  });

  $: worker, $authStore, (() => worker?.syncAuthIdle($authStore))();

  $: (() => {
    if (!browser) {
      return;
    }

    if ($authStore === undefined) {
      return;
    }

    const spinner = document.querySelector("body > #app-spinner");
    spinner?.remove();
  })();
</script>

<svelte:window on:storage={syncAuthStore} />
{#await init()}
  <div in:fade>
    <LocalSpinner />
  </div>
{:then _}
  <div class="flex flex-col h-screen justify-between default-text">
    <Header />
    <main class="page-wrapper">
      <slot />
    </main>
    <Footer />
  </div>
{/await}

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
-->