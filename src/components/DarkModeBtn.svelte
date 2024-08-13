<script lang="ts">
    let currentTheme = window.localStorage.getItem("theme");
    switch (currentTheme) {
        case "dark":
            document.querySelector("body")?.classList.add("dark");
        case "light":
            document.querySelector("body")?.classList.add("light");
    }
    function handleThemeSwitch(event: MouseEvent) {
        switch (currentTheme) {
            case null:
                currentTheme = "dark";
                window.localStorage.setItem("theme", "dark");
                document.querySelector("body")?.classList.add("dark");
                break;
            case "dark":
                currentTheme = "light";
                window.localStorage.setItem("theme", "light");
                document.querySelector("body")?.classList.remove("dark");
                document.querySelector("body")?.classList.add("light");
                break;
            default:
                currentTheme = null;
                window.localStorage.removeItem("theme");
                document.querySelector("body")?.classList.remove("light");
        }
    }
</script>

<button on:click={handleThemeSwitch}>
    {#if currentTheme === "dark"}
        Dark
    {:else if currentTheme === "light"}
        Light
    {:else}
        Auto
    {/if}
</button>
