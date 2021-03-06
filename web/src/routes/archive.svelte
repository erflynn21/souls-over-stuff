<script context="module">
    import client from '../sanityClient';

    export async function preload() {
        try {
            const posts = await client.fetch(
                '*[_type == "post" && defined(slug.current) && publishedAt < now()] | order(publishedAt desc) | {title, slug, publishedAt }'
            );
            return { posts };
        } catch (err) {
            this.error(500, err);
        }
    }
</script>

<script>
    export let posts;
    import { formatDate } from '../js/formatDate';

    let monthYears = [];
    $: allMonths = [];

    // $: if (posts) {
    const setDates = () => {
        posts.forEach((post) => {
            const postDate = new Date(post.publishedAt).toLocaleDateString(
                'en-US',
                {
                    month: 'long',
                    year: 'numeric',
                }
            );

            post.postDate = postDate;
            if (monthYears.includes(postDate)) {
                return;
            } else {
                monthYears = [...monthYears, postDate];
            }
        });
        filter();
    };

    // }

    const filter = () => {
        monthYears.forEach((monthYear) => {
            const result = posts.filter((post) => post.postDate === monthYear);
            const monthlyPosts = {
                date: monthYear,
                posts: result,
            };
            allMonths = [...allMonths, monthlyPosts];
        });
    };

    const getDay = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            day: '2-digit',
        });
    };
</script>

<svelte:head>
    <title>Archive</title>
</svelte:head>

<h1 class="text-center my-8 text-3xl font-shippori" use:setDates>Archive</h1>

<div class="content max-w-2xl mx-auto text-lg leading-8">
    {#each allMonths as month}
        <h2 class="mb-2 italic">{month.date}</h2>
        <ul class="list-disc pl-6 mb-8">
            {#each month.posts as post}
                <li>
                    <a rel="prefetch" href={post.slug.current}>
                        <span>{getDay(post.publishedAt)}: </span>
                        <span class="hover:text-gray-500">
                            {post.title}
                        </span></a
                    >
                </li>
            {/each}
        </ul>
    {/each}
</div>
