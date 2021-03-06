<script>
    import Footer from '../components/Footer.svelte';
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<Nav {segment} />

<div class="bg-gray-50">
    <main
        class="font-light relative my-0 mx-auto box-border px-16 pt-2 pb-12 max-w-5xl"
    >
        <slot />
    </main>
</div>

<Footer />

<style>
    main {
        min-height: calc(100vh - 300px);
    }
</style>
