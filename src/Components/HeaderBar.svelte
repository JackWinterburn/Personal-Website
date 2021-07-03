<script>
    import HamburgerMenu from "./HamburgerMenu.svelte";
    import { pageNumber } from "../store.js";

    let pageNumberValue;
    
    const pages = ["What I Do", "Where I've Done It", "How I Do It"];

    pageNumber.subscribe(val => {
        pageNumberValue = val;
    })

</script>

<header>
    <h1>{pages[pageNumberValue - 1]}</h1>
    <div class="hm">
        <HamburgerMenu />
    </div>
</header>

<style>
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    h1 {
        margin: 1.5em 0 0.7em 1em;
    }

    .hm {
        display: none;
        margin-right: 2em;
        margin-top: 3em;
    }

    .hm:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 970px) {
        .hm {
            display: block;
        }
    }
</style>