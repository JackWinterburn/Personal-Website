<script>
    import { pageNumber } from "../store.js";

    let pageNumberValue;
    
    const pages = ["What I Do", "Where I've Done It", "How I Do It"];

    pageNumber.subscribe(val => {
        pageNumberValue = val;
    })
</script>

<header>
    <h1>{pages[pageNumberValue - 1]}</h1>
</header>

<style>
    header {
        width: 100%;
        
    }

    h1 {
        margin: 1.5em 0 0.7em 1em;
    }
</style>