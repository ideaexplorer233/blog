<script lang="ts">
    import { onMount } from "svelte";

    let progres: number;
    $: style = `width: ${progres}%`;

    let pageSize: number;

    async function calcprogres() {
        let tempProgres =
            ((document.documentElement.scrollTop /
                (pageSize - document.documentElement.clientHeight)) *
                100) |
            0; // round
        progres = tempProgres > 100 ? 100 : tempProgres;
    }

    onMount(() => {
        const headerElem = document.querySelector("header")!;
        pageSize =
            headerElem?.scrollHeight +
            parseFloat(window.getComputedStyle(headerElem).marginTop) +
            parseFloat(window.getComputedStyle(headerElem).marginBottom) +
            (document.querySelector("main")?.scrollHeight ?? 0);

        window.addEventListener("scroll", calcprogres);
        calcprogres(); // calc immediately
    });
</script>

<div class="flex w-full gap-2 flex-row items-center align-middle">
    <div
        class="h-1 bg-blue-500/30 flex-grow"
        role="progressbar"
        aria-valuenow={progres}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-labelledby="read-progress-desc"
    >
        <div class="h-1 bg-sky-500/30 transition-colors" {style}></div>
    </div>
    <span class="text-xs" id="read-progress-desc">{progres}%</span>
</div>
