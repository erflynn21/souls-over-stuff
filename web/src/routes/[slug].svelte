<script context="module">
    import client from '../sanityClient';

    export async function preload({ params }) {
        try {
            const { slug } = params;
            const query =
                '*[_type == "post" && slug.current == $slug][0] | {title, mainImage, "postImage": mainImage.asset->url, publishedAt, body, author->}';
            const post = await client.fetch(query, { slug });
            return { post };
        } catch (err) {
            this.error(500, err);
        }
    }
</script>

<script>
    import BlockContent from '@movingbrands/svelte-portable-text';
    import serializers from '../components/serializers';
    import { formatDate } from '../js/formatDate';

    export let post;
</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<h2 class="mt-8 mb-2 text-center text-xs italic">
    {formatDate(post.publishedAt)}
</h2>
<h1 class="mb-2 text-center text-3xl">{post.title}</h1>
<h3 class="mb-8 text-center text-sm">Written by: {post.author.name}</h3>

<img
    src="{post.postImage}?w=700"
    alt="post main image"
    class="max-w-2xl mb-4 mx-auto"
/>

<div class="content max-w-2xl mx-auto text-lg leading-8">
    <BlockContent blocks={post.body} {serializers} />
</div>

<style>
    .content :global(h2) {
        font-size: 1.4em;
        font-weight: 500;
    }

    .content :global(img) {
        display: block;
        max-width: 70%;
        margin: 0 auto;
    }

    .content :global(figure) {
        margin: 0;
    }

    .content :global(ul) {
        line-height: 1.5;
    }

    .content :global(li) {
        margin: 0 0 0.5em 0;
    }

    .content :global(p) {
        margin-bottom: 1em;
    }
</style>
