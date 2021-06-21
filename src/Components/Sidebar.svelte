<script>
    import { pageNumber } from "../store.js";

    let pageNumberValue;

    pageNumber.subscribe(val => {
        pageNumberValue = val;
    })

    function updatePageNumber(num) {
        pageNumber.set(num)
    }
</script>

<div class="sidebar">
    <h3>Jack Winterburn</h3>

    <ul>
        <li 
            class="{pageNumberValue === 1 ? 'active' : ''}"
            on:click={() => updatePageNumber(1)}
            >
            What I Do
        </li>
        <li 
            class="{pageNumberValue === 2 ? 'active' : ''}"
            on:click={() => updatePageNumber(2)}
            >
            Where Ive Done It
        </li>
        <li 
            class="{pageNumberValue === 3 ? 'active' : ''}"
            on:click={() => updatePageNumber(3)}
            >
            How I Do It
        </li>
    </ul>
</div>

<style>
    .sidebar {
        padding: 2em;
        height: 100vh;

        border-right: 1px solid #b7b7b733;
    }

    ul {
        margin-top: 2em;

        list-style-type: none;
    }

    li {
        padding: 0.3em;
        color: #979797;

        transition: 0.2s ease;
        cursor: pointer;
    }

    li:hover {
        color: white;
    }

    .active {
        color: white
    }

    h3 {
        margin-top: 5px;
    }
</style>