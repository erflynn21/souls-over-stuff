<script context="module">
    import client from '../sanityClient';

    export async function preload() {
        try {
            const posts = await client.fetch(
                '*[_type == "post" && defined(slug.current) && publishedAt < now()] | order(publishedAt desc) | {title, "mainImage": mainImage.asset->url, slug, publishedAt, excerpt }'
            );
            return { posts };
        } catch (err) {
            this.error(500, err);
        }
    }
</script>

<script>
    export let posts;
    import BlockContent from '@movingbrands/svelte-portable-text';
    import serializers from '../components/serializers';
    import { formatDate } from '../js/formatDate';
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<ul>
    {#each posts as post}
        <li class="grid grid-cols-2 my-16 gap-10">
            <div class="">
                <a rel="prefetch" href={post.slug.current}>
                    <h1 class="text-2xl text-center hover:text-gray-500">
                        {post.title}
                    </h1></a
                >
                <h2 class="italic text-center font-thin mb-4">
                    {formatDate(post.publishedAt)}
                </h2>
                <BlockContent blocks={post.excerpt[0]} {serializers} />
            </div>
            <div>
                <a href={post.slug.current}>
                    <img src={post.mainImage} alt="blog post image" />
                </a>
            </div>
        </li>
        <hr />
    {/each}
</ul>
