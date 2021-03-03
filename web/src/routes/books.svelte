<script context="module">
    import client from '../sanityClient';

    export async function preload() {
        try {
            const books = await client.fetch(
                '*[_type == "book"] | {name, "mainImage": mainImage.asset->url, url, summary }'
            );
            return { books };
        } catch (err) {
            this.error(500, err);
        }
    }
</script>

<script>
    export let books;
    console.log(books);
</script>

<svelte:head>
    <title>Books</title>
</svelte:head>

<h1 class="text-center my-8 text-3xl font-shippori">Books</h1>

<div class="content max-w-2xl mx-auto text-lg leading-8">
    <p class="mb-2">
        Below are books that are highly recommended as you think about the
        topics discussed in posts through Souls Over Stuff.
    </p>

    <p class="text-sm italic mb-6">
        This page contains affiliate links that help Souls Over Stuff generate
        revenue and income for operational costs. This happens at no additional
        cost to you.
    </p>
</div>
