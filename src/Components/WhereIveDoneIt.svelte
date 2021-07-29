<script>
    import Spinner from "./Spinner.svelte";
    import PinnedProject from "./PinnedProject.svelte";
    import Project from "./Project.svelte";
    // Grab the pinned projects as starred projects from a seperate account
    let featuredProjects = [];
    let otherProjects = [];

    async function getFeaturedProjects() {
        let resp = await fetch(`https://api.github.com/users/JCK-Tech/starred`, {
            method: "Get",
            headers: {
                "Content-Type": "application/json"
            },
        });
        resp = await resp.json();

        featuredProjects = resp.map(r => {
            return [ r.name, r.description, r.languages_url, r.html_url ];
        })
    }

    getFeaturedProjects();

    async function getOtherProjects() {
        let resp = await fetch(`https://api.github.com/users/jefreeiscomingforyoulmao/starred`, {
            method: "Get",
            headers: {
                "Content-Type": "application/json"
            },
        });
        resp = await resp.json();
        console.log(resp);

        otherProjects = resp.map(r => {
            return [ r.name, r.description, r.language, r.html_url ];
        })
    }

    getOtherProjects();
</script>

{#if featuredProjects[0] === undefined}
    <Spinner />
{:else}
<main class="widi-main">
        <h2 class="featured">Featured</h2>
        <div class="grid">
            {#each featuredProjects as fp}
            <PinnedProject
            title={fp[0]} 
            description={fp[1]} 
            languageUrl={fp[2]}
            htmlUrl={fp[3]}
            />
            {/each}
        </div>

        <h2 class="more-projects">More Projects</h2>
        <div class="more">
            {#each otherProjects as op}
            <Project 
            title={op[0]}
            description={op[1]}
            language={op[2]}
            htmlUrl={op[3]}
            />
            {/each}
        </div>
</main>
{/if}

<style>

.widi-main {
    width: 100%;
    margin-top: 25px;
    transition: 0.3s ease;
}

.featured {
    margin-left: 0.5em;
}

.grid {
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.more-projects {
    margin-top: 2em;
    margin-left: 0.5em;

}

@media only screen and (max-width: 1600px) {
    .grid {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
}

</style>
