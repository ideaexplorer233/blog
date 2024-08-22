<script lang="ts">
    let currentTheme = window.localStorage.getItem("theme");
    const body = document.body;
    switch (currentTheme) {
        case "dark":
            body.classList.add("dark");
        case "light":
            body.classList.add("light");
    }
    function handleThemeSwitch(event: MouseEvent) {
        // Enable transition if switch
        body.classList.add("auto");
        switch (currentTheme) {
            case null:
                currentTheme = "dark";
                window.localStorage.setItem("theme", "dark");
                body.classList.add("dark");
                break;
            case "dark":
                currentTheme = "light";
                window.localStorage.setItem("theme", "light");
                body.classList.remove("dark");
                body.classList.add("light");
                break;
            default:
                currentTheme = null;
                window.localStorage.removeItem("theme");
                body.classList.remove("light");
        }
    }
</script>

<li class="select-none font-extralight text-slate-400">/</li>
<li>
    <button on:click={handleThemeSwitch} class="flex">
        {#if currentTheme === "dark"}
            <slot name="dark" />
        {:else if currentTheme === "light"}
            <slot name="light" />
        {:else}
            <slot name="auto" />
        {/if}
    </button>
</li>
