<script lang="ts">
  import { userStore } from "$lib/stores/user-store";
    import Modal from "../modal.svelte";

  export let visible: boolean;
  export let closeModal: () => void;
  export let cancelModal: () => void;
  export let newUsername: string = "";

  function isDisplayNameValid(displayName: string): boolean {
    if (!displayName) {
      return false;
    }

    if (displayName.length < 3 || displayName.length > 20) {
      return false;
    }

    return /^[a-zA-Z0-9 ]+$/.test(displayName);
  }

  $: isSubmitDisabled = !isDisplayNameValid(newUsername);

  async function updateUsername() {
    try {
      await userStore.updateUsername(newUsername);
      await userStore.sync();
      await closeModal();
    } catch (error) {
      console.error("Error updating username:", error);
      cancelModal();
    } finally {
    }
  }
</script>

<Modal {visible} on:close={cancelModal}>
  <div class="mx-4 p-4">
    <div class="flex justify-between items-center my-2">
      <h3 class="default-header">Update Username</h3>
      <button class="times-button" on:click={cancelModal}>&times;</button>
    </div>
    <form on:submit|preventDefault={updateUsername}>
      <div class="mt-4">
        <input
          type="text"
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="New Username"
          bind:value={newUsername}
        />
      </div>
      <div class="items-center py-3 flex space-x-4 flex-row">
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
          } default-button fpl-purple-btn`}
          type="submit"
          disabled={isSubmitDisabled}
        >
          Update
        </button>
      </div>
    </form>
  </div>
</Modal>
