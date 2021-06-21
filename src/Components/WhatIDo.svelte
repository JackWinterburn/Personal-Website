<main>
    <div class="pfp"></div>
    <div class="text">
        <h2>Hi 👋, I'm <span class="name">Jack Winterburn</span></h2>
        &nbsp;
        <div class="p-text">
            <p>
                I’m a 15 year old <span class="important-text">software engineer</span>, <span class="important-text">tech enthusiast</span> and cryptography investor.
            </p>
            &nbsp;
            <p>
                I <span class="important-text">design and build products of immense quality</span> and reliability at scale.
                In my free time, I explore new, cutting edge ways to <span class="important-text">improve the functionality and interactivity</span> of my projects. 
            </p>
            &nbsp;
            <p>
                I employ the <span class="important-text">latest and greatest technologies</span> to ensure that what I build is highly future-proof and construct my programs in ways that allow them to <span class="important-text">handle anything that the www throws at them.</span>
            </p>
        </div>
    </div>
</main>

<style>
    main {
        margin-top: 75px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .pfp {
        width: 200px;
        height: 200px;
        margin-bottom: 30px;

        display: block;

        background-color: gray;
        background-image: url("./pfp.png");
        background-size: cover;

        border-radius: 50%;

        box-shadow: 0 8px 20px #0084ff9c;

        transition: box-shadow 0.3s, transform 0.3s;
        animation: hover 3s infinite;
    }

    .text {
        max-width: 600px;
    }

    .p-text {
        padding: 5px;
        text-align: left;
        color: rgba(255, 255, 255, 0.7);
    }

    .name {
        color: #0085FF;
    }

    .important-text {
        color: white;
    }

    @keyframes hover {
        0% {box-shadow: 0 8px 20px #0084ff9c;
            transform: translateY(0%);}
        50% {box-shadow: 0 16px 40px #0084ff9c;
            transform: translateY(-5%);}
        100% {box-shadow: 0 8px 20px #0084ff9c;
            transform: translateY(0%);}
    }
</style>