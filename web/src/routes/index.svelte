<script context="module">
    export async function preload({ params }) {
        try {
            const res = await this.fetch('api/blog/all');
            const { posts } = await res.json();
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
    console.log(posts);

    function formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    }
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<ul>
    {#each posts as post}
        <div class="grid grid-cols-2 my-16 gap-10">
            <div class="">
                <a rel="prefetch" href="blog/{post.slug.current}">
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
                <a href="blog/{post.slug.current}">
                    <img src={post.mainImage} alt="blog post image" />
                </a>
            </div>
        </div>
        <hr />
    {/each}
</ul>

<style>
    ul {
        margin: 0 0 1em 0;
        line-height: 1.5;
    }
</style>
