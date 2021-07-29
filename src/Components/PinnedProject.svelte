<script>
    import LanguageColors from "../langColors.js";

    export let title;
    export let description;
    export let languageUrl;
    export let htmlUrl;

    let reverse = false;
    let languages = {};
    let languagePercentages = {};

    async function getProjectLanugages() {
        let resp = await fetch(languageUrl, {
            method: "Get",
            headers: {
                "Content-Type": "application/json"
            },
        });
        languages = await resp.json();
        languagePercentages = calculateLanguagePercentages(languages);
    }

    getProjectLanugages();

    function calculateLanguagePercentages(ls) {
        const langs = Object.keys(ls);

        let totalLanguageUsage = 0;

        langs.forEach((lang) => {
            totalLanguageUsage += ls[lang];
        })

        langs.forEach((lang) => {
            languagePercentages[lang] = ((ls[lang]) / totalLanguageUsage);
        })

        return languagePercentages;
    }

    function determineBorderRadius(idx) {
        let style = "";

        if (idx === 0) {
            style += "border-top-left-radius: 50px; border-bottom-left-radius: 50px;"
        }
        if (idx === Object.entries(languagePercentages).length - 1) {
            style += "border-top-right-radius: 50px; border-bottom-right-radius: 50px;"
        }

        return style;
    }
</script>

<a href={htmlUrl}>
    <div class="project">
        <header>
            <div class="logo"></div>
            <h3 class="project-title">{title}</h3>
        </header>
        <div class="description">
            <h4>Description</h4>
            <p class="description-body">
                {description}
            </p>
        </div>
    <div class="languages">
        <h4>Languages</h4>
        <div class="lang-percentage-line-wrapper">
            {#each Object.entries(languagePercentages) as [lang, percentage], i}
            <div class="lang-percentage-line" style="width: {percentage * 250}px; background-color: {LanguageColors[lang.toLowerCase()]}; {determineBorderRadius(i)}"></div>
            {/each}
            
        </div>
        <div class="lang-color-indicator-wrapper">
            {#each Object.entries(languagePercentages) as [lang], i}
            <div class="lci">
                <div id={i} class="lang-color-indicator" style="background-color: {LanguageColors[lang.toLowerCase()]}"></div>
                <label for={i}>{lang}</label>
            </div>
            {/each}
        </div>
    </div>
</div>
</a>

<style>
    a {
        text-decoration: none;
        color: white;
        z-index: 1;
    }

    a:hover {
        z-index: 2;
    }

    .project {
        margin: 0.5em;

        height: 100%;
        
        background-color: rgba(2, 2, 2, .7);
        border: 1px solid rgb(20, 20, 20);
        border-radius: 10px;

        transition: 0.2s ease;
    }

    .project:hover {
        background-color: rgba(20, 20, 20);
        cursor: pointer;
        transform: scale(1.08);
        border: 2px solid #0084ff;
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: left;
        padding: 1em;
        border-bottom: 1px solid rgb(20, 20, 20);
    }

    .logo {
        width: 60px;
        height: 60px;

        margin-right: 2em;

        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        border-radius: 10px;
    }

    .description {
        padding: 1em;
        text-overflow: ellipsis;
    }

    .languages {
        padding: 1em;
        text-overflow: ellipsis;
    }

    .lang-percentage-line-wrapper {
        margin-top: 1em;
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .lang-percentage-line {
        height: 10px;
        margin: 1px;
    }

    .lang-color-indicator-wrapper {
        display: flex; 
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;

        font-size: small;
        font-weight: 600;
        color: rgb(175, 175, 175);
    }

    .lci {
        margin: 0.4em;
        display: flex;
        align-items: center;
    }

    .lang-color-indicator {
        margin: 5px;
        height: 8px;
        width: 8px;
        border-radius: 50%;
    }


    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
