<script lang="ts">
  import { onMount } from "svelte";
  import { userStore } from "$lib/stores/user-store";
  import { clubStore } from "$lib/stores/club-store";
  import { storeManager } from "$lib/managers/store-manager";
    import Modal from "../modal.svelte";

  export let visible: boolean;
  export let closeModal: () => void;
  export let cancelModal: () => void;
  export let newFavouriteTeam: number = 0;

  let isSubmitDisabled: boolean = true;
  $: isSubmitDisabled = newFavouriteTeam <= 0;

  onMount(async () => {
    await storeManager.syncStores();
    await userStore.sync();
  });

  async function updateFavouriteTeam() {

    try {
      await userStore.updateFavouriteTeam(newFavouriteTeam);
      await userStore.sync();
      await closeModal();
    } catch (error) {
      console.error("Error updating favourite team:", error);
      cancelModal();
    } finally {
    }
  }
</script>

<Modal {visible} on:close={cancelModal}>
  <div class="mx-4 p-4">
    <div class="flex justify-between items-center my-2">
      <h3 class="default-header">Update Favourite Team</h3>
      <button class="times-button" on:click={cancelModal}>&times;</button>
    </div>
    <div class="w-full border border-gray-500 mt-4 mb-2">
      <select
        bind:value={newFavouriteTeam}
        class="w-full p-2 rounded-md fpl-dropdown"
      >
        <option value={0}>Select Team</option>
        {#each $clubStore as team}
          <option value={team.id}>{team.friendlyName}</option>
        {/each}
      </select>
    </div>

    <div
      class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-1 mt-4"
      role="alert"
    >
      <p>Warning</p>
      <p>You can only set your favourite team once per season.</p>
    </div>

    <div class="items-center py-3 flex space-x-4">
      <button
        class="px-4 py-2 default-button fpl-cancel-btn"
        type="button"
        on:click={cancelModal}
      >
        Cancel
      </button>
      <button
        class={`px-4 py-2 ${
          isSubmitDisabled ? "bg-gray-500" : "fpl-purple-btn"
        } 
        default-button fpl-purple-btn`}
        on:click={updateFavouriteTeam}
        disabled={isSubmitDisabled}>Update</button
      >
    </div>
  </div>
</Modal>
