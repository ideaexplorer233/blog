<script lang="ts">
    let currentTheme = window.localStorage.getItem("theme");
    const body = document.querySelector("body")!;
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

    import styles from "../styles/components.module.css";
</script>

<li><span class={styles.separation}>/</span></li>
<li>
    <button on:click={handleThemeSwitch}>
        {#if currentTheme === "dark"}
            Dark
        {:else if currentTheme === "light"}
            Light
        {:else}
            Auto
        {/if}
    </button>
</li>
