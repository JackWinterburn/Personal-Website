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

    <div class="social-links">
        <a href="https://github.com/JackWinterburn" target="blank">
            <div class="social-link github"></div>
        </a>
        <a href="https://twitter.com/JackIsBack___" target="blank">
            <div class="social-link twitter"></div>
        </a>
        <a href="https://www.youtube.com/channel/UCtOSXK4gm_3ab8D4vRtkGAg" target="blank">
            <div class="social-link youtube"></div>
        </a>
    </div>
</div>

<style>
    .sidebar {
        padding: 2em;
        height: 100%;

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

    .social-links {
        margin-top: 10em;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .social-link {
        margin: 0.7em;

        width: 27px;
        height: 27px;

        background-color: white;

        border-radius: 50%;

        transition: 0.2s ease;
    }

    .social-link:hover {
        transform: translateY(-5px);
        box-shadow: 0px 3px 6px #0084ff9c;
    }

    .github {
        background-image: url(./github.png);
        background-size: cover;
    }

    .twitter {
        background-image: url(./twitter.png);
        background-size: cover;
    }

    .youtube {
        background-image: url(./yt.png);
        background-size: cover;
    }

    h3 {
        margin-top: 5px;
    }
</style>