<script>
    import { showMobileMenuModal } from "../store.js";

    function updateShowMobileMenuModal() {
        showMobileMenuModal.set(true);
    }
</script>

<div class="menu" on:click={updateShowMobileMenuModal}>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>

<style>
    .menu {
        width: 30px;
        height: 50px;
    }

    .line {
        width: 100%;
        height: 1px;
        margin: 7px;
        background-color: white;
    }
</style>