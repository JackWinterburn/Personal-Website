<script>
    import Spinner from "./Spinner.svelte";
    import PinnedProject from "./PinnedProject.svelte";
    // Grab the pinned projects as starred projects from a seperate account
    let featuredProjects = [];

    async function getFeaturedProjects() {
        let resp = await fetch(`https://api.github.com/users/JCK-Tech/starred`, {
            method: "Get",
            headers: {
                "Content-Type": "application/json"
            },
        });
        resp = await resp.json();
        console.log(resp);

        featuredProjects = resp.map(r => {
            return [ r.name, r.description, r.languages_url, r.html_url ];
        })
    }

    getFeaturedProjects();
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

@media only screen and (max-width: 1600px) {
    .grid {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
}

</style>
