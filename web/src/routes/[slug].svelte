<script context="module">
    import client from '../sanityClient';

    export async function preload({ params }) {
        try {
            // We have access to req.params.slug because the filename has [slug] in it.
            const { slug } = params;
            const query =
                '*[_type == "post" && slug.current == $slug][0] | {title, "mainImage": mainImage.asset->url, publishedAt, body}';
            const projection = `{
            ...,
            body[]{
                ...,
                children[]{
                ...,
                _type == 'authorReference' => {
                    _type,
                    author->
                }
                }
            }
            }`;

            // const query = filter + projection;
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

    export let post;
    console.log(post);
</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<h1 class="my-8 text-center text-2xl">{post.title}</h1>

<img
    src="{post.mainImage}?w=600"
    alt="post main image"
    class="max-w-lg object-center float-right mb-10"
/>

<div class="content">
    <BlockContent blocks={post.body} {serializers} />
</div>

<style>
    .content :global(h2) {
        font-size: 1.4em;
        font-weight: 500;
    }

    .content :global(img) {
        display: block;
        max-width: 100%;
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
</style>
