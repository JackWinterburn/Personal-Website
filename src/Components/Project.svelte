<script>
    import LanguageColors from "../langColors.js";

    export let title;
    export let language;
    export let description;
    export let htmlUrl;
</script>

<a href={htmlUrl}>
    <div class="project">
        <div class="title info">
            <h5>Title</h5>
            <span class="text-subtle">
                {title}
            </span>
        </div>
        
        <div class="lang info">
            <h5>Main Language</h5>
            <span class="text-subtle">
        <div class="flex">
                {language}
                <div class="lang-color-indicator" style="background-color: {LanguageColors[language.toLowerCase()]}"></div>
            </div>
        </span>
        </div>

        <div class="desc info">
            <h5>Description</h5>
            <span class="text-subtle">
                
                {description}
            </span>
        </div>
    </div>
</a>

<style>
a {
    color: white;
    text-decoration: none;
}

.project {
    margin: 1em;

    display: grid;
    grid-template-columns: 3fr 2fr 9fr;
    grid-template-rows: 1;

    border: 1px solid rgba(20, 20, 20);
    border-radius: 10px;

    transition: 0.1s ease;
}

.project:hover {
    background: rgba(20, 20, 20);
}

.title {
    border-right: 1px solid rgba(20, 20, 20);
}

.lang {
    border-right: 1px solid rgba(20, 20, 20);
}

.info {
    margin: 0 1.5em;
    padding: 1.5em 0;
}

.flex {
    display: flex;
    align-items: center;
}

.lang-color-indicator {
    margin: 10px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
}

.text-subtle {
    color: rgb(175, 175, 175);
    font-weight: 600;
}

@media only screen and (max-width: 1480px) {
    .project {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }

    .title {
        border-right: none;
        border-bottom: 1px solid rgba(20, 20, 20);
    }

    .lang {
        border-right: none;
        border-bottom: 1px solid rgba(20, 20, 20);
    }

}

</style>