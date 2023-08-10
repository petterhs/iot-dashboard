<script>

    export let data;

    $: console.log(JSON.stringify(data));

</script>

<h1>Test</h1>

<p>JSON list:</p>

<ul>
    {#each data.jsonlist as item}
        <li>{JSON.stringify(item)}</li>
    {/each}
</ul>