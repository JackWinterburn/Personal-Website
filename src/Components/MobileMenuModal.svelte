<script>
    import { pageNumber, showMobileMenuModal } from "../store.js";

    let pageNumberValue;

    pageNumber.subscribe(val => {
        pageNumberValue = val
    })

    function updateShowMobileMenuModal() {
        showMobileMenuModal.set(false);
    }

    function updatePageNumber(num) {
        pageNumber.set(num);
        updateShowMobileMenuModal();
    }
</script>

<div class="wrapper">
    <div class="blur-background"></div>
    <div class="modal">
        <header>
            <h1>
                Jack Winterburn
            </h1>
            <div class="close" on:click={updateShowMobileMenuModal}></div>
        </header>

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
</div>

<style>
    .modal {
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        position: absolute;

        background-color: transparent;
    }

    .blur-background {
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        position: absolute;

        background-color: rgba(0,0,0,0.9);
    }

    header {
        border-bottom: 1px solid rgba(255, 255, 255, 0.13);
    }

    h1 {
        margin: 1.5em 0 0.7em 1em;
    }

    .close {
        margin-right: 1.5em;
        margin-top: 3em;

        top: 0;
        right: 0;

        width: 32px;
        height: 32px;

        position: absolute;
    }

    .close:hover {
        cursor: pointer;
    }

    .close:before, .close:after {
        left: 15px;
        content: ' ';
        height: 33px;
        width: 1.5px;

        position: absolute;

        background-color: #fff;
    }

    .close:before {
        transform: rotate(45deg);
    }

    .close:after {
        transform: rotate(-45deg);
    }

    ul {
        margin-top: 2em;
        margin-left: 2em;
        list-style-type: none;
    }

    li {
        padding: 0.5em;
        color: #979797;

        font-size: 1.2em;

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
        margin-top: 5em;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .social-link {
        margin: 0.7em;

        width: 40px;
        height: 40px;

        background-color: white;

        border-radius: 50%;
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


    @supports ((-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))) {
        .blur-background {
            background-color: rgba(0, 0, 0, .6);
            -webkit-backdrop-filter: blur(8px);
            backdrop-filter: blur(8px);
        }
    }
</style>