<script context="module">
    import client from '../sanityClient';

    export async function preload() {
        try {
            const books = await client.fetch(
                '*[_type == "book"] | {name, "image": image.asset->url, url, summary }'
            );
            return { books };
        } catch (err) {
            this.error(500, err);
        }
    }
</script>

<script>
    export let books;
    import BlockContent from '@movingbrands/svelte-portable-text';
    import serializers from '../components/serializers';
    console.log(books);
</script>

<svelte:head>
    <title>Books</title>
</svelte:head>

<h1 class="text-center my-8 text-3xl font-shippori">Books</h1>

<div class="content max-w-2xl mx-auto text-lg leading-8">
    <p>
        Below are books that are highly recommended as you think about the
        topics discussed in posts through Souls Over Stuff.
    </p>

    <p class="text-sm italic mb-6">
        This page contains affiliate links that help Souls Over Stuff generate
        revenue and income for operational costs. This happens at no additional
        cost to you.
    </p>

    <ul>
        {#each books as book}
            <li class="mt-16 mb-8 h-full">
                <a target="_black" rel="noopener noreferrer" href={book.url}>
                    <h1 class="text-2xl hover:text-gray-500 mb-4">
                        {book.name}
                    </h1></a
                >

                <img
                    src={book.image}
                    alt="blog post image"
                    class="float-right max-h-64 ml-4"
                />

                <BlockContent blocks={book.summary} {serializers} />
            </li>
            <hr />
        {/each}
    </ul>
</div>
